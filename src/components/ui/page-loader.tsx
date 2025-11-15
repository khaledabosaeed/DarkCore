"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function PageLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => setIsLoading(false), 500)
                    return 100
                }
                return prev + 10
            })
        }, 150)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#ffffff]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo/Icon Animation */}
                    <motion.div
                        className="mb-8"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                style={{
                                    background: "radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, transparent 70%)"
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="relative z-10 w-full h-full">
                                <Image
                                    src="/Asset 1.svg"
                                    alt="Dark Core Logo"
                                    fill
                                    className="object-contain"
                                    style={{
                                        filter: "brightness(0)"
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-black mb-8 font-poppins tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        DARK CORE
                    </motion.h2>

                    {/* Progress Bar */}
                    <div className="w-64 md:w-80 h-1.5 bg-black/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#000000] to-[#404040] rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Progress Percentage */}
                    <motion.p
                        className="mt-4 text-[#000000] font-semibold text-lg"
                        key={progress}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {progress}%
                    </motion.p>

                    {/* Loading Dots */}
                    <div className="flex gap-2 mt-6">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-[#000000] rounded-full"
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
