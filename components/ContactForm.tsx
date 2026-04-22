"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
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
                                <a href="tel:+5491161357314" className="text-slate-900 font-medium hover:text-primary transition-colors">+54 9 11 6135-7314</a>
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
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                    value={formData.company}
                                    onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70"
                                disabled={status === "loading" || status === "success"}
                            >
                                {status === "loading" ? "Enviando..." : status === "success" ? "¡Mensaje enviado!" : "Enviar mensaje"}
                                <Send className={`w-4 h-4 transition-transform ${status === "success" ? "translate-x-10 opacity-0" : "group-hover:translate-x-1"}`} />
                            </button>
                            {status === "success" && (
                                <p className="text-center text-green-600 font-medium text-sm animate-fade-in">
                                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-red-500 font-medium text-sm animate-fade-in">
                                    Hubo un error al enviar el mensaje. Inténtalo de nuevo.
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
