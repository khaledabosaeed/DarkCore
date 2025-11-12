"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { servicesContent } from "./content"
import { FileText, Users, BarChart3, TrendingUp, Handshake } from "lucide-react"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"

export function ServicesSection() {
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

    const currentContent = servicesContent[language]
    const isRTL = language === "ar"

    // Icon mapping for services
    const serviceIcons = [FileText, Users, BarChart3, TrendingUp, Handshake]

    return (
        <section
            id="services"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, rgba(15, 15, 20, 0.98) 0%, rgba(20, 40, 160, 0.06) 50%, rgba(15, 15, 20, 0.98) 100%)"
            }}
        >
            {/* Background decorative elements with animated gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 right-0 w-96 h-96 opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-0 w-96 h-96 opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.18) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="charts" intensity="light" />
                
                {/* Animated Color Gradient */}
                <AnimatedColorGradient />
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
                        {currentContent.highlightedTitle && (
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
                        )}
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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                    {currentContent.services.map((service, index) => {
                        const Icon = serviceIcons[index]
                        return (
                            <motion.div
                                key={index}
                                className="group p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, rgba(20, 20, 28, 0.7) 0%, rgba(20, 40, 160, 0.08) 50%, rgba(26, 26, 36, 0.6) 100%)",
                                    backdropFilter: "blur(10px)"
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)"
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
                                    className={`text-xl sm:text-2xl font-bold text-white mb-4 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
