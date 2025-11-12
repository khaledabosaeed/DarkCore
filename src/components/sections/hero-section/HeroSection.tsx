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

                {/* Main gradient background with investment theme */}
                <div
                    className="absolute inset-0 opacity-75"
                    style={{
                        background: "linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(20, 40, 160, 0.08) 35%, rgba(26, 26, 36, 0.9) 65%, rgba(13, 17, 23, 0.95) 100%)"
                    }}
                />

                {/* Animated Accent gradient overlays */}
                <motion.div
                    className="absolute inset-0 opacity-25"
                    style={{
                        background: "radial-gradient(circle at 20% 50%, rgba(78, 205, 196, 0.2) 0%, transparent 50%)"
                    }}
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: "radial-gradient(circle at 80% 50%, rgba(91, 181, 162, 0.15) 0%, transparent 50%)"
                    }}
                    animate={{
                        opacity: [0.12, 0.2, 0.12],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                {/* Additional investment gradient overlay */}
                <motion.div
                    className="absolute inset-0 opacity-15"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, transparent 60%)"
                    }}
                    animate={{
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Animated Background Elements with Investment Theme */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.15) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
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
                    className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.12) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.35, 0.15],
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
                {/* Investment Waves */}
                <InvestmentWaves />
                {/* Floating Investment Icons */}
                <FloatingInvestmentIcons />
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
                                    className="inline-block text-white"
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
                                        background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
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
                                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
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
                            {/* Primary Button - Bigger and more prominent */}
                            <motion.a
                                href="#contact"
                                className={`group px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#4ECDC4]/50 flex items-center gap-3 ${
                                    isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.08, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentContent.primaryButton}
                                <ArrowRight
                                    className={`w-6 h-6 group-hover:translate-x-1 transition-transform ${
                                        isRTL ? "rotate-180" : ""
                                    }`}
                                />
                            </motion.a>

                            {/* Download Button */}
                            {/* <motion.a
                                href="/company-profile.pdf"
                                download
                                className={`group px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg text-white border-2 border-[#4ECDC4] hover:bg-[#4ECDC4]/20 transition-all duration-300 flex items-center gap-2 ${
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
                            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-16 max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {currentContent.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center p-6 sm:p-8 rounded-2xl border min-w-[140px] sm:min-w-[160px] transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 40, 160, 0.15) 50%, rgba(20, 20, 28, 0.5) 100%)",
                                        backdropFilter: "blur(16px)",
                                        borderColor: "rgba(78, 205, 196, 0.25)",
                                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -8,
                                        borderColor: "rgba(78, 205, 196, 0.6)",
                                        boxShadow: "0 12px 40px rgba(78, 205, 196, 0.25)"
                                    }}
                                >
                                    <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                    style={{
                                        background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
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
                                    <div className={`text-xs sm:text-sm text-gray-300 text-center leading-tight ${
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
