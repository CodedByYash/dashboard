"use client";

import { motion } from "framer-motion";
import { Hospital, Building2, Car, Shield } from "lucide-react";

const sectors = [
  {
    icon: Hospital,
    title: "Healthcare Sector",
    description:
      "In healthcare, adversarial attacks can manipulate medical image diagnostics, potentially leading to misdiagnosis.",
    details: [
      "Medical Image Analysis: Protection against perturbations in X-rays, MRIs, and CT scans",
      "Diagnostic Systems: Ensuring reliable disease detection and classification",
      "Patient Data Security: Safeguarding against data poisoning attacks",
    ],
    color: "from-pink-500/10 to-red-500/10",
  },
  {
    icon: Building2,
    title: "Finance Sector",
    description:
      "Financial systems require robust protection against adversarial attacks that could manipulate fraud detection systems.",
    details: [
      "Fraud Detection: Enhanced security for transaction monitoring",
      "Risk Assessment: Protected credit scoring systems",
      "Market Analysis: Secure trading pattern recognition",
    ],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Car,
    title: "Autonomous Vehicles",
    description:
      "Protecting vision systems in autonomous vehicles from attacks that could compromise safety.",
    details: [
      "Object Detection: Robust identification of road signs and obstacles",
      "Path Planning: Secure navigation decision-making",
      "Sensor Fusion: Protected multi-sensor data integration",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Strengthening AI-based security systems against sophisticated adversarial threats.",
    details: [
      "Malware Detection: Enhanced recognition of malicious patterns",
      "Network Security: Protected intrusion detection systems",
      "Threat Analysis: Robust security event classification",
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
              Sector-Specific Model Protection
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            Our adversarial attack detection system is tailored for different
            sectors, each with unique challenges and security requirements.
          </p>

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
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {sector.title}
                    </h2>
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
