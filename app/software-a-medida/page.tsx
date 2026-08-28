import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida en Argentina | ITIA",
  description: "Especialistas en software a medida en Argentina. Desarrollamos sistemas de gestión, plataformas empresariales y herramientas digitales adaptadas 100% a tus procesos.",
  keywords: [
    "software a medida",
    "desarrollo de software a medida en Argentina",
    "software a medida Argentina",
    "sistemas a medida",
    "software empresarial a medida",
    "ITIA software a medida"
  ],
  alternates: {
    canonical: "https://itia.ar/software-a-medida",
  },
  openGraph: {
    title: "Desarrollo de Software a Medida en Argentina | ITIA",
    description: "Creación de software a medida y sistemas de gestión empresarial en Argentina. Soluciones robustas y adaptadas a tu negocio.",
    url: "https://itia.ar/software-a-medida",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Software a Medida en Argentina",
  h1: "Desarrollo de Software a Medida en Argentina",
  subtitle: "Creamos herramientas digitales y sistemas corporativos diseñados en exclusiva para la estructura y desafíos específicos de tu organización.",
  seoCategory: "Software a Medida",
  introText: [
    "Las empresas líderes no adaptan sus operaciones a un software rígido; crean o eligen un software a medida que potencie sus ventajas competitivas. En ITIA desarrollamos software a medida en Argentina para empresas que buscan diferenciarse, automatizar tareas complejas y tener control absoluto sobre sus herramientas tecnológicas.",
    "Eliminamos cobros mensuales por licencias genéricas y limitaciones técnicas. Nuestro equipo construye sistemas flexibles, modulares y completamente alineados con la visión de tu negocio."
  ],
  keyBenefits: [
    {
      title: "Flexibilidad Total",
      desc: "El sistema evoluciona a la par del crecimiento de tu empresa, incorporando nuevas funciones según tus necesidades reales."
    },
    {
      title: "Propiedad Intelectual Garantizada",
      desc: "El software y su código fuente son 100% de tu propiedad, eliminando la dependencia de terceros."
    },
    {
      title: "Eficiencia Operativa Máxima",
      desc: "Optimizá el tiempo de tu equipo integrando todas tus áreas operativas en una sola plataforma centralizada."
    }
  ],
  detailedSections: [
    {
      h2: "¿Cuándo necesita tu empresa un software a medida?",
      paragraphs: [
        "Muchas organizaciones comienzan utilizando planillas de cálculo o softwares comerciales enlatados. Sin embargo, al escalar las operaciones, surgen problemas de duplicación de tareas, falta de integración y limitaciones en los reportes ejecutivos.",
        "El desarrollo de software a medida en Argentina es la solución definitiva cuando tu empresa requiere automatizar flujos complejos, conectar múltiples bases de datos o brindar una experiencia exclusiva a sus clientes."
      ],
      bulletPoints: [
        "Sistemas de gestión operativa (ERP) personalizados",
        "Gestores de relación con clientes (CRM) a medida",
        "Plataformas para logística, inventario y facturación",
        "Paneles de inteligencia de negocios y reportes en tiempo real"
      ]
    }
  ],
  techStack: [
    "Python", "Node.js", "PostgreSQL", "React", "TypeScript", "Docker", "AWS", "FastAPI"
  ],
  faqs: [
    {
      question: "¿Es muy costoso desarrollar un software a medida?",
      answer: "A mediano y largo plazo, el software a medida suele ser considerablemente más rentable que pagar licencias recurrentes por usuario de plataformas comerciales rígidas. Además, incrementa el valor patrimonial de tu empresa."
    }
  ]
};

export default function SoftwareAMedidaPage() {
  return <LandingTemplate data={contentData} />;
}
