"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import { TrendingUp, BarChart3, LineChart, PieChart, ArrowUpRight, Activity } from "lucide-react"

// Investment Chart Lines - Fixed when in view
export function InvestmentChartLines() {
    // Generate deterministic chart data (no Math.random for SSR compatibility)
    const generateChartPath = (points: number, direction: "up" | "down", seed: number) => {
        const path = []
        for (let i = 0; i <= points; i++) {
            const x = (i / points) * 100
            // Use deterministic wave pattern instead of random
            const wave = Math.sin((i + seed) * 0.5) * 5
            const y = direction === "up"
                ? 80 - (i / points) * 40 + wave
                : 40 + (i / points) * 40 + wave
            path.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
        }
        return path.join(' ')
    }

    // Memoize paths to ensure consistency between server and client
    const chartPaths = useMemo(() => [
        generateChartPath(20, "up", 0),
        generateChartPath(20, "down", 5),
        generateChartPath(20, "up", 10)
    ], [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Chart Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                {chartPaths.map((path, i) => (
                    <motion.g
                        key={i}
                        initial={{ opacity: 0, x: i * 150, y: 0 }}
                        whileInView={{ opacity: 0.15, x: i * 150, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: i * 0.2
                        }}
                    >
                        <motion.path
                            d={path}
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 0.2 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                delay: i * 0.3
                            }}
                        />
                    </motion.g>
                ))}
            </svg>
        </div>
    )
}

// Floating Stock Icons - Fixed when in view
export function FloatingStockIcons() {
    const icons = [
        { Icon: TrendingUp, color: "#000000", delay: 0, position: { left: "10%", top: "20%" } },
        { Icon: BarChart3, color: "#404040", delay: 0.1, position: { left: "30%", top: "40%" } },
        { Icon: LineChart, color: "#000000", delay: 0.2, position: { left: "60%", top: "15%" } },
        { Icon: PieChart, color: "#404040", delay: 0.3, position: { left: "80%", top: "50%" } },
        { Icon: Activity, color: "#000000", delay: 0.4, position: { left: "20%", top: "70%" } },
        { Icon: ArrowUpRight, color: "#404040", delay: 0.5, position: { left: "70%", top: "80%" } }
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: item.position.left,
                        top: item.position.top
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 0.15, scale: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: item.delay
                    }}
                >
                    <item.Icon
                        className="w-8 h-8 sm:w-12 sm:h-12"
                        style={{
                            color: item.color
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

// Animated Grid Pattern - Fixed when in view
export function InvestmentGridPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                    backgroundPosition: "0 0"
                }}
            />
        </div>
    )
}

// Moving Gradient Orbs - Fixed when in view
export function MovingGradientOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Orb 1 */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, transparent 70%)"
                }}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 0.2, scale: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.2
                }}
            />

            {/* Orb 2 */}
            <motion.div
                className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(64, 64, 64, 0.12) 0%, transparent 70%)"
                }}
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 0.18, scale: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.4
                }}
            />

            {/* Orb 3 */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%)"
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.15, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.6
                }}
            />
        </div>
    )
}

// Data Points Animation - Fixed when in view
export function DataPointsAnimation() {
    // Predefined positions for data points
    const positions = [
        { left: "5%", top: "10%" }, { left: "25%", top: "20%" }, { left: "45%", top: "15%" },
        { left: "65%", top: "25%" }, { left: "85%", top: "18%" }, { left: "15%", top: "40%" },
        { left: "35%", top: "45%" }, { left: "55%", top: "38%" }, { left: "75%", top: "42%" },
        { left: "90%", top: "50%" }, { left: "10%", top: "60%" }, { left: "30%", top: "65%" },
        { left: "50%", top: "70%" }, { left: "70%", top: "68%" }, { left: "85%", top: "75%" },
        { left: "20%", top: "80%" }, { left: "40%", top: "85%" }, { left: "60%", top: "82%" },
        { left: "80%", top: "88%" }, { left: "5%", top: "90%" }
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: pos.left,
                        top: pos.top,
                        background: i % 2 === 0 ? "#000000" : "#404040"
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.3, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: i * 0.05
                    }}
                />
            ))}
        </div>
    )
}

// Main Investment Background Component
interface InvestmentBackgroundProps {
    variant?: "charts" | "icons" | "grid" | "orbs" | "points" | "all"
    intensity?: "light" | "medium" | "strong"
}

export function InvestmentBackground({ 
    variant = "all", 
    intensity = "medium" 
}: InvestmentBackgroundProps) {
    const intensityMap = {
        light: 0.3,
        medium: 0.5,
        strong: 0.8
    }

    const opacity = intensityMap[intensity]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
            {variant === "all" || variant === "charts" ? <InvestmentChartLines /> : null}
            {variant === "all" || variant === "icons" ? <FloatingStockIcons /> : null}
            {variant === "all" || variant === "grid" ? <InvestmentGridPattern /> : null}
            {variant === "all" || variant === "orbs" ? <MovingGradientOrbs /> : null}
            {variant === "all" || variant === "points" ? <DataPointsAnimation /> : null}
        </div>
    )
}

// Animated Color Gradient - Fixed when in view (no continuous movement)
export function AnimatedColorGradient() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(
                            135deg,
                            rgba(0, 0, 0, 0.12) 0%,
                            rgba(64, 64, 64, 0.08) 25%,
                            rgba(245, 245, 245, 0.06) 50%,
                            rgba(0, 0, 0, 0.08) 75%,
                            rgba(64, 64, 64, 0.12) 100%
                        )
                    `,
                    backgroundSize: "200% 200%",
                    backgroundPosition: "50% 50%"
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1.2,
                    ease: "easeOut"
                }}
            />
        </div>
    )
}

