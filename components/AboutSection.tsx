"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Eye, Radar } from "lucide-react";

const stats = [
  { value: "95%+", label: "Adversarial Detection Accuracy" },
  { value: "10+", label: "Attack Strategies Evaluated" },
  { value: "5000+", label: "Models Tested & Analyzed" },
  { value: "<100ms", label: "Evaluation Speed per Sample" },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Robust AI Security",
    description:
      "Our model enhances AI defenses, making them resistant to adversarial perturbations.",
  },
  {
    icon: BrainCircuit,
    title: "Deep Learning Explainability",
    description:
      "We provide insights into how AI models behave under adversarial scenarios.",
  },
  {
    icon: Eye,
    title: "Adversarial Attack Detection",
    description:
      "Detects and classifies adversarial examples with high precision across various domains.",
  },
  {
    icon: Radar,
    title: "Cross-Domain Validation",
    description:
      "Evaluated on multiple datasets including medical, finance, and autonomous systems.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 dark:from-background via-white dark:via-background to-gray-100 dark:to-background/80">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#88888808_1px,transparent_1px),linear-gradient(to_bottom,#88888808_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Soft glow effects */}
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

        {/* Top border gradient */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Strengthening AI
              </span>{" "}
              <span className="text-gray-900 dark:text-white">
                Against Adversarial Attacks
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Our research-driven approach enhances AI security by detecting and
              mitigating adversarial attacks, ensuring model robustness across
              multiple domains.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                  <div className="relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-100/80 dark:bg-blue-500/10 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our mission is to enhance AI security and model resilience,
              ensuring AI-driven systems remain reliable and trustworthy even
              under adversarial conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
