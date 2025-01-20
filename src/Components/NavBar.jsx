import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/10 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8">
              <img src="logo.png" alt="logo" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-200">Cognitreez</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {[ 
              { name: "Home", id: "introduction" },
              { name: "Reviews", id: "reviews" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-900 dark:text-gray-200 hover:text-blue-500 font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="text-gray-900 dark:text-gray-200" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800">
            {[ 
              { name: "Home", id: "introduction" },
              { name: "Reviews", id: "reviews" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false); // Close dropdown after selection
                }}
                className="block text-gray-900 dark:text-gray-200 hover:text-blue-500 font-bold"
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
