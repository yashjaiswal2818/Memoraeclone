
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const proofPoints = [
  "60k+ users forgetting less",
  "Friend-to-friend reminders",
  "Unified calendars",
  "Automatic follow-ups",
];

export const EndBlock = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/10 to-background blur-3xl -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/10 to-background blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tl from-secondary/10 to-background blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            You don’t need a better memory. <br /> You need a smarter system.
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Memorae turns your chaos into clarity — automatically, quietly, and
            instantly.
          </p>

          {/* Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-20 max-w-4xl mx-auto text-left">
            {proofPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg text-foreground/90">{point}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 30px -10px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span>Try Memorae Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "var(--shadow-medium)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="group px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl shadow-soft flex items-center justify-center gap-2 transition-shadow duration-300"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
