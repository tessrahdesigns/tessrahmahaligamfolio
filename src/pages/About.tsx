import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";
import tessrahHeadshot from "@/assets/tessrah-headshot.jpg";

const values = [
  { title: "Empathy First", desc: "Understanding people before solving problems.", icon: "♡" },
  { title: "Inclusive by Default", desc: "Designing for the margins makes better products for everyone.", icon: "◎" },
  { title: "Craft Matters", desc: "Details aren't details — they make the design.", icon: "✦" },
  { title: "Learning in Public", desc: "Sharing the messy, unfinished work of growing.", icon: "◈" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-24"
        >
          {/* Hero intro */}
          <motion.div variants={item} className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-border mx-auto md:mx-0"
            >
              <img
                src={tessrahHeadshot}
                alt="Tessrah headshot"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                About Me <motion.span
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >🇨🇦</motion.span>
              </h1>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I'm a senior product designer based in Canada who believes that the best
                digital products are the ones that feel genuinely human. My work sits at
                the intersection of empathy, systems thinking, and craft.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I care deeply about accessibility, inclusive design, and creating space
                for people who are often overlooked by technology. Design, to me, is an
                act of care.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div variants={item}>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-8">
              Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="p-6 border border-border rounded-sm bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-xl mb-3 block opacity-50">{v.icon}</span>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advocacy */}
          <motion.div variants={item}>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Advocacy & Community
            </h2>
            <div className="bg-card border border-border rounded-sm p-8">
              <p className="text-foreground leading-relaxed mb-3">
                I volunteer with organizations focused on digital accessibility and
                mentoring emerging designers from underrepresented backgrounds. I believe
                in using design skills to serve communities, not just companies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've spoken at local meetups about inclusive design practices and
                contributed to open-source accessibility tooling.
              </p>
            </div>
          </motion.div>

          {/* Life outside work */}
          <motion.div variants={item}>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Beyond Design
            </h2>
            <p className="text-foreground leading-relaxed mb-8">
              When I'm not designing, you'll find me exploring botanical illustration,
              reading Japanese literature, tending to my growing collection of houseplants,
              or wandering through galleries and bookshops.
            </p>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-sm overflow-hidden"
            >
              <img
                src={heroFloral}
                alt="Watercolor botanical illustration with cherry blossoms and forget-me-nots"
                className="w-full h-56 object-cover object-center opacity-70 hover:opacity-90 transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
