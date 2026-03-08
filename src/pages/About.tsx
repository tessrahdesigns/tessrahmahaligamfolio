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
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-48 sm:w-56 flex-shrink-0 rounded-sm overflow-hidden">
              <img
                src={tessrahHeadshot}
                alt="Tessrah headshot"
                className="w-full h-auto object-cover"
              />
            </div>
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

          {/* One Vision, Many Names */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              One Vision, Many Names
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Creativity is rarely a straight line; it's an evolution. You may know me as{" "}
              <strong>Tessrah Baptiste</strong>, <strong>Tessrah Mahalingam</strong>, or 
              simply the creative force behind <strong>Tessrah Designs</strong>. While the 
              names have evolved, the mission has remained the same: to transform complex 
              ideas into intentional, beautiful design.
            </p>
          </div>

          {/* The Identity Breakdown */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              The Identity Breakdown
            </h2>
            <div className="grid gap-6">
              <div className="p-5 border border-border rounded-sm">
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  Tessrah Designs <span className="text-sm text-muted-foreground font-sans">— The Business</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  This is my professional vessel. It represents my creative output, my aesthetic, 
                  and my services. It's where my skills—whether in graphic design, custom creations, 
                  or digital strategy—take center stage.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Focus: Visual storytelling, branding, and specialized design solutions. · Vibe: Professional, innovative, and client-centered.
                </p>
              </div>
              <div className="p-5 border border-border rounded-sm">
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  Tessrah Baptiste <span className="text-sm text-muted-foreground font-sans">— The Foundation</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  This name is associated with my early career milestones, education, and initial 
                  portfolio work. It's the "Legacy" name that carries my foundational reputation.
                </p>
              </div>
              <div className="p-5 border border-border rounded-sm">
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  Tessrah Mahalingam <span className="text-sm text-muted-foreground font-sans">— The Evolution</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  This name represents my current chapter. It bridges my personal life with my 
                  professional growth, appearing on updated certifications, networking profiles, 
                  and official business documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-6">
              Why It Matters
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              I believe that great design isn't just about how it looks, but how it functions 
              in the real world. Whether I'm working under my personal name or my studio banner, 
              I am committed to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary font-medium">Authenticity</span> — Staying true to the story behind the project.
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-medium">Adaptability</span> — Evolving my style to meet the modern needs of my clients.
              </li>
            </ul>
          </div>

          {/* Beyond Design */}
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
