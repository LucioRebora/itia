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
  title: "ITIA – Desarrollo de software impulsado por IA",
  description: "Creamos soluciones digitales rápidas, escalables y eficientes usando Inteligencia Artificial. Expertos en Next.js, Python y automatización inteligente.",
  keywords: ["IA", "Inteligencia Artificial", "Desarrollo de Software", "Next.js", "Automatización", "ITIA"],
  authors: [{ name: "ITIA Dev Team" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-WDGQ28RM" />
      <body className={`${inter.className} ${outfit.variable} ${nunito.variable} antialiased selection:bg-primary/30 selection:text-white`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

