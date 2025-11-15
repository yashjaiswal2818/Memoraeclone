import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./common/ImageWithFallback";

export function Hero() {
  const title = "You weren't built to remember everything. Memorae was.";
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-[400px] h-[300px] sm:w-[600px] sm:h-[400px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, rgba(251, 207, 232, 0.4) 100%)',
            filter: 'blur(100px)',
          }}
        />
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-[500px] h-[400px] sm:w-[700px] sm:h-[500px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(251, 207, 232, 0.3) 0%, rgba(196, 181, 253, 0.4) 50%, rgba(147, 197, 253, 0.3) 100%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 sm:mb-8 overflow-hidden">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent inline-block px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block">
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: (wordIndex * word.length + charIndex) * 0.02,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
              ))}
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            A calmer mind begins when you stop storing everything inside your head.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 sm:mb-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.03,
                filter: "brightness(1.1)",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group px-8 py-4 sm:px-10 sm:py-5 bg-primary text-primary-foreground rounded-2xl shadow-medium flex items-center gap-3 relative overflow-hidden mx-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 text-base sm:text-lg">Try for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-secondary/60 backdrop-blur-xl border border-border/50 rounded-full shadow-soft">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs sm:text-sm text-muted-foreground text-center">
                <span className="text-foreground/80">COMING SOON</span> — Memorae is arriving to Gmail soon.
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] mt-10 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: -6, scale: 0.9 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-[300px] sm:w-52 sm:h-[380px] md:w-64 md:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjMxNTE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="App Interface Preview 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-[340px] sm:w-60 sm:h-[420px] md:w-72 md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer z-10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyMDQ5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="App Interface Preview 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 6, scale: 0.9 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-[300px] sm:w-52 sm:h-[380px] md:w-64 md:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYzMjE3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="App Interface Preview 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
