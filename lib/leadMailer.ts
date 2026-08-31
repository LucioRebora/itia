import { Resend } from "resend";
import { escapeHtml, sanitizeHeader } from "./validation";

let client: Resend | undefined;

function getClient() {
    if (!client) {
        const apiKey = process.env.RESEND_API_KEY || process.env.RESEND_KEY;
        if (!apiKey) {
            throw new Error("Ni RESEND_API_KEY ni RESEND_KEY están definidas en las variables de entorno");
        }
        client = new Resend(apiKey);
    }
    return client;
}

/**
 * Remitente. Tiene que ser una dirección de un dominio verificado en Resend.
 * `onboarding@resend.dev` es el remitente compartido de prueba: sirve para
 * validar la integración, pero sólo entrega al email dueño de la cuenta de
 * Resend. Para producción, verificar itia.ar y definir MAIL_FROM.
 */
function from() {
    return process.env.MAIL_FROM || "ITIA <onboarding@resend.dev>";
}

/** Casilla que recibe las notificaciones. */
function to() {
    return process.env.MAIL_TO || "contacto@itia.ar";
}

type Row = { label: string; value: string };

/** Arma el HTML del aviso escapando todo lo que cargó el visitante. */
function render({
    heading,
    rows,
    bodyLabel,
    body,
    footer,
}: {
    heading: string;
    rows: Row[];
    bodyLabel: string;
    body: string;
    footer: string;
}) {
    const fields = rows
        .map(
            (row) =>
                `<p style="margin-bottom: 10px;"><b>${row.label}:</b> ${escapeHtml(row.value)}</p>`,
        )
        .join("\n        ");

    return `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">${heading}</h2>
        ${fields}
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
          <p style="margin-bottom: 5px;"><b>${bodyLabel}:</b></p>
          <p style="white-space: pre-wrap;">${escapeHtml(body)}</p>
        </div>
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center;">${footer}</p>
      </div>
    `;
}

/**
 * El SDK de Resend devuelve el error en el resultado en vez de lanzarlo, así
 * que hay que convertirlo en excepción para que la ruta lo trate como fallo.
 */
async function send(options: {
    replyTo: string;
    subject: string;
    html: string;
}) {
    const fromAddr = from();
    const toAddr = to();
    console.log(`[leadMailer] Enviando email via Resend... From: "${fromAddr}", To: "${toAddr}", ReplyTo: "${options.replyTo}"`);
    const { data, error } = await getClient().emails.send({
        from: fromAddr,
        to: toAddr,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
    });

    if (error) {
        console.error("[leadMailer] Resend rechazó el envío:", JSON.stringify(error, null, 2));
        throw new Error(`Resend rechazó el envío: ${error.name} - ${error.message}`);
    }

    console.log("[leadMailer] Email enviado exitosamente via Resend. ID:", data?.id);
}

const DISCLAIMER =
    "Los datos los cargó el visitante: verificalos antes de confiar en ellos.";

export async function sendLeadEmail(lead: {
    name: string;
    email: string;
    phone?: string | null;
    company?: string | null;
    message: string;
}) {
    await send({
        replyTo: sanitizeHeader(lead.email, 254),
        subject: `🤖 [CHATBOT ITIA] Nuevo lead: ${sanitizeHeader(lead.name, 80)}`,
        html: render({
            heading: "Nuevo lead desde el chatbot",
            rows: [
                { label: "Nombre", value: lead.name },
                { label: "Email", value: lead.email },
                { label: "Teléfono", value: lead.phone || "No especificado" },
                { label: "Empresa", value: lead.company || "No especificada" },
            ],
            bodyLabel: "Necesidad",
            body: lead.message,
            footer: `Lead capturado automáticamente por el asistente virtual de ITIA. ${DISCLAIMER}`,
        }),
    });
}

export async function sendContactEmail(contact: {
    name: string;
    email: string;
    company?: string | null;
    message: string;
}) {
    await send({
        replyTo: sanitizeHeader(contact.email, 254),
        subject: `📩 [WEB ITIA] Nuevo contacto: ${sanitizeHeader(contact.name, 80)}`,
        html: render({
            heading: "Nuevo contacto desde la web",
            rows: [
                { label: "Nombre", value: contact.name },
                { label: "Email", value: contact.email },
                { label: "Empresa", value: contact.company || "No especificada" },
            ],
            bodyLabel: "Mensaje",
            body: contact.message,
            footer: `Mensaje automático del formulario de ITIA. ${DISCLAIMER}`,
        }),
    });
}
