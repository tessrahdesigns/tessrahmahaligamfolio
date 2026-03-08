import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="container grid lg:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-[1.15] tracking-tight text-foreground">
              I design products that feel{" "}
              <span className="italic text-primary">human</span>,{" "}
              thoughtful, and clear.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Senior product designer crafting digital experiences with empathy, 
              intention, and a deep love for the craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                View Work
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-accent transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <img
              src={heroFloral}
              alt="Watercolor cherry blossoms and forget-me-nots"
              className="w-full h-auto rounded-sm opacity-80"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="py-24 border-t border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { to: "/work", title: "Work", desc: "Case studies & product design" },
              { to: "/experiments", title: "Experiments", desc: "AI, code & creative play" },
              { to: "/writing", title: "Writing", desc: "Essays & reflections" },
              { to: "/about", title: "About", desc: "Values, advocacy & life" },
            ].map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="group block p-6 border border-border rounded-sm hover:border-primary/40 hover:bg-accent/50 transition-all"
                >
                  <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
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
