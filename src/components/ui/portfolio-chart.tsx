"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface PortfolioItem {
    sector: string
    percentage: number
    color: string
    amount: string
}

interface PortfolioChartProps {
    data: PortfolioItem[]
    isRTL?: boolean
}

export function PortfolioChart({ data, isRTL = false }: PortfolioChartProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // Calculate the pie chart segments
    const calculatePath = (percentage: number, startAngle: number) => {
        const radius = 100
        const centerX = 120
        const centerY = 120

        const endAngle = startAngle + (percentage / 100) * 360
        const startRad = (startAngle - 90) * (Math.PI / 180)
        const endRad = (endAngle - 90) * (Math.PI / 180)

        const x1 = centerX + radius * Math.cos(startRad)
        const y1 = centerY + radius * Math.sin(startRad)
        const x2 = centerX + radius * Math.cos(endRad)
        const y2 = centerY + radius * Math.sin(endRad)

        const largeArcFlag = percentage > 50 ? 1 : 0

        return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
    }

    let currentAngle = 0

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Chart */}
            <div className="relative">
                <svg width="240" height="240" viewBox="0 0 240 240" className="transform rotate-0">
                    {/* Center circle background */}
                    <circle cx="120" cy="120" r="70" fill="rgba(10, 10, 15, 0.9)" />

                    {/* Pie segments */}
                    {data.map((item, index) => {
                        const path = calculatePath(item.percentage, currentAngle)
                        currentAngle += (item.percentage / 100) * 360

                        return (
                            <motion.g key={index}>
                                <motion.path
                                    d={path}
                                    fill={item.color}
                                    opacity={hoveredIndex === null ? 0.8 : hoveredIndex === index ? 0.9 : 0.4}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        transformOrigin: "120px 120px",
                                        cursor: "pointer"
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                />
                            </motion.g>
                        )
                    })}

                    {/* Center circle border */}
                    <circle
                        cx="120"
                        cy="120"
                        r="70"
                        fill="none"
                        stroke="rgba(78, 205, 196, 0.2)"
                        strokeWidth="2"
                    />
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className={`text-sm text-gray-400 mb-1 ${isRTL ? "font-almarai" : "font-poppins"}`}>
                        {isRTL ? "إجمالي المحفظة" : "Total Portfolio"}
                    </p>
                    <p className={`text-2xl font-bold text-white ${isRTL ? "font-almarai" : "font-poppins"}`}>
                        100%
                    </p>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-4">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-3 cursor-pointer"
                        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileHover={{ x: isRTL ? -5 : 5 }}
                    >
                        {/* Color indicator */}
                        <motion.div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                            animate={{
                                scale: hoveredIndex === index ? 1.3 : 1,
                                boxShadow: hoveredIndex === index
                                    ? `0 0 20px ${item.color}`
                                    : "none"
                            }}
                            transition={{ duration: 0.2 }}
                        />

                        {/* Text */}
                        <div className={isRTL ? "text-right" : ""}>
                            <p className={`text-sm font-semibold ${
                                hoveredIndex === index ? "text-white" : "text-gray-300"
                            } transition-colors ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                {item.sector}
                            </p>
                            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                                <p className={`text-lg font-bold ${isRTL ? "font-almarai" : "font-poppins"}`}
                                    style={{ color: item.color }}>
                                    {item.percentage}%
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.amount}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
