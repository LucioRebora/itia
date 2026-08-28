import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Automatización Empresarial con IA | ITIA Argentina",
  description: "Transformá la operativa de tu empresa con automatización e Inteligencia Artificial en Argentina. Diseñamos agentes de IA autónomos y flujos de trabajo inteligentes.",
  keywords: [
    "automatización con IA",
    "automatización empresarial con IA",
    "agentes de IA para empresas",
    "optimización de procesos IA",
    "automatización de flujos de trabajo",
    "ITIA automatización IA"
  ],
  alternates: {
    canonical: "https://itia.ar/automatizacion-ia",
  },
  openGraph: {
    title: "Automatización Empresarial con IA | ITIA Argentina",
    description: "Optimizá procesos operativos y reducí costos mediante automatización de tareas e Inteligencia Artificial para empresas.",
    url: "https://itia.ar/automatizacion-ia",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Automatización Empresarial con IA",
  h1: "Automatización Empresarial e Integración de IA",
  subtitle: "Reemplazamos tareas manuales repetitivas por agentes inteligentes y flujos autónomos que operan 24/7 sin errores humanos.",
  seoCategory: "Automatización con IA",
  introText: [
    "La automatización empresarial con IA representa el mayor salto de productividad operacional de la última década. En ITIA implementamos agentes inteligentes y sistemas automatizados que se integran a las herramientas existentes de tu empresa (CRM, mail, ERP, WhatsApp) para ejecutar tareas de forma autónoma.",
    "Desde la extracción automática de datos en documentos y contratos hasta la calificación de leads y el procesamiento de solicitudes, construimos flujos inteligentes que liberan tiempo valioso a tu equipo de trabajo."
  ],
  keyBenefits: [
    {
      title: "Operatividad 24/7",
      desc: "Tus procesos continúan ejecutándose de forma ininterrumpida las 24 horas del día, los 365 días del año."
    },
    {
      title: "Cero Errores Manuales",
      desc: "Garantizamos precisión total en el procesamiento de datos, facturas, emails y entrada de información."
    },
    {
      title: "Reducción de Costos",
      desc: "Maximizá el retorno de inversión reduciendo drásticamente los tiempos operativos y costos de ejecución."
    }
  ],
  detailedSections: [
    {
      h2: "¿Qué procesos podés automatizar con IA en tu empresa?",
      paragraphs: [
        "Cualquier tarea repetitiva basada en reglas o procesamiento de información es susceptible de ser optimizada con agentes de IA.",
        "Analizamos los cuellos de botella de tu organización para implementar agentes autónomos que ejecuten acciones complejas con supervisión humana mínima."
      ],
      bulletPoints: [
        "Procesamiento y lectura inteligente de facturas y PDF (OCR + LLM)",
        "Respuesta automatizada a consultas de clientes por WhatsApp y correo",
        "Sincronización de inventario y stock entre múltiples plataformas",
        "Generación automática de cotizaciones y propuestas comerciales"
      ]
    }
  ],
  techStack: [
    "Python", "LangChain", "OpenAI", "Anthropic Claude", "Make", "n8n", "FastAPI", "Webhooks"
  ],
  faqs: [
    {
      question: "¿Es seguro conectar la IA a los datos de mi empresa?",
      answer: "Sí. Implementamos entornos aislados con encriptación de extremo a extremo y acuerdos estricto de privacidad para garantizar que tus datos corporativos nunca sean utilizados para entrenar modelos públicos."
    }
  ]
};

export default function AutomatizacionIaPage() {
  return <LandingTemplate data={contentData} />;
}
