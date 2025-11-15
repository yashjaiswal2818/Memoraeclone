import { motion, useScroll, useTransform } from "motion/react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 20],
    ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.85)"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 20],
    [
      "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
      "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
    ]
  );

  const navItems = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4"
      >
        <motion.div
          style={{ backgroundColor, boxShadow }}
          className="max-w-7xl mx-auto backdrop-blur-lg rounded-2xl border border-white/20"
        >
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo with pulsing glow */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-pointer relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(99, 102, 241, 0)",
                    "0 0 12px rgba(99, 102, 241, 0.15)",
                    "0 0 0px rgba(99, 102, 241, 0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
              >
                <span className="text-white text-sm font-semibold">M</span>
              </motion.div>
            </motion.div>

            {/* Desktop Nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                    filter: "brightness(1.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="text-sm text-foreground/70 hover:text-foreground transition-all"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="p-2 hover:bg-secondary/50 rounded-xl transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="hidden sm:block p-2 hover:bg-secondary/50 rounded-xl transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.button>

              {/* Mobile menu toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary/50 rounded-xl transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-20 left-4 right-4 z-50 md:hidden"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-large overflow-hidden">
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                    }}
                    className="block px-4 py-3 text-foreground/80 hover:text-foreground rounded-xl transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile-only action button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navItems.length * 0.05 + 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-xl shadow-medium hover:shadow-large transition-shadow"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
