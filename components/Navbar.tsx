"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { UserButton, SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, isLoaded } = useUser();

  // Fixes hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              AttackDetect
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-md text-base font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Theme Toggle and Sign In */}
          <div className="flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={28} className="transition-all hover:rotate-45" />
                ) : (
                  <Moon size={28} className="transition-all hover:-rotate-45" />
                )}
              </Button>
            )}

            {isLoaded && (
              <div className="flex items-center gap-4">
                {user ? (
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-10 h-10",
                        userButtonTrigger: "focus:shadow-none",
                      },
                    }}
                  />
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="font-semibold hidden md:block"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button
                        variant="default"
                        size="lg"
                        className="font-semibold hidden md:block"
                      >
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
              <div className="flex flex-col space-y-2 px-4 py-4">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Sign In Button */}
                <Button
                  variant="outline"
                  size="default"
                  className="font-semibold w-full mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
