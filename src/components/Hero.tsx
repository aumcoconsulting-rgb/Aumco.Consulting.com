import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <CheckCircle2 size={14} />
            <span>Scale Your Business with Aumco</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            We Build Systems That <span className="text-primary italic">Scale</span> Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            From business setup to revenue generation — we design, execute, and scale complete growth systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button size="lg" className="gap-2 text-base px-8" asChild>
              <a href="#contact">
                Book Free Consultation <ArrowRight size={18} />
              </a>
            </Button>
            <div className="flex flex-col items-start">
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="#contact">Download Growth Checklist</a>
              </Button>
              <span className="text-[10px] text-muted-foreground mt-1 ml-1 uppercase tracking-tighter">Free PDF Resource</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 w-full relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=1200&auto=format&fit=crop"
                alt="Aumco Consulting team conducting a business strategy session for growth scaling"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-4 md:-left-12 bg-background p-4 md:p-6 rounded-xl shadow-xl border border-border hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight text-left">
                  Startups<br />Consulted
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-4 md:-right-12 bg-background p-4 md:p-6 rounded-xl shadow-xl border border-border hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-tight text-left">
                  Client<br />Satisfaction
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
