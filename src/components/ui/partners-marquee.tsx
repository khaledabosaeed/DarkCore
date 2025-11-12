"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Building2, TrendingUp, Globe, Zap, Award, Target } from "lucide-react"

const partnersData = {
    ar: [
        { name: "شركة الاستثمارات العالمية", icon: Globe },
        { name: "شركاء النمو", icon: TrendingUp },
        { name: "رأس المال النامي", icon: Building2 },
        { name: "الصناديق الاستراتيجية", icon: Target },
        { name: "رأس المال المبتكر", icon: Zap },
        { name: "التميز والأسهم", icon: Award },
    ],
    en: [
        { name: "Global Ventures", icon: Globe },
        { name: "Investment Partners", icon: TrendingUp },
        { name: "Capital Growth", icon: Building2 },
        { name: "Strategic Funds", icon: Target },
        { name: "Innovation Capital", icon: Zap },
        { name: "Excellence Equity", icon: Award },
    ]
}

export function PartnersMarquee() {
    const [language, setLanguage] = useState<"ar" | "en">("ar")

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

    const partners = partnersData[language]
    const isRTL = language === "ar"

    return (
        <div className="relative w-full overflow-hidden py-16" style={{
            background: "linear-gradient(180deg, rgba(10, 10, 15, 0.98) 0%, rgba(13, 17, 23, 0.95) 30%, rgba(15, 20, 30, 0.92) 70%, rgba(10, 10, 15, 0.98) 100%)"
        }}>
            {/* Decorative gradient elements for visual integration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-64 h-64 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(91, 181, 162, 0.25) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 z-10" style={{
                background: "linear-gradient(to right, rgba(10, 10, 15, 0.98), transparent)"
            }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 z-10" style={{
                background: "linear-gradient(to left, rgba(10, 10, 15, 0.98), transparent)"
            }} />

            {/* Marquee Content */}
            <div className="flex">
                {/* First Set */}
                <motion.div
                    className="flex gap-8 md:gap-12 pr-8 md:pr-12"
                    animate={{
                        x: [0, -1000]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => {
                        const Icon = partner.icon
                        return (
                            <motion.div
                                key={`first-${index}`}
                                className="flex items-center gap-3 px-8 py-4 rounded-xl whitespace-nowrap min-w-fit border transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(20, 40, 160, 0.12) 50%, rgba(20, 20, 28, 0.7) 100%)",
                                    backdropFilter: "blur(12px)",
                                    borderColor: "rgba(78, 205, 196, 0.2)",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)"
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    borderColor: "rgba(78, 205, 196, 0.6)",
                                    boxShadow: "0 8px 24px rgba(78, 205, 196, 0.2)"
                                }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.25) 0%, rgba(91, 181, 162, 0.15) 100%)"
                                    }}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                >
                                    <Icon className="w-5 h-5 text-[#4ECDC4]" />
                                </motion.div>
                                <span className={`text-white font-semibold text-sm md:text-base ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}>
                                    {partner.name}
                                </span>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Second Set (for seamless loop) */}
                <motion.div
                    className="flex gap-8 md:gap-12 pr-8 md:pr-12"
                    animate={{
                        x: [0, -1000]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {[...partners, ...partners].map((partner, index) => {
                        const Icon = partner.icon
                        return (
                            <motion.div
                                key={`second-${index}`}
                                className="flex items-center gap-3 px-8 py-4 rounded-xl whitespace-nowrap min-w-fit border transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, rgba(26, 26, 36, 0.8) 0%, rgba(20, 40, 160, 0.12) 50%, rgba(20, 20, 28, 0.7) 100%)",
                                    backdropFilter: "blur(12px)",
                                    borderColor: "rgba(78, 205, 196, 0.2)",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)"
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    borderColor: "rgba(78, 205, 196, 0.6)",
                                    boxShadow: "0 8px 24px rgba(78, 205, 196, 0.2)"
                                }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.25) 0%, rgba(91, 181, 162, 0.15) 100%)"
                                    }}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                >
                                    <Icon className="w-5 h-5 text-[#4ECDC4]" />
                                </motion.div>
                                <span className={`text-white font-semibold text-sm md:text-base ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}>
                                    {partner.name}
                                </span>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}
