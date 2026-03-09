import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import tessrahHeadshot from "@/assets/tessrah-headshot.jpg";
import heroFloral from "@/assets/hero-floral.jpg";
import caseOneaudi from "@/assets/case-oneaudi.jpg";
import caseDealerTheme from "@/assets/case-dealer-theme.jpg";
import ytMarkNguyen from "@/assets/yt-mark-nguyen.jpg";
import diversityImg from "@/assets/blog-diversity-of-thought.jpg";
import nourishImage from "@/assets/nourish-pcos.avif";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const featuredWork = [
  {
    slug: "oneaudi-digital-dealership",
    title: "OneAudi Digital Dealership",
    subtitle: "Unified Audi's dealer ecosystem — 400% faster page speed, 25% more vehicle page visits.",
    tags: ["Design System", "Scalability", "Enterprise"],
    category: "Automotive / Enterprise",
    image: caseOneaudi,
  },
  {
    slug: "dealer-theme-activation",
    title: "Dealer Theme Activation",
    subtitle: "Backend admin enabling 19 dealers to manage themes on 1500+ vehicles — shipped in 4 weeks.",
    tags: ["Backend Admin", "B2B", "User Flows"],
    category: "Automotive / Backend",
    image: caseDealerTheme,
  },
];

const featuredPosts = [
  {
    slug: "casual-chat-mark-nguyen",
    title: "Casual Chat w/ Mark Nguyen",
    excerpt: "On finding creative flow and why the best ideas come from getting everyone in the room.",
    date: "March 2021",
    category: "Craft",
    image: ytMarkNguyen,
  },
  {
    slug: "diversity-of-thought",
    title: "What is diversity of thought anyways?",
    excerpt: "Once in 2017, my manager said 'we need more diversity in this workplace'. It's still on my mind.",
    date: "February 2021",
    category: "Diversity",
    image: diversityImg,
  },
];

const skills = ["Communication", "Problem-solving", "Collaboration", "Time Management", "Organization", "Empathy"];

const SectionHeader = ({ label, to, linkText = "View all" }: { label: string; to: string; linkText?: string }) => (
  <div className="flex items-end justify-between mb-10">
    <h2 className="font-serif text-sm uppercase tracking-widest text-primary">{label}</h2>
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
    >
      {linkText} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </div>
);

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src={heroFloral} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        <div className="container relative grid lg:grid-cols-[auto_1fr] gap-16 items-center py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-72 h-72 rounded-full overflow-hidden ring-4 ring-border"
            >
              <img
                src={tessrahHeadshot}
                alt="Tessrah — Senior Product Designer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8 max-w-2xl"
          >
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-light leading-[1.15] tracking-tight text-foreground"
            >
              I design products that feel{" "}
              <motion.span
                className="italic text-primary inline-block"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                human
              </motion.span>
              , thoughtful, and clear.
            </motion.h1>
            <motion.p variants={item} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Senior product designer crafting digital experiences with empathy,
              intention, and a deep love for the craft.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link to="/work">
                <motion.span
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:shadow-lg transition-shadow"
                >
                  View Work <ArrowRight size={14} />
                </motion.span>
              </Link>
              <Link to="/about">
                <motion.span
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center px-7 py-3.5 border border-border text-foreground text-sm font-medium rounded-sm hover:border-primary/40 transition-colors"
                >
                  About Me
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-5xl">
          <SectionHeader label="Selected Work" to="/work" />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {featuredWork.map((study) => (
              <motion.div key={study.slug} variants={item}>
                <Link
                  to={`/work/${study.slug}`}
                  className="group grid md:grid-cols-[1fr_1.2fr] border border-border rounded-sm overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-medium text-primary mb-3">{study.category}</span>
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Case Study <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                  <div className="min-h-[200px] md:min-h-[280px] overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experiment Highlight */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-5xl">
          <SectionHeader label="Experiments" to="/experiments" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/experiments/nourish-pcos-coach" className="group block">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="grid md:grid-cols-2 border border-border rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card"
              >
                <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img src={nourishImage} alt="Nourish — PCOS Coach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-muted-foreground">Mar 2026</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                      ✦ Learning in Public
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    Nourish — PCOS Coach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    An AI-powered nutrition coach for people with PCOS — recipe generation, meal analysis, and cycle-phase awareness, built with vibe coding.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["AI", "Health", "Vibe Coding"].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Experiment <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Notebook Highlights */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-5xl">
          <SectionHeader label="From the Notebook" to="/notebook" />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {featuredPosts.map((post) => (
              <motion.div key={post.slug} variants={item}>
                <Link to={`/notebook/${post.slug}`} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-full border border-border rounded-sm overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-card"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-primary">{post.category}</span>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Index;
