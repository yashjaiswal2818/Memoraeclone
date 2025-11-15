import { motion } from "framer-motion";
import { ImageWithFallback } from "./common/ImageWithFallback";

export function HeroImage() {
  return (
    <motion.div
      className="relative w-full max-w-4xl h-[220px] sm:h-[280px] md:h-[330px] mt-16 md:mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      {/* LEFT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: -8, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, rotate: -5, scale: 0.92 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-32 sm:w-36 sm:h-[220px] md:w-40 md:h-[260px] rounded-xl overflow-hidden shadow-xl"
      >
  
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: 8, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, rotate: 5, scale: 0.92 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-32 sm:w-36 sm:h-[220px] md:w-40 md:h-[260px] rounded-xl overflow-hidden shadow-xl"
      >

      </motion.div>
    </motion.div>
  );
}
