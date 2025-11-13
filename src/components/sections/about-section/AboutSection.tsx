"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { aboutContent } from "./content"
import { Target, Shield, Eye, Users, Award, TrendingUp, Building2, CheckCircle2, BarChart3 } from "lucide-react"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { InvestmentPatterns } from "@/components/ui/geometric-patterns"

export function AboutSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")

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

    const currentContent = aboutContent[language]
    const isRTL = language === "ar"

    // Icon mapping for values
    const valueIcons = [Target, Shield, Eye, Users, Award]

    // Icon mapping for stats
    const statIcons = [TrendingUp, Building2, CheckCircle2, BarChart3]

    return (
        <section
            id="about"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, rgba(10, 10, 15, 0.98) 0%, rgba(20, 40, 160, 0.05) 50%, rgba(10, 10, 15, 0.98) 100%)"
            }}
        >
            {/* Background decorative elements with gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.15) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.12) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                {/* Additional gradient overlay */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(78, 205, 196, 0.08) 0%, transparent 60%)"
                    }}
                />
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="all" intensity="medium" />

                {/* Animated Color Gradient */}
                <AnimatedColorGradient />

                {/* Geometric Patterns */}
                <InvestmentPatterns variant="mesh" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        <span className="text-white">{currentContent.title} </span>
                        <span
                            style={{
                                background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {currentContent.highlightedTitle}
                        </span>
                    </h2>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.description1}
                    </motion.p>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.description2}
                    </motion.p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {currentContent.stats.map((stat, index) => {
                        const Icon = statIcons[index]
                        return (
                            <motion.div
                                key={index}
                                className="group relative p-6 sm:p-8 rounded-2xl overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(20, 40, 160, 0.1) 50%, rgba(20, 20, 28, 0.7) 100%)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    boxShadow: "0 25px 50px rgba(78, 205, 196, 0.25)"
                                }}
                            >
                                {/* Gradient Border Effect on Hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.3) 0%, rgba(91, 181, 162, 0.2) 100%)",
                                        padding: "2px"
                                    }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-4 relative z-10"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.15) 100%)"
                                    }}
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#4ECDC4]" />
                                </motion.div>

                                {/* Number */}
                                <div className={`text-4xl sm:text-5xl font-bold mb-2 relative z-10 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}>
                                    <span
                                        style={{
                                            background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        }}
                                    >
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            decimals={stat.decimals || 0}
                                            duration={2.5}
                                        />
                                    </span>
                                </div>

                                {/* Label */}
                                <p className={`text-sm sm:text-base text-gray-300 relative z-10 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}>
                                    {stat.label}
                                </p>

                                {/* Background Pattern */}
                                <div
                                    className="absolute bottom-0 right-0 w-20 h-20 opacity-5 pointer-events-none"
                                    style={{
                                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%)"
                                    }}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Core Values Section */}
                {/* <motion.div
                    className="mt-16 sm:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {currentContent.valuesTitle}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {currentContent.values.map((value, index) => {
                            const Icon = valueIcons[index]
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative p-6 sm:p-8 rounded-xl overflow-hidden"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 40, 160, 0.08) 50%, rgba(20, 20, 28, 0.5) 100%)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.03,
                                        boxShadow: "0 25px 50px rgba(78, 205, 196, 0.25)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.15) 100%)",
                                            padding: "1px"
                                        }}
                                    />

                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-6 relative z-10"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(78, 205, 196, 0.15) 0%, rgba(91, 181, 162, 0.1) 100%)"
                                        }}
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4] group-hover:text-[#5bb5a2] transition-colors duration-300" />
                                    </motion.div>

                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-[#4ECDC4] transition-colors duration-300 ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {value.title}
                                    </h4>

                                    <p
                                        className={`text-sm sm:text-base text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300 ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {value.description}
                                    </p>

                                    <motion.div
                                        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                                        style={{
                                            background: "radial-gradient(circle, rgba(78, 205, 196, 0.6) 0%, transparent 70%)"
                                        }}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}
