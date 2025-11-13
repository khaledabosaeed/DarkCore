"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loading() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [language, setLanguage] = useState<"en" | "ar">("ar")  
    const [isLanguageSet, setIsLanguageSet] = useState(false) 

    const translations = {
        ar: ["  نعزّز حُضورك .. نُظهِر علامتَك التجارية", "معرض سيتي سكيب العالمي 2025"],
        en: [
            "We enhance your presence.. We showcase your brand",
            "Cityscape Global Expo 2025",
        ],
    }
    const texts = translations[language]

    useEffect(() => {
        const handleLanguageChange = () => {
            const htmlLang = document.documentElement.lang
            if (htmlLang && htmlLang.trim() !== "") {
                setLanguage(htmlLang === "ar" ? "ar" : "en")
            } else {
                setLanguage("ar")
            }
            setIsLanguageSet(true)    
        }

        handleLanguageChange()

        const observer = new MutationObserver(handleLanguageChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isLanguageSet) return

        const textTimer = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
        return () => clearInterval(textTimer)
    }, [texts.length, isLanguageSet])

    if (!isLanguageSet) {
        return (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                style={{
                    background: "#181D27",
                }}
                initial={{ opacity: 1 }}
            >
                <div className="text-center w-full max-w-4xl" style={{ color: "#ffffff" }}>
                    <div className="flex justify-center gap-1 sm:gap-2">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                style={{
                                    backgroundColor: "#ffffff",
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 1, 0.4],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{
                background: "#181D27",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-center w-full max-w-4xl" style={{ color: "#ffffff" }}>
                <div className="mb-8 sm:mb-12 flex items-center justify-center min-h-[80px] sm:min-h-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={`${language}-${currentTextIndex}`}    
                            className={`
                                text-black font-bold text-center leading-tight font-arabic
                                ${currentTextIndex === 0
                                    ? "text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                                    : "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                                }
                            `}
                            style={{
                                maxWidth: "700px",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            {texts[currentTextIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </div>
                <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                    {texts.map((_, index) => (
                        <motion.div
                            key={index}
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: index === currentTextIndex ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                                boxShadow: index === currentTextIndex ? "0 0 15px rgba(255, 255, 255, 0.6)" : "none",
                            }}
                            animate={{
                                scale: index === currentTextIndex ? 1.3 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>
                {/* <div className="flex justify-center gap-1 sm:gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                            style={{
                                backgroundColor: "#4DD0C7",
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div> */}
            </div>
        </motion.div>
    )
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false) // Changed to false to disable loading screen

    useEffect(() => {
        // Disabled loading screen
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading && <Loading />}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </>
    )
}
