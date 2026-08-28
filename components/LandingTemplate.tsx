"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap,
  MapPin,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export interface LandingContentProps {
  badge: string;
  h1: string;
  subtitle: string;
  seoCategory: string;
  introText: string[];
  keyBenefits: { title: string; desc: string }[];
  detailedSections: {
    h2: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

const LandingTemplate = ({ data }: { data: LandingContentProps }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 md:pt-44 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-primary-light text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary-light" />
              <span>{data.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              {data.h1}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contacto" className="btn-primary flex items-center gap-2 group text-base py-3.5 px-8">
                Solicitar presupuesto sin cargo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contenido" className="btn-secondary text-base py-3.5 px-8 border-slate-700 text-slate-300 hover:bg-slate-800">
                Ver soluciones y detalles
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-slate-400 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Empresa de desarrollo de software en Argentina</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-light" />
                <span>Garantía de código y confidencialidad NDA</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Arquitectura escalable y 100% cloud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main SEO Article Content */}
      <section id="contenido" className="py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-16">
          
          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {data.keyBenefits.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Intro Paragraphs */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-lg leading-relaxed border-b border-slate-100 pb-12">
            {data.introText.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-16">
            {data.detailedSections.map((sec, idx) => (
              <article key={idx} className="space-y-6 border-b border-slate-100 pb-12 last:border-0">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {sec.h2}
                </h2>
                
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-600 text-base leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-800 text-sm font-semibold">{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-primary-light" />
              <h3 className="text-xl font-bold">Tecnologías y Estándares de Clase Mundial</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Implementamos las herramientas y marcos de trabajo más sólidos para garantizar velocidad, mantenibilidad y seguridad de nivel empresarial.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {data.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="space-y-8 pt-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                  <HelpCircle className="w-4 h-4" />
                  <span>Preguntas Frecuentes</span>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Preguntas habituales sobre nuestros servicios
                </h2>
              </div>

              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center gap-4 font-bold text-slate-900 text-base focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-primary" : ""}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Formulario de Contacto */}
      <ContactForm />

      <Footer />
    </main>
  );
};

export default LandingTemplate;
