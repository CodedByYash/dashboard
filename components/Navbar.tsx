"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "hero" },
  { name: "Features", href: "features" },
  { name: "About", href: "about" },
  { name: "Applications", href: "sectors" },
  { name: "FAQ", href: "faq" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Attack
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Detect
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Auth Buttons */}
            {isLoaded && (
              <div className="flex items-center space-x-4">
                {user ? (
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                        userButtonTrigger: "focus:shadow-none",
                      },
                    }}
                  />
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="sm">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 
                                 hover:from-blue-700 hover:to-purple-700 text-white"
                        size="sm"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 
                             hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 
                             transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                {isLoaded && !user && (
                  <div className="space-y-2 pt-2">
                    <SignInButton mode="modal">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        size="sm"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button
                        className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 
                                 dark:from-blue-500 dark:to-purple-500 text-white"
                        size="sm"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
