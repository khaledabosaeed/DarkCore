"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/ui/navbar";
import { PageLoader } from "@/components/ui/page-loader";

// Critical components - load immediately
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersMarquee } from "@/components/ui/partners-marquee";

// Lazy load below-the-fold sections
const AboutSection = dynamic(() => import("@/components/sections/about-section/AboutSection").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-screen" />,
});

const ServicesSection = dynamic(() => import("@/components/sections/services-section/ServicesSection").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="min-h-screen" />,
});

const CriteriaSection = dynamic(() => import("@/components/sections/criteria-section/CriteriaSection").then(mod => ({ default: mod.CriteriaSection })), {
  loading: () => <div className="min-h-screen" />,
});

const ShareholdersSection = dynamic(() => import("@/components/sections/shareholders-section/ShareholdersSection").then(mod => ({ default: mod.ShareholdersSection })), {
  loading: () => <div className="min-h-screen" />,
});

const InsightsSection = dynamic(() => import("@/components/sections/insights-section/InsightsSection").then(mod => ({ default: mod.InsightsSection })), {
  loading: () => <div className="min-h-screen" />,
});

const PartnershipsSection = dynamic(() => import("@/components/sections/partnerships-section/PartnershipsSection").then(mod => ({ default: mod.PartnershipsSection })), {
  loading: () => <div className="min-h-screen" />,
});

const ContactSection = dynamic(() => import("@/components/sections/contact-section/ContactSection").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[600px]" />,
});

const Footer = dynamic(() => import("@/components/sections/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[400px]" />,
});

const WhatsAppButton = dynamic(() => import("@/components/ui/whatsapp-button").then(mod => ({ default: mod.WhatsAppButton })), {
  ssr: false,
});

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

    // Throttled scroll handler for better performance
    let ticking = false;
    let lastScrollY = 0;

    const handleScroll = () => {
      lastScrollY = window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Progress bar
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (lastScrollY / totalHeight) * 100;
          const progressBar = document.getElementById('progress-bar');
          if (progressBar) {
            progressBar.style.width = progress + '%';
          }

          // Parallax effect (only if elements exist and reduced motion is not preferred)
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (!prefersReducedMotion) {
            const parallaxElements = document.querySelectorAll(".float");
            parallaxElements.forEach((element, index) => {
              const speed = 0.5 + index * 0.1;
              const yPos = -(lastScrollY * speed);
              (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
            });
          }

          ticking = false;
        });

        ticking = true;
      }
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

      <main className=" bg-[#0a0a0f] overflow-x-hidden">
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
      </main>
    </>
  );
}
