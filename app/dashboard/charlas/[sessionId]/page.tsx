import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, desc, eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { db } from "@/db";
import { chatMessages, contacts } from "@/db/schema";

export const dynamic = "force-dynamic";

const dateFormat = new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
});

export default async function CharlaPage({ params }: { params: Promise<{ sessionId: string }> }) {
    const { sessionId: raw } = await params;
    const sessionId = decodeURIComponent(raw);

    const [messages, leads] = await Promise.all([
        db
            .select()
            .from(chatMessages)
            .where(eq(chatMessages.sessionId, sessionId))
            .orderBy(asc(chatMessages.id)),
        db.select().from(contacts).where(eq(contacts.sessionId, sessionId)).orderBy(desc(contacts.id)),
    ]);

    if (messages.length === 0) notFound();

    return (
        <div className="max-w-3xl">
            <Link
                href="/dashboard/charlas"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Volver a charlas
            </Link>

            <h1 className="text-2xl mb-1">Charla</h1>
            <p className="text-xs text-slate-400 mb-6 break-all">
                Sesión {sessionId} · {dateFormat.format(messages[0].createdAt)}
            </p>

            {leads.map((lead) => (
                <div key={lead.id} className="mb-6 p-4 rounded-2xl border border-green-200 bg-green-50 text-sm">
                    <p className="font-semibold text-green-800 mb-2">Lead capturado</p>
                    <dl className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-1 text-slate-700">
                        <dt className="text-slate-500">Nombre</dt>
                        <dd>{lead.name}</dd>
                        <dt className="text-slate-500">Email</dt>
                        <dd className="break-all">{lead.email}</dd>
                        {lead.phone && (
                            <>
                                <dt className="text-slate-500">Teléfono</dt>
                                <dd>{lead.phone}</dd>
                            </>
                        )}
                        {lead.company && (
                            <>
                                <dt className="text-slate-500">Empresa</dt>
                                <dd>{lead.company}</dd>
                            </>
                        )}
                    </dl>
                </div>
            ))}

            <div className="space-y-3">
                {messages.map((m) => {
                    const isUser = m.role === "user";
                    return (
                        <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                                    isUser
                                        ? "bg-primary text-white rounded-br-sm"
                                        : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm"
                                }`}
                            >
                                <p className="whitespace-pre-wrap break-words">{m.content}</p>
                                <p className={`mt-1 text-[11px] ${isUser ? "text-white/70" : "text-slate-400"}`}>
                                    {dateFormat.format(m.createdAt)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
