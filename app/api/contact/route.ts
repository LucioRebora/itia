import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
    escapeHtml,
    isValidEmail,
    readOptionalText,
    readText,
    sanitizeHeader,
} from "@/lib/validation";
import { clientKey, rateLimit, tooManyRequests } from "@/lib/rateLimit";

// Tope de tamaño del body: sin esto se puede mandar un JSON de cientos de MB.
const MAX_BODY_BYTES = 16 * 1024;

let transporter: nodemailer.Transporter | undefined;

function getTransporter() {
    if (!transporter) {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("EMAIL_USER / EMAIL_PASS no están definidas en el entorno");
        }
        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    return transporter;
}

export async function POST(req: Request) {
    // 3 envíos cada 10 minutos por IP: suficiente para un humano, inútil para un bot.
    const limit = rateLimit(clientKey(req, "contact"), {
        limit: 3,
        windowMs: 10 * 60 * 1000,
    });
    if (!limit.allowed) return tooManyRequests(limit.retryAfter);

    try {
        const raw = await req.text();
        if (raw.length > MAX_BODY_BYTES) {
            return NextResponse.json({ error: "Mensaje demasiado largo" }, { status: 413 });
        }

        let body: unknown;
        try {
            body = JSON.parse(raw);
        } catch {
            return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
        }
        if (typeof body !== "object" || body === null) {
            return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
        }

        const input = body as Record<string, unknown>;
        const name = readText(input.name, { max: 80, min: 1 });
        const message = readText(input.message, { max: 4000, min: 1 });
        const company = readOptionalText(input.company, 120);

        if (!name || !message || !isValidEmail(input.email)) {
            return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
        }
        const email = input.email;

        await getTransporter().sendMail({
            from: `"ITIA - Notificaciones Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: sanitizeHeader(email, 254),
            subject: `📩 [WEB ITIA] Nuevo contacto: ${sanitizeHeader(name, 80)}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Nuevo contacto desde la web</h2>
          <p style="margin-bottom: 10px;"><b>Nombre:</b> ${escapeHtml(name)}</p>
          <p style="margin-bottom: 10px;"><b>Email:</b> ${escapeHtml(email)}</p>
          <p style="margin-bottom: 10px;"><b>Empresa:</b> ${escapeHtml(company || "No especificada")}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin-bottom: 5px;"><b>Mensaje:</b></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">Mensaje automático del formulario de ITIA. Los datos los cargó el visitante: verificalos antes de confiar en ellos.</p>
        </div>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        // Sin detalles del error ni datos del formulario: los logs del hosting
        // no son el lugar para PII.
        console.error("Error enviando email de contacto");
        if (process.env.NODE_ENV !== "production") console.error(error);
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
