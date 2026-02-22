"use client";

import Link from "next/link";
import { Cpu, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-slate-100 bg-slate-50">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-3xl font-black text-slate-900 font-nunito tracking-wide">
                                ITIA
                            </span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Liderando la vanguardia tecnológica mediante el desarrollo de software impulsado por IA. Soluciones inteligentes para el mundo real.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#nosotros" className="hover:text-primary transition-colors">Sobre nosotros</Link></li>
                            <li><Link href="#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="#casos" className="hover:text-primary transition-colors">Casos de éxito</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Servicios</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Automatización IA</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Asistentes Virtuales</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Análisis de Datos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>contacto@itia.ar</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-green-500" />
                                <span>Disponibles para nuevas consultas</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-400">
                        © {currentYear} ITIA. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-xs text-slate-400">
                        <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Términos de Servicio</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
