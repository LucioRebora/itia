"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Share2, MessageSquare, BarChart3, Rocket } from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-8 h-8 text-primary-light" />,
        title: "Desarrollo Web",
        description: "Sitios y aplicaciones modernas usando Next.js, React y APIs escalables de alto rendimiento.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-secondary-light" />,
        title: "Automatización con IA",
        description: "Flujos de trabajo impulsados por agentes inteligentes que ejecutan tareas complejas.",
    },
    {
        icon: <Share2 className="w-8 h-8 text-accent" />,
        title: "Integración de Sistemas",
        description: "Conectamos todas tus herramientas para que la información fluya sin interrupciones.",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary-light" />,
        title: "Bots y Asistentes",
        description: "Interfaces conversacionales avanzadas con GPT-4 para soporte y ventas 24/7.",
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-secondary-light" />,
        title: "Análisis de Datos",
        description: "Transformamos datos crudos en conocimiento accionable mediante modelos predictivos.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "MVPs para Startups",
        description: "Lanzamos tu idea al mercado en tiempo récord manteniendo la calidad de un producto final.",
    },
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-dark-bg/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Nuestros Servicios</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Ofrecemos un abanico completo de soluciones tecnológicas diseñadas para la era de la inteligencia artificial.
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
