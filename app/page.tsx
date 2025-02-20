"use client";

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/features";
import Sectors from "@/components/SectorCard";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Sectors />
      <AboutSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
