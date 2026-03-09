import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import nourishImage from "@/assets/nourish-pcos.avif";

const experiments = [
  {
    slug: "nourish-pcos-coach",
    title: "Nourish — PCOS Coach",
    description: "An AI-powered nutrition coach for people with PCOS. Features recipe generation, meal analysis, cravings coaching, and cycle-phase awareness — all built with vibe coding.",
    tags: ["AI", "Health", "Vibe Coding"],
    date: "Mar 2026",
    liveUrl: "https://nourish-my-pcos-coach.lovable.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const Experiments = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
              Experiments
            </h1>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-2xl"
            >
              ✦
            </motion.span>
          </div>
          <p className="text-muted-foreground text-lg max-w-xl mb-4 leading-relaxed">
            A space for learning in public — AI explorations, creative code,
            and design experiments that don't need to be polished.
          </p>
          <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground">
            ✦ Learning in Public
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 gap-6"
        >
          {experiments.map((exp) => (
            <motion.div key={exp.slug} variants={item}>
              <Link to={`/experiments/${exp.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="h-full border border-border rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-card"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={nourishImage} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-xs text-muted-foreground">{exp.date}</time>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <h2 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiments;
