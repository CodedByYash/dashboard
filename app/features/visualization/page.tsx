"use client";

import { motion } from "framer-motion";
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// Sample data - replace with your actual data
const attackData = [
  { name: "FGSM", success: 65, detection: 85, accuracy: 78 },
  { name: "PGD", success: 45, detection: 92, accuracy: 88 },
  { name: "DeepFool", success: 55, detection: 88, accuracy: 82 },
  { name: "CW", success: 70, detection: 80, accuracy: 75 },
];

const timeSeriesData = [
  { time: "0s", normal: 95, adversarial: 92 },
  { time: "10s", normal: 94, adversarial: 88 },
  { time: "20s", normal: 96, adversarial: 85 },
  { time: "30s", normal: 93, adversarial: 82 },
  { time: "40s", normal: 95, adversarial: 78 },
];

const radarData = [
  { metric: "Accuracy", A: 90, B: 75 },
  { metric: "Speed", A: 85, B: 88 },
  { metric: "Robustness", A: 92, B: 70 },
  { metric: "Reliability", A: 88, B: 72 },
  { metric: "Efficiency", A: 87, B: 80 },
];

export default function VisualizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-800 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Interactive Data Visualization
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
            Explore our model's performance through interactive charts and
            real-time data visualization.
          </p>

          <div className="space-y-12">
            {/* Attack Performance Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                       border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Attack Detection Performance
              </h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer>
                  <BarChart data={attackData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="success"
                      fill="#4f46e5"
                      name="Attack Success Rate"
                    />
                    <Bar
                      dataKey="detection"
                      fill="#06b6d4"
                      name="Detection Rate"
                    />
                    <Bar
                      dataKey="accuracy"
                      fill="#8b5cf6"
                      name="Model Accuracy"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Real-time Performance Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                       border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Real-time Performance Monitoring
              </h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer>
                  <LineChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="normal"
                      stroke="#4f46e5"
                      name="Normal Samples"
                    />
                    <Line
                      type="monotone"
                      dataKey="adversarial"
                      stroke="#06b6d4"
                      name="Adversarial Samples"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Model Comparison Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm
                       border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Model Comparison
              </h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Protected Model"
                      dataKey="A"
                      stroke="#4f46e5"
                      fill="#4f46e5"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Base Model"
                      dataKey="B"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.3}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
