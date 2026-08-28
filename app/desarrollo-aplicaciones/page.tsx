import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Desarrollo de Aplicaciones en Argentina | ITIA",
  description: "Empresa de desarrollo de aplicaciones web y móviles en Argentina. Diseñamos apps escalables, intuitivas y de alto impacto para startups y empresas.",
  keywords: [
    "desarrollo de aplicaciones",
    "desarrollo de aplicaciones Argentina",
    "desarrollo de apps web",
    "empresa de desarrollo de aplicaciones",
    "desarrollo de sistemas móviles",
    "ITIA desarrollo aplicaciones"
  ],
  alternates: {
    canonical: "https://itia.ar/desarrollo-aplicaciones",
  },
  openGraph: {
    title: "Desarrollo de Aplicaciones en Argentina | ITIA",
    description: "Desarrollo de aplicaciones web y móviles escalables en Argentina. Código de alta velocidad y excelente experiencia de usuario.",
    url: "https://itia.ar/desarrollo-aplicaciones",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Empresa de Desarrollo de Aplicaciones en Argentina",
  h1: "Desarrollo de Aplicaciones Web y Móviles Escalables",
  subtitle: "Creamos aplicaciones de alto impacto enfocadas en velocidad de respuesta, usabilidad excepcional e integración nativa con servicios Cloud.",
  seoCategory: "Desarrollo de Aplicaciones",
  introText: [
    "En un mundo donde los usuarios exigen inmediatez, una aplicación lenta o difícil de usar provoca la pérdida inmediata de clientes. En ITIA nos especializamos en el desarrollo de aplicaciones en Argentina para empresas que necesitan herramientas robustas y atractivas.",
    "Abordamos el desarrollo de aplicaciones desde una perspectiva integral: investigación UX, arquitectura backend resiliente, desarrollo frontend fluido y despliegue automatizado."
  ],
  keyBenefits: [
    {
      title: "Multi-plataforma & Responsivo",
      desc: "Experiencia de uso impecable en celulares, tablets y computadoras de escritorio."
    },
    {
      title: "Rendimiento y Carga Rápida",
      desc: "Optimizamos el peso del código y las consultas a base de datos para responder en milisegundos."
    },
    {
      title: "Seguridad y Encriptación",
      desc: "Protegemos la privacidad de los usuarios con protocolos de autenticación y encriptación avanzada."
    }
  ],
  detailedSections: [
    {
      h2: "Tipos de aplicaciones que desarrollamos",
      paragraphs: [
        "Acompañamos a nuestros clientes desde la fase inicial de prototipado hasta la publicación y escalado masivo.",
        "Nuestras aplicaciones destacan por su facilidad de adopción operativa y su capacidad de integración con otros sistemas."
      ],
      bulletPoints: [
        "Aplicaciones Web Progresivas (PWA) de alto rendimiento",
        "Sistemas SaaS (Software como Servicio) multitenant",
        "Portales interactivos para clientes y gestión de usuarios",
        "Aplicaciones móviles híbridas y plataformas Cloud"
      ]
    }
  ],
  techStack: [
    "Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "AWS"
  ],
  faqs: [
    {
      question: "¿Desarrollan aplicaciones SaaS con modelos de suscripción?",
      answer: "Sí, somos expertos en el desarrollo de aplicaciones SaaS (Software as a Service) con cobros recurrentes, gestión de membresías y paneles administrativos."
    }
  ]
};

export default function DesarrolloAplicacionesPage() {
  return <LandingTemplate data={contentData} />;
}
