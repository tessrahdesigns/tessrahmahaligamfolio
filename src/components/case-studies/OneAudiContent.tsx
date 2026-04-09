import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const OneAudiContent = () => {
  const impactMetrics = [
    { metric: "400%", detail: "Page Speed Improvement — Drastically reduced bounce rates and improved SEO across the entire dealer network." },
    { metric: "1,000+", detail: "Sites Unified — Migrated a massive legacy network into a single, governed AEM instance." },
    { metric: "60%", detail: "Faster Time-to-Market — Standardized templates allowed for nearly instant deployment of new dealership sites." },
    { metric: "Seamless", detail: "Journey — Established a "Global Ecosystem" feel where a customer in Nashville and a customer in Rockville experience the same premium brand standards." },
  ];

  const uxCompetencies = [
    "Problem Definition: Identifying the financial and brand cost of the "Dealer.com" legacy model.",
    "Information Architecture (IA): Auditing and restructuring complex navigation paths into a scalable global baseline.",
    "Cross-Functional Workshop Facilitation: Leading 2-day intensive sessions with Product Managers to align business, legal, and design goals.",
    "Interaction Auditing: Mapping and annotating existing third-party user flows through forensic screenshot analysis.",
    "Competitive & Market Research: Comparing the Ireland vs. USA markets to account for geographical and cultural variances.",
    "Wireframing & Prototyping: Creating modular, state-dependent layouts for third-party vendor integrations.",
    "Developer Handoff & Documentation: Building a "Source of Truth" in Figma for high-fidelity implementation.",
    "Stakeholder Management: Balancing the needs of Audi Corporate with the autonomy of 1,000+ individual dealers.",
  ];

  const challenges = [
    { label: "Inconsistency", detail: "Dealerships created their own navigation structures and content hierarchies, diluting the Audi premium brand experience." },
    { label: "High Overhead", detail: "The business incurred massive costs hosting these sites through third-party providers." },
    { label: "Technical Complexity", detail: "A web of diverse vendor integrations (trade-in tools, service schedulers, finance CTAs) made a "one-size-fits-all" solution impossible." },
  ];

  return (
    <>
      {/* Overview */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-3xl">
          As a UX Designer, I led the strategic redesign and standardization of the Information Architecture (IA) for Audi North America. The mission was to migrate hundreds of decentralized dealership websites from a high-cost legacy platform (Dealer.com) into a unified, brand-governed ecosystem within Adobe Experience Manager (AEM).
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Role</span>
            <span className="text-sm text-foreground">UX Designer</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Duration</span>
            <span className="text-sm text-foreground">12 Months</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">Scope</span>
            <span className="text-sm text-foreground">1,000+ Dealerships (North America)</span>
          </div>
        </div>
        <p className="mt-6 text-foreground/80 leading-relaxed">
          <strong className="text-foreground">Primary Objective:</strong> Consolidate a fragmented digital ecosystem into a single, high-performance platform (Adobe AEM) to reduce overhead and unify the brand experience.
        </p>
      </motion.div>

      {/* Impact */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-10">The Impact (By the Numbers)</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {impactMetrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-8 border border-border rounded-sm bg-card hover:shadow-md transition-shadow"
            >
              <span className="block font-serif text-3xl sm:text-4xl font-light text-primary mb-2">{item.metric}</span>
              <span className="text-sm text-muted-foreground">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* UX Process & Core Competencies */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">UX Process & Core Competencies</h2>
        <p className="text-foreground/80 mb-8">To achieve this scale, I utilized a comprehensive suite of UX methodologies:</p>
        <div className="space-y-0">
          {uxCompetencies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex gap-6 py-5 border-b border-border last:border-0"
            >
              <span className="font-serif text-2xl font-light text-primary/40 flex-shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground/80 leading-relaxed pt-0.5">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The Challenge */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">The Challenge: The "Wild West" of Digital Retail</h2>
        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
          Before this initiative, individual Audi dealerships in the US operated with significant autonomy, resulting in a fragmented digital presence.
        </p>
        <div className="grid sm:grid-cols-1 gap-4">
          {challenges.map((c, i) => (
            <div key={i} className="flex items-start gap-4 p-6 border border-border rounded-sm bg-card">
              <span className="text-primary font-semibold text-sm flex-shrink-0">{c.label}</span>
              <p className="text-foreground/80 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 1. Discovery & Research */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">1. Discovery & Research</h2>
        <h3 className="font-serif text-lg text-foreground mb-4">Market Variance & Legacy Audit</h3>
        <p className="text-foreground/80 leading-relaxed mb-8">
          I began by auditing the existing IA inherited from previous European-market initiatives (Audi Ireland). My analysis quickly revealed that the North American market required a fundamentally different approach due to its geographical scale, diverse consumer needs, and high level of dealer ownership.
        </p>
        <h3 className="font-serif text-lg text-foreground mb-4">The MVP Dealer Audit</h3>
        <p className="text-foreground/80 leading-relaxed mb-4">
          To establish a baseline, I conducted a deep-dive audit into three "Minimum Viable Product" (MVP) dealerships: Audi Rockville, Audi Nashville, and Audi Lakeland.
        </p>
        <ul className="space-y-3 text-foreground/80 leading-relaxed pl-4">
          <li className="flex gap-3"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Methodology:</strong> I systematically overlaid the IA structures of these three dealers to identify commonalities, outliers, and essential user flows.</span></li>
          <li className="flex gap-3"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Gap Identification:</strong> I mapped where native Audi pages (like "Sell My Car") conflicted or overlapped with third-party tools already in use by the dealers.</span></li>
        </ul>
      </motion.div>

      {/* 2. Definition & Strategy */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">2. Definition & Strategy</h2>
        <h3 className="font-serif text-lg text-foreground mb-4">Cross-Functional Alignment</h3>
        <p className="text-foreground/80 leading-relaxed mb-4">
          I facilitated a two-day intensive workshop with the Product Manager to categorize the massive ecosystem of vendor integrations. We established five core pillars for the MVP:
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {["Digital Retailing", "Service Scheduling", "Trade-In Tools", "Finance CTAs", "VDP (Vehicle Display Page) Flows"].map((pillar) => (
            <span key={pillar} className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">{pillar}</span>
          ))}
        </div>
        <h3 className="font-serif text-lg text-foreground mb-4">The Strategic Pivot</h3>
        <p className="text-foreground/80 leading-relaxed">
          While we acknowledged that many third-party tools "broke" Audi's visual branding, we prioritized functional parity and navigational consistency. The goal was a "Golden Path" for the consumer—ensuring that New Vehicles, Pre-owned, Finance, and Service were always where a customer expected them to be, regardless of the dealership location.
        </p>
      </motion.div>

      {/* 3. Design & Architecture */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">3. Design & Architecture</h2>
        <h3 className="font-serif text-lg text-foreground mb-4">Integrated IA Mapping</h3>
        <p className="text-foreground/80 leading-relaxed mb-8">
          I developed a Recommended Global IA that served as the North Star for all US dealerships. To make this actionable for internal stakeholders, I created a color-coded overlay system that visualized exactly where third-party integrations (e.g., Active Engage, 700 Credit, Dealer Track) would sit within the new AEM-hosted structure.
        </p>
        <h3 className="font-serif text-lg text-foreground mb-4">Interaction Audits & Annotations</h3>
        <p className="text-foreground/80 leading-relaxed">
          I conducted a meticulous audit of vendor flows using real-world screenshots, annotating every exit point and CTA. This ensured that even when a user left the native Audi environment to use a tool like Canadian Black Book or iPacket, the transition felt as seamless as possible.
        </p>
      </motion.div>

      {/* 4. Prototype & Implementation */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">4. Prototype & Implementation</h2>
        <h3 className="font-serif text-lg text-foreground mb-4">Modular Design Systems</h3>
        <p className="text-foreground/80 leading-relaxed mb-8">
          Because different dealers used different vendors for the same task (e.g., Update Promise vs. NextLane for service scheduling), I designed modular wireframes. These showed developers exactly how the UI would adjust based on which vendor was toggled on for a specific site.
        </p>
        <h3 className="font-serif text-lg text-foreground mb-4">The Developer Blueprint</h3>
        <p className="text-foreground/80 leading-relaxed">
          I authored a dedicated Figma documentation suite for the engineering team. This acted as the "Source of Truth," detailing the layout logic for third-party modules sitting within native AEM pages. I managed this project through 80% of its lifecycle, ensuring a smooth transition to the subsequent design team during an internal reorganization.
        </p>
      </motion.div>

      {/* 5. Impact & Reflection */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground mb-6">5. Impact & Reflection</h2>
        <h3 className="font-serif text-lg text-foreground mb-4">The Results</h3>
        <ul className="space-y-3 text-foreground/80 leading-relaxed pl-4 mb-8">
          <li className="flex gap-3"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Brand Governance:</strong> Successfully established a standardized layout that unified the Audi premium experience across the North American market.</span></li>
          <li className="flex gap-3"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Operational Efficiency:</strong> Supported the transition to AEM, significantly reducing third-party hosting fees and streamlining site management.</span></li>
          <li className="flex gap-3"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Scalability:</strong> Created a modular framework that allows Audi to eventually bring these vendor tools in-house, future-proofing the platform.</span></li>
        </ul>
      </motion.div>

      {/* Key Takeaway */}
      <motion.div
        variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
        className="mb-20 relative"
      >
        <div className="border-l-2 border-primary/30 pl-8 sm:pl-12 py-4">
          <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-4">Key Takeaway</h2>
          <p className="text-foreground/80 text-lg leading-relaxed italic">
            This project was a lesson in balancing ideal UX with business reality. While I would have preferred full visual control over the vendor UIs, the priority was solving for fragmentation and cost. By standardizing the IA first, we built the foundation for a truly premium, unified digital future for Audi.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default OneAudiContent;
