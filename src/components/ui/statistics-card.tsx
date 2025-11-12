"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatisticsCardProps {
    icon: LucideIcon
    value: string
    label: string
    description?: string
    index?: number
    isRTL?: boolean
}

export function StatisticsCard({
    icon: Icon,
    value,
    label,
    description,
    index = 0,
    isRTL = false
}: StatisticsCardProps) {
    return (
        <motion.div
            className="group p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300 relative overflow-hidden"
            style={{
                background: "rgba(26, 26, 36, 0.5)",
                backdropFilter: "blur(10px)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(78, 205, 196, 0.2)"
            }}
        >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <motion.div
                className="relative z-10 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4ECDC4]/10 mb-4 group-hover:bg-[#4ECDC4]/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#4ECDC4]" />
            </motion.div>

            {/* Value */}
            <motion.div
                className={`relative z-10 ${isRTL ? "text-right" : "text-left"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
                <div
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#4ECDC4] to-[#5bb5a2] bg-clip-text text-transparent ${
                        isRTL ? "font-almarai" : "font-poppins"
                    }`}
                >
                    {value}
                </div>
                <h3
                    className={`text-lg sm:text-xl font-bold text-white mb-2 ${
                        isRTL ? "font-almarai" : "font-poppins"
                    }`}
                >
                    {label}
                </h3>
                {description && (
                    <p
                        className={`text-sm sm:text-base text-gray-400 leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {description}
                    </p>
                )}
            </motion.div>
        </motion.div>
    )
}

