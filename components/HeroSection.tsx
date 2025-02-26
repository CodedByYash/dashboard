"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, LineChart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";

export default function HeroSection() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      const navbarHeight = 64; // height of navbar
      const elementPosition = featuresSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Background Elements - Theme Aware */}
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
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Adversarial Attack
              </span>{" "}
              <span className="text-foreground">Detection Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Analyze, visualize adversarial attacks with interactive
              dashboards.
            </p>
          </motion.div>

          {/* Updated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            {isLoaded &&
              (isSignedIn ? (
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 
                           hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl 
                           flex items-center gap-2 text-lg font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 
                             hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-xl 
                             flex items-center gap-2 text-lg font-semibold"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </SignInButton>
              ))}
            <Button
              size="lg"
              variant="outline"
              onClick={handleLearnMore}
              className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 
                       text-foreground px-8 py-6 rounded-xl flex items-center gap-2 text-lg font-semibold"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl w-full"
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
                  "Evaluates model robustness and detects attack vulnerabilities",
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
                className="bg-white/50 dark:bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 
                          rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300
                          hover:border-blue-500/50 group"
              >
                <feature.icon
                  className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-4 
                                      group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                />
                <h3
                  className="text-gray-900 dark:text-white font-semibold mb-3 text-lg
                             group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed
                             group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                >
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
