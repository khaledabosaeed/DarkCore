"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, PieChart, BarChart3, ArrowUpRight } from "lucide-react"

// Animated Number Counter Component
interface AnimatedCounterProps {
    value: number
    suffix?: string
    prefix?: string
    duration?: number
    decimals?: number
    isRTL?: boolean
}

export function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    decimals = 0,
    isRTL = false
}: AnimatedCounterProps) {
    return (
        <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: duration, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {prefix}
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: duration, ease: "easeOut" }}
                >
                    {value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
                </motion.span>
                {suffix}
            </motion.span>
        </motion.span>
    )
}

// Investment Wave Animation
export function InvestmentWaves() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-0 left-0 right-0 h-32"
                    style={{
                        background: `linear-gradient(to top, rgba(0, 0, 0, ${0.1 * (i + 1)}) 0%, transparent 100%)`,
                        transform: `translateY(${i * 20}px)`
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                />
            ))}
        </div>
    )
}

// Animated Chart Line
interface AnimatedChartProps {
    data: number[]
    color?: string
    height?: number
}

export function AnimatedChart({ data, color = "#000000", height = 100 }: AnimatedChartProps) {
    const maxValue = Math.max(...data)
    const points = data.map((value, index) => ({
        x: (index / (data.length - 1)) * 100,
        y: 100 - (value / maxValue) * 100
    }))

    const pathData = points.map((point, index) => 
        `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ')

    const areaPath = `${pathData} L 100 100 L 0 100 Z`

    return (
        <div className="relative" style={{ height: `${height}px` }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    viewport={{ once: true }}
                />
                <motion.path
                    d={areaPath}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                />
            </svg>
        </div>
    )
}

// Money Flow Animation
export function MoneyFlow() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "100%",
                        opacity: 0
                    }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                >
                    <DollarSign
                        className="w-6 h-6 text-[#000000] opacity-30"
                        style={{
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

// Growth Indicator
interface GrowthIndicatorProps {
    percentage: number
    isRTL?: boolean
}

export function GrowthIndicator({ percentage, isRTL = false }: GrowthIndicatorProps) {
    return (
        <motion.div
            className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.div
                animate={{
                    rotate: [0, 10, -10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <TrendingUp className="w-5 h-5 text-[#000000]" />
            </motion.div>
            <motion.span
                className="text-[#000000] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                +{percentage}%
            </motion.span>
        </motion.div>
    )
}

// Pulsing Investment Circle
export function PulsingInvestmentCircle() {
    return (
        <div className="relative w-32 h-32 mx-auto">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-[#000000]"
                    style={{
                        opacity: 0.3 - i * 0.1
                    }}
                    animate={{
                        scale: [1, 1.5 + i * 0.2, 1],
                        opacity: [0.3 - i * 0.1, 0, 0.3 - i * 0.1]
                    }}
                    transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                    }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
                <PieChart className="w-12 h-12 text-[#000000]" />
            </div>
        </div>
    )
}

// Animated Progress Bar
interface AnimatedProgressBarProps {
    value: number
    max?: number
    label?: string
    color?: string
    isRTL?: boolean
}

export function AnimatedProgressBar({
    value,
    max = 100,
    label,
    color = "#000000",
    isRTL = false
}: AnimatedProgressBarProps) {
    const percentage = (value / max) * 100

    return (
        <div className="w-full">
            {label && (
                <div className={`flex justify-between mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <span className="text-sm text-gray-700">{label}</span>
                    <span className="text-sm text-[#000000] font-bold">{percentage.toFixed(0)}%</span>
                </div>
            )}
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    )
}

// Floating Investment Icons
export function FloatingInvestmentIcons() {
    const icons = [TrendingUp, DollarSign, PieChart, BarChart3, ArrowUpRight]
    
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {icons.map((Icon, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: `${20 + index * 15}%`,
                        top: `${10 + index * 20}%`
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                    }}
                >
                    <Icon className="w-8 h-8 text-[#000000] opacity-20" />
                </motion.div>
            ))}
        </div>
    )
}

