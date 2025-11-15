
import { motion } from "framer-motion";

export const MissionSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-center"
      >
        <h2 className="text-4xl mb-6 tracking-tight">
          We don’t organize lives — we decompress them.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Memorae converts messages into tasks, audio into text, ideas into actions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-secondary/30 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Our enemy is forgetfulness — not other apps.</h3>
            <p className="text-muted-foreground">We don’t sell features. We sell clarity.</p>
          </div>
          <div className="bg-secondary/30 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Memorae acts exactly when you need it — and disappears afterward.</h3>
            <p className="text-muted-foreground">We’re not adding functions. We’re building a mental operating system.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
