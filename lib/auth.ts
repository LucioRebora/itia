import type { NextRequest } from "next/server";

export const SESSION_COOKIE = "itia_session";
export const OAUTH_STATE_COOKIE = "itia_oauth_state";
export const ALLOWED_EMAILS = (
    process.env.ADMIN_EMAIL || "bioitia@gmail.com,luciorebora@gmail.com"
)
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 días

export interface SessionPayload {
    email: string;
    name?: string;
    picture?: string;
    exp: number;
}

function getSecret(): string {
    const secret = process.env.AUTH_SECRET;
    if (!secret) {
        throw new Error("AUTH_SECRET no está definido en las variables de entorno");
    }
    return secret;
}

function toBase64Url(bytes: Uint8Array): string {
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str: string): Uint8Array {
    const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

async function getHmacKey(secret: string): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    return crypto.subtle.importKey(
        "raw",
        encoder.encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign", "verify"]
    );
}

export async function createSessionToken(user: {
    email: string;
    name?: string;
    picture?: string;
}): Promise<string> {
    const secret = getSecret();
    const payload: SessionPayload = {
        email: user.email.toLowerCase(),
        name: user.name,
        picture: user.picture,
        exp: Date.now() + SESSION_DURATION_MS,
    };
    const encoder = new TextEncoder();
    const data = toBase64Url(encoder.encode(JSON.stringify(payload)));
    const key = await getHmacKey(secret);
    const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
    const sigBase64 = toBase64Url(new Uint8Array(signature));
    return `${data}.${sigBase64}`;
}

export async function verifySessionToken(token?: string | null): Promise<SessionPayload | null> {
    if (!token) return null;
    const secret = process.env.AUTH_SECRET;
    if (!secret) return null;

    const parts = token.split(".");
    if (parts.length !== 2) return null;
    const [data, sig] = parts;

    try {
        const encoder = new TextEncoder();
        const key = await getHmacKey(secret);
        const sigBytes = fromBase64Url(sig);
        const valid = await crypto.subtle.verify(
            "HMAC",
            key,
            sigBytes as unknown as BufferSource,
            encoder.encode(data)
        );
        if (!valid) return null;

        const payloadJson = new TextDecoder().decode(fromBase64Url(data));
        const payload = JSON.parse(payloadJson) as SessionPayload;

        if (!payload.exp || Date.now() > payload.exp) return null;
        if (!isAllowedEmail(payload.email)) return null;

        return payload;
    } catch {
        return null;
    }
}

export function isAllowedEmail(email?: string | null): boolean {
    if (!email) return false;
    return ALLOWED_EMAILS.includes(email.trim().toLowerCase());
}

export function getBaseUrl(req: NextRequest): string {
    const host = req.headers.get("host") || req.nextUrl.host;
    if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
        return `${req.nextUrl.protocol}//${host}`;
    }
    if (process.env.AUTH_URL) {
        try {
            return new URL(process.env.AUTH_URL).origin;
        } catch {
            // fallback a req.nextUrl.origin
        }
    }
    return req.nextUrl.origin;
}

