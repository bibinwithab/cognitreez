import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/cognitreez/posts/?feedView=all",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Cognitreez</h3>
            <p className="text-gray-400 max-w-xs">
              Transforming data into actionable insights for businesses
              worldwide.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@cognitreez.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span>info@cognitreez.com</span>
              </motion.a>
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                <span>Novi, Michigan</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 dark:bg-gray-900 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Cognitreez. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
