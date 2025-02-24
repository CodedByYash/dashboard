"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import {
  Shield,
  TrendingUp,
  Target,
  Zap,
  Menu,
  BarChart2,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Convert CSV data to chart format
const attackResults = [
  { attack: "FGSM", normal: 73.84, randomized: 74.35 },
  { attack: "I-FGSM", normal: 62.9, randomized: 68.29 },
  { attack: "BIM", normal: 62.9, randomized: 68.29 },
  { attack: "PGD", normal: 63.71, randomized: 68.39 },
  { attack: "DeepFool", normal: 57.99, randomized: 68.03 },
  { attack: "JSMA", normal: 67.69, randomized: 68.11 },
  { attack: "C&W", normal: 99.94, randomized: 99.36 },
  { attack: "L-BFGS", normal: 75.57, randomized: 75.4 },
];

const trainingResults = [
  { epoch: 1, accuracy: 95.13 },
  { epoch: 2, accuracy: 96.25 },
  { epoch: 3, accuracy: 96.72 },
  { epoch: 4, accuracy: 96.91 },
  { epoch: 5, accuracy: 97.08 },
  { epoch: 6, accuracy: 97.4 },
  { epoch: 7, accuracy: 97.54 },
  { epoch: 8, accuracy: 97.57 },
  { epoch: 9, accuracy: 97.6 },
  { epoch: 10, accuracy: 97.64 },
];

const metrics = [
  {
    title: "Best Defense Rate",
    value: "99.94%",
    subtitle: "Against C&W Attack",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Training Accuracy",
    value: "97.64%",
    subtitle: "Final Epoch",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Average Defense",
    value: "73.28%",
    subtitle: "Across All Attacks",
    icon: Target,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Defense Improvement",
    value: "+5.42%",
    subtitle: "With Randomization",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const attackOptions = [
  { id: "training", name: "Training Process", icon: Activity },
  { id: "comparison", name: "All Attacks Comparison", icon: BarChart2 },
  { id: "fgsm", name: "FGSM", icon: Shield },
  { id: "ifgsm", name: "I-FGSM", icon: Shield },
  { id: "bim", name: "BIM", icon: Shield },
  { id: "pgd", name: "PGD", icon: Shield },
  { id: "deepfool", name: "DeepFool", icon: Shield },
  { id: "jsma", name: "JSMA", icon: Shield },
  { id: "cw", name: "C&W", icon: Shield },
  { id: "lbfgs", name: "L-BFGS", icon: Shield },
];

export default function CybersecurityPage() {
  const [selectedAttack, setSelectedAttack] = useState("training");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getAttackMetrics = (attackId: string) => {
    if (attackId === "training") {
      return metrics;
    }

    if (attackId === "comparison") {
      const avgNormal =
        attackResults.reduce((sum, a) => sum + a.normal, 0) /
        attackResults.length;
      const avgRandomized =
        attackResults.reduce((sum, a) => sum + a.randomized, 0) /
        attackResults.length;

      return [
        {
          title: "Average Normal Defense",
          value: `${avgNormal.toFixed(2)}%`,
          subtitle: "Across All Attacks",
          icon: Shield,
          color: "text-blue-500",
          bgColor: "bg-blue-500/10",
        },
        {
          title: "Average Randomized Defense",
          value: `${avgRandomized.toFixed(2)}%`,
          subtitle: "Across All Attacks",
          icon: Target,
          color: "text-purple-500",
          bgColor: "bg-purple-500/10",
        },
        {
          title: "Overall Improvement",
          value: `${(avgRandomized - avgNormal).toFixed(2)}%`,
          subtitle: "Average Enhancement",
          icon: TrendingUp,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
        },
      ];
    }

    // Normalize attack names for comparison
    const normalizeString = (str: string) =>
      str
        .toLowerCase()
        .replace(/[-\s]/g, "")
        .replace("ifgsm", "ifgsm")
        .replace("c&w", "cw");

    const attack = attackResults.find(
      (a) => normalizeString(a.attack) === normalizeString(attackId)
    );

    if (!attack) return [];

    return [
      {
        title: "Normal Defense",
        value: `${attack.normal.toFixed(2)}%`,
        subtitle: "Without Randomization",
        icon: Shield,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Randomized Defense",
        value: `${attack.randomized.toFixed(2)}%`,
        subtitle: "With Randomization",
        icon: Target,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Improvement",
        value: `${(attack.randomized - attack.normal).toFixed(2)}%`,
        subtitle: "Defense Enhancement",
        icon: TrendingUp,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
    ];
  };

  const renderGraph = () => {
    if (selectedAttack === "training") {
      return (
        <ResponsiveContainer>
          <LineChart data={trainingResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="epoch" />
            <YAxis domain={[94, 98]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ fill: "#8b5cf6" }}
              name="Training Accuracy"
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (selectedAttack === "comparison") {
      return (
        <ResponsiveContainer>
          <BarChart data={attackResults}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attack" />
            <YAxis domain={[50, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="normal" name="Normal Defense" fill="#4f46e5" />
            <Bar
              dataKey="randomized"
              name="Randomized Defense"
              fill="#06b6d4"
            />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    const attackData = attackResults.filter((a) => {
      // Normalize both strings for comparison
      const normalizeString = (str: string) =>
        str
          .toLowerCase()
          .replace(/[-\s]/g, "") // Remove hyphens and spaces
          .replace("ifgsm", "ifgsm") // Keep IFGSM as is
          .replace("c&w", "cw"); // Normalize C&W to CW

      const attackName = normalizeString(a.attack);
      const selected = normalizeString(selectedAttack);

      return attackName === selected;
    });

    if (attackData.length > 0) {
      const attack = attackData[0];
      const difference = Math.abs(attack.normal - attack.randomized);

      // If difference is small, use a zoomed-in view
      if (difference < 5) {
        const avgValue = (attack.normal + attack.randomized) / 2;
        const yAxisMin = Math.floor(avgValue - 5);
        const yAxisMax = Math.ceil(avgValue + 5);

        return (
          <ResponsiveContainer>
            <BarChart data={attackData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attack" />
              <YAxis
                domain={[yAxisMin, yAxisMax]}
                tickFormatter={(value) => value.toFixed(2) + "%"}
              />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
              <Bar dataKey="normal" name="Normal Defense" fill="#4f46e5">
                <LabelList
                  dataKey="normal"
                  position="top"
                  formatter={(value: number) => value.toFixed(2) + "%"}
                />
              </Bar>
              <Bar
                dataKey="randomized"
                name="Randomized Defense"
                fill="#06b6d4"
              >
                <LabelList
                  dataKey="randomized"
                  position="top"
                  formatter={(value: number) => value.toFixed(2) + "%"}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      }
    }

    // Default view for larger differences
    return (
      <ResponsiveContainer>
        <BarChart data={attackData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attack" />
          <YAxis domain={[50, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="normal" name="Normal Defense" fill="#4f46e5" />
          <Bar dataKey="randomized" name="Randomized Defense" fill="#06b6d4" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: isSidebarOpen ? 0 : -250 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed h-screen w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                     border-r border-gray-200 dark:border-gray-700 pt-24 z-40"
        >
          {/* Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-28 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                       border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-6rem)]">
            {attackOptions.map((option) => (
              <Button
                key={option.id}
                variant={selectedAttack === option.id ? "default" : "ghost"}
                className="w-full justify-start transition-colors flex items-center"
                onClick={() => setSelectedAttack(option.id)}
              >
                <option.icon className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate">{option.name}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div
          className={`flex-1 ${
            isSidebarOpen ? "ml-64" : ""
          } transition-all duration-300`}
        >
          <div className="container px-4 pt-24 pb-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {getAttackMetrics(selectedAttack).map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {metric.title}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">
                        {metric.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {selectedAttack === "training"
                  ? "Training Progress"
                  : selectedAttack === "comparison"
                  ? "All Attacks Comparison"
                  : "Attack Analysis"}
              </h2>
              <div className="h-[400px]">{renderGraph()}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
