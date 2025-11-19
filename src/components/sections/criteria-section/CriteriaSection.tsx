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
                background: "#ffffff"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/3 left-1/4 w-96 h-96 opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, transparent 70%)"
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
                        <span className="text-black">{currentContent.title} </span>
                        <span
                            style={{
                                background: "linear-gradient(to right, #000000 0%, #404040 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {currentContent.highlightedTitle}
                        </span>
                    </h2>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${
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
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#000000]/30 to-transparent hidden md:block" />

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
                                    className="group relative flex-1 p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white shadow-md hover:shadow-lg flex flex-col items-center justify-center text-center md:text-left md:items-start"
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
                                    }}
                                >
                                    {/* Number Badge */}
                                    <div className={`absolute -top-4 ${isRTL ? "right-6 " : "left-6"} w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center text-[#ffffff] font-bold text-sm`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-6 mx-auto md:mx-0"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(64, 64, 64, 0.15) 100%)"
                                        }}
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#000000]" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className={`text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-[#000000] transition-colors text-center md:text-left ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {criterion.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`text-base sm:text-lg text-gray-700 leading-relaxed group-hover:text-gray-700 transition-colors text-center md:text-left ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {criterion.description}
                                    </p>

                                    {/* Decorative arrow */}
                                    <div className={`absolute top-1/2 ${isEven ? "-right-4" : "-left-4"} hidden md:block`}>
                                        <motion.div
                                            className="w-8 h-8 rounded-full bg-[#000000]/20 border-2 border-[#000000] flex items-center justify-center"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#000000]" />
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
                        className="p-6 sm:p-8 rounded-xl border border-gray-300 bg-gray-50 shadow-md"
                    >
                        <p
                            className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center ${
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
