/**
 * Utilidades de validación y saneamiento para las rutas públicas de la API.
 *
 * Todo lo que llega del navegador es hostil hasta que se demuestre lo contrario:
 * los datos se interpolan en HTML de emails y en cabeceras SMTP, así que hay que
 * escaparlos y acotarlos antes de usarlos.
 */

/** Escapa los caracteres que permitirían inyectar HTML en el cuerpo de un email. */
export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Limpia un valor que va a terminar en una cabecera SMTP (subject, replyTo).
 * Los saltos de línea permiten inyectar cabeceras arbitrarias (CRLF injection).
 */
export function sanitizeHeader(value: string, maxLength = 120): string {
    return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, maxLength);
}

/** Valida formato de email de forma conservadora y acota el largo. */
export function isValidEmail(value: unknown): value is string {
    return (
        typeof value === "string" &&
        value.length <= 254 &&
        /^[^\s@,;:<>"'\]]+@[^\s@,;:<>"'\]]+\.[a-zA-Z]{2,}$/.test(value)
    );
}

/**
 * Normaliza un campo de texto: exige string, recorta espacios y aplica un tope
 * de largo. Devuelve null si no cumple el mínimo requerido.
 */
export function readText(
    value: unknown,
    { max, min = 0 }: { max: number; min?: number },
): string | null {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    if (trimmed.length < min) return null;
    return trimmed.slice(0, max);
}

/** Campo opcional: acepta ausencia, pero rechaza tipos que no sean string. */
export function readOptionalText(value: unknown, max: number): string | null {
    if (value === undefined || value === null || value === "") return null;
    return readText(value, { max });
}
