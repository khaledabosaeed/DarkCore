"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { partnershipsContent } from "./content"
import { Building2, HandshakeIcon, Globe2, ArrowRight } from "lucide-react"
import Image from "next/image"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"

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
                background: "linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-0 w-[600px] h-[600px] opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.25) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-[600px] h-[600px] opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(64, 64, 64, 0.25) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="points" intensity="light" />
                
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
                        className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 ${
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
<div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16 sm:mb-20 ${isRTL ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image Side */}
               <motion.div className={`relative h-full ${isRTL ? "lg:order-2" : "lg:order-1"}`}

                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden border border-gray-300 bg-gray-50 shadow-md aspect-[4/3]"
                        >
                            <Image
                                src="/partnerships-section/1763196676265 (2).png"
                                alt="Partnerships"
                                fill
                                className="object-cover"
                                priority
                                quality={90}
                            />

                            {/* Decorative overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/50 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Description Side */}
                <motion.div className={`h-full ${isRTL ? "lg:order-1" : "lg:order-2"} `}
                        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="h-full p-8 sm:p-10 rounded-2xl border border-gray-200 flex flex-col items-center justify-around bg-white shadow-md"
                        >
                            {/* Split description into visual sections */}
                            <div className="space-y-6 ">
                                {/* Vision Section */}
                                <div>
                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-[#000000] mb-3 ${
                                            isRTL ? "font-almarai text-right" : "font-poppins"
                                        }`}
                                    >
                                        {isRTL ? "رؤيتنا" : "Our Vision"}
                                    </h4>
                                    <p
                                        className={`text-base sm:text-lg text-gray-700 leading-relaxed ${
                                            isRTL ? "font-almarai text-right" : "font-poppins"
                                        }`}
                                    >
                                        {currentContent.vision || currentContent.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-[#000000]/30 to-transparent" />

                                {/* Mission Section */}
                                <div>
                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-[#000000] mb-3 ${
                                            isRTL ? "font-almarai text-right" : "font-poppins"
                                        }`}
                                    >
                                        {isRTL ? "رسالتنا" : "Our Mission"}
                                    </h4>
                                    <p
                                        className={`text-base sm:text-lg text-gray-700 leading-relaxed ${
                                            isRTL ? "font-almarai text-right" : "font-poppins"
                                        }`}
                                    >
                                        {currentContent.mission || currentContent.description}
                                    </p>
                                </div>
                            </div>
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
                                className="p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white shadow-md hover:shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                                }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000000]/10 mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#000000]" />
                                </motion.div>

                                <h3
                                    className={`text-xl sm:text-2xl font-bold text-black mb-3 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className={`text-sm sm:text-base text-gray-700 leading-relaxed ${
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
                        className={`text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {currentContent.cta.title}
                    </h3>

                    <motion.button
                        className={`group px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg text-[#ffffff] bg-[#000000] hover:bg-[#404040] transition-all duration-300 shadow-lg hover:shadow-[#000000]/50 flex items-center gap-3 mx-auto ${
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
