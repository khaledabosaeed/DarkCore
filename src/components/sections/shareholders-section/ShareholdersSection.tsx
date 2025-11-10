"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { shareholdersContent } from "./content"
import { Award, Clock, TrendingUp, ArrowRight } from "lucide-react"

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
                <div
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)"
                    }}
                />
                <div
                    className="absolute bottom-1/4 left-0 w-[500px] h-[500px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.3) 0%, transparent 70%)"
                    }}
                />
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

                {/* Main Feature Box */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="p-8 sm:p-10 md:p-12 rounded-2xl border border-[#4ECDC4]/30"
                        style={{
                            background: "rgba(78, 205, 196, 0.05)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <motion.div
                                className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4ECDC4]/10 mb-6"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#4ECDC4]" />
                            </motion.div>

                            <h3
                                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.mainFeature.title}
                            </h3>

                            <p
                                className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.mainFeature.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
                    {currentContent.benefits.map((benefit, index) => {
                        const Icon = benefitIcons[index]
                        return (
                            <motion.div
                                key={index}
                                className="p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                style={{
                                    background: "rgba(26, 26, 36, 0.4)",
                                    backdropFilter: "blur(10px)"
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)"
                                }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4ECDC4]/10 mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4]" />
                                </motion.div>

                                <h4
                                    className={`text-xl sm:text-2xl font-bold text-white mb-3 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {benefit.title}
                                </h4>

                                <p
                                    className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {benefit.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Philosophy Section */}
                <motion.div
                    className="max-w-5xl mx-auto mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="p-8 sm:p-10 md:p-12 rounded-2xl border border-white/10"
                        style={{
                            background: "rgba(20, 20, 28, 0.5)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <h3
                            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                        >
                            {currentContent.philosophy.title}
                        </h3>

                        <p
                            className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                        >
                            {currentContent.philosophy.description}
                        </p>

                        <p
                            className={`text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                        >
                            {currentContent.philosophy.subdescription}
                        </p>
                    </div>
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
                        className={`group px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-lg hover:shadow-[#4ECDC4]/50 flex items-center gap-3 mx-auto ${
                            isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                        }`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {currentContent.cta.button}
                        <ArrowRight
                            className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                                isRTL ? "rotate-180" : ""
                            }`}
                        />
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
