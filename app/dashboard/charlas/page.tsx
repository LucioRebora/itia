import Link from "next/link";
import { desc, sql } from "drizzle-orm";
import { db } from "@/db";
import { chatMessages } from "@/db/schema";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 50;

const dateFormat = new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
});

export default async function CharlasPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const { page: pageParam } = await searchParams;
    const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);

    const lastAt = sql<Date>`max(${chatMessages.createdAt})`;

    const [sessions, [{ total }]] = await Promise.all([
        db
            .select({
                sessionId: chatMessages.sessionId,
                messages: sql<number>`count(*)::int`,
                lastAt,
                // Primer mensaje del visitante, para tener una idea de qué trata la charla.
                preview: sql<string | null>`(
                    select m.content from chat_messages m
                    where m.session_id = ${chatMessages.sessionId} and m.role = 'user'
                    order by m.id limit 1
                )`,
                leadName: sql<string | null>`(
                    select c.name from contacts c
                    where c.session_id = ${chatMessages.sessionId}
                    order by c.id desc limit 1
                )`,
            })
            .from(chatMessages)
            .groupBy(chatMessages.sessionId)
            .orderBy(desc(lastAt))
            .limit(PAGE_SIZE)
            .offset((page - 1) * PAGE_SIZE),
        db
            .select({ total: sql<number>`count(distinct ${chatMessages.sessionId})::int` })
            .from(chatMessages),
    ]);

    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    return (
        <div className="max-w-6xl">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl mb-1">Charlas del bot</h1>
                <p className="text-sm text-slate-500">{total} conversaciones registradas</p>
            </div>

            {sessions.length === 0 ? (
                <p className="text-slate-500">Todavía no hay charlas registradas.</p>
            ) : (
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-left text-xs uppercase text-slate-500">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Última actividad</th>
                                    <th className="px-4 py-3 font-medium">Primer mensaje</th>
                                    <th className="px-4 py-3 font-medium">Lead</th>
                                    <th className="px-4 py-3 font-medium text-right">Mensajes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {sessions.map((s) => {
                                    const href = `/dashboard/charlas/${encodeURIComponent(s.sessionId)}`;
                                    return (
                                        <tr key={s.sessionId} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 whitespace-nowrap text-slate-500">
                                                <Link href={href} className="hover:text-primary">
                                                    {dateFormat.format(new Date(s.lastAt))}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-3 max-w-md">
                                                <Link href={href} className="block truncate text-slate-900 hover:text-primary">
                                                    {s.preview ?? <span className="text-slate-400">Sin mensajes del visitante</span>}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                {s.leadName ? (
                                                    <span className="inline-flex px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                                                        {s.leadName}
                                                    </span>
                                                ) : (
                                                    <span className="text-slate-400">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-right tabular-nums">{s.messages}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {pages > 1 && (
                <div className="flex items-center justify-between mt-6 text-sm">
                    {page > 1 ? (
                        <Link href={`?page=${page - 1}`} className="text-primary hover:underline">
                            ← Anteriores
                        </Link>
                    ) : (
                        <span />
                    )}
                    <span className="text-slate-500">
                        Página {page} de {pages}
                    </span>
                    {page < pages ? (
                        <Link href={`?page=${page + 1}`} className="text-primary hover:underline">
                            Siguientes →
                        </Link>
                    ) : (
                        <span />
                    )}
                </div>
            )}
        </div>
    );
}
