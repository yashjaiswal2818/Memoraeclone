import { motion } from "motion/react";
import { FileText, Calendar, Mic, Bell, Users, MessageCircle } from "lucide-react";

export function SuperpowersSection() {
  const features = [
    {
      icon: FileText,
      title: "Notes that never get lost",
      description: "Say it, type it, or drop it in — your list is saved instantly.",
      example: "Add Stranger Things to my watch list.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      accentColor: "bg-blue-500/10"
    },
    {
      icon: Calendar,
      title: "Unified calendars",
      description: "Google, Outlook — all your appointments and tasks in one chat.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      accentColor: "bg-purple-500/10"
    },
    {
      icon: Mic,
      title: "Voice notes → tasks",
      description: "Speak. Memorae listens, transcribes, and organizes automatically.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500",
      accentColor: "bg-emerald-500/10"
    },
    {
      icon: Bell,
      title: "Unlimited reminders",
      description: "Repeating, scheduled, spontaneous — reminders whenever you need them.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
      accentColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      title: "Friend-to-friend reminders",
      description: "Tell Memorae to remind someone else on your behalf, at the right time.",
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-500",
      accentColor: "bg-pink-500/10"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-center mb-20 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text"
        >
          Superpowers for people who can't do it all.
        </motion.h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  delay: index * 0.1,
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
                  className="relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-secondary/40 backdrop-blur-xl border border-border/50 hover:bg-secondary/60 hover:border-border/70 transition-all overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Icon container with glow */}
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
                        className={`w-16 h-16 rounded-2xl ${feature.accentColor} backdrop-blur-xl border border-border/50 flex items-center justify-center relative`}
                      >
                        <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                        
                        {/* Icon glow effect */}
                        <div 
                          className={`absolute inset-0 rounded-2xl ${feature.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                        />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl mb-4 relative">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4 relative">
                      {feature.description}
                    </p>

                    {/* Example (only for first feature) */}
                    {feature.example && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.3,
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="relative mt-6 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30"
                      >
                        <div className="flex items-start gap-3">
                          <MessageCircle className="w-5 h-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                          <p className="text-foreground/80 italic">
                            "{feature.example}"
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Floating glow particles */}
                    <motion.div
                      className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${
                          feature.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.4)' : 
                          feature.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.4)' : 
                          feature.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.4)' : 
                          feature.gradient.includes('orange') ? 'rgba(249, 115, 22, 0.4)' :
                          'rgba(236, 72, 153, 0.4)'
                        } 0%, transparent 70%)`,
                        filter: 'blur(40px)',
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

        {/* Bottom accent element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to declutter your mind and get back to what actually matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
