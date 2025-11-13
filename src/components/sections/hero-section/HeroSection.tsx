"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { heroContent } from "./content"
import { ArrowRight, Download } from "lucide-react"
import { FloatingInvestmentIcons, InvestmentWaves } from "@/components/ui/investment-animations"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"

export function HeroSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const updateViewportHeight = () => {
            document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`)
        }

        updateViewportHeight()
        window.addEventListener("resize", updateViewportHeight)
        window.addEventListener("orientationchange", updateViewportHeight)

        return () => {
            window.removeEventListener("resize", updateViewportHeight)
            window.removeEventListener("orientationchange", updateViewportHeight)
        }
    }, [])

    useEffect(() => {
        const handleLanguageChange = () => {
            const htmlLang = document.documentElement.lang
            setLanguage(htmlLang === "ar" ? "ar" : "en")
        }

        handleLanguageChange()

        const observer = new MutationObserver(handleLanguageChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        })

        return () => observer.disconnect()
    }, [])

    const currentContent = heroContent[language]
    const isRTL = language === "ar"

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden hero-responsive-height flex flex-col"
        >
            {/* Background Video & Overlays */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/hero-poster.jpg"
                    aria-hidden="true"
                />

                {/* Main gradient background - solid white overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.97) 50%, rgba(255, 255, 255, 0.98) 100%)"
                    }}
                />

                {/* Animated Accent gradient overlays - very subtle */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)"
                    }}
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 80% 50%, rgba(64, 64, 64, 0.05) 0%, transparent 50%)"
                    }}
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Animated Background Elements - very subtle */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-0 md:opacity-100"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-0 md:opacity-100"
                    style={{
                        background: "radial-gradient(circle, rgba(64, 64, 64, 0.03) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                className="container pt-40 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-20 flex flex-1 items-center justify-center"
            >
                <div className={`w-full max-w-7xl ${isRTL ? "text-right" : "text-left"}`}>
                    <div className="mx-auto text-center max-w-5xl">
                        {/* Main Heading */}
                        <motion.div
                            className="mb-6 sm:mb-8"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h1
                                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                <motion.span
                                    className="inline-block"
                                    style={{
                                        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {currentContent.mainTitle}{" "}
                                </motion.span>
                                <motion.span
                                    className="inline-block"
                                    style={{
                                        background: "linear-gradient(135deg, #000000 0%, #2d2d2d 50%, #4a4a4a 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {currentContent.highlightedTitle}
                                </motion.span>
                            </h1>

                            {/* Description */}
                            <motion.p
                                className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                style={{
                                    background: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #5a5a5a 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {currentContent.description}
                            </motion.p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 ${
                                isRTL ? "sm:flex-row-reverse" : ""
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Primary Button - Bigger and more prominent with gradient */}
                            <motion.a
                                href="#contact"
                                className={`group px-8 sm:px-10 py-4 sm:py-5 flex-row-reverse rounded-xl font-bold text-lg sm:text-xl text-white transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 ${
                                    isRTL ? " font-almarai " : "font-poppins "
                                }`}
                                style={{
                                    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)",
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    y: -3,
                                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                     <ArrowRight
                                    className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${
                                        isRTL ? "rotate-180" : ""
                                    }`}
                                />
                                {currentContent.primaryButton}

                            </motion.a>

                            {/* Download Button */}
                            {/* <motion.a
                                href="/company-profile.pdf"
                                download
                                className={`group px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg text-black border-2 border-[#000000] hover:bg-[#000000]/20 transition-all duration-300 flex items-center gap-2 ${
                                    isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                {currentContent.downloadButton}
                            </motion.a> */}
                        </motion.div>

                        {/* Statistics Section - Card style with transparency */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto px-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {currentContent.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center p-6 sm:p-8 rounded-2xl transition-all duration-300 bg-white relative overflow-hidden"
                                    style={{
                                        border: "2px solid transparent",
                                        backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(64,64,64,0.12) 50%, rgba(26,26,26,0.08) 100%)",
                                        backgroundOrigin: "border-box",
                                        backgroundClip: "padding-box, border-box",
                                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)"
                                    }}
                                >
                                    <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                    style={{
                                        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}>
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            duration={2.5}
                                        />
                                    </div>
                                    <div className={`text-xs sm:text-sm text-gray-700 text-center leading-tight ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    )
}
