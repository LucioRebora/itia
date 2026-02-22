"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Servicios", href: "#servicios" },
        { name: "Cómo trabajamos", href: "#proceso" },
        { name: "Sobre nosotros", href: "#nosotros" },
        { name: "Tecnologías", href: "#tech" },
        { name: "Casos de éxito", href: "#casos" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-md py-3 border-b border-slate-200"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 font-nunito tracking-wide">
                        ITIA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contacto" className="btn-primary py-2 text-sm">
                        Cotizar proyecto
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-600 hover:text-slate-900 focus:outline-none"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-slate-200 flex flex-col p-6 gap-4 animate-fade-in shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary text-center mt-2"
                    >
                        Cotizar proyecto
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
