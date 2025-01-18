import { motion } from "motion/react";
import { BarChart3, TrendingUp, LineChart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Introduction = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0e0e0e] to-[#0077b5] text-gray-900 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #3B82F6 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Transform Your Data Into
            <motion.span
              className="text-blue-500 inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}
              Actionable Insights
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Transforming your supply chain with machine and deep learning
            models. Optimizing planning, stock management, classification, and
            demand forecasting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
              title: "Data Visualization",
              description:
                "Transform complex data into clear, actionable insights",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
              title: "Predictive Analytics",
              description: "Forecast trends and make data-driven decisions",
            },
            {
              icon: <LineChart className="w-8 h-8 text-blue-500" />,
              title: "Real-time Analytics",
              description: "Monitor and analyze data as it happens",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg transform-gpu"
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2 text-gray-900"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
