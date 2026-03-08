import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    slug: "design-system-evolution",
    title: "Design System Evolution",
    subtitle: "Scaling consistency across 12 product teams",
    tags: ["Systems Design", "Leadership", "Enterprise"],
    color: "bg-primary/10",
  },
  {
    slug: "onboarding-reimagined",
    title: "Onboarding Reimagined",
    subtitle: "Reducing time-to-value by 60% through empathetic flows",
    tags: ["Product Strategy", "Research", "B2B SaaS"],
    color: "bg-secondary/20",
  },
  {
    slug: "accessible-checkout",
    title: "Accessible Checkout",
    subtitle: "Making commerce work for everyone",
    tags: ["Accessibility", "E-commerce", "Inclusive Design"],
    color: "bg-accent",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Work = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Selected Work
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Case studies from my journey designing products that balance
            business goals with genuine human needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {caseStudies.map((study, i) => (
            <motion.div key={study.slug} variants={item}>
              <Link
                to={`/work/${study.slug}`}
                className="group grid md:grid-cols-[1fr_1.2fr] border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Text side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.subtitle}
                  </p>
                  <motion.div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Color block side */}
                <div className={`${study.color} min-h-[200px] md:min-h-[280px] flex items-center justify-center`}>
                  <motion.span
                    className="font-serif text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    ✦
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
