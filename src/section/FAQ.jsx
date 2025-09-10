import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Daily Spend free to use?",
    answer: "Yes! Daily Spend has a free version with all the core features. You can also upgrade to premium plans for advanced features like unlimited categories and cloud sync."
  },
  {
    question: "Do I need to create an account?",
    answer: "Yes, you can create a free account. You can start tracking expenses right and you can sync across devices."
  },
  {
    question: "Is my data safe and private?",
    answer: "Absolutely. We take privacy seriously. Your data is stored securely, and we never sell or share your personal information."
  },
  {
    question: "Can I use Daily Spend on multiple devices?",
    answer: "Yes. With sync enabled, you can access your data across your phone, tablet, and other devices seamlessly."
  },
  {
    question: "Can I export my expense data?",
    answer: "Yes. Daily Spend lets you export your expenses in PDF, so you can keep your records safe."
  },
  {
    question: "Does the app work offline?",
    answer: "Yes! You can log your expenses without internet. Your data will sync automatically when you’re back online."
  },
  {
    question: "How many downloads does Daily Spend have?",
    answer: "Daily Spend has been trusted by 95,000+ users worldwide and holds a 4.6★ rating on the App Store."
  },
  {
    question: "I’m new to budgeting. Will Daily Spend help me?",
    answer: "Definitely! Daily Spend is designed to be beginner-friendly. You can start by simply logging your expenses, and over time, you’ll get insights and budgets to help you save more."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 md:px-12 lg:px-20 text-black flex flex-col gap-4">
      <motion.p className="text-xl font-semibold text-center text-gray-600"
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2}}
      >FAQ</motion.p>

      <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial = {{opacity: 0, y: 100}}
        whileInView = {{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
      >Everything you need to know</motion.h2>
      <div className="flex flex-col gap-10">
        {faqs.map((faq, index) => (
          <motion.div key={index} className="border-b border-gray-300 pb-4 cursor-pointer" onClick={() => toggleFAQ(index)}
            initial = {{opacity: 0, y: 100}}
            whileInView = {{opacity: 1, y: 0}}
            viewport={{ once: true }}
            transition = {{type: 'spring', stiffness: 100, damping: 12, delay: 0.2 * index}}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-800" />
              )}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQ