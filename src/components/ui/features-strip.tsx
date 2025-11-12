"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Globe, Zap } from "lucide-react"

const featuresData = {
    ar: [
        {
            title: "نمو استراتيجي",
            description: "نخلق قيمة طويلة الأمد",
            icon: TrendingUp
        },
        {
            title: "إدارة المخاطر",
            description: "نحمي رأس المال في كل خطوة",
            icon: Globe
        },
        {
            title: "الابتكار أولاً",
            description: "لريادة المستقبل وتجاوز التوقعات",
            icon: Zap
        }
    ],
    en: [
        {
            title: "Strategic Growth",
            description: "Creating long-term value",
            icon: TrendingUp
        },
        {
            title: "Risk Management",
            description: "Protecting capital at every step",
            icon: Globe
        },
        {
            title: "Innovation First",
            description: "Leading the future, exceeding expectations",
            icon: Zap
        }
    ]
}

export function FeaturesStrip() {
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

    const features = featuresData[language]
    const isRTL = language === "ar"

    return (
        <div className="relative w-full py-16 mb-12" style={{
            background: "linear-gradient(135deg, rgba(20, 40, 160, 0.08) 0%, rgba(20, 40, 160, 0.12) 50%, rgba(20, 40, 160, 0.08) 100%)"
        }}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-6 sm:p-8 rounded-xl border transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 40, 160, 0.1) 50%, rgba(20, 20, 28, 0.5) 100%)",
                                    backdropFilter: "blur(10px)",
                                    borderColor: "rgba(78, 205, 196, 0.15)"
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    borderColor: "rgba(78, 205, 196, 0.5)",
                                    boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)"
                                }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.2) 100%)"
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4]" />
                                </motion.div>

                                {/* Title */}
                                <h3
                                    className={`text-lg sm:text-xl font-bold text-white mb-2 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-sm sm:text-base text-gray-400 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
