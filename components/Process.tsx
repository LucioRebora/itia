"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Análisis del problema",
        description: "Evaluamos tus necesidades y procesos actuales para identificar oportunidades de mejora.",
    },
    {
        number: "02",
        title: "Diseño de solución",
        description: "Creamos un plano tecnológico optimizado, seleccionando los mejores modelos y stacks.",
    },
    {
        number: "03",
        title: "Desarrollo con IA",
        description: "Codificamos con velocidad y precisión, integrando capacidades inteligentes nativamente.",
    },
    {
        number: "04",
        title: "Pruebas",
        description: "Validamos exhaustivamente cada funcionalidad para asegurar estabilidad y seguridad.",
    },
    {
        number: "05",
        title: "Entrega y soporte",
        description: "Desplegamos tu proyecto y te acompañamos en su evolución constante.",
    },
];

const Process = () => {
    return (
        <section id="proceso" className="py-24">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mb-4">Cómo trabajamos</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Un método probado que combina la creatividad humana con la eficiencia de la inteligencia artificial.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-xl shadow-slate-200/50">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
