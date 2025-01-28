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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white overflow-hidden">
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
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Revolutionizing Supply Chains with
            <motion.span
              className="text-blue-500 dark:text-blue-400  inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {" "}
              AI-Driven Precision
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-l text-gray-900 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Cognitreez delivers advanced supply chain solutions using AI and
            machine learning. We help businesses optimize operations, cut costs,
            and improve efficiency. Bridging research with real-world
            applications, we transform supply chains.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <motion.span
                className="absolute inset-0 bg-white dark:bg-gray-100  opacity-20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-500 text-blue-500 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold relative overflow-hidden group"
              onClick={() => {
                const element = document.getElementById("solutions");
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <motion.span
                className="absolute inset-0 bg-blue-50 dark:bg-blue-900 opacity-0 group-hover:opacity-20"
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
              title: "Supply Chain Optimization",
              description:
                "Streamline your operations and reduce costs using AI and machine learning technologies.",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
              title: "AI-Driven Insights",
              description:
                "Empower your business with actionable insights that bridge the gap between research and real-world applications.",
            },
            {
              icon: <LineChart className="w-8 h-8 text-blue-500" />,
              title: "Operational Efficiency",
              description:
                "Transform supply chain processes to drive efficiency and achieve measurable results.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform-gpu"
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
