import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { 
  Megaphone, 
  TrendingUp, 
  Briefcase, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const serviceCategories = [
  {
    title: "Performance Marketing",
    icon: Megaphone,
    color: "bg-blue-500",
    items: [
      "Meta & Google Ads",
      "SEO & Content Strategy",
      "AI-powered social media content",
      "Email & WhatsApp marketing",
      "Analytics & reporting"
    ]
  },
  {
    title: "Revenue & Sales Systems",
    icon: TrendingUp,
    color: "bg-green-500",
    items: [
      "Sales funnel design",
      "CRM setup & automation",
      "Sales scripts & playbooks",
      "Lead generation strategy",
      "Customer retention systems"
    ]
  },
  {
    title: "Business Consulting",
    icon: Briefcase,
    color: "bg-purple-500",
    items: [
      "Business structure & registration",
      "Operations & process mapping",
      "AI & automation integration",
      "Market expansion strategy",
      "Financial planning",
      "Data analytics"
    ]
  },
  {
    title: "Legal & Compliance",
    icon: ShieldCheck,
    color: "bg-red-500",
    items: [
      "MSME, GST, ROC registration",
      "ISO certification",
      "FSSAI & industry licenses",
      "Trademark & IP filing",
      "Compliance audits"
    ]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Service Categories</h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end solutions to ensure your business is not just running, but thriving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    <category.icon size={24} />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
