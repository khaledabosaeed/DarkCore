"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { shareholdersContent } from "./content"
import { Award, Clock, TrendingUp, ArrowRight, Info } from "lucide-react"
import { Accordion } from "@/components/ui/accordion"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"

export function ShareholdersSection() {
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

    const currentContent = shareholdersContent[language]
    const isRTL = language === "ar"

    // Icon mapping for benefits
    const benefitIcons = [Award, Clock, TrendingUp]

    return (
        <section
            id="shareholders"
            className="relative py-24 sm:py-28 md:py-32 lg:py-40 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #0a0a0f 0%, #0f0f14 50%, #0a0a0f 100%)"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.25) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-0 w-[500px] h-[500px] opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.25) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="orbs" intensity="medium" />
                
                {/* Animated Color Gradient */}
                <AnimatedColorGradient />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
                {/* Pre-title and Title */}
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        <span className="text-white">{currentContent.preTitle} </span>
                        {currentContent.title && (
                            <span
                                style={{
                                    background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {currentContent.title}
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
                        {currentContent.subtitle}
                    </motion.p>
                </motion.div>

                {/* Split Screen Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
                    {/* Left Side - Main Feature with Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div
                            className="relative p-8 sm:p-10 rounded-3xl overflow-hidden h-full"
                            style={{
                                background: "linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(20, 40, 160, 0.15) 50%, rgba(26, 26, 36, 0.8) 100%)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(78, 205, 196, 0.3)"
                            }}
                        >
                            {/* Large Icon */}
                            <motion.div
                                className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-8"
                                style={{
                                    background: "linear-gradient(135deg, rgba(78, 205, 196, 0.3) 0%, rgba(91, 181, 162, 0.2) 100%)"
                                }}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Award className="w-14 h-14 sm:w-18 sm:h-18 text-[#4ECDC4]" />
                            </motion.div>

                            <h3
                                className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.mainFeature.title}
                            </h3>

                            <p
                                className={`text-lg sm:text-xl text-gray-300 leading-relaxed ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.mainFeature.description}
                            </p>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#4ECDC4]/10 blur-3xl" />
                            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#5bb5a2]/10 blur-3xl" />
                        </div>
                    </motion.div>

                    {/* Right Side - Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {currentContent.benefits.map((benefit, index) => {
                            const Icon = benefitIcons[index]
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative flex items-start gap-4 sm:gap-6 p-6 rounded-2xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                    style={{
                                        background: "rgba(26, 26, 36, 0.5)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        x: 10,
                                        boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)"
                                    }}
                                >
                                    {/* Icon with Number */}
                                    <div className="flex-shrink-0 relative">
                                        <motion.div
                                            className="w-16 h-16 rounded-xl flex items-center justify-center"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.15) 100%)"
                                            }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Icon className="w-8 h-8 text-[#4ECDC4]" />
                                        </motion.div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4ECDC4] flex items-center justify-center text-[#0a0a0f] text-xs font-bold">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h4
                                            className={`text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#4ECDC4] transition-colors ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {benefit.title}
                                        </h4>
                                        <p
                                            className={`text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Arrow indicator */}
                                    <motion.div
                                        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ x: 5 }}
                                    >
                                        <ArrowRight className={`w-5 h-5 text-[#4ECDC4] ${isRTL ? "rotate-180" : ""}`} />
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>

                {/* Philosophy Section - Using Accordion */}
                <motion.div
                    className="max-w-5xl mx-auto mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Accordion
                        items={[
                            {
                                title: currentContent.philosophy.title,
                                content: [
                                    currentContent.philosophy.description,
                                    currentContent.philosophy.subdescription
                                ],
                                icon: Info
                            }
                        ]}
                        isRTL={isRTL}
                        defaultOpen={0}
                    />
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h4
                        className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {currentContent.cta.question}
                    </h4>

                    <motion.button
                        className={`group px-8 sm:px-10  py-4 sm:py-5 flex-row-reverse rounded-lg font-semibold text-base sm:text-lg text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-lg hover:shadow-[#4ECDC4]/50 flex items-center gap-3 mx-auto ${
                            isRTL ? " font-almarai " : "font-poppins  "
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                         <ArrowRight
                            className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                                isRTL ? "rotate-180" : ""
                            }`}
                        />
                        {currentContent.cta.button}
                       
                    </motion.button>

                    <motion.p
                        className={`text-sm sm:text-base text-gray-500 mt-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.note}
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
