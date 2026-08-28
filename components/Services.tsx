"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Share2, MessageSquare, BarChart3, Rocket } from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-8 h-8 text-primary-light" />,
        title: "Desarrollo Web & Aplicaciones",
        description: "Somos una empresa de desarrollo web especializada en aplicaciones modernas con Next.js, React y APIs de alto rendimiento.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-secondary-light" />,
        title: "Automatización Empresarial con IA",
        description: "Optimizamos procesos clave mediante desarrollo de software con IA y agentes autónomos para potenciar la productividad.",
    },
    {
        icon: <Share2 className="w-8 h-8 text-accent" />,
        title: "Desarrollo de Sistemas a Medida",
        description: "Diseñamos y construimos sistemas empresariales adaptados 100% a la lógica operativa y requerimientos de tu empresa.",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary-light" />,
        title: "Bots y Asistentes Virtuales",
        description: "Interfaces conversacionales avanzadas integradas a tus sistemas para atención al cliente y soporte 24/7.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-secondary-light" />,
        title: "Análisis de Datos con IA",
        description: "Transformamos información en dashboards ejecutivos y modelos predictivos para la toma de decisiones estratégicas.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "MVPs & Software a Medida",
        description: "Lanzamos productos digitales y soluciones de software rápido al mercado en tiempo récord manteniendo la máxima calidad.",
    },
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-dark-bg/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Servicios de Desarrollo de Software y Sistemas</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Como empresa de desarrollo de software en Argentina, ofrecemos soluciones integrales en aplicaciones web, sistemas a medida e IA.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 group"
                        >
                            <div className="mb-6 inline-block p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="h-1 w-12 bg-primary/30 rounded-full group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
