"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { heroContent } from "./content"
import { TrendingUp, Globe, Zap, ArrowRight } from "lucide-react"

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

    // Icon mapping for features
    const featureIcons = [TrendingUp, Globe, Zap]

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden hero-responsive-height flex flex-col"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Main gradient background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a24 50%, #0d1117 100%)"
                    }}
                />

                {/* Accent gradient overlays */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "radial-gradient(circle at 20% 50%, rgba(78, 205, 196, 0.15) 0%, transparent 50%)"
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: "radial-gradient(circle at 80% 50%, rgba(91, 181, 162, 0.12) 0%, transparent 50%)"
                    }}
                />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 bg-[#4ECDC4]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-48 h-48 bg-[#4ECDC4]/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 6,
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
                            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 ${
                                isRTL ? "sm:flex-row-reverse" : ""
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Primary Button */}
                            <motion.a
                                href="#contact"
                                className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-lg hover:shadow-[#4ECDC4]/50 flex items-center gap-2 ${
                                    isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentContent.primaryButton}
                                <ArrowRight
                                    className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                                        isRTL ? "rotate-180" : ""
                                    }`}
                                />
                            </motion.a>

                            {/* Secondary Button */}
                            <motion.a
                                href="#contact"
                                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white border-2 border-[#4ECDC4] hover:bg-[#4ECDC4]/10 transition-all duration-300 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentContent.secondaryButton}
                            </motion.a>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {currentContent.features.map((feature, index) => {
                                const Icon = featureIcons[index]
                                return (
                                    <motion.div
                                        key={index}
                                        className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)"
                                        }}
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4ECDC4]/10 mb-4"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4]" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3
                                            className={`text-lg sm:text-xl font-bold text-white mb-2 ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className={`text-sm sm:text-base text-gray-400 ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
