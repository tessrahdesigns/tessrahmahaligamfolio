import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "design-system-evolution",
    title: "Design System Evolution",
    subtitle: "Scaling consistency across 12 product teams",
    tags: ["Systems Design", "Leadership", "Enterprise"],
    year: "2025",
  },
  {
    slug: "onboarding-reimagined",
    title: "Onboarding Reimagined",
    subtitle: "Reducing time-to-value by 60% through empathetic flows",
    tags: ["Product Strategy", "Research", "B2B SaaS"],
    year: "2024",
  },
  {
    slug: "accessible-checkout",
    title: "Accessible Checkout",
    subtitle: "Making commerce work for everyone",
    tags: ["Accessibility", "E-commerce", "Inclusive Design"],
    year: "2024",
  },
];

const Work = () => {
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
            Selected Work
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95]">
            Case Studies
          </h1>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/work/${study.slug}`}
                className="group block py-12 lg:py-16"
              >
                <div className="grid lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-xs font-mono text-muted-foreground">{study.year}</span>
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-lg">{study.subtitle}</p>
                  </div>
                  <div className="lg:col-span-4 lg:text-right">
                    {/* Image placeholder */}
                    <div className="aspect-[16/10] bg-accent overflow-hidden">
                      <div className="w-full h-full bg-muted/30 group-hover:scale-105 transition-transform duration-700 ease-out grain" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 lg:ml-[calc(100%/12+1.5rem)]">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 border border-border text-muted-foreground"
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
