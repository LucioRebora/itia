import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"ITIA - Notificaciones Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📩 [WEB ITIA] Nuevo contacto: ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Nuevo contacto desde la web</h2>
          <p style="margin-bottom: 10px;"><b>Nombre:</b> ${name}</p>
          <p style="margin-bottom: 10px;"><b>Email:</b> ${email}</p>
          <p style="margin-bottom: 10px;"><b>Empresa:</b> ${company || 'No especificada'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin-bottom: 5px;"><b>Mensaje:</b></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">Este es un mensaje automático generado desde el formulario de ITIA.</p>
        </div>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
