import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      title: "Our Purpose",
      content: "At Cognitreez, we harness AI to redefine supply chain operations. Our mission is to make cutting-edge solutions accessible, ensuring efficiency, scalability, and ease of use. Committed to innovation, we empower businesses with intelligent, data-driven strategies, driving the future of supply chain excellence."
    },
    {
      title: "Our Team",
      content: "Our team brings together specialists in analytics, data science, and business strategy, combining expertise to deliver intelligent, data-driven solutions for real-world impact. With a passion for innovation, we transform complex challenges into actionable insights that drive growth and efficiency."
    },
    {
      title: "Our Values",
      content: "Our values are the foundation of everything we do. We are committed to innovation, continuously pushing boundaries to deliver cutting-edge, future-ready solutions. Guided by integrity, we uphold ethical AI practices in every aspect of our work. We believe in the power of collaboration, working together with partners to drive collective success."
    },
    {
      title: "Our Research",
      content: "Innovation is at the core of everything we do. Our research focuses on leveraging AI, data science, and advanced analytics to solve real-world challenges. We explore cutting-edge methodologies to optimize decision-making, enhance automation, and drive efficiency across industries."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className=" relative bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="py-8 px-6"
        >
          <div className="border-b border-gray-300 dark:border-gray-600 pb-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {sections[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {sections[currentIndex].content}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;