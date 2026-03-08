import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import tessrahHeadshot from "@/assets/tessrah-headshot.jpg";
import heroFloral from "@/assets/hero-floral.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const navCards = [
  { to: "/work", title: "Work", desc: "Case studies & product design", emoji: "✦" },
  { to: "/experiments", title: "Experiments", desc: "AI, code & creative play", emoji: "◈" },
  { to: "/writing", title: "Writing", desc: "Essays & reflections", emoji: "✎" },
  { to: "/about", title: "About", desc: "Values, advocacy & life", emoji: "♡" },
];

const HoverCard = ({ to, title, desc, emoji, index }: { to: string; title: string; desc: string; emoji: string; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      variants={item}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 800 }}
    >
      <Link
        to={to}
        className="group block p-8 rounded-sm border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
      >
        <span className="text-2xl mb-4 block opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          {emoji}
        </span>
        <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <motion.div
          className="flex items-center gap-1 mt-4 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Subtle background floral */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src={heroFloral} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        <div className="container relative grid lg:grid-cols-[auto_1fr] gap-16 items-center py-24">
          {/* Headshot */}
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

          {/* Text */}
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

      {/* Quick navigation */}
      <section className="py-28 border-t border-border">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground mb-10"
          >
            Featured work
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {navCards.map((card, i) => (
              <HoverCard key={card.to} {...card} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
