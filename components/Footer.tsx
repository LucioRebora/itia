"use client";

import Link from "next/link";
import { Cpu, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 border-t border-slate-100 bg-slate-50">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center mb-6">
                            <img src="/img/logoitia.png" alt="ITIA Logo" className="h-24 w-auto object-contain" />
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Empresa de desarrollo de software en Argentina. Creamos software a medida, desarrollo de sistemas, aplicaciones web y automatización empresarial con IA.
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
                            <li><Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Soluciones SEO</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/desarrollo-software" className="hover:text-primary transition-colors">Desarrollo de Software</Link></li>
                            <li><Link href="/desarrollo-web" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
                            <li><Link href="/software-a-medida" className="hover:text-primary transition-colors">Software a Medida</Link></li>
                            <li><Link href="/automatizacion-ia" className="hover:text-primary transition-colors">Automatización con IA</Link></li>
                            <li><Link href="/inteligencia-artificial" className="hover:text-primary transition-colors">Inteligencia Artificial</Link></li>
                            <li><Link href="/desarrollo-aplicaciones" className="hover:text-primary transition-colors">Desarrollo de Aplicaciones</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:contacto@itia.ar" className="hover:text-primary transition-colors">contacto@itia.ar</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+5491161357314" className="hover:text-primary transition-colors">+54 9 11 6135-7314</a>
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
