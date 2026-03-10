import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Lightbulb, PenTool, FlaskConical, Repeat } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    short: "Understand the problem",
    desc: "Conduct stakeholder interviews, competitive analysis, and market research to define the problem space and uncover user pain points.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Users,
    title: "Research",
    short: "Know the user",
    desc: "Perform user interviews, surveys, and contextual inquiries. Build personas, empathy maps, and journey maps to deeply understand user needs.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "Define",
    short: "Frame the opportunity",
    desc: "Synthesize research into actionable insights. Create problem statements, user stories, and information architecture to guide design decisions.",
    color: "from-secondary/30 to-secondary/10",
  },
  {
    icon: PenTool,
    title: "Design",
    short: "Craft the solution",
    desc: "Ideate through sketches and wireframes. Build high-fidelity prototypes with interaction design, visual systems, and responsive layouts.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: FlaskConical,
    title: "Test",
    short: "Validate with users",
    desc: "Run usability tests, A/B experiments, and heuristic evaluations. Gather quantitative and qualitative data to measure design effectiveness.",
    color: "from-accent/15 to-accent/5",
  },
  {
    icon: Repeat,
    title: "Iterate",
    short: "Refine & repeat",
    desc: "Analyze test results, prioritize improvements, and refine designs. The process is cyclical—each iteration brings the product closer to user needs.",
    color: "from-secondary/25 to-secondary/10",
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div>
      <h2 className="font-serif text-sm uppercase tracking-widest text-primary mb-3">
        Design Process
      </h2>
      <p className="text-sm text-muted-foreground mb-10 max-w-xl">
        My approach to product design is iterative and user-centred, blending research rigour with creative exploration.
      </p>

      {/* Process steps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;

          return (
            <motion.button
              key={step.title}
              onClick={() => setActiveStep(isActive ? null : i)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex flex-col items-center gap-3 p-5 rounded-lg border transition-all duration-300 text-left cursor-pointer group ${
                isActive
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              {/* Step number */}
              <span className="absolute top-2 right-2.5 text-[10px] font-mono text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon with animated ring */}
              <motion.div
                className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}
                animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Icon
                  size={20}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
              </motion.div>

              <div className="text-center">
                <p className={`text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-foreground"
                }`}>
                  {step.title}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                  {step.short}
                </p>
              </div>

              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  className="absolute -bottom-1.5 w-2 h-2 rounded-full bg-primary"
                  layoutId="activeDot"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Expanded detail panel */}
      <AnimatePresence mode="wait">
        {activeStep !== null && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border border-primary/20 rounded-lg bg-primary/[0.03] p-6">
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center flex-shrink-0`}
                >
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon size={18} className="text-primary" />;
                  })()}
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="font-serif text-base font-medium text-foreground mb-1"
                  >
                    {steps[activeStep].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {steps[activeStep].desc}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignProcess;
