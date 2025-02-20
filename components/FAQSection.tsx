"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is adversarial attack detection?",
    answer:
      "It is the process of identifying and mitigating malicious modifications to AI inputs that trick models into making incorrect predictions.",
  },
  {
    question: "Which industries benefit from this model?",
    answer:
      "Industries like healthcare, finance, cybersecurity, and autonomous vehicles benefit from adversarial attack detection models.",
  },
  {
    question: "Is this model open-source?",
    answer:
      "Yes, our model is open-source, allowing researchers and developers to enhance AI security together.",
  },
  {
    question: "How can I contact for collaboration?",
    answer:
      "You can reach out through the contact form or email provided in the Call to Action section.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute w-[500px] h-[500px] -right-40 top-0 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -left-40 bottom-0 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Frequently Asked
            </span>{" "}
            <span className="text-white">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get answers to common questions about our adversarial attack
            detection system
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full p-6 text-left bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Connector Line */}
              {index !== faqs.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -bottom-4 w-0.5 h-4 bg-gradient-to-b from-blue-500/20 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
