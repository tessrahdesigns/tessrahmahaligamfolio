import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import nourishImage from "@/assets/nourish-pcos.avif";

const experiments = [
  {
    slug: "nourish-pcos-coach",
    title: "Nourish — PCOS Coach",
    description: "An AI-powered nutrition coach for people with PCOS. Features recipe generation, meal analysis, cravings coaching, and cycle-phase awareness — all built with vibe coding.",
    tags: ["AI", "Health", "Vibe Coding"],
    date: "Mar 2026",
    liveUrl: "https://nourish-my-pcos-coach.lovable.app/",
    content: `PCOS affects roughly 1 in 10 people with ovaries, and nutrition is one of the most impactful — and most confusing — levers for managing symptoms. I wanted to explore what an AI-powered coach could look like that actually meets people where they are.

Nourish is a conversational nutrition tool built entirely with vibe coding in Lovable. It has three core features:

**Recipe Generator** — Enter ingredients you have on hand and get PCOS-friendly recipes tailored to your cycle phase. The recipes prioritize anti-inflammatory ingredients, blood sugar balance, and hormone support.

**Meal Analyzer** — Describe any meal and get an instant breakdown of how it impacts PCOS symptoms. No calorie counting — instead, it focuses on inflammation markers, insulin response, and nutrient density.

**Cravings Coach** — When a craving hits, the coach helps you understand what your body might actually need and suggests satisfying alternatives that won't spike your blood sugar.

The optional cycle phase selector adjusts all recommendations based on where you are in your menstrual cycle — because nutritional needs shift significantly between follicular, ovulatory, luteal, and menstrual phases.

Building this was an exercise in designing for empathy. The tone had to be warm and non-judgmental. No "good food / bad food" framing. No guilt. Just practical, personalized guidance that respects the complexity of living with a chronic condition.

The entire app was built using AI-assisted development — from the UI components to the coaching logic. It's a proof of concept for how vibe coding can accelerate health-tech prototyping when paired with strong design thinking.`,
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

          <div className="flex flex-wrap items-center gap-3 mb-12">
            {experiment.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{tag}</span>
            ))}
            {experiment.liveUrl && (
              <a
                href={experiment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Live <ExternalLink size={12} />
              </a>
            )}
          </div>

          <div className="prose prose-neutral max-w-none">
            {experiment.content.split("\n\n").map((paragraph, i) => {
              // Handle bold text within paragraphs
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-foreground/80 leading-relaxed mb-6">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j} className="text-foreground font-medium">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperimentDetail;
