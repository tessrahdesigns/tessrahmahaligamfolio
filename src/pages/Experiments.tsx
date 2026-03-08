import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experiments = [
  {
    slug: "conversational-ui-patterns",
    title: "Conversational UI Patterns",
    description: "Exploring how chat interfaces can guide complex decision-making without overwhelming users. Built a prototype using AI-assisted flow design.",
    tags: ["AI", "Prototyping", "UX"],
    date: "Feb 2026",
  },
  {
    slug: "vibe-coding-with-lovable",
    title: "Vibe Coding with Lovable",
    description: "Learning to build with AI-assisted tools — this portfolio itself is an experiment in what's possible when design thinking meets vibe coding.",
    tags: ["Vibe Coding", "Meta", "Learning"],
    date: "Mar 2026",
  },
  {
    slug: "generative-color-systems",
    title: "Generative Color Systems",
    description: "A small tool that generates accessible color palettes from a single seed color, inspired by Japanese seasonal color traditions.",
    tags: ["Color Theory", "Accessibility", "Japan"],
    date: "Jan 2026",
  },
  {
    slug: "design-journaling-bot",
    title: "Design Journaling Bot",
    description: "A daily reflection prompt system that helps designers build a habit of documenting their thinking and decisions.",
    tags: ["AI", "Reflection", "Craft"],
    date: "Dec 2025",
  },
];

const Experiments = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
            Experiments
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-4">
            A space for learning in public — AI explorations, creative code, 
            and design experiments that don't need to be polished.
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground mb-16">
            ✦ Learning in Public
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {experiments.map((exp, i) => (
            <Link key={exp.slug} to={`/experiments/${exp.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="border border-border rounded-sm p-6 hover:border-primary/30 transition-colors"
            >
              <time className="text-xs text-muted-foreground">{exp.date}</time>
              <h2 className="font-serif text-xl font-medium text-foreground mt-2 mb-3">
                {exp.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
