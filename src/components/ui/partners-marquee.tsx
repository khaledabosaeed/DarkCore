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

   

   
        </div>
    )
}
