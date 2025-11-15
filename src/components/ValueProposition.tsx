import { motion } from "motion/react";
import { MessageSquare, Sparkles, Search, Zap } from "lucide-react";

export function ValueProposition() {
  const features = [
    {
      icon: MessageSquare,
      title: "Capture instantly",
      description: "Send a message, voice note, or screenshot. Memorae remembers it.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Sparkles,
      title: "Organize automatically",
      description: "Your ideas and conversations sort themselves by context, people, and intent.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Search,
      title: "Recover without searching",
      description: "Ask Memorae for something — it finds the right memory instantly.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500"
    },
    {
      icon: Zap,
      title: "Act intelligently",
      description: "Memorae gives reminders, suggestions, and smart follow-ups without you asking twice.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500"
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
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.15) 0%, rgba(147, 197, 253, 0.1) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-center mb-8 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text"
        >
          Capture, organize, remember, and act — all in one place.
        </motion.h2>

        {/* Sub-paragraph */}
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
          Memorae turns scattered thoughts into structured memories that help you take action and feel relief.
        </motion.p>

        {/* Feature Blocks Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -5,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 rounded-3xl bg-secondary/40 backdrop-blur-xl border border-border/50 hover:bg-secondary/60 hover:border-border/70 transition-all overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Icon with ambient glow */}
                  <div className="relative mb-6">
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
                      className="w-14 h-14 rounded-2xl bg-secondary/80 backdrop-blur-xl border border-border/50 flex items-center justify-center relative"
                    >
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                      
                      {/* Icon glow */}
                      <div 
                        className={`absolute inset-0 rounded-2xl ${feature.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3 relative">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed relative">
                    {feature.description}
                  </p>

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{
                      background: `radial-gradient(circle, ${feature.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : feature.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : feature.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(249, 115, 22, 0.3)'} 0%, transparent 70%)`,
                      filter: 'blur(30px)',
                    }}
                  />
                </div>

                {/* External shadow layer */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(0, 0, 0, 0.08)"
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
