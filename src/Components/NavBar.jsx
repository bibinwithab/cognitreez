import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

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
              { name: "Solutions", id: "solutions" },
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
          <motion.div
            className="fixed inset-0 bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center space-y-6 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ top: 0, left: 0, height: "100vh", width: "100vw" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 bg-gray-900/20 hover:bg-gray-900/30 text-gray-900 dark:text-gray-200 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {[ 
              { name: "Home", id: "introduction" },
              { name: "Reviews", id: "reviews" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="text-xl text-gray-900 dark:text-gray-200 hover:text-blue-500 font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
