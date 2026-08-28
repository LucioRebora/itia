import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida para Empresas en Argentina | ITIA",
  description: "Somos una empresa de desarrollo de software en Argentina. Diseñamos y construimos sistemas de software a medida, automatización e integración con Inteligencia Artificial.",
  keywords: [
    "empresa de desarrollo de software",
    "desarrollo de software Argentina",
    "desarrollo de software a medida",
    "desarrollo de sistemas",
    "software empresarial",
    "ITIA desarrollo de software"
  ],
  alternates: {
    canonical: "https://itia.ar/desarrollo-software",
  },
  openGraph: {
    title: "Desarrollo de Software a Medida para Empresas | ITIA Argentina",
    description: "Empresa de desarrollo de software en Argentina especializada en sistemas a medida, plataformas web y automatización con IA.",
    url: "https://itia.ar/desarrollo-software",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
};

const contentData = {
  badge: "Empresa de Desarrollo de Software en Argentina",
  h1: "Desarrollo de Software a Medida para Empresas",
  subtitle: "Somos una empresa de desarrollo de software especializada en soluciones web, plataformas empresariales, automatización e integración con Inteligencia Artificial.",
  seoCategory: "Desarrollo de Software",
  introText: [
    "En el entorno digital actual, confiar la infraestructura tecnológica a soluciones prefabricadas suele limitar el crecimiento estratégico y la flexibilidad operativa de una compañía. En ITIA nos consolidamos como una empresa de desarrollo de software en Argentina orientada a construir soluciones tecnológicas robustas, adaptadas en un 100% a los objetivos comerciales y procesos clave de cada cliente.",
    "Desde la conceptualización inicial de la arquitectura hasta la puesta en producción y el soporte continuo, nuestro equipo de ingenieros aplica metodologías ágiles y estándares internacionales de ingeniería de software. Nos especializamos en crear plataformas que optimizan recursos, eliminan cuellos de botella e impulsan la ventaja competitiva de startups, PyMEs y corporaciones."
  ],
  keyBenefits: [
    {
      title: "Soluciones 100% a Medida",
      desc: "Diseñamos código y lógica adaptados perfectamente a tus requerimientos operativos sin pagar licencias de software rígidas."
    },
    {
      title: "Integración de IA Nativa",
      desc: "Incorporamos inteligencia artificial desde el inicio para automatizar análisis, clasificar información y acelerar decisiones."
    },
    {
      title: "Arquitectura Cloud Escalable",
      desc: "Construimos sistemas preparados para tolerar picos de uso masivos manteniendo tiempos de respuesta ultrarrápidos."
    }
  ],
  detailedSections: [
    {
      h2: "¿Por qué elegir a ITIA como tu empresa de desarrollo de software en Argentina?",
      paragraphs: [
        "El desarrollo de software en Argentina ha alcanzado niveles de excelencia reconocidos globalmente gracias a la calidad técnica de sus profesionales y la capacidad de resolver problemas complejos con agilidad. En ITIA combinamos ese talento técnico con una visión de producto enfocada en resultados de negocio.",
        "A diferencia de las agencias tradicionales, no nos limitamos a escribir líneas de código. Realizamos un relevamiento exhaustivo de los flujos de trabajo de tu empresa para proponer la mejor arquitectura tecnológica, garantizando máxima seguridad, velocidad de carga y escalabilidad a largo plazo."
      ],
      bulletPoints: [
        "Desarrollo de sistemas de gestión ERP y CRM a medida",
        "Plataformas B2B y portales corporativos para clientes",
        "Integración de pasarelas de pago y pasarelas de facturación",
        "Desarrollo de APIs RESTful y microservicios resilientes"
      ]
    },
    {
      h2: "Metodología de desarrollo de sistemas empresariales en ITIA",
      paragraphs: [
        "Para asegurar entregables previsibles y de alta calidad, empleamos un proceso estructurado dividido en 4 fases ejecutivas:",
        "1. Discovery & Arquitectura: Análisis de requerimientos, diseño de base de datos y especificación técnica del proyecto.",
        "2. Desarrollo Ágil & Sprints: Construcción iterativa con demostraciones semanales donde podrás probar avances reales del sistema.",
        "3. QA & Pruebas de Seguridad: Testeo exhaustivo de rendimiento, vulnerabilidades y pruebas de carga previa al lanzamiento.",
        "4. Despliegue & Mantenimiento: Puesta en marcha en entornos Cloud (AWS, Vercel, Google Cloud) y soporte técnico continuo."
      ],
      bulletPoints: [
        "Control de versiones transparente en repositorios Git",
        "Integración y despliegue continuo (CI/CD)",
        "Código documentado y transferencia de propiedad intelectual",
        "Contratos con cláusulas de confidencialidad NDA estricto"
      ]
    }
  ],
  techStack: [
    "Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "Docker", "AWS", "Google Cloud", "FastAPI"
  ],
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar un sistema de software a medida?",
      answer: "El tiempo de desarrollo varía según el alcance y la complejidad del proyecto. Un Producto Mínimo Viable (MVP) o módulo específico puede estar listo en 4 a 6 semanas, mientras que sistemas corporativos complejos suelen tomar entre 2 y 4 meses con entregas semanales funcionales."
    },
    {
      question: "¿El código fuente desarrollado pasa a ser propiedad de mi empresa?",
      answer: "Sí, absolutamente. Todos los derechos de propiedad intelectual y el código fuente completo son 100% transferidos a tu compañía una vez finalizado el proyecto."
    },
    {
      question: "¿Brindan soporte y mantenimiento una vez lanzado el software?",
      answer: "Ofrecemos planes de soporte, monitoreo de servidor 24/7, actualizaciones de seguridad y evolución continua según las necesidades cambiantes de tu empresa."
    }
  ]
};

export default function DesarrolloSoftwarePage() {
  return <LandingTemplate data={contentData} />;
}
