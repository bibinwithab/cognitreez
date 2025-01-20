import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "./reviews";

const CustomerReviews = () => {
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

  const reviewVariants = {
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
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their data strategy
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
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
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={reviewVariants}
                whileHover="hover"
                className="flex-shrink-0 w-[350px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 scroll-snap-align-start"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px]"
                >
                  <Quote className="w-8 h-8 text-blue-500" />
                </motion.div>

                <motion.p
                  className="text-gray-600 dark:text-gray-300  mb-6 min-h-[80px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  "{review.review}"
                </motion.p>

                <div className="flex items-center">
                  <motion.img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                  <div>
                    <motion.h4
                      className="font-semibold text-gray-900 dark:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {review.name}
                    </motion.h4>
                    <motion.p
                      className="text-gray-500 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {review.role}, {review.company}
                    </motion.p>
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

export default CustomerReviews;
