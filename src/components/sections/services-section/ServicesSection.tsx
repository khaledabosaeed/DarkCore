"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { servicesContent } from "./content"
import { FileText, Users, BarChart3, TrendingUp, Handshake, ChevronDown } from "lucide-react"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"

export function ServicesSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")
    const [openIndex, setOpenIndex] = useState<number>(0)

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

                {/* Interactive Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {currentContent.services.map((service, index) => {
                        const Icon = serviceIcons[index]
                        const isOpen = openIndex === index

                        return (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                style={{
                                    background: isOpen
                                        ? "linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(20, 40, 160, 0.15) 50%, rgba(20, 20, 28, 0.7) 100%)"
                                        : "linear-gradient(135deg, rgba(20, 20, 28, 0.6) 0%, rgba(20, 40, 160, 0.08) 50%, rgba(26, 26, 36, 0.5) 100%)",
                                    backdropFilter: "blur(10px)"
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {/* Header - Always visible */}
                                <motion.button
                                    className={`w-full p-6 sm:p-8 flex items-center gap-4 sm:gap-6 text-left ${
                                        isRTL ? "flex-row-reverse" : ""
                                    }`}
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {/* Large Icon */}
                                    <motion.div
                                        className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                                        style={{
                                            background: isOpen
                                                ? "linear-gradient(135deg, rgba(78, 205, 196, 0.3) 0%, rgba(91, 181, 162, 0.2) 100%)"
                                                : "linear-gradient(135deg, rgba(78, 205, 196, 0.15) 0%, rgba(91, 181, 162, 0.1) 100%)"
                                        }}
                                        animate={{
                                            rotate: isOpen ? 360 : 0,
                                            scale: isOpen ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${isOpen ? "text-[#4ECDC4]" : "text-[#5bb5a2]"}`} />
                                    </motion.div>

                                    {/* Title & Number */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[#4ECDC4] font-bold text-sm sm:text-base">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-[#4ECDC4]/30 to-transparent" />
                                        </div>
                                        <h3
                                            className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors ${
                                                isOpen ? "text-[#4ECDC4]" : "text-white"
                                            } ${isRTL ? "font-almarai" : "font-poppins"}`}
                                        >
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Chevron */}
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-6 h-6 text-[#4ECDC4]" />
                                    </motion.div>
                                </motion.button>

                                {/* Content - Expandable */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                                <motion.div
                                                    className="pt-4 border-t border-white/10"
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    <p
                                                        className={`text-base sm:text-lg text-gray-300 leading-relaxed ${
                                                            isRTL ? "font-almarai" : "font-poppins"
                                                        }`}
                                                    >
                                                        {service.description}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: "radial-gradient(circle at center, rgba(78, 205, 196, 0.1) 0%, transparent 70%)"
                                    }}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
