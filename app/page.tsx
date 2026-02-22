import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import UseCases from "@/components/UseCases";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Services />
      <Process />
      <About />
      <TechStack />
      <UseCases />
      <ContactForm />
      <Footer />
    </main>
  );
}

