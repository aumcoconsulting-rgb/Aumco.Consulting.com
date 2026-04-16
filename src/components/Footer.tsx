import { Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <a href="#home" className="flex items-baseline gap-0.5 group">
                <span className="font-serif italic font-bold text-3xl tracking-tighter text-blue-500">
                  Aumco
                </span>
                <span className="font-sans font-bold text-lg text-white">
                  Consulting<span className="text-xs font-medium">.com</span>
                </span>
              </a>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              We build systems that scale businesses. From setup to revenue generation — we design, execute, and scale complete growth systems.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/keerthivasan-rk-b0b858230?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/aumcoconsulting?utm_source=qr&igsh=MWd0ZjI5YXoybW5oZw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-primary transition-colors">Business Consulting</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Branding & Identity</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Marketing Strategy</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Aumco Consulting. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
