import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description: "Experience unparalleled speed and responsiveness in everything you do.",
    glowColor: "rgba(234, 179, 8, 0.15)"
  },
  {
    icon: Shield,
    title: "Privacy first",
    description: "Your data stays yours. Built with privacy at the core.",
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    icon: Sparkles,
    title: "Beautifully simple",
    description: "Intuitive design that gets out of your way and lets you focus.",
    glowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    icon: Layers,
    title: "Seamlessly integrated",
    description: "Works perfectly with all your favorite tools and workflows.",
    glowColor: "rgba(236, 72, 153, 0.15)"
  }
];

export function FeatureCards() {
  return (
    <div className="relative px-4 sm:px-6">
      {/* Soft section divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-md h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.08) 50%, transparent 100%)'
        }}
      />

      {/* Animated heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl mb-4 tracking-tight"
        >
          Thoughtfully crafted
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Every detail designed to create an experience that's both powerful and delightful.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * (index + 1),
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative"
            >
              {/* Ambient glow behind card */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.glowColor} 0%, transparent 70%)`,
                  filter: 'blur(40px)',
                  transform: 'scale(1.1)'
                }}
              />

              {/* Feature card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)"
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-shadow h-full border border-border/50 relative overflow-hidden backdrop-blur-xl"
              >
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${feature.glowColor} 0%, transparent 50%)`
                  }}
                />

                <div className="relative z-10">
                  {/* Animated icon container */}
                  <motion.div
                    className="mb-6 inline-block"
                    whileHover={{
                      rotate: [0, -3, 3, 0],
                      scale: 1.1
                    }}
                    transition={{
                      rotate: {
                        duration: 0.5,
                        ease: "easeInOut"
                      },
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                  >
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary flex items-center justify-center relative"
                      whileHover={{
                        boxShadow: `0 0 20px ${feature.glowColor}, 0 0 40px ${feature.glowColor.replace('0.15', '0.08')}`
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground" />
                      </motion.div>

                      {/* Subtle glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`,
                          filter: 'blur(8px)'
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
                    filter: 'blur(30px)'
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom section divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-24 left-1/2 -translate-x-1/2 w-full max-w-md h-px mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.08) 50%, transparent 100%)'
        }}
      />
    </div>
  );
}
