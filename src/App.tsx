import { motion } from "motion/react";
import { AppleHero } from "./components/AppleHero";
import { AppleNav } from "./components/AppleNav";
import { FeatureCards } from "./components/FeatureCards";
import { GlassCard } from "./components/GlassCard";
import { PricingSection } from "./components/PricingSection";
import { ValueProposition } from "./components/ValueProposition";
import { SuperpowersSection } from "./components/SuperpowersSection";
import { ControlCenterSection } from "./components/ControlCenterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            filter: 'blur(100px)'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-25"
          style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      {/* Navigation */}
      <AppleNav />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section */}
        <AppleHero />

        {/* Core Value Proposition */}
        <ValueProposition />

        {/* Superpowers Section */}
        <SuperpowersSection />

        {/* Control Center Section */}
        <ControlCenterSection />

        {/* Feature cards section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <FeatureCards />
        </section>

        {/* Pricing section */}
        <PricingSection />

        {/* Glass card section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <GlassCard />
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h2 className="text-5xl mb-6 tracking-tight">
              Experience the future.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover a new level of simplicity and elegance in every interaction.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl shadow-medium hover:shadow-large transition-shadow"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl shadow-soft hover:shadow-medium transition-shadow"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}