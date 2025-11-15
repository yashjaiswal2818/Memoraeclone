import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 support",
      "1GB storage"
    ],
    isPro: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Most popular for professionals",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Custom domain",
      "API access"
    ],
    isPro: true,
    badge: "Popular"
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Unlimited storage",
      "Advanced security",
      "Custom integrations"
    ],
    isPro: false
  }
];

export function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <motion.h2 
          className="text-5xl mb-4 tracking-tight"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Choose the perfect plan for your needs. Always flexible, always fair.
        </motion.p>
      </motion.div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <PricingCard 
            key={plan.name} 
            plan={plan} 
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function PricingCard({ 
  plan, 
  index 
}: { 
  plan: typeof plans[0]; 
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth tilt (smaller angles for subtle effect)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [1.5, -1.5]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-1.5, 1.5]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
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
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className={`relative ${plan.isPro ? 'md:-mt-4 md:scale-105' : ''}`}
    >
      {/* Pro plan pulsing glow */}
      {plan.isPro && (
        <>
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-3xl -z-10"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 100%)',
              filter: 'blur(30px)',
              transform: 'scale(1.05)'
            }}
          />
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute inset-0 rounded-3xl -z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              filter: 'blur(20px)'
            }}
          />
        </>
      )}

      {/* Card with layered shadows and glossy effect */}
      <div
        className={`relative rounded-3xl p-8 h-full ${
          plan.isPro 
            ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-purple-200/50' 
            : 'bg-card border border-border/50'
        }`}
        style={{
          boxShadow: plan.isPro 
            ? '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 12px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
            : '0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Soft light reflection on top */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 rounded-t-3xl opacity-60 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)'
          }}
        />

        <div className="relative z-10">
          {/* Badge for Pro plan */}
          {plan.isPro && plan.badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs mb-4"
            >
              {plan.badge}
            </motion.div>
          )}

          {/* Plan name */}
          <h3 className="text-2xl mb-2 tracking-tight">
            {plan.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6">
            {plan.description}
          </p>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-baseline">
              <span className="text-5xl tracking-tight">
                {plan.price}
              </span>
              <span className="text-muted-foreground ml-2">
                {plan.period}
              </span>
            </div>
          </div>

          {/* CTA Button with depth interaction */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: plan.isPro
                ? "inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(147, 51, 234, 0.3)"
                : "inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
            className={`w-full py-4 rounded-2xl mb-8 transition-all relative overflow-hidden ${
              plan.isPro
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{
                background: plan.isPro 
                  ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246))'
                  : 'rgba(255, 255, 255, 0.1)'
              }}
            />
            <span className="relative z-10">
              {plan.isPro ? 'Get Started' : 'Choose Plan'}
            </span>
          </motion.button>

          {/* Features list */}
          <ul className="space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.4 + index * 0.15 + featureIndex * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start gap-3"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  plan.isPro 
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                    : 'bg-secondary'
                }`}>
                  <Check className={`w-3 h-3 ${plan.isPro ? 'text-white' : 'text-foreground'}`} />
                </div>
                <span className="text-sm text-foreground/80">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
