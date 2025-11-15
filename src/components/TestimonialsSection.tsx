
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Christopher Fox",
    role: "Founder",
    quote: "Best tool I’ve subscribed to this year."
  },
  {
    name: "Robbie Lockie",
    role: "ADHD user",
    quote: "It’s like having a second brain."
  },
  {
    name: "Yukari",
    role: "Artist",
    quote: "Friend reminders changed my life."
  },
  {
    name: "Fabiola",
    role: "Dentist",
    quote: "Best invention of the century for busy people."
  },
  {
    name: "Pablo Lopez",
    role: "Student",
    quote: "My mind is finally free to focus on what matters."
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
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
        <h2 className="text-4xl mb-12 tracking-tight">
          60k+ people have stopped forgetting.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="bg-secondary/30 p-6 rounded-2xl"
          >
            <p className='text-lg'>"{[testimonial.quote]}"</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {testimonial.name} — {testimonial.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
