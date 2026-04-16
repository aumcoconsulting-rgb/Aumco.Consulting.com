import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <ClientLogos />
          <Services />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}
