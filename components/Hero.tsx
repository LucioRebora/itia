"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: "1s" }} />

            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-primary text-xs font-semibold mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>IA Generativa & Desarrollo Moderno</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                        ITIA – Desarrollo de software impulsado por{" "}
                        <span className="text-gradient">Inteligencia Artificial</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                        Creamos soluciones digitales rápidas, escalables y eficientes usando los modelos de IA más avanzados para potenciar tu negocio.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#contacto" className="btn-primary flex items-center gap-2 group">
                            Solicitar cotización
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#servicios" className="btn-secondary">
                            Nuestros servicios
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-8 grayscale opacity-70">
                        {/* Fake stats or logos could go here */}
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-2xl">100%</span>
                            <span className="text-xs uppercase tracking-widest text-slate-400">Impulsado por IA</span>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-2xl">24/7</span>
                            <span className="text-xs uppercase tracking-widest text-slate-400">Soporte Continuo</span>
                        </div>
                        <div className="w-px h-10 bg-slate-200" />
                        <div className="flex flex-col">
                            <span className="text-slate-900 font-bold text-2xl">X5</span>
                            <span className="text-xs uppercase tracking-widest text-slate-400">Mayor Velocidad</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract AI Visualization */}
                    <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-slate-200 p-1">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-20" />
                        <div className="h-full w-full flex items-center justify-center">
                            <div className="w-64 h-64 relative">
                                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse blur-2xl" />
                                <div className="absolute inset-4 rounded-full border-2 border-primary/20 border-dashed animate-[spin_10s_linear_infinite]" />
                                <div className="absolute inset-10 rounded-full border-2 border-secondary/20 border-dashed animate-[spin_6s_linear_infinite_reverse]" />
                                <Cpu className="w-20 h-20 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                    {/* Cards Floating */}
                    <div className="absolute -top-6 -right-6 glass-card p-4 animate-float">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase">Sistema Online</p>
                                <p className="text-xs font-bold text-slate-900">Procesando con GPT-4</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
