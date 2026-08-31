/**
 * Rate limiting en memoria, por IP y por ventana deslizante.
 *
 * Limitación conocida: el estado vive en el proceso, así que en un despliegue
 * serverless con varias instancias el límite efectivo se multiplica por la
 * cantidad de instancias activas. Aun así corta el abuso automatizado, que es
 * de donde viene el riesgo real (spam de formulario y consumo de la API de
 * Anthropic). Si el tráfico crece, reemplazar el Map por Redis/Upstash
 * manteniendo la misma firma de `rateLimit`.
 */

type Hit = { count: number; resetAt: number };

const buckets = new Map<string, Hit>();

/** Evita que el Map crezca sin techo si rotan mucho las IPs. */
const MAX_BUCKETS = 10_000;

function prune(now: number) {
    for (const [key, hit] of buckets) {
        if (hit.resetAt <= now) buckets.delete(key);
    }
    if (buckets.size > MAX_BUCKETS) buckets.clear();
}

export type RateLimitResult = { allowed: boolean; retryAfter: number };

export function rateLimit(
    key: string,
    { limit, windowMs }: { limit: number; windowMs: number },
): RateLimitResult {
    const now = Date.now();
    prune(now);

    const hit = buckets.get(key);
    if (!hit || hit.resetAt <= now) {
        buckets.set(key, { count: 1, resetAt: now + windowMs });
        return { allowed: true, retryAfter: 0 };
    }

    hit.count += 1;
    if (hit.count > limit) {
        return { allowed: false, retryAfter: Math.ceil((hit.resetAt - now) / 1000) };
    }
    return { allowed: true, retryAfter: 0 };
}

/**
 * Identifica al cliente detrás del proxy del hosting. Se toma sólo la primera
 * entrada de x-forwarded-for: el resto lo puede fabricar el cliente.
 */
export function clientKey(req: Request, scope: string): string {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
        forwarded?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip")?.trim() ||
        "unknown";
    return `${scope}:${ip}`;
}

export function tooManyRequests(retryAfter: number) {
    return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Probá de nuevo en un momento." }),
        {
            status: 429,
            headers: {
                "Content-Type": "application/json",
                "Retry-After": String(retryAfter),
            },
        },
    );
}
