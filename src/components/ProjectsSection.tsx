import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";
import { AnimatedSection } from "./ui/animated-section";

const projects = [
  {
    title: "PaperSense",
    description:
      "AI-powered, local-first semantic PDF search engine enabling Google-like search across private document collections using hybrid semantic and keyword ranking.",
    tags: [
      "Python",
      "FastAPI",
      "SentenceTransformers",
      "TF-IDF",
      "React",
      "Vite",
      "PyMuPDF"
    ],
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/snorelax08/PaperSense"
  },
  {
    title: "Quantum Resistance Checker",
    description:
      "Cryptographic security analysis tool that evaluates encrypted files for vulnerability to quantum attacks and recommends post-quantum migration strategies.",
    tags: [
      "Python",
      "Cryptography",
      "Post-Quantum",
      "Security Analysis"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://snorelax08.github.io/Quantum-Resistance-Checker-web/",
    githubUrl: "https://github.com/snorelax08/Quantum-Resistance-Checker"
  },
  {
    title: "Defect Analysis in Machine Components (ISRO)",
    description:
      "Computer vision–based defect detection system developed as part of an ISRO research collaboration for predictive maintenance of machine components.",
    tags: [
      "Computer Vision",
      "Deep Learning",
      "ResNet50",
      "Python",
      "Research"
    ],
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mood Music Recommender",
    description:
      "AI-based music recommendation system that suggests tracks based on user mood, weather conditions, and time of day, supporting both text and voice input.",
    tags: [
      "Python",
      "NLP",
      "Speech Recognition",
      "AI"
    ],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/Sanskar121543/MusicRecommendationSystem"
  },
  {
    title: "Compre Quiz Practice",
    description:
      "Web-based quiz platform built to help students practice and revise questions for comprehensive exams through repeated testing.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://snorelax08.github.io/Compre-quiz-practice/",
    githubUrl: "https://github.com/snorelax08/Compre-quiz-practice"
  },
  {
    title: "GitPilot",
    description:
      "AI-powered Git assistant that converts natural language instructions into context-aware Git commands with safety checks.",
    tags: [
      "Python",
      "LLMs",
      "Gemini API",
      "LLaMA",
      "Developer Tools"
    ],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#"
  },
   {
    title: "MetaMint",
    description:
      "Blockchain-based platform that enables users to invest in creators by purchasing creator-specific tokens, fostering growth and innovation in the creator economy.",
    tags: [
      "Blockchain",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML",
      "CSS"
    ],
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "https://github.com/your-username/metamint"
  },
  {
    title: "IoT & Soil Microelements Analysis",
    description:
      "Machine learning–based analysis of soil microelements using real-world IoT sensor data to generate actionable insights under noisy conditions.",
    tags: [
      "Machine Learning",
      "IoT",
      "Data Analysis"
    ],
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    liveUrl: "#",
    githubUrl: "#"
  }
];



export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center drop-shadow-md">
              Featured Projects
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-16 max-w-2xl mx-auto drop-shadow-sm">
              A selection of my recent work showcasing different technologies and
              problem-solving approaches.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                animation="fade-up"
                delay={150 * (index + 1)}
              >
                <GlassCard
                  variant="default"
                  className="group overflow-hidden h-full"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 drop-shadow-sm">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs bg-gradient-to-br from-foreground/[0.1] to-foreground/[0.05] backdrop-blur-sm text-foreground/80 rounded-lg border border-foreground/[0.1] shadow-[0_1px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.1)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="glass" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-foreground/8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
