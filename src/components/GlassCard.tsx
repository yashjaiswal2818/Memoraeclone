import { motion } from "motion/react";
import { Calendar, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Days Active", value: "365" },
  { icon: Users, label: "Happy Users", value: "10K+" },
  { icon: TrendingUp, label: "Growth", value: "250%" }
];

export function GlassCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      
      {/* Glass effect */}
      <div className="relative glass border border-white/20 rounded-3xl p-12 shadow-large">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 tracking-tight">
              Frosted glass perfection
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Experience the signature Apple aesthetic with translucent surfaces and soft depth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="text-4xl mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl hover:bg-white/30 transition-colors"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-medium hover:shadow-large transition-shadow"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
