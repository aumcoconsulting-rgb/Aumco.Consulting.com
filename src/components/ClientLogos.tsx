import { motion } from "motion/react";

const clients = [
  { name: "TechNova", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop" },
  { name: "Bloom Fashion", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop" },
  { name: "Global Logistics", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop" },
  { name: "Zenith Retail", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop" },
  { name: "Apex Solutions", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop" },
];

export const ClientLogos = () => {
  return (
    <section className="py-12 bg-muted/20 border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by 200+ businesses across India & Middle East
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
              aria-label={`Trusted client: ${client.name}`}
            >
              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center font-bold text-primary">
                {client.name[0]}
              </div>
              <span className="font-bold text-lg text-foreground/80">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
