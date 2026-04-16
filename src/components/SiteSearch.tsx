import * as React from "react";
import { Search as SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const searchData = [
  // Services
  { id: "s1", title: "Performance Marketing", category: "Services", description: "Meta & Google Ads, SEO, AI Content, WhatsApp Marketing", link: "#services" },
  { id: "s2", title: "Revenue & Sales Systems", category: "Services", description: "Sales funnel design, CRM setup, Lead generation strategy", link: "#services" },
  { id: "s3", title: "Business Consulting", category: "Services", description: "Business structure, Operations mapping, AI integration", link: "#services" },
  { id: "s4", title: "Legal & Compliance", category: "Services", description: "MSME, GST, ROC registration, Trademark & IP filing", link: "#services" },
  
  // Process
  { id: "p1", title: "Discovery Call", category: "Process", description: "30-minute deep dive into business goals and challenges", link: "#home" },
  { id: "p2", title: "Strategy Blueprint", category: "Process", description: "Custom growth roadmap tailored to industry and budget", link: "#home" },
  { id: "p3", title: "System Execution", category: "Process", description: "Building marketing, sales, and automation infrastructure", link: "#home" },
  { id: "p4", title: "Scale & Optimize", category: "Process", description: "Monitoring and data-driven adjustments for ROI", link: "#home" },
  
  // FAQ
  { id: "f1", title: "How soon can we expect results?", category: "FAQ", description: "Measurable improvements within 30-45 days", link: "#faq" },
  { id: "f2", title: "International Clients", category: "FAQ", description: "We work with clients in US, UK, and Middle East", link: "#faq" },
  { id: "f3", title: "Custom Plan for Startups", category: "FAQ", description: "Flexible plans designed to scale with revenue", link: "#faq" },
  { id: "f4", title: "Aumco vs Traditional Agencies", category: "FAQ", description: "We focus on systems and funnels, not just traffic", link: "#faq" },
  
  // About
  { id: "a1", title: "Our History", category: "About", description: "Founded in 2021 in Chennai by seasoned operators", link: "#about" },
  { id: "a2", title: "Our Mission", category: "About", description: "Bridge the gap between business ideas and sustainable revenue", link: "#about" },
];

export function SiteSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (link: string) => {
    setOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search site...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search services, process, or FAQs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Services">
            {searchData.filter(item => item.category === "Services").map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.link)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Process">
            {searchData.filter(item => item.category === "Process").map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.link)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="FAQ">
            {searchData.filter(item => item.category === "FAQ").map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.link)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="About Us">
            {searchData.filter(item => item.category === "About").map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.link)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{item.description}</div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
