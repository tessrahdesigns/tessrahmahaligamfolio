import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import caseOneaudi from "@/assets/case-oneaudi.jpg";
import caseDealerTheme from "@/assets/case-dealer-theme.jpg";

const caseStudies = [
  {
    slug: "oneaudi-digital-dealership",
    title: "OneAudi Digital Dealership",
    subtitle: "A platform-led transformation that unified Audi's fragmented dealer ecosystem — improving page speed by 400% and enabling a seamless customer journey across thousands of sites globally.",
    tags: ["Design System", "Scalability", "Enterprise", "MACH Architecture"],
    category: "Automotive / Enterprise",
    image: caseOneaudi,
  },
  {
    slug: "dealer-theme-activation",
    title: "Dealer Theme Activation Platform",
    subtitle: "A backend admin experience that enables admins and dealerships to manage dealer-specific themes for Audi loaner vehicles — featuring branded imagery and QR codes linking customers to dealership inventory pages.",
    tags: ["Backend Admin", "B2B", "Adobe Spectrum", "User Flows"],
    category: "Automotive / Backend System",
    image: caseDealerTheme,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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
            A showcase of recent work that demonstrates my approach to solving complex design challenges.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.slug} variants={item}>
              <Link
                to={`/work/${study.slug}`}
                className="group grid md:grid-cols-[1fr_1.2fr] border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                {/* Text side */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary">{study.category}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {study.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <span>View Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
                </div>

                {/* Image side */}
                <div className="min-h-[220px] md:min-h-[320px] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
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
