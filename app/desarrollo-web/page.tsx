import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Empresa de Desarrollo Web en Argentina | ITIA",
  description: "Especialistas en desarrollo web y aplicaciones web modernas en Argentina. Creamos sitios ultrarrápidos, portales B2B e interfaces web escalables con Next.js y React.",
  keywords: [
    "empresa de desarrollo web",
    "desarrollo web Argentina",
    "desarrollo de aplicaciones web",
    "sitios web corporativos",
    "desarrollo Next.js Argentina",
    "ITIA desarrollo web"
  ],
  alternates: {
    canonical: "https://itia.ar/desarrollo-web",
  },
  openGraph: {
    title: "Empresa de Desarrollo Web en Argentina | ITIA",
    description: "Desarrollo web moderno, rápido y optimizado para SEO en Argentina. Next.js, React y soluciones web empresariales.",
    url: "https://itia.ar/desarrollo-web",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Empresa de Desarrollo Web en Argentina",
  h1: "Desarrollo Web & Aplicaciones Web de Alto Rendimiento",
  subtitle: "Diseñamos y desarrollamos sitios web corporativos, plataformas digitales y aplicaciones web progresivas que destacan por su velocidad de carga, UX intuitiva y optimización SEO.",
  seoCategory: "Desarrollo Web",
  introText: [
    "Tu presencia web es la puerta de entrada principal para tus clientes, inversores y aliados comerciales. En ITIA nos destacamos como una empresa de desarrollo web en Argentina enfocada en crear plataformas digitales que no solo lucen visualmente impactantes, sino que están optimizadas para convertir visitas en clientes reales.",
    "Utilizamos las tecnologías web más avanzadas de la industria, como Next.js, React y Tailwind CSS, eliminando plantillas pesadas y código obsoleto. El resultado son aplicaciones web ultrarrápidas, accesibles desde cualquier dispositivo y preparadas para posicionar en los primeros lugares de búsqueda de Google."
  ],
  keyBenefits: [
    {
      title: "Velocidad de Carga Extrema",
      desc: "Puntuaciones superiores al 90% en Google PageSpeed Insights gracias a renderizado estático y dinámico optimizado."
    },
    {
      title: "Optimización SEO Integrada",
      desc: "Estructura semántica HTML5, metadatos dinámicos, esquemas Schema.org y mapa del sitio automático."
    },
    {
      title: "Diseño UX/UI de Alta Gama",
      desc: "Interfaces limpias, modernas y adaptables que ofrecen una experiencia fluida e interactiva en móviles y escritorios."
    }
  ],
  detailedSections: [
    {
      h2: "¿Por qué invertir en desarrollo web profesional en Argentina?",
      paragraphs: [
        "Un sitio web lento o técnicamente deficiente genera desconfianza y perjudica el posicionamiento de tu marca. El desarrollo web moderno requiere una arquitectura pensada para la velocidad, la seguridad y la conversión.",
        "Como empresa de desarrollo web en Argentina, ayudamos a negocios locales e internacionales a construir aplicaciones web dinámicas, portales de clientes y landing pages de alto impacto comercial que responden instantáneamente a las interacciones del usuario."
      ],
      bulletPoints: [
        "Aplicaciones web progresivas (PWAs) y SPA en Next.js",
        "Integración de paneles de administración y CMS headless",
        "E-commerce B2B y pasarelas de cobro locales e internacionales",
        "Diseño 100% adaptativo (Mobile-First) y accesible"
      ]
    },
    {
      h2: "Novedades tecnológicas en nuestras aplicaciones web",
      paragraphs: [
        "Aprovechamos el ecosistema moderno de JavaScript y TypeScript para garantizar la máxima eficiencia en cada entrega:",
        "• Next.js App Router para una navegación instantánea y SEO superior.",
        "• Componentes de UI reactivos con Framer Motion para micro-animaciones fluidas.",
        "• Conexión a bases de datos ultrarrápidas y APIs GraphQL / REST.",
        "• Alojamiento en redes Edge (CDN) para distribución global sin latencia."
      ]
    }
  ],
  techStack: [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion", "GraphQL", "REST API", "SEO"
  ],
  faqs: [
    {
      question: "¿Por qué eligen Next.js para el desarrollo web?",
      answer: "Next.js es el framework líder para React. Combina lo mejor de la generación estática (SSG) y el renderizado en servidor (SSR), lo que se traduce en velocidades de carga casi instantáneas y un posicionamiento orgánico en Google imbatible."
    },
    {
      question: "¿Puedo administrar el contenido de mi web yo mismo?",
      answer: "Sí, podemos integrar un gestor de contenidos (CMS) fácil de usar para que puedas actualizar texto, imágenes y entradas de blog sin necesidad de conocimientos técnicos."
    }
  ]
};

export default function DesarrolloWebPage() {
  return <LandingTemplate data={contentData} />;
}
