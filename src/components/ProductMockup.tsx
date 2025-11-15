
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Tag, Search, Share2, Sparkles } from "lucide-react";

const tags = [
  { icon: Tag, label: "Tags", color: "from-blue-500 to-cyan-500" },
  { icon: Search, label: "Search", color: "from-purple-500 to-pink-500" },
  { icon: Share2, label: "Share", color: "from-orange-500 to-red-500" }
];

export function ProductMockup() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2, 
        delay: 1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="mt-20 relative"
      style={{ perspective: 1000, zIndex: 10 }}
    >
      {/* Depth layers - blurred blobs behind mockup */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '10%',
            left: '20%'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.35, 0.25]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(70px)',
            bottom: '10%',
            right: '15%'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Floating mockup container */}
      <motion.div
        ref={containerRef}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative"
      >
        {/* Glassy frame container */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-large p-1"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Inner subtle border */}
          <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
          
          {/* Screenshot container with fade-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.3,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="aspect-video bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden"
          >
            {/* Radial glow for depth */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)'
              }}
            />

            {/* Main content */}
            <div className="relative z-10 text-center">
              <motion.div 
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <p className="text-muted-foreground mb-6">Product Experience</p>
              
              {/* Magnetic hover tags/chips */}
              <div className="flex gap-3 justify-center">
                {tags.map((tag, index) => {
                  const Icon = tag.icon;
                  return (
                    <MagneticChip
                      key={tag.label}
                      icon={Icon}
                      label={tag.label}
                      color={tag.color}
                      delay={index * 0.1}
                    />
                  );
                })}
              </div>
            </div>

            {/* Decorative gradient orbs */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-2xl -z-10"
            />
            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-400/30 to-orange-400/30 blur-2xl -z-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Magnetic chip component with hover effect
function MagneticChip({ 
  icon: Icon, 
  label, 
  color, 
  delay 
}: { 
  icon: any; 
  label: string; 
  color: string;
  delay: number;
}) {
  const chipRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!chipRef.current) return;
    
    const rect = chipRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Magnetic effect within 80px radius
    if (distance < 80) {
      const strength = 0.15;
      mouseX.set(deltaX * strength);
      mouseY.set(deltaY * strength);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={chipRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.5 + delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      className="relative"
    >
      <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${color} text-white shadow-medium backdrop-blur-xl flex items-center gap-2 cursor-pointer`}>
        <Icon className="w-4 h-4" />
        <span className="text-sm">{label}</span>
      </div>
    </motion.div>
  );
}
