"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Hospital, Building2, Car, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Sector {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const sectors: Sector[] = [
  {
    title: "Healthcare",
    description:
      "AI models assist in medical diagnostics, ensuring accuracy and security against adversarial attacks.",
    icon: Hospital,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Finance",
    description:
      "Protecting fraud detection models from adversarial manipulations that could bypass security measures.",
    icon: Building2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Autonomous Vehicles",
    description:
      "Ensuring self-driving cars remain safe by defending against adversarial perturbations in object detection.",
    icon: Car,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cybersecurity",
    description:
      "Enhancing security measures by detecting and preventing adversarial threats in AI-driven defense systems.",
    icon: Shield,
    color: "from-purple-500 to-violet-500",
  },
];

export default function Sectors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer setup
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px", // Triggers when element is in center
          threshold: 0,
        }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref) observers[index].observe(ref);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background Gradient - Remove the bottom part */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        {/* Remove or adjust this line if it's causing overlap */}
        {/* <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" /> */}
      </div>

      {/* Title Section with Vertical Layout */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Side - Title and Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-24 md:w-1/3 space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-gray-400">Real-World</span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                    Applications
                  </span>
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-gray-400 text-lg"
              >
                Protecting AI models across diverse industries
              </motion.p>
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="flex flex-col gap-4">
              {sectors.map((sector, index) => (
                <motion.button
                  key={sector.title}
                  onClick={() => {
                    setActiveIndex(index);
                    sectionRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="flex items-center gap-4 group text-left relative"
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gray-700"
                    }`}
                    animate={{
                      scale: activeIndex === index ? 1.25 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <motion.span
                    className={`text-sm transition-all duration-300 relative ${
                      activeIndex === index ? "text-white" : "text-gray-500"
                    }`}
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                    }}
                  >
                    {sector.title}
                    {activeIndex === index && (
                      <motion.div
                        className="absolute -inset-x-4 -inset-y-2 bg-gray-800/50 rounded-lg -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="md:w-2/3 space-y-24" ref={containerRef}>
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.title}
                  ref={(el: HTMLDivElement | null) => {
                    sectionRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`relative transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <motion.div
                    className="flex items-start gap-6"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${sector.color} bg-opacity-10`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-white">
                        {sector.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed max-w-xl">
                        {sector.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Enhanced Connector Line */}
                  {index !== sectors.length - 1 && (
                    <motion.div
                      className="absolute left-6 top-20 w-px h-24"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgb(31,41,55), transparent)",
                      }}
                      initial={{ height: 0 }}
                      whileInView={{ height: 96 }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
