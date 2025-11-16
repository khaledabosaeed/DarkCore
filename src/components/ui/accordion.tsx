"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, LucideIcon } from "lucide-react"

interface AccordionItem {
    title: string
    content: string | string[]
    icon?: LucideIcon
}

interface AccordionProps {
    items: AccordionItem[]
    isRTL?: boolean
    defaultOpen?: number
}

export function Accordion({ items, isRTL = false, defaultOpen = 0 }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index
                const contentArray = Array.isArray(item.content) ? item.content : [item.content]

                return (
                    <motion.div
                        key={index}
                        className="rounded-xl border border-gray-200 overflow-hidden"
                        style={{
                            background: "rgba(250, 250, 250, 0.4)",
                            backdropFilter: "blur(10px)"
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Header */}
                        <motion.button
                            onClick={() => toggleItem(index)}
                            className={`w-full p-6 flex items-center justify-between gap-4 hover:bg-black/5 transition-colors ${
                                isRTL ? "text-right" : "text-left"
                            }`}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                        >
                            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                                {item.icon && (
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#000000]/10 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-[#000000]" />
                                    </div>
                                )}
                                <h3
                                    className={`text-lg sm:text-xl font-bold text-black ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {item.title}
                                </h3>
                            </div>

                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <ChevronDown className="w-5 h-5 text-black" />
                            </motion.div>
                        </motion.button>

                        {/* Content */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className={`p-6 pt-0 ${isRTL ? "text-right" : "text-left"}`}>
                                        {contentArray.map((paragraph, pIndex) => (
                                            <p
                                                key={pIndex}
                                                className={`text-base text-white/70 leading-relaxed mb-4 last:mb-0 ${
                                                    isRTL ? "font-almarai" : "font-poppins"
                                                }`}
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            })}
        </div>
    )
}

