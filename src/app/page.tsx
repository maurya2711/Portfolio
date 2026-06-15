"use client";

import LoadingScreen from "@/components/LoadingScreen";
import BackgroundMesh from "@/components/BackgroundMesh";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Loading preloader screen */}
      <LoadingScreen />

      {/* Glowing background grid mesh */}
      <BackgroundMesh />

      {/* Floating navigation bar */}
      <Navbar />

      {/* Content wrapper */}
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Experience />
        <Projects />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Footer information section */}
      <Footer />
    </>
  );
}
