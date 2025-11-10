"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { aboutContent } from "./content"
import { Target, Shield, Eye, Users, Award } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")
    const { disableAnimations } = useLanguage()

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

    // تعطيل animations عند تغيير اللغة
    const animateProps = disableAnimations ? { initial: false, whileInView: undefined, viewport: undefined } : {}

    // Icon mapping for values
    const valueIcons = [Target, Shield, Eye, Users, Award]

    return (
        <section
            id="about"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "#0a0a0f"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-96 h-96 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-96 h-96 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.2) 0%, transparent 70%)"
                    }}
                />
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
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed ${
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
                        className={`text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.description2}
                    </motion.p>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
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
                                    className="group p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                    style={{
                                        background: "rgba(26, 26, 36, 0.5)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -8,
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
                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-white mb-3 ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {value.title}
                                    </h4>

                                    {/* Description */}
                                    <p
                                        className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {value.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
