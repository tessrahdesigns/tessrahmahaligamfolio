import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Work = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-4">
            Selected Work
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-16">
            Case studies from my journey designing products that balance 
            business goals with genuine human needs.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Link
                to={`/work/${study.slug}`}
                className="group block border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className={`${study.color} h-48 sm:h-56 flex items-end p-8`}>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{study.subtitle}</p>
                  </div>
                </div>
                <div className="px-8 py-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
