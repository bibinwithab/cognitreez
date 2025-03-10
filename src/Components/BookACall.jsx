import { motion } from "motion/react";
import { useState } from "react";
import { Clock, Calendar, Phone } from "lucide-react";

const BookACall = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = generateMailtoLink(formData);
    window.location.href = mailtoLink;
  };

  const generateMailtoLink = ({ name, company, date, time }) => {
    const recipient = "marketing@cognitreez.com";
    const subject = encodeURIComponent("Schedule a Call with Cognitreez");
    const body = encodeURIComponent(
      `Dear Cognitreez Team,
I hope you are doing well. My name is ${name}, and I am representing ${company}. I would like to schedule a call with your team to discuss potential collaboration opportunities.
Details of the Call:
• Preferred Date: ${date}
• Preferred Time: ${time}
Please confirm the availability for the above-mentioned time slot, or suggest an alternative that works for you.
Looking forward to the conversation.
Best regards,
Looking forward to the conversation.
Best regards,
${name}
${company}
`
    );

    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };
  const sections = [
    {
      title: "Our Purpose",
      content:
        "At Cognitreez, we harness AI to redefine supply chain operations. Our mission is to make cutting-edge solutions accessible, ensuring efficiency, scalability, and ease of use. Committed to innovation, we empower businesses with intelligent, data-driven strategies, driving the future of supply chain excellence.",
    },
    {
      title: "Our Team",
      content:
        "Our team brings together specialists in analytics, data science, and business strategy, combining expertise to deliver intelligent, data-driven solutions for real-world impact. With a passion for innovation, we transform complex challenges into actionable insights that drive growth and efficiency.",
    },
    {
      title: "Our Values",
      content:
        "Our values are the foundation of everything we do. We are committed to innovation, continuously pushing boundaries to deliver cutting-edge, future-ready solutions. Guided by integrity, we uphold transparency and ethical AI practices in every aspect of our work. We believe in the power of collaboration, working together with partners to drive collective success.",
    },
    {
      title: "Our Research",
      content:
        "Innovation is at the core of everything we do. Our research focuses on leveraging AI, data science, and advanced analytics to solve real-world challenges. We explore cutting-edge methodologies to optimize decision-making, enhance automation, and drive efficiency across industries",
    },
  ];
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto bg-gray-50 dark:bg-gray-900 mb-12 "
        >
          <div className="overflow-x-scroll relative">
            <div className="flex px-4 pb-8 w-max mx-auto">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`w-[400px] flex-shrink-0 snap-center ${
                    index !== sections.length - 1
                      ? "border-r border-gray-300 dark:border-gray-600"
                      : ""
                  }`}
                >
                  <div className="pr-8 pl-8 text-left">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-l text-gray-600 dark:text-gray-300">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Schedule a free consultation with our analytics experts
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-3xl mx-auto overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
              {[
                {
                  icon: <Clock className="w-5 h-5" />,
                  text: "30-minute strategy session",
                },
                {
                  icon: <Calendar className="w-5 h-5" />,
                  text: "Personalized action plan",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  text: "Direct access to experts",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 mb-4"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="company"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="date"
                    name="date"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="time"
                    name="time"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={handleChange}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-blue-600 transition-colors"
                >
                  Schedule Call
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookACall;
