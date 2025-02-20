"use client";
import { motion } from "framer-motion";
import { BarChart, Layers, Shield, Search } from "lucide-react"; // Icons

const features = [
  {
    title: "How Model Works in Different Sectors",
    description:
      "See how adversarial robustness is tested across healthcare, finance, and more.",
    icon: Layers,
  },
  {
    title: "Advanced Visualization",
    description:
      "Explore graphs showing attack success rates and model accuracy under adversarial conditions.",
    icon: BarChart,
  },
  {
    title: "Adversarial Attack Methods",
    description:
      "Analyze 8 different attack techniques and their impact on AI models.",
    icon: Search,
  },
  {
    title: "Performance Analysis & Insights",
    description:
      "Compare model performance before and after applying defense strategies.",
    icon: Shield,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-gray-50 dark:from-gray-900 via-white dark:via-black to-gray-50 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/50 to-purple-50/50 dark:to-purple-950/50" />

        {/* Decorative top/bottom borders */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-800 to-transparent" />

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse delay-500" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Rest of your existing content with relative positioning */}
      <div className="relative">
        {/* Title & Subheading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm md:text-base tracking-wider">
              FEATURES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              Understanding Adversarial Robustness
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2"
          >
            Explore how our AI model performs across different sectors and
            attack scenarios.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg 
                       border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 
                       hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent dark:from-blue-500/10 
                        rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative">
                <div
                  className="mb-4 md:mb-6 inline-block p-2.5 md:p-3 bg-blue-100/50 dark:bg-blue-500/10 rounded-lg md:rounded-xl 
                          group-hover:bg-blue-200/50 dark:group-hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <feature.icon
                    className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 
                           transition-colors duration-300"
                  />
                </div>
                <h3
                  className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 
                         transition-colors duration-300 line-clamp-2"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 
                         transition-colors duration-300 leading-relaxed line-clamp-3"
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
