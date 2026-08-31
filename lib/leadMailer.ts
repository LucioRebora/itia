import nodemailer from "nodemailer";
import { escapeHtml, sanitizeHeader } from "./validation";

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

export async function sendLeadEmail(lead: {
    name: string;
    email: string;
    phone?: string | null;
    company?: string | null;
    message: string;
}) {
    // El contenido lo controla quien escribe en el chat: se escapa antes de
    // interpolarlo en el HTML y se limpian los saltos de línea de las cabeceras.
    const name = escapeHtml(lead.name);
    const email = escapeHtml(lead.email);
    const phone = escapeHtml(lead.phone || "No especificado");
    const company = escapeHtml(lead.company || "No especificada");
    const message = escapeHtml(lead.message);

    await getTransporter().sendMail({
        from: `"ITIA - Chatbot" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: sanitizeHeader(lead.email, 254),
        subject: `🤖 [CHATBOT ITIA] Nuevo lead: ${sanitizeHeader(lead.name, 80)}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">Nuevo lead desde el chatbot</h2>
        <p style="margin-bottom: 10px;"><b>Nombre:</b> ${name}</p>
        <p style="margin-bottom: 10px;"><b>Email:</b> ${email}</p>
        <p style="margin-bottom: 10px;"><b>Teléfono:</b> ${phone}</p>
        <p style="margin-bottom: 10px;"><b>Empresa:</b> ${company}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <p style="margin-bottom: 5px;"><b>Necesidad:</b></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center;">Lead capturado automáticamente por el asistente virtual de ITIA. Los datos los cargó el visitante: verificalos antes de confiar en ellos.</p>
      </div>
    `,
    });
}
