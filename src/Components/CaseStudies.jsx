import { useRef } from "react";
import { delay, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "../data/caseStudies";

const CaseStudies = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "smooth",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "smooth",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Research
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our solutions drive transformative outcomes across
            industries
          </p>
        </motion.div>

        <div className="relative">
          <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto hide-scrollbar flex gap-6 px-8 pb-4"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="flex-shrink-0 w-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden scroll-snap-align-start"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white dark:text-white mb-2">
                      {study.title}
                    </h3>
                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.impact}
                    </div>
                    <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 ">
                      <span className="text-sm font-semibold mt-1">
                        {study.industry}
                      </span>
                    </div>
                    
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {study.summary}
                  </p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-400 text-sm">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
