"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function ScrollIndicator() {
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

    const scrollToNextSection = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    const scrollText = language === "ar" ? "مرر للأسفل" : "Scroll"
    const isRTL = language === "ar"

    return (
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
            onClick={scrollToNextSection}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
        >
            {/* Mouse Icon */}
            <motion.div
                className="w-7 h-11 border-2 border-[#000000] rounded-full p-1 flex justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-[#000000] rounded-full"
                    animate={{
                        y: [0, 8, 0],
                        opacity: [1, 0.3, 1]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Text */}
            <motion.p
                className={`text-[#000000] text-sm mt-2 text-center ${
                    isRTL ? "font-almarai" : "font-poppins"
                }`}
                animate={{
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {scrollText}
            </motion.p>
        </motion.div>
    )
}
