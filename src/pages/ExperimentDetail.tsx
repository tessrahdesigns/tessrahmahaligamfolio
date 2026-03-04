import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const experiments = [
  {
    slug: "conversational-ui-patterns",
    title: "Conversational UI Patterns",
    description: "Exploring how chat interfaces can guide complex decision-making without overwhelming users. Built a prototype using AI-assisted flow design.",
    tags: ["AI", "Prototyping", "UX"],
    date: "Feb 2026",
    content: `Chat interfaces are everywhere now, but most of them still feel like talking to a wall. I wanted to explore what happens when you design a conversational UI that actually guides someone through a complex decision — like choosing a healthcare plan or configuring a product.

The key insight was that good conversational UI isn't about mimicking human speech. It's about progressive disclosure through dialogue. Each response narrows the decision space without the user feeling constrained.

I built a prototype that uses branching logic combined with contextual suggestions. The AI doesn't just answer questions — it asks clarifying ones, surfaces relevant options, and summarizes decisions along the way.

What surprised me most was how much the visual design of the conversation mattered. Spacing, timing of responses, and the way options were presented had a bigger impact on user confidence than the actual content of the responses.

This is still very much a work in progress, but it's shifted how I think about information architecture in general — not just for chat interfaces.`,
  },
  {
    slug: "vibe-coding-with-lovable",
    title: "Vibe Coding with Lovable",
    description: "Learning to build with AI-assisted tools — this portfolio itself is an experiment in what's possible when design thinking meets vibe coding.",
    tags: ["Vibe Coding", "Meta", "Learning"],
    date: "Mar 2026",
    content: `This portfolio is itself an experiment. I wanted to see what happens when a designer who thinks in systems and flows uses AI-assisted coding tools to build something real.

The process has been fascinating. Instead of writing code line by line, I've been describing intentions and iterating on outputs. It's closer to art direction than engineering — and that's exactly what makes it powerful for designers.

What I've learned so far:
- Design thinking translates surprisingly well to prompting. When you can clearly articulate the "why" behind a design decision, the AI can often figure out the "how."
- Iteration speed is incredible. I can try three different approaches to a layout in the time it would normally take to set up one.
- The constraints are real but manageable. You still need to understand enough about code to evaluate outputs and course-correct.

The biggest shift has been in how I think about prototyping. High-fidelity prototypes used to be expensive. Now they're practically free. That changes the design process fundamentally.`,
  },
  {
    slug: "generative-color-systems",
    title: "Generative Color Systems",
    description: "A small tool that generates accessible color palettes from a single seed color, inspired by Japanese seasonal color traditions.",
    tags: ["Color Theory", "Accessibility", "Japan"],
    date: "Jan 2026",
    content: `Japanese culture has a beautiful tradition of seasonal colors — specific hues associated with each time of year, each with poetic names. I wanted to build a tool that captures some of that intentionality while also being practical.

The tool takes a single seed color and generates an accessible palette using color theory principles. But instead of purely mathematical relationships, it incorporates the idea of "color moods" — warm/cool shifts that evoke different seasonal feelings.

Every generated palette is checked against WCAG contrast requirements. The tool shows you which combinations work for text, which work for large elements, and which should only be used as accents.

It's a small thing, but it's changed how I approach color in my design work. Instead of starting with a full palette, I start with one color that feels right and let the system generate harmonious companions.

The Japanese seasonal color reference is still a work in progress — I'm slowly building a database of traditional color names and their associations. Eventually, I'd love for the tool to suggest colors based on the mood or season you're designing for.`,
  },
  {
    slug: "design-journaling-bot",
    title: "Design Journaling Bot",
    description: "A daily reflection prompt system that helps designers build a habit of documenting their thinking and decisions.",
    tags: ["AI", "Reflection", "Craft"],
    date: "Dec 2025",
    content: `Most designers I know are terrible at documenting their decisions. I include myself in that group. We make hundreds of small choices every day, and by the time we need to explain them in a case study or portfolio piece, the reasoning has evaporated.

This bot sends a daily prompt — just one question — designed to capture a specific aspect of your design thinking. Questions like:
- "What's one decision you made today that you're not sure about?"
- "Did you push back on anything today? What happened?"
- "What did you learn from a user or stakeholder today?"

The responses build up over time into a personal design journal. It's not polished — it's raw, honest, and incredibly useful when you need to reflect on your growth or build a case study.

I've been using it myself for about three months now. The biggest surprise is how much it's improved my ability to articulate design decisions in real-time, not just in retrospect. The habit of reflection has made me a more intentional designer.`,
  },
];

const ExperimentDetail = () => {
  const { slug } = useParams();
  const experiment = experiments.find((e) => e.slug === slug);

  if (!experiment) {
    return (
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Experiment not found</h1>
          <Link to="/experiments" className="text-primary hover:underline">← Back to Experiments</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/experiments" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Experiments
          </Link>

          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <time>{experiment.date}</time>
            <span>·</span>
            <span className="inline-block px-2 py-0.5 rounded-full bg-secondary/30 text-secondary-foreground text-xs">✦ Learning in Public</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
            {experiment.title}
          </h1>

          <p className="text-muted-foreground text-lg mb-6">{experiment.description}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {experiment.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{tag}</span>
            ))}
          </div>

          <div className="prose prose-neutral max-w-none">
            {experiment.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperimentDetail;
