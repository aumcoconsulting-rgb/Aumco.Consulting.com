import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter – Launch Ready",
    price: "₹16,999",
    description: "Perfect for new entrepreneurs looking to establish their presence.",
    features: [
      "Logo Design",
      "Social Media Setup (3)",
      "Business Card",
      "7-day content plan",
      "AI tools setup",
      "Strategy session"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth – Brand & Build",
    price: "₹38,999",
    description: "Our most popular plan for businesses ready to scale their brand.",
    features: [
      "Full brand identity",
      "5-page website",
      "Social setup (5 platforms)",
      "Pitch deck",
      "Google Business setup",
      "15-day content plan"
    ],
    cta: "Scale Now",
    popular: true
  },
  {
    name: "Premium – Scale Up",
    price: "₹69,999",
    description: "Complete end-to-end growth system for established businesses.",
    features: [
      "Everything in Growth",
      "Custom website + SEO",
      "MSME & GST support",
      "SOP development",
      "30-day strategy",
      "CRM + automation",
      "3-month support"
    ],
    cta: "Go Premium",
    popular: false
  },
  {
    name: "Custom Plan",
    price: "Starting ₹10,000",
    description: "Tailored solution based on your specific business needs.",
    features: [
      "Customized scope",
      "Flexible execution",
      "Dedicated support",
      "Scalable resources",
      "Performance tracking",
      "Weekly reporting"
    ],
    cta: "Contact Us",
    popular: false
  }
];

const trustItems = [
  "Free Strategy Call",
  "Revision Guarantee",
  "Fast Turnaround"
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans Built for Every Stage</h2>
          <p className="text-muted-foreground text-lg mb-8">
            30–40% more affordable than agencies. No compromise on quality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 py-6 px-4 md:px-10 bg-muted/50 rounded-2xl border border-border/50">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm md:text-base font-semibold">
                <Check className="text-primary shrink-0" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`h-full flex flex-col relative transition-all duration-300 ${plan.popular ? 'border-primary shadow-xl lg:scale-105 z-10' : 'border-border/50 hover:border-primary/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="text-primary shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <a href="#contact">{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
