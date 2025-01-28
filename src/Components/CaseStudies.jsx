import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText, TrendingUp, BarChart3, Globe } from 'lucide-react';

const caseStudies = [
  {
    title: "Supply Chain Optimization in Manufacturing",
    industry: "Manufacturing",
    impact: "47% Cost Reduction",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250",
    summary: "Implementation of predictive analytics led to a 47% reduction in inventory holding costs and improved production efficiency by 35%.",
    metrics: [
      "47% cost reduction",
      "35% efficiency increase",
      "98% accuracy in demand forecasting"
    ],
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    title: "Global Logistics Network Transformation",
    industry: "Logistics",
    impact: "60% Faster Delivery",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&h=250",
    summary: "Restructuring of global logistics network resulted in 60% faster delivery times and 40% reduction in transportation costs.",
    metrics: [
      "60% delivery speed improvement",
      "40% cost savings",
      "99.9% delivery accuracy"
    ],
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: "Retail Inventory Management Revolution",
    industry: "Retail",
    impact: "85% Less Stockouts",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&h=250",
    summary: "AI-powered inventory management system reduced stockouts by 85% while maintaining optimal stock levels across 500+ stores.",
    metrics: [
      "85% stockout reduction",
      "23% inventory cost savings",
      "95% forecast accuracy"
    ],
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "Pharmaceutical Supply Chain Resilience",
    industry: "Healthcare",
    impact: "99.9% Reliability",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=400&h=250",
    summary: "Implementation of blockchain and IoT sensors achieved 99.9% reliability in temperature-sensitive pharmaceutical distribution.",
    metrics: [
      "99.9% distribution reliability",
      "45% waste reduction",
      "100% compliance rate"
    ],
    icon: <FileText className="w-8 h-8" />
  }
];

const CaseStudies = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
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
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
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
            Results in Real World
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how our solutions drive transformative outcomes across industries
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </motion.div>

          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <button
              onClick={() => scroll('right')}
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
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
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
                    <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 mb-2">
                      {study.icon}
                      <span className="text-sm font-semibold">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                    <div className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.impact}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{study.summary}</p>
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
