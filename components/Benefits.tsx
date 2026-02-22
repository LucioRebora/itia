"use client";

import { motion } from "framer-motion";
import { Zap, Bot, TrendingUp, Shield, Lightbulb } from "lucide-react";

const benefits = [
    {
        icon: <Zap className="w-6 h-6 text-primary-light" />,
        title: "Velocidad",
        description: "Desarrollo acelerado por IA que reduce los tiempos de entrega hasta en un 60%.",
    },
    {
        icon: <Bot className="w-6 h-6 text-secondary-light" />,
        title: "Automatización",
        description: "Elimina tareas repetitivas y optimiza tus procesos internos automáticamente.",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-accent" />,
        title: "Escalabilidad",
        description: "Arquitecturas modernas preparadas para crecer junto con tu negocio sin fricción.",
    },
    {
        icon: <Shield className="w-6 h-6 text-primary-light" />,
        title: "Seguridad",
        description: "Implementaciones robustas con los más altos estándares de protección de datos.",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-secondary-light" />,
        title: "Innovación con IA",
        description: "Uso de modelos de lenguaje y visión computacional para crear valor único.",
    },
];

const Benefits = () => {
    return (
        <section className="py-20">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
