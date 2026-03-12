import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Lightbulb, PenTool, FlaskConical, Repeat, ChevronDown } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    short: "Understand the problem",
    desc: "Conduct stakeholder interviews, competitive analysis, and market research to define the problem space and uncover user pain points.",
  },
  {
    icon: Users,
    title: "Research",
    short: "Know the user",
    desc: "Perform user interviews, surveys, and contextual inquiries. Build personas, empathy maps, and journey maps to deeply understand user needs.",
  },
  {
    icon: Lightbulb,
    title: "Define",
    short: "Frame the opportunity",
    desc: "Synthesize research into actionable insights. Create problem statements, user stories, and information architecture to guide design decisions.",
  },
  {
    icon: PenTool,
    title: "Design",
    short: "Craft the solution",
    desc: "Ideate through sketches and wireframes. Build high-fidelity prototypes with interaction design, visual systems, and responsive layouts.",
  },
  {
    icon: FlaskConical,
    title: "Test",
    short: "Validate with users",
    desc: "Run usability tests, A/B experiments, and heuristic evaluations. Gather quantitative and qualitative data to measure design effectiveness.",
  },
  {
    icon: Repeat,
    title: "Iterate",
    short: "Refine & repeat",
    desc: "Analyze test results, prioritize improvements, and refine designs. The process is cyclical—each iteration brings the product closer to user needs.",
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-3">
        Design Process
      </h2>
      <p className="text-sm text-muted-foreground mb-8 max-w-xl">
        My approach to product design is iterative and user-centred, blending research rigour with creative exploration.
      </p>

      <div className="space-y-2">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;

          return (
            <div key={step.title}>
              <motion.button
                onClick={() => setActiveStep(isActive ? null : i)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-lg transition-colors duration-200 text-left cursor-pointer group ${
                  isActive ? "bg-primary/5" : "hover:bg-muted/40"
                }`}
              >
                <span className="text-[11px] font-mono text-muted-foreground/50 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={18}
                  className={`shrink-0 transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />

                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}>
                    {step.title}
                  </span>
                  <span className="text-muted-foreground text-xs ml-2 hidden sm:inline">
                    — {step.short}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                >
                  <ChevronDown size={16} className="text-muted-foreground" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-[4.25rem] pr-4 pb-4 pt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignProcess;