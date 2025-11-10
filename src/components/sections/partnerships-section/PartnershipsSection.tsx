"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { partnershipsContent } from "./content"
import { Building2, HandshakeIcon, Globe2, ArrowRight } from "lucide-react"
import Image from "next/image"

export function PartnershipsSection() {
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

    const currentContent = partnershipsContent[language]
    const isRTL = language === "ar"

    // Icon mapping for features
    const featureIcons = [Building2, HandshakeIcon, Globe2]

    return (
        <section
            id="partnerships"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #0a0a0f 0%, #0f0f14 50%, #0a0a0f 100%)"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-0 w-[600px] h-[600px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)"
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-0 w-[600px] h-[600px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.3) 0%, transparent 70%)"
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
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 ${
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

                {/* Main Content Grid - Image and Description */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image Side */}
                    <motion.div
                        className={`relative ${isRTL ? "lg:order-2" : "lg:order-1"}`}
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden border border-[#4ECDC4]/30"
                            style={{
                                background: "rgba(78, 205, 196, 0.05)",
                                backdropFilter: "blur(20px)"
                            }}
                        >
                            {/* Placeholder for image - user will add */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#4ECDC4]/20 to-[#5bb5a2]/20 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <HandshakeIcon className="w-20 h-20 sm:w-24 sm:h-24 text-[#4ECDC4] mx-auto mb-4 opacity-50" />
                                    <p className={`text-gray-400 text-sm sm:text-base ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                        {isRTL ? "سيتم إضافة الصورة هنا" : "Image will be added here"}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Description Side */}
                    <motion.div
                        className={`${isRTL ? "lg:order-1" : "lg:order-2"}`}
                        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="p-8 sm:p-10 rounded-2xl border border-white/10"
                            style={{
                                background: "rgba(26, 26, 36, 0.4)",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            <p
                                className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
                    {currentContent.features.map((feature, index) => {
                        const Icon = featureIcons[index]
                        return (
                            <motion.div
                                key={index}
                                className="p-6 sm:p-8 rounded-xl border border-[#4ECDC4]/20 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                style={{
                                    background: "rgba(26, 26, 36, 0.4)",
                                    backdropFilter: "blur(10px)"
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
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

                                <h3
                                    className={`text-xl sm:text-2xl font-bold text-white mb-3 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {currentContent.cta.title}
                    </h3>

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
                </motion.div>
            </div>
        </section>
    )
}
