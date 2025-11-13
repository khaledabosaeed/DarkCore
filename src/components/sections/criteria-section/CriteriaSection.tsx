"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { criteriaContent } from "./content"
import { FileCheck, Percent, Database, RefreshCw } from "lucide-react"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"

export function CriteriaSection() {
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

    const currentContent = criteriaContent[language]
    const isRTL = language === "ar"

    // Icon mapping for criteria
    const criteriaIcons = [FileCheck, Percent, Database, RefreshCw]

    return (
        <section
            id="criteria"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "#0a0a0f"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/3 left-1/4 w-96 h-96 opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
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
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="icons" intensity="medium" />
                
                {/* Animated Color Gradient */}
                <AnimatedColorGradient />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
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
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.description}
                    </motion.p>
                </motion.div>

                {/* Zigzag Timeline */}
                <div className="max-w-6xl mx-auto mb-12 sm:mb-16 relative">
                    {/* Center line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#4ECDC4]/30 to-transparent hidden md:block" />

                    {currentContent.criteria.map((criterion, index) => {
                        const Icon = criteriaIcons[index]
                        const isEven = index % 2 === 0

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Content Card */}
                                <motion.div
                                    className="group relative flex-1 p-6 sm:p-8 rounded-2xl border border-[#4ECDC4]/20 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 40, 160, 0.1) 50%, rgba(20, 20, 28, 0.5) 100%)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 25px 50px rgba(78, 205, 196, 0.2)"
                                    }}
                                >
                                    {/* Number Badge */}
                                    <div className={`absolute -top-4 ${isEven ? "left-6" : "right-6"} w-8 h-8 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#0a0a0f] font-bold text-sm`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.15) 100%)"
                                        }}
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#4ECDC4]" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className={`text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#4ECDC4] transition-colors ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {criterion.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`text-base sm:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {criterion.description}
                                    </p>

                                    {/* Decorative arrow */}
                                    <div className={`absolute top-1/2 ${isEven ? "-right-4" : "-left-4"} hidden md:block`}>
                                        <motion.div
                                            className="w-8 h-8 rounded-full bg-[#4ECDC4]/20 border-2 border-[#4ECDC4] flex items-center justify-center"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#4ECDC4]" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Spacer for desktop */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="p-6 sm:p-8 rounded-xl border border-[#4ECDC4]/30"
                        style={{
                            background: "rgba(78, 205, 196, 0.05)",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        <p
                            className={`text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                        >
                            {currentContent.footer}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
