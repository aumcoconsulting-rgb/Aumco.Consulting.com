import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How soon can we expect to see results?",
    answer: "While results vary by industry, most clients see measurable improvements in lead quality and system efficiency within the first 30-45 days of implementation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While we are based in India, we have built growth systems for startups and businesses across the US, UK, and Middle East."
  },
  {
    question: "Is the 'Custom Plan' suitable for small startups?",
    answer: "Absolutely. Our Custom Plan is designed to be flexible. We can start with a small, focused scope and scale the systems as your revenue grows."
  },
  {
    question: "What makes Aumco different from a traditional marketing agency?",
    answer: "Traditional agencies focus on traffic. We focus on systems. We don't just run ads; we build the sales funnels, CRM automations, and legal foundations that turn that traffic into sustainable revenue."
  },
  {
    question: "Do you provide ongoing support after the initial setup?",
    answer: "Yes, our Premium plan includes 3 months of dedicated support. We also offer ongoing maintenance retainers for clients who want us to manage their systems long-term."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with Aumco Consulting.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <div className="bg-primary/10 p-1 rounded-full text-primary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
