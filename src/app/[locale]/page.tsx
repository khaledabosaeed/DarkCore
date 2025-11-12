"use client";

import { useEffect } from "react";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section/AboutSection";
import { ServicesSection } from "@/components/sections/services-section/ServicesSection";
import { CriteriaSection } from "@/components/sections/criteria-section/CriteriaSection";
import { ShareholdersSection } from "@/components/sections/shareholders-section/ShareholdersSection";
import { InsightsSection } from "@/components/sections/insights-section/InsightsSection";
import { PartnershipsSection } from "@/components/sections/partnerships-section/PartnershipsSection";
import { ContactSection } from "@/components/sections/contact-section/ContactSection";
import { Navbar } from "@/components/ui/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { PageLoader } from "@/components/ui/page-loader";
import { PartnersMarquee } from "@/components/ui/partners-marquee";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.scrollBehavior = "smooth";

    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    });

    // Navbar scroll effect is handled by the Navbar component itself

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".float");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

      {/* Hero Section */}
      <section id="home" className="mb-0">
        <HeroSection />
      </section>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Criteria Section */}
      <CriteriaSection />

      {/* Shareholders Section */}
      <ShareholdersSection />

      {/* Insights Section */}
      <InsightsSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="mt-16 lg:mt-20">
        <Footer />
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton
        phoneNumber="966500000000"
        message="Hello! I'm interested in learning more about Cityscape Global investment opportunities."
      />

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
        <div
          id="progress-bar"
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: "0%" }}
        />
      </div>

      {/* Initialize Progress Bar */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              window.addEventListener('scroll', () => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (window.pageYOffset / totalHeight) * 100;
                const progressBar = document.getElementById('progress-bar');
                if (progressBar) {
                  progressBar.style.width = progress + '%';
                }
              });
            }
          `,
        }}
      />
      </main>
    </>
  );
}
