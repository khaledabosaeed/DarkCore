"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
    value: number
    duration?: number
    suffix?: string
    prefix?: string
    decimals?: number
    className?: string
}

export function AnimatedCounter({
    value,
    duration = 2,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = ""
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, isInView, value])

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(latest)
        })
    }, [springValue])

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    )
}

interface StatCardProps {
    value: number
    suffix?: string
    prefix?: string
    label: string
    icon?: React.ReactNode
    delay?: number
    decimals?: number
}

export function StatCard({ value, suffix, prefix, label, icon, delay = 0, decimals = 0 }: StatCardProps) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)"
            }}
        >
            {icon && (
                <motion.div
                    className="mb-4 text-[#4ECDC4]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter
                    value={value}
                    suffix={suffix}
                    prefix={prefix}
                    decimals={decimals}
                />
            </div>
            <div className="text-sm md:text-base text-gray-400 text-center">
                {label}
            </div>
        </motion.div>
    )
}
