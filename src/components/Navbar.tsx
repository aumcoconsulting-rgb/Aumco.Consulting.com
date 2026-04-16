import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteSearch } from "@/components/SiteSearch";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center gap-12">
        <a href="#home" className="flex items-baseline gap-0.5 group">
          <span className="font-serif italic font-bold text-4xl tracking-tighter text-[#0047AB] dark:text-blue-400">
            Aumco
          </span>
          <span className="font-sans font-bold text-xl text-black dark:text-white">
            Consulting<span className="text-sm font-medium">.com</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden md:flex items-center gap-4">
          <SiteSearch />
          <ThemeToggle />
          <Button asChild size="sm" aria-label="Book a free consultation">
            <a href="#contact">Free Consultation</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <SiteSearch />
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b z-50 animate-in slide-in-from-top duration-300 shadow-xl">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold py-3 border-b border-border/50 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full mt-4 py-6 text-lg">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
