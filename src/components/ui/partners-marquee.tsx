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

    // Duplicate partners array multiple times for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

    return (
        <div className="relative w-full overflow-hidden py-16" style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 245, 245, 0.95) 30%, rgba(15, 20, 30, 0.92) 70%, rgba(255, 255, 255, 0.98) 100%)"
        }}>
            {/* Decorative gradient elements for visual integration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, transparent 70%)"
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
                        background: "radial-gradient(circle, rgba(64, 64, 64, 0.25) 0%, transparent 70%)"
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
                background: "linear-gradient(to right, rgba(255, 255, 255, 0.98), transparent)"
            }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 z-10" style={{
                background: "linear-gradient(to left, rgba(255, 255, 255, 0.98), transparent)"
            }} />

            {/* Marquee Content - Infinite Seamless Scroll */}
            <motion.div
                className="flex gap-8 md:gap-12"
                animate={{
                    x: isRTL ? [0, "50%"] : [0, "-50%"]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {/* Render duplicated partners */}
                {duplicatedPartners.map((partner, index) => {
                    const Icon = partner.icon
                    return (
                        <motion.div
                            key={`partner-${index}`}
                            className="flex items-center gap-3 px-8 py-4 rounded-xl whitespace-nowrap min-w-fit transition-all duration-300"
                            style={{
                                border: "2px solid transparent",
                                backgroundImage: "linear-gradient(135deg, rgba(250, 250, 250, 0.95) 0%, rgba(245, 245, 245, 0.9) 50%, rgba(240, 240, 240, 0.95) 100%), linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(64,64,64,0.18) 50%, rgba(26,26,26,0.12) 100%)",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                                backdropFilter: "blur(12px)",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
                            }}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)"
                            }}
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full"
                                style={{
                                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(64, 64, 64, 0.25) 50%, rgba(26, 26, 26, 0.15) 100%)"
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 5,
                                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(64, 64, 64, 0.35) 50%, rgba(26, 26, 26, 0.25) 100%)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Icon className="w-5 h-5 text-[#000000]" />
                            </motion.div>
                            <span
                                className={`font-semibold text-sm md:text-base ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                style={{
                                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {partner.name}
                            </span>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}
