import { motion } from "framer-motion";
import tessrahHeadshot from "@/assets/tessrah-headshot.jpg";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const values = [
  { title: "Empathy First", desc: "Understanding user needs and pain points drives every design decision I make.", icon: "♡" },
  { title: "Collaboration", desc: "Working closely with teams to create solutions that exceed expectations.", icon: "◎" },
  { title: "Innovation", desc: "Exploring creative solutions while maintaining usability and accessibility.", icon: "✦" },
  { title: "Impact Driven", desc: "Measuring success through user satisfaction and business outcomes.", icon: "◈" },
];

const professionalExperience = [
  {
    type: "work",
    title: "User Experience Designer",
    org: "BIMM",
    period: "Dec 2022 – Present · 3 yr",
    desc: "Leading UX design initiatives and creating user-centered digital experiences for enterprise clients.",
  },
  {
    type: "work",
    title: "UX/UI Designer",
    org: "Stacktics",
    period: "Oct 2021 – Dec 2022 · 1 yr 3 mo",
    desc: "Designed intuitive interfaces and conducted user research to optimize product experiences.",
  },
  {
    type: "work",
    title: "Graphic Designer",
    org: "10+ Years Experience",
    period: "Sep 2009 – Oct 2019 · 10 yr",
    desc: "Shaped stories into striking visuals through years of creative problem solving.",
  },
];

const education = [
  {
    type: "cert",
    title: "User Experience Designer",
    org: "Uxcel",
    period: "Issued Oct 2025 · Expires Oct 2027",
    desc: "Professional certification validating expertise in UX design principles and methodologies.",
  },
  {
    type: "edu",
    title: "Certificate in User Experience Design",
    org: "University of Toronto",
    period: "School of Continuing Education",
    desc: "Comprehensive program covering UX research, interaction design, and usability testing.",
  },
];
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const typeIcon = (type: string) => {
  if (type === "edu") return <GraduationCap size={18} className="text-primary" />;
  if (type === "cert") return <Award size={18} className="text-primary" />;
  return <Briefcase size={18} className="text-primary" />;
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
                With over 5 years of <strong>experience in UX design</strong>, I've helped startups and
                established companies create digital products that users love. My approach
                combines <strong>research, creativity, and strategic thinking</strong> to deliver designs
                that are both beautiful and functional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe great design is invisible. It guides users naturally, anticipates
                their needs, and creates delightful moments that keep them coming back.
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

          {/* Professional Experience */}
          <motion.div variants={item}>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-8">
              Professional Experience
            </h2>
            <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {professionalExperience.map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="min-w-[280px] flex-shrink-0 snap-start border border-border rounded-sm bg-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                    {typeIcon(exp.type)}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-primary mt-1">{exp.org}</p>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-10 italic">
              15+ years of design experience spanning graphic design and creating meaningful digital experiences that users love
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={item}>
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-8">
              Education
            </h2>
            <div className="relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-8">
                {education.map((exp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 w-[30px] h-[30px] rounded-full bg-card border-2 border-border flex items-center justify-center">
                      {typeIcon(exp.type)}
                    </div>
                    <div className="border border-border rounded-sm bg-card p-6 hover:shadow-md transition-shadow duration-300">
                      <h3 className="font-serif text-lg font-medium text-foreground">{exp.title}</h3>
                      <p className="text-sm font-medium text-primary mt-1">{exp.org}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
