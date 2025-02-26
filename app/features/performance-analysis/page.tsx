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
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  ArrowUpRight,
  BarChart2,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity,
  Zap,
  Shield,
  TrendingUp,
  Target,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for performance metrics
const performanceData = [
  { month: "Jan", accuracy: 92.4, speed: 85.7, robustness: 78.9 },
  { month: "Feb", accuracy: 93.1, speed: 86.2, robustness: 79.5 },
  { month: "Mar", accuracy: 93.8, speed: 87.0, robustness: 80.2 },
  { month: "Apr", accuracy: 94.2, speed: 87.5, robustness: 81.0 },
  { month: "May", accuracy: 94.7, speed: 88.1, robustness: 82.3 },
  { month: "Jun", accuracy: 95.3, speed: 89.0, robustness: 83.5 },
  { month: "Jul", accuracy: 95.8, speed: 89.7, robustness: 84.8 },
  { month: "Aug", accuracy: 96.2, speed: 90.3, robustness: 86.1 },
  { month: "Sep", accuracy: 96.7, speed: 91.0, robustness: 87.4 },
  { month: "Oct", accuracy: 97.1, speed: 91.8, robustness: 88.9 },
  { month: "Nov", accuracy: 97.5, speed: 92.5, robustness: 90.2 },
  { month: "Dec", accuracy: 98.0, speed: 93.2, robustness: 91.5 },
];

const attackTypeData = [
  { name: "Evasion", value: 35 },
  { name: "Poisoning", value: 25 },
  { name: "Model Stealing", value: 15 },
  { name: "Model Inversion", value: 10 },
  { name: "Membership Inference", value: 15 },
];

const detectionRateData = [
  { name: "True Positive", value: 92 },
  { name: "False Negative", value: 8 },
];

const falseAlarmData = [
  { name: "True Negative", value: 95 },
  { name: "False Positive", value: 5 },
];

const radarData = [
  {
    metric: "Accuracy",
    value: 98,
  },
  {
    metric: "Speed",
    value: 93,
  },
  {
    metric: "Robustness",
    value: 91,
  },
  {
    metric: "Scalability",
    value: 89,
  },
  {
    metric: "Adaptability",
    value: 94,
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const metrics = [
  {
    title: "Detection Accuracy",
    value: "98.0%",
    change: "+0.5%",
    trend: "up",
    description: "Overall accuracy in detecting adversarial attacks",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "False Alarm Rate",
    value: "5.0%",
    change: "-0.7%",
    trend: "down",
    description: "Percentage of false positives in detection",
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Processing Time",
    value: "12ms",
    change: "-2ms",
    trend: "down",
    description: "Average time to process and detect attacks",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Attack Coverage",
    value: "94.5%",
    change: "+1.2%",
    trend: "up",
    description: "Percentage of known attack types covered",
    icon: Shield,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function PerformanceAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-gray-950/30"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Performance Analysis
              </span>{" "}
              <span className="text-gray-900 dark:text-white">& Insights</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Comprehensive metrics and analytics on our adversarial attack
              detection system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </h3>
                      <span
                        className={`ml-2 text-sm font-medium ${
                          metric.trend === "up"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {metric.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          >
            Performance Metrics Over Time
          </motion.h2>

          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="attacks">Attack Types</TabsTrigger>
              <TabsTrigger value="detection">Detection Rates</TabsTrigger>
            </TabsList>

            <TabsContent value="trends">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Performance Metrics Trend
                </h3>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="accuracy"
                        stroke="#8884d8"
                        strokeWidth={2}
                        name="Accuracy"
                      />
                      <Line
                        type="monotone"
                        dataKey="speed"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        name="Speed"
                      />
                      <Line
                        type="monotone"
                        dataKey="robustness"
                        stroke="#ffc658"
                        strokeWidth={2}
                        name="Robustness"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="attacks">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Attack Type Distribution
                  </h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={attackTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          {attackTypeData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    System Performance Radar
                  </h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <PolarRadiusAxis domain={[0, 100]} />
                        <Radar
                          name="Performance"
                          dataKey="value"
                          stroke="#8884d8"
                          fill="#8884d8"
                          fillOpacity={0.6}
                        />
                        <Tooltip formatter={(value) => `${value}%`} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="detection">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Detection Rate
                  </h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={detectionRateData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          <Cell fill="#4f46e5" />
                          <Cell fill="#ef4444" />
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    False Alarm Rate
                  </h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={falseAlarmData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                        >
                          <Cell fill="#22c55e" />
                          <Cell fill="#f97316" />
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            Key Insights
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Consistent Improvement
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our system has shown a steady improvement in detection accuracy,
                increasing from 92.4% to 98.0% over the past year.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Robust Against Evasion
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our system demonstrates exceptional resilience against evasion
                attacks, which constitute 35% of all attack attempts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Low Latency Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                With an average processing time of just 12ms, our system
                provides real-time protection without compromising performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Implement our advanced adversarial attack detection system and
              protect your AI models today.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-xl text-lg font-medium">
              Get Started
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
