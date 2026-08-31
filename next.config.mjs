/**
 * Cabeceras de seguridad. Sin estas el sitio se puede embeber en un iframe
 * (clickjacking sobre el widget de chat) y no hay ninguna restricción sobre
 * qué scripts puede cargar la página.
 */
const isDev = process.env.NODE_ENV !== "production";

// `next dev` usa eval para el hot reload, así que en desarrollo hay que
// aflojar esa directiva. En producción no se permite.
const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    isDev ? "'unsafe-eval'" : null,
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
]
    .filter(Boolean)
    .join(" ");

const securityHeaders = [
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        // Google Tag Manager necesita 'unsafe-inline' y su propio dominio; el
        // resto queda acotado al propio origen.
        key: "Content-Security-Policy",
        value: [
            "default-src 'self'",
            `script-src ${scriptSrc}`,
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "object-src 'none'",
        ].join("; "),
    },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    async headers() {
        return [{ source: "/:path*", headers: securityHeaders }];
    },
};

export default nextConfig;
