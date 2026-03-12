import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Smartphone } from "lucide-react";
import nourishImage from "@/assets/nourish-pcos.avif";
import nourishMealPhoto from "@/assets/nourish-meal-photo.png";
import pongImage from "@/assets/retro-pong.png";
import tamilImage from "@/assets/learn-tamil.png";

const experiments = [
  {
    slug: "nourish-pcos-coach",
    title: "Nourish — PCOS Coach",
    description: "An AI-powered nutrition coach for people with PCOS. Features recipe generation, meal analysis, cravings coaching, and cycle-phase awareness — all built with vibe coding.",
    tags: ["AI", "Health", "Vibe Coding"],
    date: "Mar 2026",
    liveUrl: "https://nourish-my-pcos-coach.lovable.app/",
    heroImage: nourishImage,
    content: `PCOS affects roughly 1 in 10 people with ovaries, and nutrition is one of the most impactful — and most confusing — levers for managing symptoms. I wanted to explore what an AI-powered coach could look like that actually meets people where they are.

Nourish is a conversational nutrition tool built entirely with vibe coding in Lovable. It has three core features:

{{MEAL_PHOTO}}

**Recipe Generator** — Enter ingredients you have on hand and get PCOS-friendly recipes tailored to your cycle phase. The recipes prioritize anti-inflammatory ingredients, blood sugar balance, and hormone support.

**Meal Analyzer** — Describe any meal and get an instant breakdown of how it impacts PCOS symptoms. No calorie counting — instead, it focuses on inflammation markers, insulin response, and nutrient density.

**Cravings Coach** — When a craving hits, the coach helps you understand what your body might actually need and suggests satisfying alternatives that won't spike your blood sugar.

The optional cycle phase selector adjusts all recommendations based on where you are in your menstrual cycle — because nutritional needs shift significantly between follicular, ovulatory, luteal, and menstrual phases.

{{LIVE_PREVIEW}}

{{KEY_LEARNINGS}}

I actually suffer from PCOS, and I found myself turning to this app immediately after building it to validate my meal choices. It's already helped me make small but meaningful swaps — opening up a shawarma wrap and eating the filling before the white flour pita, choosing yogurt with raspberries and walnuts instead of reaching for a chocolate bar, and using monk fruit sugar in my evening chai instead of white sugar. I'm looking forward to seeing how these changes end up impacting my overall health.

Building this was an exercise in designing for empathy. The tone had to be warm and non-judgmental. No "good food / bad food" framing. No guilt. Just practical, personalized guidance that respects the complexity of living with a chronic condition.

The entire app was built using AI-assisted development — from the UI components to the coaching logic. It's a proof of concept for how vibe coding can accelerate health-tech prototyping when paired with strong design thinking.`,
  },
  {
    slug: "retro-pong",
    title: "Retro Pong",
    description: "A neon-lit reimagining of the classic Pong arcade game — playable on desktop and mobile with touch or keyboard controls.",
    tags: ["Game", "STEAM for kids", "Vibe Coding"],
    date: "Mar 2026",
    liveUrl: "https://retro-bounce-ball.lovable.app/",
    heroImage: pongImage,
    content: `I recently wanted to show my nephews (ages 6 and 9) that it's actually really easy to build their own game. Using Lovable, I built a fully functional Ping Pong game in minutes. I wanted to introduce them to the world of STEAM in a way they found relatable.

**Demystifying Tech** — Code doesn't have to be intimidating.

**The Power of the Prompt** — By using Vibe Coding they saw how simple, descriptive language can transform an idea into reality.

**Immediate Gratification** — By shifting their perspective from players to builders, we turned screen time into a lesson in logic and creativity.

{{LIVE_PREVIEW}}

It turns out, you're never too young to start shipping code. The game is playable on both desktop and mobile, give it a try!`,
  },
  {
    slug: "learn-tamil",
    title: "Learn Tamil",
    description: "An interactive phrasebook for learning the Tamil language.",
    tags: ["Language", "Education", "Vibe Coding"],
    date: "Mar 2026",
    liveUrl: "https://simpletamilnadu.lovable.app/",
    heroImage: tamilImage,
    content: `Tamil is one of the oldest languages spoken in the world - it's also one of the most complex languages to learn. Or so I've been told. As a Trinidadian-Canadian married into a Sri Lankan family, my journey with the Tamil language has been a lesson in "filling in the blanks."

In many Tamil-Canadian households, conversations aren't strictly one language; they are a vibrant hybrid of Tamil and English. For a beginner like me, following a conversation is like trying to solve a puzzle. I rely on a mix of body language, the English words dropped into sentences, and repetitive common Tamil phrases that I've learned to recognize by ear, even if I couldn't spell them.

However, once the conversation shifts to complex topics, I'm quickly left behind. Most existing resources are too formal or academic to help with this specific, everyday "hybrid" reality. So, I used Lovable to build exactly what I needed: a bridge for the beginner. I wanted to build a tool that focused on how Tamil is actually spoken in a Canadian-Sri Lankan home, rather than how it's written in a textbook.

{{LIVE_PREVIEW}}

I uploaded my own data—an Excel sheet of phrases I've gathered over years—and used AI to break them down phonetically. If a word sounds like an English syllable, that's how it will be displayed. I've been beta-testing the app with my in-laws. While it's still a work in progress and needs more refinement. By focusing on the way we actually speak at home, I'm building a tool that turns "hearing" into "understanding."`,
  },
];

const PlaygroundDetail = () => {
  const { slug } = useParams();
  const experiment = experiments.find((e) => e.slug === slug);

  if (!experiment) {
    return (
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Project not found</h1>
          <Link to="/playground" className="text-primary hover:underline">← Back to Playground</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/playground" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
            <ArrowLeft size={16} /> Back to Playground
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

          <div className="flex flex-wrap items-center gap-3 mb-8">
            {experiment.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{tag}</span>
            ))}
          </div>

          <div className="rounded-sm overflow-hidden mb-12">
            <img src={experiment.heroImage} alt={experiment.title} className="w-full h-auto" />
          </div>

          <div className="prose prose-neutral max-w-none">
            {experiment.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.trim() === "{{MEAL_PHOTO}}") {
                return (
                  <div key={i} className="rounded-sm overflow-hidden mb-6">
                    <img src={nourishMealPhoto} alt="Photographing a healthy meal" className="w-full h-auto" />
                  </div>
                );
              }
              if (paragraph.trim() === "{{LIVE_PREVIEW}}" && experiment.liveUrl) {
                return (
                  <div key={i} className="my-10">
                    <div className="mx-auto max-w-[375px] rounded-2xl border-[8px] border-foreground/10 bg-background shadow-xl overflow-hidden">
                      <div className="flex items-center justify-center gap-1.5 py-2 bg-muted/50 border-b border-border">
                        <Smartphone size={12} className="text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground font-medium">Live Preview</span>
                      </div>
                      <iframe
                        src={experiment.liveUrl}
                        title={`${experiment.title} preview`}
                        className="w-full h-[667px] border-0"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-center mt-6">
                      <a
                        href={experiment.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        View Live <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                );
              }
              if (paragraph.trim() === "{{KEY_LEARNINGS}}") {
                return (
                  <h2 key={i} className="font-serif text-2xl text-foreground font-light mt-10 mb-6">Key Learnings</h2>
                );
              }
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

export default PlaygroundDetail;
