"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { motion, AnimatePresence } from "framer-motion";
import { navbarContent } from "./navbar-content";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle language detection
  useEffect(() => {
    const handleLanguageChange = () => {
      const htmlLang = document.documentElement.lang;
      setLanguage(htmlLang === "ar" ? "ar" : "en");
    };

    handleLanguageChange();

    const observer = new MutationObserver(handleLanguageChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang", "dir"],
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentContent = navbarContent[language];
  const isRTL = language === "ar";

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-black/10"
          : "bg-white/80 backdrop-blur-md border-b border-black/5"
      } ${isRTL ? "rtl" : "ltr"}`}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between  h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/Asset 1.svg"
              alt="Logo"
              width={180}
              height={60}
              priority
              className="h-12 w-auto sm:h-14 brightness-0"
              style={{ filter: 'brightness(0)' }}
            />
          </motion.div>

          {/* Deskto p Navigation */}
          <div
            className={`hidden lg:flex items-center justify-center flex-1 ${
              isRTL ? "mr-10" : "ml-10"
            }`}
          >
            {currentContent.navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.id}`}
                className={`font-medium text-sm xl:text-base transition-all duration-300 py-2 px-3 xl:px-4 rounded-lg relative text-center text-black ${
                  isRTL ? "font-almarai" : "font-poppins"
                }`}
                whileHover={{
                  scale: 1.05,
                  color: "#525252",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {/* Active indicator */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full bg-black"
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right Side - Language Switcher */}
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden transition-colors duration-300 p-2 rounded-lg"
            style={{
              color: "#000000",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{
              scale: 1.1,
              color: "#525252",
              backgroundColor: "rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:hidden border-t backdrop-blur-xl bg-white/95"
              style={{
                borderTopColor: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-4 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {currentContent.navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full py-3 px-4 rounded-lg transition-all duration-300 text-black hover:text-neutral-700 hover:bg-black/5 ${
                        isRTL ? "text-right font-almarai" : "text-left font-poppins"
                      }`}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        x: isRTL ? -5 : 5,
                      }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Language Switcher */}
                <div
                  className="pt-4 flex justify-center"
                  style={{
                    borderTopColor: "rgba(0, 0, 0, 0.1)",
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                  }}
                >
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
