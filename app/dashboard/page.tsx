"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Hospital, Building2, Car, Shield } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  {
    title: "Healthcare",
    description: "Monitor and analyze healthcare AI model security",
    icon: Hospital,
    color:
      "from-pink-500/10 to-red-500/10 hover:from-pink-500/20 hover:to-red-500/20",
    borderColor: "hover:border-pink-500/50",
  },
  {
    title: "Finance",
    description: "Protect financial models from adversarial attacks",
    icon: Building2,
    color:
      "from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20",
    borderColor: "hover:border-green-500/50",
  },
  {
    title: "Autonomous Vehicles",
    description: "Secure autonomous vehicle AI systems",
    icon: Car,
    color:
      "from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
  },
  {
    title: "Cybersecurity",
    description: "Enhance AI-driven security system protection",
    icon: Shield,
    color:
      "from-purple-500/10 to-violet-500/10 hover:from-purple-500/20 hover:to-violet-500/20",
    borderColor: "hover:border-purple-500/50",
  },
];

export default function DashboardPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Security Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor and analyze adversarial attacks across different sectors
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative group cursor-pointer`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sector.color} rounded-2xl transition-all duration-300`}
              />
              <div
                className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 
                dark:border-gray-800 rounded-2xl p-6 transition-all duration-300 ${sector.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-800 
                    to-white dark:to-gray-900 shadow-lg"
                  >
                    <sector.icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
