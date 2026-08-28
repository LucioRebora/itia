"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Bot, Mail, CheckCircle2, Zap, ArrowRightCircle } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-36 md:pt-40 pb-12 overflow-hidden">
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
                        <span>Desarrollo de software impulsado por IA</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                        <span className="font-nunito font-black tracking-tight">Desarrollo de Software a Medida</span> para Empresas
                    </h1>
                    <p className="text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                        Somos una empresa de desarrollo de software especializada en soluciones web, aplicaciones, automatización e inteligencia artificial.
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

                    <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex flex-col gap-6 justify-center items-center h-[520px] font-sans"
                >
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent rounded-3xl filter blur-2xl -z-10" />

                    {/* Step 1: Input Trigger (Top) */}
                    <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-lg w-72 flex items-center gap-3 relative z-10"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">1. Entrada de Cliente</span>
                            <p className="text-[11px] font-semibold text-slate-800 leading-tight">Consulta de cotización recibida</p>
                        </div>
                        <Zap className="w-4 h-4 text-amber-500 animate-pulse flex-shrink-0" />
                    </motion.div>

                    {/* Connecting Line 1 */}
                    <div className="w-0.5 h-8 bg-slate-200 border-dashed border-r-2 border-slate-300 relative z-0" />

                    {/* Step 2: AI Agent reasoning (Center) */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-slate-900 text-white border border-slate-800 p-5 rounded-2xl shadow-2xl w-80 relative z-10 hover:border-primary/50 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light flex-shrink-0">
                                <Bot className="w-6 h-6 animate-pulse" />
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">2. Procesamiento Inteligente</span>
                                <h4 className="text-xs font-black text-white">Agente de Decisión Autónomo</h4>
                            </div>
                        </div>
                        <div className="space-y-2.5 text-[11px]">
                            <div className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span>Verificación de stock y viabilidad</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span>Generación de propuesta PDF</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                                <div className="w-4 h-4 rounded-full border border-dashed border-primary animate-spin flex-shrink-0" />
                                <span className="text-primary-light font-medium">Enviando respuesta personalizada...</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connecting Line 2 */}
                    <div className="w-0.5 h-8 bg-slate-200 border-dashed border-r-2 border-slate-300 relative z-0" />

                    {/* Step 3: Automated Action / Success (Bottom) */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-lg w-72 flex items-center gap-3 relative z-10"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">3. Acción Completada</span>
                            <p className="text-[11px] font-semibold text-slate-800 leading-tight">Propuesta enviada y CRM actualizado</p>
                        </div>
                        <ArrowRightCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    </motion.div>

                    {/* Floating Statistics Badge */}
                    <div className="absolute top-10 right-4 bg-white border border-slate-200/80 p-3 rounded-xl shadow-md z-20 flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        <div className="leading-none">
                            <p className="text-[8px] font-bold text-slate-400 uppercase">Velocidad</p>
                            <p className="text-xs font-black text-slate-800">&lt; 1 minuto</p>
                        </div>
                    </div>

                    {/* Floating Volume Badge */}
                    <div className="absolute bottom-12 left-4 bg-slate-900 text-white border border-slate-800 p-3 rounded-xl shadow-xl z-20 flex items-center gap-2.5">
                        <div className="leading-none">
                            <p className="text-[8px] font-bold text-slate-500 uppercase">Eficiencia</p>
                            <p className="text-xs font-black text-emerald-400">99.9% Autónomo</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
