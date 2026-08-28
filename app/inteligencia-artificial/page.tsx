import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Empresa de Inteligencia Artificial en Argentina | ITIA",
  description: "Desarrollo de software con Inteligencia Artificial en Argentina. Creamos modelos predictivos, chatbots avanzados con GPT-4, asistentes de voz e integración LLM.",
  keywords: [
    "desarrollo de software con IA",
    "empresa de inteligencia artificial Argentina",
    "integracion de modelos LLM",
    "asistentes virtuales GPT-4",
    "soluciones de IA para empresas",
    "ITIA inteligencia artificial"
  ],
  alternates: {
    canonical: "https://itia.ar/inteligencia-artificial",
  },
  openGraph: {
    title: "Empresa de Inteligencia Artificial en Argentina | ITIA",
    description: "Desarrollo de software con Inteligencia Artificial, LLMs, asistentes virtuales y modelos predictivos para empresas.",
    url: "https://itia.ar/inteligencia-artificial",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Desarrollo de Software con IA en Argentina",
  h1: "Desarrollo de Software con Inteligencia Artificial",
  subtitle: "Integramos los modelos de IA más potentes del mercado en los productos digitales y sistemas empresariales de tu compañía.",
  seoCategory: "Inteligencia Artificial",
  introText: [
    "La inteligencia artificial dejó de ser una promesa de futuro para convertirse en el estándar indispensable de las empresas competitivas. En ITIA desarrollamos soluciones de Inteligencia Artificial en Argentina diseñadas para resolver problemas concretos de negocio.",
    "Implementamos arquitecturas RAG (Retrieval-Augmented Generation), fine-tuning de modelos de lenguaje, análisis de visión por computadora y agentes conversacionales multicanal."
  ],
  keyBenefits: [
    {
      title: "Modelos de IA Personalizados",
      desc: "Conectamos los modelos de inteligencia artificial con las bases de conocimiento internas de tu empresa."
    },
    {
      title: "Asistentes Conversacionales Avanzados",
      desc: "Bots de voz y texto capaces de razonar, resolver dudas complejas y tomar acciones en tu sistema."
    },
    {
      title: "Análisis Predictivo",
      desc: "Predecí tendencias de ventas, comportamiento de usuarios y patrones de consumo basándote en datos."
    }
  ],
  detailedSections: [
    {
      h2: "Servicios de Inteligencia Artificial para Empresas",
      paragraphs: [
        "Integramos tecnologías líderes como OpenAI (GPT-4), Anthropic (Claude), Google Gemini y modelos Open Source en tu infraestructura privada.",
        "Nuestras soluciones incluyen capacidades de búsqueda semántica, clasificación automática de documentos y generación de reportes ejecutivos."
      ],
      bulletPoints: [
        "Sistemas RAG sobre documentación corporativa interna",
        "Bots de atención al cliente y ventas con IA conversacional",
        "Extracción automática de datos estructurados",
        "Integración de IA en aplicaciones web y móviles existentes"
      ]
    }
  ],
  techStack: [
    "Python", "OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "ChromaDB", "FastAPI"
  ],
  faqs: [
    {
      question: "¿Cómo se integra la IA en un sistema que ya tenemos funcionando?",
      answer: "Desarrollamos conectores y APIs intermedias que permiten agregar capacidades de IA a cualquier software o base de datos existente sin necesidad de rehacer el sistema desde cero."
    }
  ]
};

export default function InteligenciaArtificialPage() {
  return <LandingTemplate data={contentData} />;
}
