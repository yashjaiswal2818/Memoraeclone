
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pro Plan",
    price: "$2.99",
    regularPrice: "$4.99",
    period: "/monthly",
    description: "5 months free yearly",
    features: [
      "Unlimited reminders",
      "Multi-calendar integration",
      "Memory everywhere",
      "Lists",
    ],
    isPopular: false
  },
  {
    name: "Supernova Plan",
    price: "$8.99",
    regularPrice: "$14.99",
    period: "/monthly",
    description: "5 months free yearly",
    features: [
      "Everything in Pro",
      "Friend reminders",
      "Dashboard",
      "Daily briefing",
      "Image actions",
      "Priority support",
    ],
    isPopular: true,
    badge: "Most Popular"
  },
  {
    name: "Lifetime Plan",
    price: "$199",
    regularPrice: "",
    period: "one-time",
    description: "Save $900 over 5 years",
    features: [
      "Everything in Supernova",
      "No subscriptions",
      "Early access to new features"
    ],
    isPopular: false
  }
];

export function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl mb-4 tracking-tight">Your chaos, your plan.</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose how Memorae supports your life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px"}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-16 text-muted-foreground"
      >
        <p>14-day no-questions-asked refund. Full money back.</p>
      </motion.div>

    </section>
  );
}

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number;}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`relative rounded-3xl p-8 h-full flex flex-col ${
        plan.isPopular 
          ? 'md:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 border-purple-200/50 shadow-xl'
          : 'bg-card border border-border/50 shadow-lg'
      }`}
    >
       {plan.isPopular && plan.badge && (
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold">
              {plan.badge}
            </div>
          </div>
        )}

      <div className="flex-grow">
        <h3 className="text-2xl mb-2 tracking-tight">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>

        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl tracking-tight">{plan.price}</span>
            {plan.regularPrice && 
              <span className="text-2xl text-muted-foreground ml-2 line-through">{plan.regularPrice}</span>
            }
          </div>
           <p className="text-muted-foreground text-sm">{plan.period}</p>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li
              key={feature}
              className="flex items-start gap-3"
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-purple-500 to-blue-500' 
                  : 'bg-secondary'
              }`}>
                <Check className={`w-3 h-3 ${plan.isPopular ? 'text-white' : 'text-foreground'}`} />
              </div>
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`w-full py-3 rounded-2xl transition-colors ${
          plan.isPopular
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        {plan.name === 'Lifetime Plan' ? 'Get Lifetime Access' : 'Choose Plan'}
      </motion.button>
    </motion.div>
  );
}
