import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "atharwared@gmail.com",
    href: "mailto:atharwared@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73209804667",
    href: "tel:+91 7320980466",
  },
  {
    icon: MapPin,
    label: "Vellore, Tamil Nadu",
    value: "Vellore, Tamil Nadu",
    href: "https://www.google.com/maps/place/Vellore+Institute+of+Technology/@12.9692284,79.1533587,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad479f0ccbe067:0xfef222e5f36ecdeb!8m2!3d12.9692232!4d79.1559336!16zL20vMDZzcHNo?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/snorelax08", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/atharwa-vatsyayan-78a83a260/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center drop-shadow-md">
              Get In Touch
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-16 max-w-2xl mx-auto drop-shadow-sm">
              Interested in working together or discussing an idea? I’m always open to meaningful conversations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <AnimatedSection animation="fade-right" delay={200}>
                <GlassCard variant="subtle" className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6 drop-shadow-sm">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 text-foreground/70 hover:text-foreground transition-colors group"
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-foreground/[0.12] via-foreground/[0.06] to-transparent backdrop-blur-xl border border-foreground/[0.1] shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.12)] group-hover:from-foreground/[0.18] group-hover:border-foreground/18 group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.18)] group-hover:-translate-y-0.5 transition-all duration-300">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-foreground/60">{item.label}</p>
                          <p className="text-foreground drop-shadow-sm">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={300}>
                <GlassCard variant="subtle" className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 drop-shadow-sm">
                    Follow Me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-foreground/[0.12] via-foreground/[0.06] to-transparent backdrop-blur-xl text-foreground/75 border border-foreground/[0.1] shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:from-foreground/[0.18] hover:text-foreground hover:border-foreground/18 hover:shadow-[0_6px_16px_rgba(0,0,0,0.14),inset_0_1px_1px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 transition-all duration-300"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-left" delay={200}>
              <GlassCard variant="default" className="p-6 h-full">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-foreground text-background hover:bg-foreground/90 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <AnimatedSection animation="fade-up" delay={400}>
        <div className="mt-24 pt-8 border-t border-foreground/8">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm text-foreground/50">
              © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
