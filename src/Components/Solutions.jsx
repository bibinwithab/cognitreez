import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; 
import solutions from "../data/solutions";

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleSeeMore = (solution) => {
    setSelectedSolution(solution);
  };

  const handleClose = () => {
    setSelectedSolution(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3">Our Solutions</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Explore how our innovative solutions transform supply chain operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center relative"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {solution.shortDescription}
            </p>
            <button
              onClick={() => handleSeeMore(solution)}
              className="mt-4 inline-flex items-center justify-center text-blue-500 hover:text-blue-700"
            >
              See More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>

      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full p-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 text-gray-900 dark:text-white flex items-center justify-center h-10 w-10" 
            >
              <X className="h-9 w-9" /> 
            </button>
            <img
              src={selectedSolution.image}
              alt={selectedSolution.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">
              {selectedSolution.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedSolution.longDescription}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Solutions;