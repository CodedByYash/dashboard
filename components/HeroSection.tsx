"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, LineChart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements - Theme Aware */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-background to-background dark:from-blue-500/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Adversarial Attack
              </span>{" "}
              <span className="text-foreground">Detection Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Protect your AI models with real-time detection and visualization
              of adversarial attacks.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-8 py-6 rounded-xl flex items-center gap-2 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground px-8 py-6 rounded-xl flex items-center gap-2 text-lg font-semibold"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl"
          >
            {[
              {
                icon: Shield,
                title: "Robust Adversarial Defense",
                description:
                  "Detects and mitigates adversarial attacks with adaptive strategies.",
              },
              {
                icon: LineChart,
                title: "Deep Model Analysis",
                description:
                  "Evaluates model robustness and detects attack vulnerabilities in real time.",
              },
              {
                icon: Zap,
                title: "Automated Threat Mitigation",
                description:
                  "Deploys countermeasures to neutralize adversarial perturbations effectively.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/50 dark:bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
