"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Layers, 
  Globe, 
  Smartphone, 
  Cpu, 
  Workflow, 
  Network, 
  Bot, 
  Rocket,
  CheckCircle2,
  MapPin,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const softwareTypes = [
  {
    icon: <Building2 className="w-6 h-6 text-primary-light" />,
    title: "Sistemas de Gestión",
    description: "Plataformas ERP, CRM y dashboards a medida para centralizar la operación empresarial.",
    href: "/software-a-medida"
  },
  {
    icon: <Layers className="w-6 h-6 text-secondary-light" />,
    title: "Plataformas B2B",
    description: "Portales para clientes, proveedores y distribuidores con altos estándares de seguridad.",
    href: "/desarrollo-software"
  },
  {
    icon: <Globe className="w-6 h-6 text-accent" />,
    title: "Aplicaciones Web",
    description: "Sistemas web ultrarrápidos y escalables desarrollados en Next.js, React y TypeScript.",
    href: "/desarrollo-web"
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary-light" />,
    title: "Apps Móviles & PWAs",
    description: "Soluciones móviles multiplataforma diseñadas para la máxima velocidad y UX intuitiva.",
    href: "/desarrollo-aplicaciones"
  },
  {
    icon: <Cpu className="w-6 h-6 text-secondary-light" />,
    title: "APIs & Microservicios",
    description: "Arquitecturas backend sólidas, seguras y preparadas para alto tráfico masivo.",
    href: "/desarrollo-software"
  },
  {
    icon: <Workflow className="w-6 h-6 text-accent" />,
    title: "Automatizaciones de Procesos",
    description: "Eliminación de tareas repetitivas mediante flujos de trabajo inteligentes y agentes IA.",
    href: "/automatizacion-ia"
  },
  {
    icon: <Network className="w-6 h-6 text-primary-light" />,
    title: "Integración de Sistemas",
    description: "Conexión fluida entre software heredado, servicios Cloud, pasarelas y herramientas SaaS.",
    href: "/software-a-medida"
  },
  {
    icon: <Bot className="w-6 h-6 text-secondary-light" />,
    title: "Sistemas con Inteligencia Artificial",
    description: "Integración de modelos LLM, procesamiento de lenguaje natural y motores predictivos.",
    href: "/inteligencia-artificial"
  },
  {
    icon: <Rocket className="w-6 h-6 text-accent" />,
    title: "MVPs para Startups",
    description: "Desarrollo ágil de Productos Mínimos Viables para validar proyectos en tiempo récord.",
    href: "/desarrollo-software"
  },
];

const SeoContentSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10 space-y-24">
        
        {/* Block 1: ¿Buscás una empresa de desarrollo de software en Argentina? */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-primary-light text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Empresa de desarrollo de software en Argentina</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              ¿Buscás una empresa de desarrollo de software en Argentina?
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              En <strong className="text-white">ITIA</strong> desarrollamos software a medida en Argentina para empresas que necesitan digitalizar sus procesos operativos, crear nuevas plataformas de negocios o integrar sistemas existentes con la máxima eficiencia.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Combinamos ingeniería de software de alto nivel con la potencia de la inteligencia artificial generativa. Nuestro equipo diseña arquitecturas modernas que escalan al ritmo del crecimiento de tu organización.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Desarrollo de software a medida en Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Código propio, escalable y seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Integración nativa con Inteligencia Artificial</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">Soporte y mantenimiento continuo</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Impulsá tu empresa con software moderno
            </h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Trabajamos junto a tu equipo directivo y operativo para transformar ideas complejas en sistemas confiables y de alta disponibilidad.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <span className="text-xs text-primary-light uppercase font-bold tracking-wider">Especialidad</span>
                <h4 className="text-white font-semibold text-base mt-1">Sistemas Cloud & Automatización con IA</h4>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                <span className="text-xs text-emerald-400 uppercase font-bold tracking-wider">Mercado</span>
                <h4 className="text-white font-semibold text-base mt-1">Argentina & Clientes Internacionales</h4>
              </div>
            </div>

            <div className="mt-8">
              <Link href="#contacto" className="btn-primary w-full text-center flex items-center justify-center gap-2 py-3.5">
                Hablar con un especialista en software
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Block 2: ¿Qué tipo de software desarrollamos? */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              ¿Qué tipo de software desarrollamos?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Como empresa de desarrollo de software a medida en Argentina, cubrimos todas las etapas del ciclo de vida digital de tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareTypes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-800/60 border border-slate-700/60 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-slate-900 rounded-xl w-fit mb-5 border border-slate-700 group-hover:border-primary/40 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link 
                  href={item.href} 
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-light hover:text-white transition-colors"
                >
                  Conocer más sobre {item.title}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SeoContentSection;
