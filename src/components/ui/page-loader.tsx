"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp } from "lucide-react"

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
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo/Icon Animation */}
                    <motion.div
                        className="mb-8"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                style={{
                                    background: "radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%)"
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <TrendingUp className="w-20 h-20 text-[#4ECDC4] relative z-10" strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-8 font-poppins tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        DARK CORE
                    </motion.h2>

                    {/* Progress Bar */}
                    <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#5bb5a2] rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Progress Percentage */}
                    <motion.p
                        className="mt-4 text-[#4ECDC4] font-semibold text-lg"
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
                                className="w-2 h-2 bg-[#4ECDC4] rounded-full"
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
