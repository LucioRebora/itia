"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME_MESSAGE: ChatMessage = {
    role: "assistant",
    content:
        "¡Hola! 👋 Soy el asistente de ITIA. Ayudamos a llevar adelante proyectos de software, desde soluciones simples hasta sistemas complejos, y solemos armar un MVP gratuito para validar tu idea. ¿Contame, qué proyecto tenés en mente?",
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const sessionIdRef = useRef<string>(crypto.randomUUID());

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text || isLoading) return;

        const nextMessages = [...messages, { role: "user" as const, content: text }];
        setMessages(nextMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: nextMessages, sessionId: sessionIdRef.current }),
            });

            if (!response.ok) throw new Error("Error en la respuesta");

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Perdón, tuve un problema para responder. Probá de nuevo o escribinos a contacto@itia.ar.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <motion.button
                onClick={() => setIsOpen((v) => !v)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center"
                aria-label="Abrir chat"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X className="w-6 h-6" />
                        </motion.span>
                    ) : (
                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageCircle className="w-6 h-6" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[560px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
                    >
                        <div className="bg-primary px-5 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white font-medium leading-tight">Asistente ITIA</p>
                                <p className="text-white/70 text-xs">Te respondemos al instante</p>
                            </div>
                        </div>

                        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user"
                                            ? "ml-auto bg-primary text-white rounded-br-sm"
                                            : "mr-auto bg-white text-slate-700 border border-slate-200 rounded-bl-sm"
                                        }`}
                                >
                                    {m.content}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="mr-auto bg-white text-slate-400 border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
                                    Escribiendo...
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSend} className="p-3 border-t border-slate-200 flex items-center gap-2 bg-white">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribí tu mensaje..."
                                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary/50 transition-colors"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="w-10 h-10 shrink-0 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
                                aria-label="Enviar mensaje"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
