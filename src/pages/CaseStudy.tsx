import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const caseStudyData: Record<string, {
  title: string;
  context: string;
  role: string;
  process: string;
  decisions: string;
  outcomes: string;
  reflections: string;
}> = {
  "design-system-evolution": {
    title: "Design System Evolution",
    context: "Our product suite had grown to 12 teams shipping independently, leading to fragmented user experiences and duplicated effort. The design system needed to evolve from a component library into a living, governed ecosystem.",
    role: "Lead designer responsible for system architecture, governance model, and cross-team adoption strategy. Partnered closely with engineering leads and product directors.",
    process: "Started with an extensive audit of existing patterns across all products. Conducted stakeholder interviews to understand pain points. Ran collaborative workshops to align on principles before touching any components.",
    decisions: "Chose to build on existing foundations rather than starting from scratch — respecting the work teams had already invested. Prioritized tokens and primitives over prescriptive components to give teams flexibility.",
    outcomes: "Achieved 90% adoption across teams within 6 months. Reduced design-to-dev handoff time by 40%. Most importantly, users reported a more cohesive experience across products.",
    reflections: "The hardest part wasn't the design — it was the change management. Building relationships and trust with each team mattered more than having the perfect component API.",
  },
  "onboarding-reimagined": {
    title: "Onboarding Reimagined",
    context: "New users were taking an average of 14 days to reach their first moment of value. The existing onboarding was feature-focused rather than outcome-focused, leaving users overwhelmed.",
    role: "Senior product designer working with a PM and two engineers. Led research, ideation, and design execution.",
    process: "Mapped the existing journey end-to-end. Ran 20 user interviews focusing on the emotional experience of starting. Identified three distinct user archetypes with different needs and motivations.",
    decisions: "Designed a branching onboarding that adapted based on stated goals rather than a one-size-fits-all wizard. Kept it minimal — just enough structure to guide without constraining.",
    outcomes: "Time-to-value decreased by 60%. Activation rate improved by 35%. Qualitative feedback shifted from 'confusing' to 'it felt like the product understood me.'",
    reflections: "This project reinforced my belief that the best onboarding doesn't feel like onboarding at all. It feels like a conversation.",
  },
  "accessible-checkout": {
    title: "Accessible Checkout",
    context: "An accessibility audit revealed critical barriers in our checkout flow that excluded users with motor, visual, and cognitive disabilities. This wasn't just a compliance issue — it was a design failure.",
    role: "Design lead partnering with accessibility specialists and engineering. Advocated for the project at leadership level to secure resourcing.",
    process: "Conducted testing sessions with users who rely on assistive technologies. Worked closely with our accessibility specialist to understand WCAG requirements beyond the checklist — focusing on real usability.",
    decisions: "Redesigned the entire flow rather than patching individual issues. Simplified the information architecture, improved error recovery, and ensured every interaction was keyboard and screen-reader friendly.",
    outcomes: "Passed WCAG 2.1 AA audit. Conversion rate increased 12% across all users — proving that accessible design is better design for everyone.",
    reflections: "This project changed how I approach every design. Accessibility isn't a feature or a checklist — it's a lens through which all good design should be viewed.",
  },
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
    <section className="py-20">
      <div className="container max-w-3xl">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl sm:text-5xl font-light text-foreground mb-16"
        >
          {study.title}
        </motion.h1>

        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-4">
                {section.label}
              </h2>
              <p className="text-foreground leading-relaxed text-lg">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
