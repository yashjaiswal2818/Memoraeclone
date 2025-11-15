import { motion } from "motion/react";
import { ArrowRight, Mail, Brain, FileText, NotebookPen, Sparkles, Heart, X, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AppleHero() {
  const title = "You weren't built to remember everything. Memorae was.";
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Top decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-[600px] h-[400px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, rgba(251, 207, 232, 0.4) 100%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Bottom decorative gradient blob */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-[700px] h-[500px] rounded-full"
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
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {/* Animated heading with character-level stagger */}
          <div className="mb-8 overflow-hidden">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text inline-block px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
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
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            A calmer mind begins when you stop storing everything inside your head.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.03,
                filter: "brightness(1.1)",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15), 0 6px 12px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
              className="group px-10 py-5 bg-primary text-primary-foreground rounded-2xl shadow-medium flex items-center gap-3 relative overflow-hidden mx-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 text-lg">Try for Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>
          </motion.div>

          {/* Gmail Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-secondary/60 backdrop-blur-xl border border-border/50 rounded-full shadow-soft">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground/80">COMING SOON</span> — Memorae is arriving to Gmail soon.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Three stacked UI preview images */}
        <motion.div 
          className="relative w-full max-w-4xl mx-auto h-[500px] mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {/* Image 1 - Back */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: -6, scale: 0.95 }}
            transition={{ 
              duration: 1, 
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              y: -10,
              rotate: -8,
              scale: 0.98,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-[450px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08)"
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719464521902-4dc9595b182d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjMxNTE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="App Interface Preview 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 - Middle (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-72 h-[480px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer z-10"
            style={{
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15), 0 8px 18px rgba(0, 0, 0, 0.1)"
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyMDQ5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="App Interface Preview 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 3 - Front Right */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 6, scale: 0.95 }}
            transition={{ 
              duration: 1, 
              delay: 1.3,
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              y: -10,
              rotate: 8,
              scale: 0.98,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[450px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            style={{
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08)"
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYzMjE3OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="App Interface Preview 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Emotional Journey Section */}
        <motion.div 
          className="max-w-3xl mx-auto mt-32 space-y-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {/* Paragraph 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.6,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed flex items-center justify-center gap-3 flex-wrap">
              <Brain className="w-5 h-5 text-muted-foreground/60 flex-shrink-0" />
              <span>You've normalized living with your mind seconds away from bursting — and you barely notice anymore.</span>
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.7,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              There's always something pending. Something forgotten. Something you should be doing… but you can't remember what.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed flex items-center justify-center gap-3 flex-wrap">
              <NotebookPen className="w-5 h-5 text-muted-foreground/60 flex-shrink-0" />
              <span>You write things down so you don't forget. But then you forget why you wrote them… and you start over again.</span>
              <FileText className="w-5 h-5 text-muted-foreground/60 flex-shrink-0" />
            </p>
          </motion.div>

          {/* Paragraph 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.9,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              As if organizing life was the goal. It never was — the goal is finding peace.
            </p>
          </motion.div>

          {/* Paragraph 5 - Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2.0,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="text-center pt-6"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed flex items-center justify-center gap-3 flex-wrap">
              <Sparkles className="w-5 h-5 text-primary/70 flex-shrink-0" />
              <span>Eventually, something (or someone) shows up that doesn't add complexity… it simply stays. And gives you back the peace of mind you lost.</span>
              <Heart className="w-5 h-5 text-primary/70 flex-shrink-0" />
            </p>
          </motion.div>
        </motion.div>

        {/* No More List + Mascot Section */}
        <motion.div 
          className="max-w-6xl mx-auto mt-40 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          {/* Micro-headline */}
          <motion.h2 
            className="text-4xl md:text-5xl tracking-tight text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            Your mind is exhausted. Good thing you finally have help.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* No More List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <div className="space-y-4">
                {[
                  "No more mental lists",
                  "No more sticky notes on mirrors",
                  "No more missed deadlines",
                  "No more missed appointments",
                  "No more dead plants",
                  "No more napkin reminders"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/30 hover:bg-secondary/50 hover:border-border/50 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <X className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mascot/Phone Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.1), 0 8px 18px rgba(0, 0, 0, 0.08)"
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740103358980-16abec9193c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcm9ib3QlMjBtYXNjb3R8ZW58MXx8fHwxNzYzMjE4MTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Memorae Helper"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating ambient glow */}
              <div 
                className="absolute -inset-10 rounded-full opacity-30 -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="max-w-6xl mx-auto mt-32 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center p-8 rounded-2xl bg-secondary/20 backdrop-blur-xl border border-border/30 hover:bg-secondary/30 hover:border-border/50 transition-all group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div className="text-4xl mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                60,000+
              </div>
              <div className="text-muted-foreground">
                people now living with a clearer mind
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center p-8 rounded-2xl bg-secondary/20 backdrop-blur-xl border border-border/30 hover:bg-secondary/30 hover:border-border/50 transition-all group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div className="text-4xl mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                45+
              </div>
              <div className="text-muted-foreground">
                countries
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center p-8 rounded-2xl bg-secondary/20 backdrop-blur-xl border border-border/30 hover:bg-secondary/30 hover:border-border/50 transition-all group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div className="text-4xl mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                5,000,000+
              </div>
              <div className="text-muted-foreground">
                reminders delivered
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex items-start justify-center p-2"
            whileHover={{ borderColor: "rgba(134, 134, 139, 0.4)" }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
