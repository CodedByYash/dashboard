"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Zap,
  Target,
  Crosshair,
  Binary,
  Network,
  Brain,
  Shield,
} from "lucide-react";

const attacks = [
  {
    icon: Zap,
    name: "FGSM (Fast Gradient Sign Method)",
    description:
      "A fast, one-step attack that perturbs images in the direction of the gradient of the loss function.",
    details: [
      "Creates adversarial examples by using the sign of the gradient",
      "Single-step perturbation makes it computationally efficient",
      "Effective for quick testing of model robustness",
    ],
    color: "from-yellow-500/10 to-orange-500/10",
    borderColor: "hover:border-yellow-500/50",
  },
  {
    icon: Target,
    name: "I-FGSM (Iterative FGSM)",
    description:
      "An iterative version of FGSM that applies smaller perturbations over multiple steps.",
    details: [
      "More refined perturbations compared to FGSM",
      "Better success rate in fooling models",
      "Allows for fine-tuned control over attack strength",
    ],
    color: "from-red-500/10 to-pink-500/10",
    borderColor: "hover:border-red-500/50",
  },
  {
    icon: Crosshair,
    name: "PGD (Projected Gradient Descent)",
    description:
      "A powerful iterative attack that projects perturbations onto an ε-ball to maintain visual similarity.",
    details: [
      "Considered one of the strongest first-order attacks",
      "Maintains perturbation constraints through projection",
      "Often used as a benchmark for model robustness",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-500/50",
  },
  {
    icon: Binary,
    name: "BIM (Basic Iterative Method)",
    description:
      "Similar to I-FGSM, applies FGSM multiple times with small step size and clips pixel values.",
    details: [
      "More refined adversarial examples than FGSM",
      "Controls perturbation magnitude at each step",
      "Better success rate while maintaining visual similarity",
    ],
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "hover:border-green-500/50",
  },
  {
    icon: Network,
    name: "L-BFGS (Limited-memory BFGS)",
    description:
      "An optimization-based attack that finds minimal perturbations using the L-BFGS algorithm.",
    details: [
      "Generates high-quality adversarial examples",
      "Focuses on finding minimal perturbations",
      "Computationally more intensive than gradient-based methods",
    ],
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "hover:border-purple-500/50",
  },
  {
    icon: AlertTriangle,
    name: "JSMA (Jacobian-based Saliency Map Attack)",
    description:
      "Computes a saliency map to identify pixels that have the most significant impact on classification.",
    details: [
      "Highly targeted attack method",
      "Modifies only the most influential pixels",
      "Effective for understanding model vulnerabilities",
    ],
    color: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-500/50",
  },
  {
    icon: Brain,
    name: "DeepFool",
    description:
      "Iteratively finds the nearest decision boundary and generates minimal perturbations.",
    details: [
      "Produces minimal perturbations",
      "Geometrically optimized approach",
      "High success rate with small visual changes",
    ],
    color: "from-indigo-500/10 to-blue-500/10",
    borderColor: "hover:border-indigo-500/50",
  },
  {
    icon: Shield,
    name: "C&W (Carlini & Wagner)",
    description:
      "A set of powerful attacks that optimize for different distance metrics (L0, L2, L∞).",
    details: [
      "Multiple attack variants for different scenarios",
      "Often bypasses defensive distillation",
      "Considered one of the strongest optimization-based attacks",
    ],
    color: "from-teal-500/10 to-green-500/10",
    borderColor: "hover:border-teal-500/50",
  },
];

export default function AttackMethodsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-800 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Adversarial Attack Methods
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-16 text-center max-w-3xl mx-auto">
            Explore different types of adversarial attacks and understand how
            they challenge AI models.
          </p>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[50%] transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

            <div className="relative">
              {attacks.map((attack, index) => (
                <motion.div
                  key={attack.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center mb-24"
                >
                  {/* Left Side Content */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16">
                        <div className="ml-auto">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {attack.name}
                          </h2>
                          <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {attack.description}
                          </p>
                          <div className="space-y-3">
                            {attack.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${attack.color}`}
                                />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${attack.color} 
                          group-hover:scale-110 transition-transform duration-300`}
                        >
                          <attack.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div className="absolute left-1/2 -translate-x-1/2">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${attack.color} 
                          group-hover:scale-110 transition-transform duration-300`}
                        >
                          <attack.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                        </div>
                      </div>
                      <div className="w-1/2 pl-16">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {attack.name}
                          </h2>
                          <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {attack.description}
                          </p>
                          <div className="space-y-3">
                            {attack.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${attack.color}`}
                                />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
