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
  AreaChart,
  Area,
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
  Shield,
  TrendingUp,
  Target,
  Zap,
  Menu,
  BarChart2,
  Activity,
  PieChart as PieChartIcon,
  RadarIcon,
  LineChart as LineChartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

// Convert CSV data to chart format
const attackResults = [
  { attack: "FGSM", normal: 40.9, randomized: 48.05 },
  { attack: "I-FGSM", normal: 33.11, randomized: 45.45 },
  { attack: "BIM", normal: 33.11, randomized: 45.45 },
  { attack: "PGD", normal: 35.06, randomized: 51.29 },
  { attack: "DeepFool", normal: 48.05, randomized: 65.58 },
  { attack: "JSMA", normal: 62.33, randomized: 69.48 },
  { attack: "C&W", normal: 50.0, randomized: 63.63 },
  { attack: "L-BFGS", normal: 33.06, randomized: 63.63 },
];

const trainingResults = [
  { epoch: 1, accuracy: 70.19 },
  { epoch: 2, accuracy: 76.71 },
  { epoch: 3, accuracy: 77.52 },
  { epoch: 4, accuracy: 78.82 },
  { epoch: 5, accuracy: 78.66 },
  { epoch: 6, accuracy: 77.19 },
  { epoch: 7, accuracy: 78.33 },
  { epoch: 8, accuracy: 79.31 },
  { epoch: 9, accuracy: 79.8 },
  { epoch: 10, accuracy: 80.78 },
  { epoch: 11, accuracy: 79.96 },
  { epoch: 12, accuracy: 80.45 },
  { epoch: 13, accuracy: 79.64 },
  { epoch: 14, accuracy: 80.29 },
  { epoch: 15, accuracy: 79.64 },
];

const metrics = [
  {
    title: "Best Defense Rate",
    value: "69.48%",
    subtitle: "Against JSMA Attack",
    icon: Shield,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Training Accuracy",
    value: "80.78%",
    subtitle: "Final Epoch",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Average Defense",
    value: "69.07%",
    subtitle: "Across All Attacks",
    icon: Target,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Defense Improvement",
    value: "+4.85%",
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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const chartTypes = {
  training: [
    { id: "line", name: "Line Chart", icon: LineChartIcon },
    { id: "area", name: "Area Chart", icon: Activity },
    { id: "radar", name: "Radar Progress", icon: RadarIcon },
  ],
  comparison: [
    { id: "bar", name: "Bar Comparison", icon: BarChart2 },
    { id: "radar", name: "Radar Analysis", icon: RadarIcon },
    { id: "pie", name: "Distribution", icon: PieChartIcon },
  ],
  individual: [
    { id: "bar", name: "Bar Comparison", icon: BarChart2 },
    { id: "radar", name: "Radar Analysis", icon: RadarIcon },
    { id: "pie", name: "Pie Chart", icon: PieChartIcon },
    { id: "area", name: "Area Chart", icon: Activity },
  ],
};

interface HealthcareData {
  category: string;
  baseline: number;
  enhanced: number;
}

interface MetricData {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export default function FinancePage() {
  const [selectedAttack, setSelectedAttack] = useState("training");
  const [selectedChartType, setSelectedChartType] = useState("line");
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

  const renderTrainingGraph = (chartType: string) => {
    switch (chartType) {
      case "area":
        return (
          <ResponsiveContainer>
            <AreaChart data={trainingResults}>
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" />
              <YAxis domain={[85, 100]} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorAccuracy)"
                name="Training Accuracy"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case "radar":
        return (
          <ResponsiveContainer>
            <RadarChart data={trainingResults}>
              <PolarGrid />
              <PolarAngleAxis dataKey="epoch" />
              <PolarRadiusAxis domain={[85, 100]} />
              <Radar
                name="Accuracy"
                dataKey="accuracy"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer>
            <LineChart data={trainingResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" />
              <YAxis domain={[85, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ fill: "#8884d8" }}
                name="Training Accuracy"
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  const renderComparisonGraph = (chartType: string) => {
    switch (chartType) {
      case "radar":
        const radarData = attackResults.map((attack) => ({
          attack: attack.attack,
          normal: attack.normal,
          randomized: attack.randomized,
        }));
        return (
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="attack" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name="Normal Defense"
                dataKey="normal"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
              <Radar
                name="Randomized Defense"
                dataKey="randomized"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      case "pie":
        const pieData = attackResults.map((attack) => ({
          name: attack.attack,
          value: attack.randomized,
        }));
        return (
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer>
            <BarChart data={attackResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attack" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="normal" name="Normal Defense" fill="#4f46e5">
                <LabelList position="top" />
              </Bar>
              <Bar
                dataKey="randomized"
                name="Randomized Defense"
                fill="#06b6d4"
              >
                <LabelList position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  const renderIndividualAttackGraph = (
    chartType: string,
    attackData: any[]
  ) => {
    if (attackData.length === 0) return null;

    switch (chartType) {
      case "radar":
        // Transform data for radar chart
        const radarData = [
          {
            metric: "Normal Defense",
            value: attackData[0].normal,
          },
          {
            metric: "Randomized Defense",
            value: attackData[0].randomized,
          },
        ];

        return (
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis domain={[0, 100]} />
              <Radar
                name={`${attackData[0].attack} Defense`}
                dataKey="value"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );

      case "pie":
        // Transform data for pie chart
        const pieData = [
          { name: "Normal Defense", value: attackData[0].normal },
          { name: "Randomized Defense", value: attackData[0].randomized },
        ];

        return (
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(2)}%`
                }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      case "area":
        // Transform data for area chart
        const areaData = [
          {
            category: "Defense Rate",
            normal: attackData[0].normal,
            randomized: attackData[0].randomized,
          },
        ];

        return (
          <ResponsiveContainer>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="colorRandomized"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
              <Area
                type="monotone"
                dataKey="normal"
                stroke="#4f46e5"
                fillOpacity={1}
                fill="url(#colorNormal)"
                name="Normal Defense"
              />
              <Area
                type="monotone"
                dataKey="randomized"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorRandomized)"
                name="Randomized Defense"
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        // Bar chart (default)
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
                <Tooltip
                  formatter={(value: number) => value.toFixed(2) + "%"}
                />
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

        // Default view for larger differences
        return (
          <ResponsiveContainer>
            <BarChart data={attackData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="attack" />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
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
  };

  const renderGraph = () => {
    if (selectedAttack === "training") {
      return renderTrainingGraph(selectedChartType);
    }
    if (selectedAttack === "comparison") {
      return renderComparisonGraph(selectedChartType);
    }

    // Individual attack visualization
    const attackData = attackResults.filter((a) => {
      const normalizeString = (str: string) =>
        str
          .toLowerCase()
          .replace(/[-\s]/g, "")
          .replace("ifgsm", "ifgsm")
          .replace("c&w", "cw");

      const attackName = normalizeString(a.attack);
      const selected = normalizeString(selectedAttack);

      return attackName === selected;
    });

    if (attackData.length === 0) return null;

    return renderIndividualAttackGraph(selectedChartType, attackData);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 dark:from-gray-900 dark:via-blue-900 dark:to-blue-950">
      <div className="absolute inset-0 bg-grid-white/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-gray-900/50"></div>
      <div className="flex relative">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: isSidebarOpen ? 0 : -250 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed h-screen w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl 
                     border-r border-gray-200 dark:border-gray-700 pt-24 z-40 shadow-lg"
        >
          {/* Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-28 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl 
                       border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-6rem)]">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Analysis Type
              </h3>
              {attackOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={selectedAttack === option.id ? "default" : "ghost"}
                  className="w-full justify-start transition-colors flex items-center mb-1"
                  onClick={() => {
                    setSelectedAttack(option.id);
                    setSelectedChartType(
                      option.id === "training" ? "line" : "bar"
                    );
                  }}
                >
                  <option.icon className="mr-3 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{option.name}</span>
                </Button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Chart Type
              </h3>
              {(selectedAttack === "training"
                ? chartTypes.training
                : selectedAttack === "comparison"
                ? chartTypes.comparison
                : chartTypes.individual
              ).map((chart) => (
                <Button
                  key={chart.id}
                  variant={selectedChartType === chart.id ? "default" : "ghost"}
                  className="w-full justify-start transition-colors flex items-center mb-1"
                  onClick={() => setSelectedChartType(chart.id)}
                >
                  <chart.icon className="mr-3 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{chart.name}</span>
                </Button>
              ))}
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {getAttackMetrics(selectedAttack).map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
              className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {selectedAttack === "training"
                  ? "Training Progress"
                  : selectedAttack === "comparison"
                  ? "All Attacks Comparison"
                  : "Attack Analysis"}
              </h2>
              <div className="h-[500px]">{renderGraph()}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
