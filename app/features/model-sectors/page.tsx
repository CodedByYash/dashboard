"use client";

import { motion } from "framer-motion";
import {
  Hospital,
  Building2,
  Car,
  Shield,
  Network,
  Cpu,
  Lock,
  Zap,
  Smartphone,
} from "lucide-react";

const modelArchitecture = [
  {
    icon: Network,
    title: "Source Network Architecture",
    description:
      "Multi-layer neural network with feature extraction capabilities",
    details: [
      "Input Layer (43 features) → 256 neurons",
      "Hidden Layer 1: 256 → 128 neurons with ReLU",
      "Hidden Layer 2: 128 → 64 neurons with ReLU",
      "Output Layer: Binary classification",
      "Dropout (0.3) for regularization",
    ],
  },
  {
    icon: Lock,
    title: "Defense Mechanism",
    description: "Feature Randomization Defense with SVM classifier",
    details: [
      "Random feature subset selection",
      "Dynamic feature space transformation",
      "RBF-kernel SVM for robust classification",
      "Adaptive defense against various attacks",
    ],
  },
];

const sectors = [
  {
    icon: Hospital,
    title: "Healthcare Sector",
    description: "Protecting medical AI systems from adversarial manipulation",
    details: [
      "Medical Image Analysis: 97.64% accuracy with randomized defense",
      "Feature Extraction: 256-dimensional representation",
      "Attack Resistance: 99.94% against C&W attacks",
      "Real-time Defense: <2 minutes processing time",
    ],
    color: "from-pink-500/10 to-red-500/10",
  },
  {
    icon: Building2,
    title: "Finance Sector",
    description: "Securing financial transaction analysis systems",
    details: [
      "Transaction Processing: 43-feature input analysis",
      "Fraud Detection: 97% base accuracy",
      "Defense Layer: Feature randomization with 50% subset",
      "Attack Mitigation: 74.35% accuracy under FGSM",
    ],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Car,
    title: "Autonomous Vehicles",
    description: "Enhancing robustness of vision systems",
    details: [
      "Sensor Data Processing: Multi-layer feature extraction",
      "Real-time Defense: Dropout-based regularization",
      "Attack Resistance: 68.39% under PGD attacks",
      "Adaptive Protection: SVM-based classification",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat detection and mitigation",
    details: [
      "Network Traffic Analysis: 43 feature vectors",
      "Threat Detection: 97.82% baseline accuracy",
      "Attack Defense: 8 different attack strategies",
      "Adaptive Response: Feature randomization defense",
    ],
    color: "from-purple-500/10 to-violet-500/10",
  },
];

export default function ModelSectorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-800 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Model Architecture & Sector Applications
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            Our advanced neural network architecture with feature randomization
            defense, adapted for various sectors with specific security
            requirements.
          </p>

          {/* Model Architecture Section */}
          <div className="mb-16 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Core Architecture
            </h2>
            {modelArchitecture.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <component.icon className="w-6 h-6 text-gray-800 dark:text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {component.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {component.description}
                    </p>
                    <ul className="space-y-2">
                      {component.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sector Applications */}
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Sector-Specific Applications
          </h2>
          <div className="space-y-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                         border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${sector.color}`}
                  >
                    <sector.icon className="w-6 h-6 text-gray-800 dark:text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {sector.description}
                    </p>
                    <ul className="space-y-2">
                      {sector.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
