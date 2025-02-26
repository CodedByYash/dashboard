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
  Car,
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

// Add these type definitions at the top of the file after the imports
interface ScenarioData {
  scenario: string;
  baseline: number;
  enhanced: number;
}

// Mock data for autonomous vehicle metrics
const trainingResults = [
  { epoch: 1, accuracy: 88.5, safety: 85.2 },
  { epoch: 2, accuracy: 90.3, safety: 87.8 },
  { epoch: 3, accuracy: 91.8, safety: 89.4 },
  { epoch: 4, accuracy: 93.2, safety: 90.9 },
  { epoch: 5, accuracy: 94.5, safety: 92.3 },
  { epoch: 6, accuracy: 95.7, safety: 93.6 },
  { epoch: 7, accuracy: 96.4, safety: 94.8 },
  { epoch: 8, accuracy: 97.1, safety: 95.9 },
  { epoch: 9, accuracy: 97.8, safety: 96.7 },
  { epoch: 10, accuracy: 98.3, safety: 97.5 },
];

const scenarioResults = [
  { scenario: "Urban Driving", baseline: 92.5, enhanced: 97.8 },
  { scenario: "Highway", baseline: 95.8, enhanced: 98.9 },
  { scenario: "Weather Conditions", baseline: 88.4, enhanced: 94.6 },
  { scenario: "Night Driving", baseline: 89.2, enhanced: 95.8 },
  { scenario: "Traffic Congestion", baseline: 91.3, enhanced: 96.7 },
  { scenario: "Pedestrian Areas", baseline: 93.7, enhanced: 98.2 },
  { scenario: "Construction Zones", baseline: 87.5, enhanced: 93.9 },
  { scenario: "Parking", baseline: 94.8, enhanced: 98.5 },
];

const metrics = [
  {
    title: "Best Performance",
    value: "98.9%",
    subtitle: "Highway Scenarios",
    icon: Car,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Safety Rating",
    value: "97.5%",
    subtitle: "Final Assessment",
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Average Success",
    value: "96.8%",
    subtitle: "Across Scenarios",
    icon: Target,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Performance Gain",
    value: "+5.7%",
    subtitle: "With Enhancement",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const scenarioOptions = [
  { id: "training", name: "Training Progress", icon: Activity },
  { id: "comparison", name: "All Scenarios Comparison", icon: BarChart2 },
  { id: "urban", name: "Urban Driving", icon: Car },
  { id: "highway", name: "Highway", icon: Car },
  { id: "weather", name: "Weather Conditions", icon: Car },
  { id: "night", name: "Night Driving", icon: Car },
  { id: "traffic", name: "Traffic Congestion", icon: Car },
  { id: "pedestrian", name: "Pedestrian Areas", icon: Car },
  { id: "construction", name: "Construction Zones", icon: Car },
  { id: "parking", name: "Parking", icon: Car },
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

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

export default function AutonomousVehiclesPage() {
  const [selectedScenario, setSelectedScenario] = useState("training");
  const [selectedChartType, setSelectedChartType] = useState("line");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getScenarioMetrics = (scenarioId: string) => {
    if (scenarioId === "training") {
      return metrics;
    }

    if (scenarioId === "comparison") {
      const avgBaseline =
        scenarioResults.reduce((sum, s) => sum + s.baseline, 0) /
        scenarioResults.length;
      const avgEnhanced =
        scenarioResults.reduce((sum, s) => sum + s.enhanced, 0) /
        scenarioResults.length;

      return [
        {
          title: "Average Baseline",
          value: `${avgBaseline.toFixed(2)}%`,
          subtitle: "Across All Scenarios",
          icon: Car,
          color: "text-blue-500",
          bgColor: "bg-blue-500/10",
        },
        {
          title: "Average Enhanced",
          value: `${avgEnhanced.toFixed(2)}%`,
          subtitle: "Across All Scenarios",
          icon: Target,
          color: "text-purple-500",
          bgColor: "bg-purple-500/10",
        },
        {
          title: "Overall Improvement",
          value: `${(avgEnhanced - avgBaseline).toFixed(2)}%`,
          subtitle: "Average Enhancement",
          icon: TrendingUp,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
        },
      ];
    }

    // Normalize scenario names for comparison
    const normalizeString = (str: string) =>
      str.toLowerCase().replace(/[-\s]/g, "");

    const scenario = scenarioResults.find(
      (s) => normalizeString(s.scenario) === normalizeString(scenarioId)
    );

    if (!scenario) return [];

    return [
      {
        title: "Baseline Performance",
        value: `${scenario.baseline.toFixed(2)}%`,
        subtitle: "Without Enhancement",
        icon: Car,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Enhanced Performance",
        value: `${scenario.enhanced.toFixed(2)}%`,
        subtitle: "With Enhancement",
        icon: Target,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Improvement",
        value: `${(scenario.enhanced - scenario.baseline).toFixed(2)}%`,
        subtitle: "Performance Gain",
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
                <linearGradient id="colorSafety" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="epoch" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorAccuracy)"
                name="Accuracy"
              />
              <Area
                type="monotone"
                dataKey="safety"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorSafety)"
                name="Safety"
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
              <PolarRadiusAxis domain={[80, 100]} />
              <Radar
                name="Accuracy"
                dataKey="accuracy"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Safety"
                dataKey="safety"
                stroke="#82ca9d"
                fill="#82ca9d"
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
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ fill: "#8884d8" }}
                name="Accuracy"
              />
              <Line
                type="monotone"
                dataKey="safety"
                stroke="#82ca9d"
                strokeWidth={2}
                dot={{ fill: "#82ca9d" }}
                name="Safety"
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  const renderComparisonGraph = (chartType: string) => {
    switch (chartType) {
      case "radar":
        return (
          <ResponsiveContainer>
            <RadarChart data={scenarioResults}>
              <PolarGrid />
              <PolarAngleAxis dataKey="scenario" />
              <PolarRadiusAxis domain={[80, 100]} />
              <Radar
                name="Baseline"
                dataKey="baseline"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
              <Radar
                name="Enhanced"
                dataKey="enhanced"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        );
      case "pie":
        const pieData = scenarioResults.map((scenario) => ({
          name: scenario.scenario,
          value: scenario.enhanced,
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
            <BarChart data={scenarioResults}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scenario" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="baseline" name="Baseline" fill="#4f46e5">
                <LabelList position="top" />
              </Bar>
              <Bar dataKey="enhanced" name="Enhanced" fill="#06b6d4">
                <LabelList position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  const renderIndividualScenarioGraph = (
    chartType: string,
    scenarioData: ScenarioData[]
  ) => {
    if (scenarioData.length === 0) return null;

    switch (chartType) {
      case "radar":
        const radarData = [
          {
            metric: "Baseline",
            value: scenarioData[0].baseline,
          },
          {
            metric: "Enhanced",
            value: scenarioData[0].enhanced,
          },
        ];

        return (
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis domain={[80, 100]} />
              <Radar
                name={`${scenarioData[0].scenario} Performance`}
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
        const pieData = [
          { name: "Baseline", value: scenarioData[0].baseline },
          { name: "Enhanced", value: scenarioData[0].enhanced },
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
        const areaData = [
          {
            category: "Performance",
            baseline: scenarioData[0].baseline,
            enhanced: scenarioData[0].enhanced,
          },
        ];

        return (
          <ResponsiveContainer>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEnhanced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[80, 100]} />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="#4f46e5"
                fillOpacity={1}
                fill="url(#colorBaseline)"
                name="Baseline"
              />
              <Area
                type="monotone"
                dataKey="enhanced"
                stroke="#06b6d4"
                fillOpacity={1}
                fill="url(#colorEnhanced)"
                name="Enhanced"
              />
            </AreaChart>
          </ResponsiveContainer>
        );

      default:
        const scenario = scenarioData[0];
        const difference = Math.abs(scenario.baseline - scenario.enhanced);

        if (difference < 5) {
          const avgValue = (scenario.baseline + scenario.enhanced) / 2;
          const yAxisMin = Math.floor(avgValue - 5);
          const yAxisMax = Math.ceil(avgValue + 5);

          return (
            <ResponsiveContainer>
              <BarChart data={scenarioData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" />
                <YAxis
                  domain={[yAxisMin, yAxisMax]}
                  tickFormatter={(value) => value.toFixed(2) + "%"}
                />
                <Tooltip
                  formatter={(value: number) => value.toFixed(2) + "%"}
                />
                <Legend />
                <Bar dataKey="baseline" name="Baseline" fill="#4f46e5">
                  <LabelList
                    dataKey="baseline"
                    position="top"
                    formatter={(value: number) => value.toFixed(2) + "%"}
                  />
                </Bar>
                <Bar dataKey="enhanced" name="Enhanced" fill="#06b6d4">
                  <LabelList
                    dataKey="enhanced"
                    position="top"
                    formatter={(value: number) => value.toFixed(2) + "%"}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          );
        }

        return (
          <ResponsiveContainer>
            <BarChart data={scenarioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scenario" />
              <YAxis domain={[80, 100]} />
              <Tooltip formatter={(value: number) => value.toFixed(2) + "%"} />
              <Legend />
              <Bar dataKey="baseline" name="Baseline" fill="#4f46e5" />
              <Bar dataKey="enhanced" name="Enhanced" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  const renderGraph = () => {
    if (selectedScenario === "training") {
      return renderTrainingGraph(selectedChartType);
    }
    if (selectedScenario === "comparison") {
      return renderComparisonGraph(selectedChartType);
    }

    // Individual scenario visualization
    const scenarioData = scenarioResults.filter((s) => {
      const normalizeString = (str: string) =>
        str.toLowerCase().replace(/[-\s]/g, "");

      const scenarioName = normalizeString(s.scenario);
      const selected = normalizeString(selectedScenario);

      return scenarioName === selected;
    });

    if (scenarioData.length === 0) return null;

    return renderIndividualScenarioGraph(selectedChartType, scenarioData);
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

          <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-6rem)] scroll-smooth">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Analysis Type
              </h3>
              {scenarioOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={selectedScenario === option.id ? "default" : "ghost"}
                  className="w-full justify-start transition-colors flex items-center mb-1"
                  onClick={() => {
                    setSelectedScenario(option.id);
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
              {(selectedScenario === "training"
                ? chartTypes.training
                : selectedScenario === "comparison"
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
              {getScenarioMetrics(selectedScenario).map((metric, index) => (
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
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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
              <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {selectedScenario === "training"
                  ? "Training Progress"
                  : selectedScenario === "comparison"
                  ? "All Scenarios Comparison"
                  : "Scenario Analysis"}
              </h2>
              <div className="h-[500px]">{renderGraph()}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
