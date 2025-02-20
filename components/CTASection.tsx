"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your email handling logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50/50 to-white dark:from-background dark:via-background dark:to-background/80">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 
                     dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"
        />

        {/* Enhanced glowing orbs */}
        <div
          className="absolute w-[500px] h-[500px] -left-40 top-0 bg-gradient-to-br from-blue-200/40 to-purple-200/40 
                        dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        />
        <div
          className="absolute w-[500px] h-[500px] -right-40 bottom-0 bg-gradient-to-br from-purple-200/40 to-pink-200/40 
                        dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#88888808_1px,transparent_1px),linear-gradient(to_bottom,#88888808_1px,transparent_1px)] 
                        bg-[size:24px_24px] opacity-50"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Let's Collaborate
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions or interested in working together? Reach out to us!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-10 
                             text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 
                             focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 
                           text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 
                           focus:outline-none focus:border-blue-500 transition-colors min-h-[120px]"
                  placeholder="Tell us about your project or inquiry..."
                  required
                />
              </div>

              <motion.div
                className="flex justify-end"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 
                           hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 
                           text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:opacity-90 
                           transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Send className="w-5 h-5 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-gray-600 dark:text-gray-400"
          >
            <p>Or reach us directly at</p>
            <a
              href="mailto:befinalproject24@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              befinalproject24@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
