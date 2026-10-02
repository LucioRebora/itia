import { NextResponse, type NextRequest } from "next/server";

/**
 * El dashboard expone las charlas del bot (con nombres, emails y teléfonos de
 * visitantes), así que va detrás de Basic Auth. Sin ADMIN_USER/ADMIN_PASSWORD
 * definidas no se deja entrar a nadie.
 */
function safeEqual(a: string, b: string) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return diff === 0;
}

function unauthorized() {
    return new NextResponse("Acceso restringido", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="ITIA Dashboard", charset="UTF-8"' },
    });
}

export function proxy(req: NextRequest) {
    const user = process.env.ADMIN_USER;
    const password = process.env.ADMIN_PASSWORD;
    if (!user || !password) return unauthorized();

    const header = req.headers.get("authorization") ?? "";
    if (!header.startsWith("Basic ")) return unauthorized();

    let decoded: string;
    try {
        decoded = atob(header.slice(6));
    } catch {
        return unauthorized();
    }

    const sep = decoded.indexOf(":");
    if (sep === -1) return unauthorized();

    const ok =
        safeEqual(decoded.slice(0, sep), user) && safeEqual(decoded.slice(sep + 1), password);
    return ok ? NextResponse.next() : unauthorized();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
