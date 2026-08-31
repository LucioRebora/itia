import { NextResponse } from "next/server";
import { isValidEmail, readOptionalText, readText } from "@/lib/validation";
import { clientKey, rateLimit, tooManyRequests } from "@/lib/rateLimit";
import { sendContactEmail } from "@/lib/leadMailer";

// Tope de tamaño del body: sin esto se puede mandar un JSON de cientos de MB.
const MAX_BODY_BYTES = 16 * 1024;

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
            console.warn("[Contact API] Datos de formulario inválidos:", {
                hasName: Boolean(name),
                hasMessage: Boolean(message),
                emailProvided: input.email,
                isValidEmail: isValidEmail(input.email),
            });
            return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
        }

        console.log("[Contact API] Procesando envío de contacto para email:", input.email);
        await sendContactEmail({ name, email: input.email as string, company, message });
        console.log("[Contact API] Contacto procesado con éxito para:", input.email);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("[Contact API] Error enviando email de contacto:", error);
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
