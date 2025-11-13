"use client"

import { motion } from "framer-motion"
import { LucideIcon, Check } from "lucide-react"

interface Feature {
    icon?: LucideIcon
    text: string
}

interface FeatureListProps {
    features: Feature[]
    isRTL?: boolean
    delay?: number
}

export function FeatureList({ features, isRTL = false, delay = 0 }: FeatureListProps) {
    return (
        <div className="space-y-4">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    className={`flex items-start gap-4 ${
                        isRTL ? "flex-row-reverse text-right" : "text-left"
                    }`}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                        {feature.icon ? (
                            <motion.div
                                className="w-6 h-6 rounded-full bg-[#000000]/10 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <feature.icon className="w-4 h-4 text-[#000000]" />
                            </motion.div>
                        ) : (
                            <motion.div
                                className="w-6 h-6 rounded-full bg-[#000000]/20 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Check className="w-4 h-4 text-[#000000]" />
                            </motion.div>
                        )}
                    </div>

                    {/* Text */}
                    <p
                        className={`flex-1 text-base sm:text-lg text-gray-700 leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {feature.text}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}

