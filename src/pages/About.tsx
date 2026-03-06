import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";
import tessrahHeadshot from "@/assets/tessrah-headshot.jpg";

const About = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Intro */}
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-6">
              About Me <span className="inline-block ml-2">🇨🇦</span>
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

          {/* Values */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Values
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Empathy First", desc: "Understanding people before solving problems." },
                { title: "Inclusive by Default", desc: "Designing for the margins makes better products for everyone." },
                { title: "Craft Matters", desc: "Details aren't details — they make the design." },
                { title: "Learning in Public", desc: "Sharing the messy, unfinished work of growing." },
              ].map((v) => (
                <div key={v.title} className="p-5 border border-border rounded-sm">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advocacy */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Advocacy & Community
            </h2>
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

          {/* Life outside work */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Beyond Design
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              When I'm not designing, you'll find me exploring botanical illustration, 
              reading Japanese literature, tending to my growing collection of houseplants, 
              or wandering through galleries and bookshops.
            </p>
            <div className="rounded-sm overflow-hidden opacity-70">
              <img
                src={heroFloral}
                alt="Watercolor botanical illustration with cherry blossoms and forget-me-nots"
                className="w-full h-48 object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
