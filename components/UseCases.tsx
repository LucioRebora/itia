"use client";

import { motion } from "framer-motion";
import { Laptop, Briefcase, Bot } from "lucide-react";

const cases = [
    {
        title: "Plataforma de Reservas Inteliente",
        icon: <Laptop className="w-6 h-6" />,
        description: "Sistema automatizado con IA para optimizar la agenda y reducir inasistencias en un centro médico.",
        tags: ["Next.js", "GPT-3.5", "PostgreSQL"],
    },
    {
        title: "ERP Empresarial con IA",
        icon: <Briefcase className="w-6 h-6" />,
        description: "Dashboard avanzado para la gestión de recursos que predice cuellos de botella en la producción.",
        tags: ["React", "Python", "Docker"],
    },
    {
        title: "Customer Support Bot",
        icon: <Bot className="w-6 h-6" />,
        description: "Agente conversacional que resuelve el 80% de las dudas de clientes sin intervención humana.",
        tags: ["OpenAI", "Node.js", "Vercel"],
    },
];

const UseCases = () => {
    return (
        <section id="casos" className="py-24 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Casos de Uso</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Ejemplos reales de cómo nuestras soluciones impulsan el crecimiento empresarial.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card overflow-hidden group border-slate-100 shadow-sm"
                        >
                            <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-30 group-hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center" />
                                <div className="z-10 p-4 bg-white/80 rounded-full border border-slate-200 text-primary">
                                    {useCase.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{useCase.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {useCase.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-500 uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
