import { AnimatedSection } from "./ui/animated-section";
import InfiniteMenu from "./ui/infinite-menu";

const skillItems = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    title: "HTML",
    description: "Semantic structure"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    title: "CSS",
    description: "Responsive styling"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    title: "JavaScript",
    description: "Core web logic"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev/",
    title: "React",
    description: "Modern UI development"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
    title: "Tailwind CSS",
    description: "Utility-first styling"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    link: "https://www.python.org/",
    title: "Python",
    description: "ML & backend logic"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    link: "https://www.tensorflow.org/",
    title: "TensorFlow",
    description: "Deep learning"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    link: "https://scikit-learn.org/",
    title: "Scikit-learn",
    description: "ML algorithms"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    link: "https://pandas.pydata.org/",
    title: "Pandas",
    description: "Data analysis"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    link: "https://numpy.org/",
    title: "NumPy",
    description: "Numerical computing"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    link: "https://matplotlib.org/",
    title: "Matplotlib",
    description: "Visualization"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    link: "https://www.mysql.com/",
    title: "SQL",
    description: "Relational databases"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com/",
    title: "MongoDB",
    description: "NoSQL databases"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com/",
    title: "Git",
    description: "Version control"
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/",
    title: "GitHub",
    description: "Code collaboration"
  }
];



export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center drop-shadow-md">
              Skills & Expertise
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-foreground/75 text-center mb-8 max-w-2xl mx-auto drop-shadow-sm">
              Technologies and tools I use to bring ideas to life. Drag to explore.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={200}>
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ height: "500px" }}
            >
              {/* Glass background for the menu */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-foreground/[0.01] to-transparent backdrop-blur-sm rounded-3xl border border-foreground/[0.08]" />

              {/* Infinite menu */}
              <InfiniteMenu items={skillItems} scale={1.0} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
