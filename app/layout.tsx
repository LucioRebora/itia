import type { Metadata, Viewport } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, Outfit, Nunito } from "next/font/google";
import "@/styles/globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito',
  weight: ["900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itia.ar"),
  title: {
    default: "ITIA | Empresa de Desarrollo de Software y Soluciones con IA en Argentina",
    template: "%s | ITIA - Empresa de Desarrollo de Software",
  },
  description: "Empresa de desarrollo de software en Argentina. Creamos software a medida, desarrollo web, aplicaciones, sistemas y automatización empresarial con IA.",
  keywords: [
    "empresa de desarrollo de software",
    "desarrollo de software Argentina",
    "empresa de desarrollo web",
    "desarrollo de aplicaciones",
    "desarrollo de software con IA",
    "automatización empresarial con IA",
    "software a medida",
    "desarrollo de sistemas",
    "ITIA",
    "Inteligencia Artificial",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "ITIA Dev Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://itia.ar",
  },
  openGraph: {
    title: "ITIA | Empresa de Desarrollo de Software y Soluciones con IA",
    description: "Empresa de desarrollo de software en Argentina. Software a medida, desarrollo web, aplicaciones y automatización empresarial con IA.",
    url: "https://itia.ar",
    siteName: "ITIA",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITIA | Empresa de Desarrollo de Software y Soluciones con IA",
    description: "Empresa de desarrollo de software en Argentina. Software a medida, desarrollo web, aplicaciones y automatización empresarial con IA.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ITIA - Empresa de Desarrollo de Software",
  "image": "https://itia.ar/favicon.ico",
  "url": "https://itia.ar",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR"
  },
  "description": "Empresa de desarrollo de software en Argentina. Creamos software a medida, desarrollo web, aplicaciones, sistemas y automatización empresarial con IA.",
  "knowsAbout": [
    "Desarrollo de software",
    "Software a medida",
    "Desarrollo web",
    "Desarrollo de aplicaciones",
    "Desarrollo de sistemas",
    "Inteligencia Artificial",
    "Automatización empresarial"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-WDGQ28RM" />
      <body className={`${inter.className} ${outfit.variable} ${nunito.variable} antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

