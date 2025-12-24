import { Code, Search, Lightbulb } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I write clear, efficient, and maintainable code with a focus on scalability and long-term reliability.",
  },
  {
    icon: Search,
    title: "Research Driven",
    description: "I enjoy experimenting with machine learning and cryptography, applying research insights to practical, real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I approach complex challenges with structured thinking, curiosity, and a strong problem-solving mindset.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center drop-shadow-md">
              About Me
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-16 max-w-2xl mx-auto drop-shadow-sm">
              I build intelligent, secure, and user-centric digital experiences at the intersection of AI, web, and research.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="fade-right" delay={200}>
              <h3 className="text-xl font-semibold text-foreground mb-4 drop-shadow-sm">
                Hello, I'm Atharwa
              </h3>
              <p className="text-foreground/75 mb-4 leading-relaxed drop-shadow-sm">
                I’m a Computer Science undergraduate focused on building intelligent, secure, and scalable digital solutions. My interests span machine learning, cryptography, and modern web development, where I turn research-driven ideas into real-world applications.

                I’ve worked on projects ranging from deep learning–based defect detection to secure full-stack systems, driven by curiosity, continuous learning, and problem-solving through code.
              </p>
              <p className="text-foreground/75 leading-relaxed drop-shadow-sm">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while sketching new design ideas.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={300}>
              <GlassCard variant="strong" className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground drop-shadow-sm">2+</p>
                    <p className="text-sm text-foreground/70">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground drop-shadow-sm">20+</p>
                    <p className="text-sm text-foreground/70">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground drop-shadow-sm">3+</p>
                    <p className="text-sm text-foreground/70">Research / ML Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground drop-shadow-sm">10+</p>
                    <p className="text-sm text-foreground/70">Technologies</p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={100 * (index + 1)}>
                <GlassCard className="p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent backdrop-blur-xl border border-foreground/[0.1] mb-4 shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.15)]">
                    <item.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 drop-shadow-sm">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
