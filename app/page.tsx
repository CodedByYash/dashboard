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
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
      <FeatureSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="sectors">
        <Sectors />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
    </>
  );
}
