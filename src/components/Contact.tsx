import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }

    setIsSubmitting(true);
    
    // WhatsApp integration
    const whatsappMessage = `*New Inquiry from Aumco Website*
--------------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interested Service:* ${formData.service}
*Message:* ${formData.message}
--------------------------------`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919003748116?text=${encodedMessage}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Redirecting to WhatsApp...");
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Stop guessing and start scaling. Connect with us to design your complete growth system.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a href="mailto:contact@aumcoconsulting.com" className="text-muted-foreground hover:text-primary transition-colors block">
                    contact@aumcoconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+919003748116" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 90037 48116
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg text-green-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <a 
                    href="https://wa.me/919003748116" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-green-600 transition-colors block"
                  >
                    Instant support available
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-xl border-border/50">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form and we'll chat via WhatsApp to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" required onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Interested Service</Label>
                  <Select onValueChange={handleServiceChange} required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service or plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Packages</SelectLabel>
                        <SelectItem value="Starter – Launch Ready">Starter – Launch Ready</SelectItem>
                        <SelectItem value="Growth – Brand & Build">Growth – Brand & Build</SelectItem>
                        <SelectItem value="Premium – Scale Up">Premium – Scale Up</SelectItem>
                        <SelectItem value="Custom Plan">Custom Plan</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Core Services</SelectLabel>
                        <SelectItem value="Performance Marketing">Performance Marketing</SelectItem>
                        <SelectItem value="Revenue & Sales Systems">Revenue & Sales Systems</SelectItem>
                        <SelectItem value="Business Consulting">Business Consulting</SelectItem>
                        <SelectItem value="Legal & Compliance">Legal & Compliance</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your business goals..." className="min-h-[100px]" onChange={handleChange} />
                </div>
                <Button type="submit" className="w-full gap-2 bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Send via WhatsApp"} <MessageSquare size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
