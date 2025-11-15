import { motion } from "motion/react";
import { Link, Calendar, Camera, Sparkles } from "lucide-react";

export function ControlCenterSection() {
  const examples = [
    {
      icon: Link,
      title: "Command example",
      command: "Memorae, send me the link to my dashboard.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      accentColor: "bg-blue-500/10"
    },
    {
      icon: Calendar,
      title: "Schedule example",
      command: "Send me my weekly calendar summary every Monday at 9AM.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      accentColor: "bg-purple-500/10"
    },
    {
      icon: Camera,
      title: "Image → action example",
      command: "Take a photo of a timetable, list, or board — Memorae turns it into usable tasks.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      accentColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-center mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text"
        >
          Your control center
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-xl md:text-2xl text-muted-foreground text-center max-w-4xl mx-auto mb-20"
        >
          Everything that used to be scattered is now in one organized place.
        </motion.p>

        {/* Command Examples Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ 
                    y: -6,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                  className="relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full p-6 rounded-3xl bg-secondary/40 backdrop-blur-xl border border-border/50 hover:bg-secondary/60 hover:border-border/70 transition-all overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Icon with glow */}
                    <div className="relative mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 15 
                          }
                        }}
                        className={`w-14 h-14 rounded-2xl ${example.accentColor} backdrop-blur-xl border border-border/50 flex items-center justify-center relative`}
                      >
                        <Icon className={`w-7 h-7 ${example.iconColor}`} />
                        
                        {/* Icon glow effect */}
                        <div 
                          className={`absolute inset-0 rounded-2xl ${example.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                        />
                      </motion.div>
                    </div>

                    {/* Command text in chat bubble */}
                    <div className="relative p-5 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/40">
                      <p className="text-foreground/90 text-center leading-relaxed">
                        "{example.command}"
                      </p>
                    </div>

                    {/* Floating glow particles */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${
                          example.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : 
                          example.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.5)' : 
                          'rgba(16, 185, 129, 0.5)'
                        } 0%, transparent 70%)`,
                        filter: 'blur(30px)',
                      }}
                    />
                  </div>

                  {/* External shadow layer */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    style={{
                      boxShadow: "0 25px 70px rgba(0, 0, 0, 0.15), 0 15px 35px rgba(0, 0, 0, 0.1)"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Moving Reminders Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative group"
        >
          <motion.div
            whileHover={{ 
              y: -8,
              transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }
            }}
            className="relative"
          >
            {/* Large feature card */}
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-xl border border-border/50 hover:border-border/70 transition-all overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content wrapper */}
              <div className="relative flex flex-col items-center text-center">
                {/* Sparkles icon with special treatment */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 10,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 15 
                    }
                  }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-border/50 flex items-center justify-center mb-8 relative"
                >
                  <Sparkles className="w-10 h-10 text-purple-500" />
                  
                  {/* Icon glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Feature title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="text-3xl md:text-4xl mb-6 max-w-3xl"
                >
                  Memorae explores the world for you — and returns with what you need to know.
                </motion.h3>

                {/* Visual separator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="w-24 h-1 bg-gradient-to-r from-transparent via-border to-transparent mb-6"
                />

                {/* Supporting text */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1.3,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="text-lg text-muted-foreground max-w-2xl"
                >
                  Set it once, and Memorae works in the background — bringing you updates, insights, and reminders exactly when they matter.
                </motion.p>
              </div>

              {/* Floating ambient glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />
            </div>

            {/* External shadow layer */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
              style={{
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.2), 0 20px 40px rgba(0, 0, 0, 0.12)"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
