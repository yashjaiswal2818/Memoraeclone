import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { HeroImage } from "./HeroImage";

export function Hero() {
  const title = "You weren't built to remember everything. Memorae was.";
  const subtitle =
    "A calmer mind begins when you stop storing everything inside your head.";

  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-28 pb-24 px-4 sm:px-6 overflow-hidden">

      {/* ---------------------------------- */}
      {/* BACKGROUND GRADIENTS */}
      {/* ---------------------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[380px] h-[260px] sm:w-[560px] sm:h-[360px] rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(147,197,253,.35), rgba(196,181,253,.25), rgba(251,207,232,.35))",
            filter: "blur(90px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[420px] h-[300px] sm:w-[680px] sm:h-[420px] rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,207,232,.25), rgba(196,181,253,.35), rgba(147,197,253,.25))",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* ---------------------------------- */}
      {/* MAIN CONTENT WRAPPER */}
      {/* ---------------------------------- */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 max-w-4xl w-full">

        {/* TITLE + SUBTITLE */}
        <div className="flex flex-col items-center text-center px-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-6 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* CALL TO ACTION */}
        <div className="flex flex-col items-center gap-5">
          <motion.button
            whileHover={{
              scale: 1.03,
              filter: "brightness(1.1)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.17)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="group px-10 py-5 bg-primary text-primary-foreground rounded-2xl shadow-lg flex items-center gap-3 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 text-lg">Try for Free</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 backdrop-blur-xl border border-border/50 rounded-full shadow">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                <span className="text-foreground/80">COMING SOON</span> — Memorae is arriving to Gmail soon.
              </span>
            </div>
          </motion.div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
