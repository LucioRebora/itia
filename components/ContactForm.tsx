"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contacto" className="py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">¿Tienes un proyecto en mente?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Hablemos sobre cómo podemos ayudarte a implementar soluciones de software inteligentes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="glass-card p-6 flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-lg">
                                <Mail className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase">Email</p>
                                <p className="text-slate-900 font-medium">contacto@itia.ar</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase">Teléfono</p>
                                <p className="text-slate-900 font-medium">+54 911 6680 5053</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-lg">
                                <MapPin className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 uppercase">Ubicación</p>
                                <p className="text-slate-900 font-medium">Melian 3566</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-slate-400 ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-slate-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="correo@empresa.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm text-slate-400 ml-1">Empresa</label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="Nombre de tu organización"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-slate-400 ml-1">Mensaje</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 group"
                                disabled={status === "success"}
                            >
                                {status === "success" ? "¡Mensaje enviado!" : "Enviar mensaje"}
                                <Send className={`w-4 h-4 transition-transform ${status === "success" ? "translate-x-10 opacity-0" : "group-hover:translate-x-1"}`} />
                            </button>
                            {status === "success" && (
                                <p className="text-center text-green-400 text-sm animate-fade-in">
                                    Nos pondremos en contacto contigo lo antes posible.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
