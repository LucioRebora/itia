"use client";

import { motion } from "framer-motion";

const techs = [
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "IA & Data" },
    { name: "OpenAI / IA", category: "Modelos" },
    { name: "AWS / Vercel", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "MongoDB", category: "Base de Datos" },
    { name: "PostgreSQL", category: "Base de Datos" },
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Tecnologías de Vanguardia</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Utilizamos las herramientas más potentes y modernas para garantizar la calidad y el rendimiento.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-white flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-200 transition-all group shadow-sm"
                        >
                            <span className="text-slate-900 font-bold text-lg group-hover:text-primary transition-colors">{tech.name}</span>
                            <span className="text-[10px] uppercase tracking-widest text-slate-400">{tech.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
