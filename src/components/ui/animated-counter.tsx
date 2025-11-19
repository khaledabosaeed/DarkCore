"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
    value: number
    duration?: number
    suffix?: string
    type?: string
    prefix?: string
    decimals?: number
    className?: string
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
    type = ""
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [motionValue, isInView, value])

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(latest)
        })

        return unsubscribe
    }, [springValue])

    return (
        <span ref={ref} className={className}>
            {displayValue.toFixed(decimals)}
            {type}
            {suffix} 
            {prefix}
        </span>
    )
}

interface StatCardProps {
    value: number
    suffix?: string
    prefix?: string
    label: string
    type?: string
    icon?: React.ReactNode
    delay?: number
    decimals?: number
}

export function StatCard({ value, suffix, prefix, label, icon, delay = 0, decimals = 0 }: StatCardProps) {
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-6 rounded-xl bg-black/5 backdrop-blur-md border border-gray-200 hover:border-[#000000]/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
            }}
        >
            {icon && (
                <motion.div
                    className="mb-4 text-[#000000]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <AnimatedCounter
                    value={value}
                    suffix={suffix}
                    prefix={prefix}
                    decimals={decimals}
                />
            </div>
            <div className="text-sm md:text-base text-gray-700 text-center">
                {label}
            </div>
        </motion.div>
    )
}
