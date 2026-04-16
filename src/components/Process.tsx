import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discovery Call",
    description: "A 30-minute deep dive into your business goals, challenges, and current systems.",
    icon: "01"
  },
  {
    title: "Strategy Blueprint",
    description: "We design a custom growth roadmap tailored to your specific industry and budget.",
    icon: "02"
  },
  {
    title: "System Execution",
    description: "Our team builds and launches your marketing, sales, and automation infrastructure.",
    icon: "03"
  },
  {
    title: "Scale & Optimize",
    description: "Continuous monitoring and data-driven adjustments to maximize your ROI and growth.",
    icon: "04"
  }
];

export const Process = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 4-Step Growth Process</h2>
          <p className="text-muted-foreground text-lg">
            A proven framework designed to take your business from setup to scale with zero guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-12 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="mt-6 lg:hidden">
                  <ArrowRight className="text-muted rotate-90" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
