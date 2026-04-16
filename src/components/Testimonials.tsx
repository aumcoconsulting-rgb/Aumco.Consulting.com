import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aumco Consulting made our business setup seamless. From registration to our first sales funnel, they handled everything with professional precision.",
    author: "Rajesh Kumar",
    role: "Founder, TechNova Solutions",
    result: "Business setup success"
  },
  {
    quote: "Their social media strategy is unmatched. We saw our following grow to 40K in just a few months, with real engagement that converted into customers.",
    author: "Priya Sharma",
    role: "Marketing Head, Bloom Fashion",
    result: "Social media growth (40K followers)"
  },
  {
    quote: "The CRM and automation systems they built for us were a game-changer. We've seen a 40% increase in conversions since implementation.",
    author: "Vikram Singh",
    role: "CEO, Global Logistics",
    result: "40% more conversions"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 text-lg">
            Real results from businesses that trusted Aumco to scale their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-900 border-slate-800 h-full">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <Quote className="text-primary mb-4 opacity-50" size={32} />
                  <p className="text-slate-300 mb-6 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                      {t.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
