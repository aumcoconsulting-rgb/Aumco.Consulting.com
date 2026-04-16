import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-background relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=800&auto=format&fit=crop"
                alt="Aumco Consulting expert team collaborating on business growth systems"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by Operators, for Visionaries</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Founded in 2021 by a team of seasoned business operators and performance marketers, Aumco Consulting was born from a simple observation: most businesses fail not because of a bad product, but because of weak systems.
              </p>
              <p>
                What started as a small boutique agency in Chennai has quickly grown into a comprehensive growth partner for businesses across India and the Middle East. Our founding team, led by experts in sales automation and legal compliance, brings over a decade of combined experience in scaling startups from zero to revenue.
              </p>
              <p>
                We don't just provide advice; we embed ourselves in your operations to build the infrastructure that makes growth inevitable. From our first project helping a local MSME automate their sales to now managing growth systems for high-growth tech startups, our mission remains the same: to bridge the gap between business ideas and sustainable revenue.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-1">3+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-1">200+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
