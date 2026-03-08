import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experiments = [
  {
    slug: "vibe-coding-with-lovable",
    title: "Vibe Coding with Lovable",
    description: "Learning to build with AI-assisted tools — this portfolio itself is an experiment in what's possible when design thinking meets vibe coding.",
    tags: ["Vibe Coding", "Meta", "Learning"],
    date: "Mar 2026",
  },
];

const Experiments = () => {
  return (
    <section className="py-24">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Learning in Public
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] mb-6">
            Experiments
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A space for AI explorations, creative code,
            and design experiments that don't need to be polished.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {experiments.map((exp, i) => (
            <Link key={exp.slug} to={`/experiments/${exp.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="border border-border p-8 hover:bg-accent/50 transition-colors group"
              >
                <span className="text-xs font-mono text-muted-foreground">{exp.date}</span>
                <h2 className="font-serif text-2xl font-semibold text-foreground mt-3 mb-4 group-hover:translate-x-1 transition-transform">
                  {exp.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 border border-border text-muted-foreground"
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
