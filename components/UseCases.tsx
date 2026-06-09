"use client";

import { motion } from "framer-motion";
import { Laptop, Briefcase, Bot } from "lucide-react";

const cases = [
    {
        title: "LB Lab — Gestión Clínica",
        icon: <Laptop className="w-6 h-6" />,
        description: "Plataforma web integral para la administración de laboratorios de análisis clínicos, automatizando la carga de resultados y gestión de pacientes.",
        tags: ["React", "Next.js", "APIs"],
        link: "https://www.lblab.com.ar",
        image: "/img/lblab.png",
    },
    {
        title: "Álbum Lleno — Tracker Interactivo",
        icon: <Briefcase className="w-6 h-6" />,
        description: "Aplicación interactiva y social diseñada para el seguimiento y control en tiempo real de colecciones de figuritas y stickers.",
        tags: ["React", "TypeScript", "Tailwind"],
        link: "https://albumlleno.itia.ar/",
        image: "/img/albumlleno.png",
    },
    {
        title: "Customer Support Bot",
        icon: <Bot className="w-6 h-6" />,
        description: "Agente conversacional inteligente que automatiza la resolución del 80% de consultas frecuentes de usuarios.",
        tags: ["OpenAI", "Node.js", "Vercel"],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
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
                            className="glass-card overflow-hidden group border-slate-100 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
                                    <div 
                                        className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700 bg-cover bg-center" 
                                        style={{ backgroundImage: `url(${useCase.image})` }}
                                    />
                                    <div className="z-10 p-4 bg-white/80 rounded-full border border-slate-200 text-primary">
                                        {useCase.icon}
                                    </div>
                                </div>
                                <div className="p-8 pb-4">
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
                            </div>
                            {useCase.link && (
                                <div className="p-8 pt-0 mt-2">
                                    <div className="border-t border-slate-100 pt-4">
                                        <a
                                            href={useCase.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 group/btn"
                                        >
                                            Visitar sitio web <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
