"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = ["Innovación constante", "Transparencia absoluta", "Calidad innegociable"];

const About = () => {
    return (
        <section id="nosotros" className="py-24 bg-slate-50">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl mb-8">Sobre ITIA</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2">Quiénes somos</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Somos un equipo de ingenieros y entusiastas de la IA dedicados a transformar la manera en que las empresas interactúan con la tecnología. Nuestra pasión es construir puentes entre el presente y el futuro digital.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Misión</h3>
                                <p className="text-sm text-slate-500">
                                    Democratizar el acceso a la inteligencia artificial de vanguardia para empresas de todos los tamaños.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Visión</h3>
                                <p className="text-sm text-slate-500">
                                    Ser el referente global en desarrollo de software inteligente y automatización empresarial.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10"
                >
                    <h3 className="text-2xl font-bold mb-8 italic text-slate-900">&quot;La tecnología es mejor cuando une a las personas y potencia su creatividad.&quot;</h3>
                    <div className="space-y-4">
                        <p className="text-slate-600 font-semibold mb-6">Nuestros Valores:</p>
                        {values.map((value, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="text-lg text-slate-700">{value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-shrink-0">
                            <img
                                src="/img/lucio.jpg"
                                alt="Lucio Rebora"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-slate-900 font-bold">Lucio Rebora</p>
                            <p className="text-xs text-slate-500">Co-fundador de ITIA</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
