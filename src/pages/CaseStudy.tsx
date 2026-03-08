import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import caseOneaudi from "@/assets/case-oneaudi.jpg";
import caseDealerTheme from "@/assets/case-dealer-theme.jpg";

const caseStudyData: Record<string, {
  title: string;
  category: string;
  image: string;
  context: string;
  role: string;
  process: string;
  decisions: string;
  outcomes: string;
  reflections: string;
}> = {
  "oneaudi-digital-dealership": {
    title: "OneAudi Digital Dealership",
    category: "Automotive / Enterprise",
    image: caseOneaudi,
    context: "Audi's dealer ecosystem was fragmented — thousands of dealership websites globally were running on outdated platforms with inconsistent branding, poor performance, and disconnected customer journeys. The business needed a unified platform that could scale across markets while giving dealers enough flexibility to feel ownership of their digital presence.",
    role: "UX Designer responsible for the dealer-facing experience, working within a cross-functional team of developers, product managers, and stakeholders across multiple markets. I led the design of the platform's component system and customer journey flows.",
    process: "Started with extensive stakeholder interviews across multiple dealer markets to understand pain points. Conducted competitive analysis of automotive digital retail platforms. Created journey maps for both dealers (admin experience) and end customers (browsing/buying). Ran iterative design sprints with rapid prototyping and user testing with actual dealership staff.",
    decisions: "Adopted a MACH architecture approach (Microservices, API-first, Cloud-native, Headless) to ensure scalability and future-proofing. Designed a modular component system that maintained Audi's premium brand standards while allowing regional customization. Prioritized performance optimization from the start, treating page speed as a core UX metric rather than an afterthought.",
    outcomes: "Improved page speed by 400% across dealership sites. Enabled a seamless customer journey across thousands of sites globally. Unified the fragmented dealer ecosystem under a consistent, scalable design system. Reduced time-to-market for new dealer site launches significantly.",
    reflections: "This project taught me the complexity of enterprise-scale design — where the user isn't just the end customer, but also the dealership staff, regional marketing teams, and global brand guardians. The biggest challenge was balancing global consistency with local flexibility. The solution was building a robust design system with clear guardrails rather than rigid templates.",
  },
  "dealer-theme-activation": {
    title: "Dealer Theme Activation Platform",
    category: "Automotive / Backend System",
    image: caseDealerTheme,
    context: "Audi loaner vehicles feature a Multimedia Interface (MMI) screen that can display dealer-specific branded themes. However, the process for managing and activating these themes was manual, fragmented, and error-prone. Dealerships and admins needed a streamlined backend system to manage branded imagery and QR codes that link customers to dealership inventory pages.",
    role: "UX/UI Designer responsible for the full admin experience. Worked closely with backend engineers and product owners to translate complex business logic into intuitive user flows. Designed within the Adobe Spectrum design system to maintain consistency with Audi's internal tooling ecosystem.",
    process: "Mapped the existing manual workflow to understand pain points and bottlenecks. Conducted interviews with dealership admins and regional managers to understand their mental models. Created detailed user flows for theme creation, preview, approval, and activation. Designed high-fidelity prototypes in Figma using Adobe Spectrum components, and validated through moderated usability testing sessions.",
    decisions: "Chose Adobe Spectrum as the design framework to align with Audi's internal admin tool ecosystem. Designed a multi-step theme builder with live preview capability so admins could see exactly how themes would appear on the MMI screen. Built in a QR code generator that automatically links to the dealership's inventory page. Implemented role-based access so regional admins and individual dealerships had appropriate levels of control.",
    outcomes: "Streamlined the theme activation process from days to minutes. Enabled dealerships to independently manage their branded vehicle themes without requiring technical support. Reduced errors in theme deployment through built-in validation and preview features. Increased adoption of branded loaner vehicle themes across the dealer network.",
    reflections: "This project reinforced the importance of designing for the \"unsexy\" backend systems. The end users — dealership admins — aren't typically the focus of design attention, but their experience directly impacts the customer-facing brand. Designing within an existing design system (Adobe Spectrum) was both a constraint and a superpower — it freed me to focus on information architecture and user flows rather than visual design decisions.",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? caseStudyData[slug] : null;

  if (!study) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Case study not found.</p>
        <Link to="/work" className="text-primary mt-4 inline-block">← Back to Work</Link>
      </div>
    );
  }

  const sections = [
    { label: "Context", content: study.context },
    { label: "My Role", content: study.role },
    { label: "Process", content: study.process },
    { label: "Key Decisions", content: study.decisions },
    { label: "Outcomes", content: study.outcomes },
    { label: "Reflections", content: study.reflections },
  ];

  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium text-primary mb-3 block">{study.category}</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-8">
            {study.title}
          </h1>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-sm overflow-hidden mb-20"
        >
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {sections.map((section) => (
            <motion.div key={section.label} variants={item}>
              <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-4">
                {section.label}
              </h2>
              <p className="text-foreground leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
