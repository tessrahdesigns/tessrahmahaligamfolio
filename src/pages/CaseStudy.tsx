import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Users, Layers, Zap } from "lucide-react";
import { useRef } from "react";
import PasswordGate from "@/components/PasswordGate";
import caseOneaudi from "@/assets/case-oneaudi.jpg";
import caseDealerTheme from "@/assets/case-dealer-theme.jpg";

interface CaseStudyMeta {
  title: string;
  category: string;
  image: string;
  summary: string;
  duration: string;
  team: string;
  tools: string[];
  context: string;
  role: string;
  process: string[];
  decisions: string[];
  outcomes: { metric: string; detail: string }[];
  reflections: string;
  nextSlug?: string;
  nextTitle?: string;
}

const caseStudyData: Record<string, CaseStudyMeta> = {
  "oneaudi-digital-dealership": {
    title: "OneAudi Digital Dealership",
    category: "Automotive / Enterprise",
    image: caseOneaudi,
    summary: "A platform-led transformation that unified Audi's fragmented dealer ecosystem — improving page speed by 400% and enabling a seamless customer journey across thousands of sites globally.",
    duration: "12+ months",
    team: "Cross-functional (Design, Engineering, Product, Stakeholders)",
    tools: ["Figma", "Miro", "JIRA", "Analytics"],
    context: "Audi's dealer ecosystem was fragmented — thousands of dealership websites globally were running on outdated platforms with inconsistent branding, poor performance, and disconnected customer journeys. The business needed a unified platform that could scale across markets while giving dealers enough flexibility to feel ownership of their digital presence.",
    role: "UX Designer responsible for the dealer-facing experience, working within a cross-functional team of developers, product managers, and stakeholders across multiple markets. I led the design of the platform's component system and customer journey flows.",
    process: [
      "Conducted extensive stakeholder interviews across multiple dealer markets to understand pain points and regional nuances.",
      "Ran competitive analysis of automotive digital retail platforms to identify industry patterns and gaps.",
      "Created journey maps for both dealers (admin experience) and end customers (browsing/buying) to surface disconnects.",
      "Led iterative design sprints with rapid prototyping and user testing with actual dealership staff.",
    ],
    decisions: [
      "Adopted a MACH architecture approach (Microservices, API-first, Cloud-native, Headless) to ensure scalability and future-proofing.",
      "Designed a modular component system that maintained Audi's premium brand standards while allowing regional customization.",
      "Prioritized performance optimization from the start, treating page speed as a core UX metric rather than an afterthought.",
    ],
    outcomes: [
      { metric: "400%", detail: "Page speed improvement across dealership sites" },
      { metric: "1000+", detail: "Dealership sites unified under one platform" },
      { metric: "60%", detail: "Faster time-to-market for new dealer launches" },
      { metric: "Seamless", detail: "Customer journey across the global ecosystem" },
    ],
    reflections: "This project taught me the complexity of enterprise-scale design — where the user isn't just the end customer, but also the dealership staff, regional marketing teams, and global brand guardians. The biggest challenge was balancing global consistency with local flexibility. The solution was building a robust design system with clear guardrails rather than rigid templates.",
    nextSlug: "dealer-theme-activation",
    nextTitle: "Dealer Theme Activation Platform",
  },
  "dealer-theme-activation": {
    title: "Dealer Theme Activation Platform",
    category: "Automotive / Backend System",
    image: caseDealerTheme,
    summary: "A backend admin experience that enables admins and dealerships to manage dealer-specific themes for Audi loaner vehicles — featuring branded imagery and QR codes linking customers to dealership inventory pages.",
    duration: "6 months",
    team: "Product Owner, Backend Engineers, QA, UX Designer",
    tools: ["Figma", "Adobe Spectrum", "Miro", "JIRA"],
    context: "Audi loaner vehicles feature a Multimedia Interface (MMI) screen that can display dealer-specific branded themes. However, the process for managing and activating these themes was manual, fragmented, and error-prone. Dealerships and admins needed a streamlined backend system to manage branded imagery and QR codes that link customers to dealership inventory pages.",
    role: "UX/UI Designer responsible for the full admin experience. Worked closely with backend engineers and product owners to translate complex business logic into intuitive user flows. Designed within the Adobe Spectrum design system to maintain consistency with Audi's internal tooling ecosystem.",
    process: [
      "Mapped the existing manual workflow to identify pain points, bottlenecks, and error-prone steps.",
      "Conducted interviews with dealership admins and regional managers to understand mental models and daily workflows.",
      "Created detailed user flows for theme creation, preview, approval, and activation stages.",
      "Designed high-fidelity prototypes using Adobe Spectrum components and validated through moderated usability testing.",
    ],
    decisions: [
      "Chose Adobe Spectrum as the design framework to align with Audi's internal admin tool ecosystem for consistency.",
      "Designed a multi-step theme builder with live preview so admins could see exactly how themes appear on the MMI screen.",
      "Built in a QR code generator that automatically links to the dealership's inventory page.",
      "Implemented role-based access so regional admins and individual dealerships had appropriate levels of control.",
    ],
    outcomes: [
      { metric: "Days → Minutes", detail: "Theme activation process streamlined dramatically" },
      { metric: "Self-serve", detail: "Dealerships manage themes without technical support" },
      { metric: "↓ Errors", detail: "Built-in validation and preview reduced deployment issues" },
      { metric: "↑ Adoption", detail: "Increased branded loaner vehicle theme usage network-wide" },
    ],
    reflections: "This project reinforced the importance of designing for the \"unsexy\" backend systems. The end users — dealership admins — aren't typically the focus of design attention, but their experience directly impacts the customer-facing brand. Designing within an existing design system (Adobe Spectrum) was both a constraint and a superpower — it freed me to focus on information architecture and user flows rather than visual design decisions.",
    nextSlug: "oneaudi-digital-dealership",
    nextTitle: "OneAudi Digital Dealership",
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudyData[slug] : null;
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  if (!study) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Case study not found.</p>
        <Link to="/work" className="text-primary mt-4 inline-block">← Back to Work</Link>
      </div>
    );
  }

  return (
    <article>
      {/* Full-bleed hero */}
      <div ref={heroRef} className="relative overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="h-[50vh] sm:h-[60vh] relative"
        >
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>

        {/* Overlaid title */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container max-w-5xl pb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft size={14} /> Back to Work
              </Link>
              <span className="block text-xs font-medium text-primary mb-3 tracking-wider uppercase">
                {study.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                {study.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl py-16 sm:py-24">
        {/* Summary + Meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1.5fr_1fr] gap-12 mb-20 pb-16 border-b border-border"
        >
          <p className="text-lg sm:text-xl text-foreground leading-relaxed">
            {study.summary}
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-0.5">Duration</span>
                <span className="text-sm text-foreground">{study.duration}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={16} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-0.5">Team</span>
                <span className="text-sm text-foreground">{study.team}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Layers size={16} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-0.5">Tools</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {study.tools.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Context */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">
            The Challenge
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
            {study.context}
          </p>
        </motion.div>

        {/* Role */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 bg-card border border-border rounded-sm p-8 sm:p-12"
        >
          <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-4">My Role</h2>
          <p className="text-foreground leading-relaxed text-lg">{study.role}</p>
        </motion.div>

        {/* Process */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-10">
            Process
          </h2>
          <div className="space-y-0">
            {study.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 py-6 border-b border-border last:border-0"
              >
                <span className="font-serif text-3xl font-light text-primary/40 flex-shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground/80 leading-relaxed pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Decisions */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-10">
            Key Decisions
          </h2>
          <div className="grid sm:grid-cols-1 gap-4">
            {study.decisions.map((decision, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex items-start gap-4 p-6 border border-border rounded-sm bg-card hover:border-primary/30 transition-colors"
              >
                <Zap size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/80 leading-relaxed">{decision}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-10">
            Results
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {study.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 border border-border rounded-sm bg-card text-center hover:shadow-md transition-shadow"
              >
                <span className="block font-serif text-3xl sm:text-4xl font-light text-primary mb-2">
                  {outcome.metric}
                </span>
                <span className="text-sm text-muted-foreground">{outcome.detail}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reflections */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20 relative"
        >
          <div className="border-l-2 border-primary/30 pl-8 sm:pl-12 py-4">
            <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-4">Reflections</h2>
            <p className="text-foreground/80 text-lg leading-relaxed italic">{study.reflections}</p>
          </div>
        </motion.div>

        {/* Next project */}
        {study.nextSlug && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-border"
          >
            <Link
              to={`/work/${study.nextSlug}`}
              className="group flex items-center justify-between p-8 rounded-sm border border-border hover:border-primary/40 transition-all hover:shadow-md"
            >
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Next Project</span>
                <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors mt-1">
                  {study.nextTitle}
                </h3>
              </div>
              <ArrowRight size={24} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </Link>
          </motion.div>
        )}
      </div>
    </article>
  );
};

export default CaseStudy;
