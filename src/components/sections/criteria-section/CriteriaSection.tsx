"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { criteriaContent } from "./content"
import { FileCheck, Percent, Database, RefreshCw } from "lucide-react"

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
                <div
                    className="absolute top-1/3 left-1/4 w-96 h-96 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
                    }}
                />
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
                            isRTL ? "font-cairo" : "font-poppins"
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
                            isRTL ? "font-cairo" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.description}
                    </motion.p>
                </motion.div>

                {/* Criteria Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
                    {currentContent.criteria.map((criterion, index) => {
                        const Icon = criteriaIcons[index]
                        return (
                            <motion.div
                                key={index}
                                className="group p-6 sm:p-8 rounded-xl border border-[#4ECDC4]/20 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                style={{
                                    background: "rgba(26, 26, 36, 0.4)",
                                    backdropFilter: "blur(10px)"
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)"
                                }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4ECDC4]/10 mb-6 group-hover:bg-[#4ECDC4]/20 transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4]" />
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className={`text-xl sm:text-2xl font-bold text-white mb-3 ${
                                        isRTL ? "font-cairo" : "font-poppins"
                                    }`}
                                >
                                    {criterion.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                                        isRTL ? "font-cairo" : "font-poppins"
                                    }`}
                                >
                                    {criterion.description}
                                </p>
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
                                isRTL ? "font-cairo" : "font-poppins"
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
