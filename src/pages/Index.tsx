import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center grain overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 space-y-8"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Senior Product Designer
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold leading-[0.95] tracking-tight text-foreground">
                I design
                <br />
                products that
                <br />
                feel{" "}
                <span className="italic font-normal">human.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:pb-4"
            >
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm mb-8">
                Crafting digital experiences with empathy,
                intention, and a deep love for the craft.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/work"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
                >
                  View Work
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 border border-foreground text-foreground text-sm font-medium tracking-wide hover:bg-foreground hover:text-background transition-colors"
                >
                  About Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative floral element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden lg:block"
        >
          <img
            src={heroFloral}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Quick navigation */}
      <section className="py-32 border-t border-border">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-16"
          >
            Explore
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { to: "/work", title: "Work", desc: "Case studies & product design", num: "01" },
              { to: "/experiments", title: "Experiments", desc: "AI, code & creative play", num: "02" },
              { to: "/writing", title: "Writing", desc: "Essays & reflections", num: "03" },
              { to: "/about", title: "About", desc: "Values, advocacy & life", num: "04" },
            ].map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="group block p-8 bg-background hover:bg-accent/50 transition-colors h-full"
                >
                  <span className="text-xs text-muted-foreground font-mono">{item.num}</span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mt-3 mb-2 group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
