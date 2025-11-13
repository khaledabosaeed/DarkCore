"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, TrendingUp, DollarSign, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"

interface CaseStudy {
    sector: string
    title: string
    description: string
    fullDescription: string
    location: string
    timeline: string
    investment: string
    roi: string
    achievements: string[]
}

interface CaseStudyModalProps {
    isOpen: boolean
    onClose: () => void
    caseStudy: CaseStudy | null
    isRTL?: boolean
}

export function CaseStudyModal({ isOpen, onClose, caseStudy, isRTL = false }: CaseStudyModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!caseStudy) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            className="relative w-full max-w-4xl my-8"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div
                                className="relative rounded-2xl overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, rgba(250, 250, 250, 0.95) 0%, rgba(245, 245, 245, 0.15) 50%, rgba(245, 245, 245, 0.95) 100%)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                {/* Close Button */}
                                <motion.button
                                    className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10 p-2 rounded-full bg-black/10 hover:bg-white/20 transition-colors`}
                                    onClick={onClose}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-6 h-6 text-black" />
                                </motion.button>

                                {/* Content */}
                                <div className="p-8 sm:p-12">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <span
                                            className={`inline-block text-sm font-semibold px-4 py-2 rounded-full mb-4 ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                            style={{
                                                background: "rgba(0, 0, 0, 0.15)",
                                                color: "#000000"
                                            }}
                                        >
                                            {caseStudy.sector}
                                        </span>

                                        <h2
                                            className={`text-3xl sm:text-4xl font-bold text-black mb-4 ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {caseStudy.title}
                                        </h2>

                                        <p
                                            className={`text-lg text-gray-700 leading-relaxed ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {caseStudy.fullDescription}
                                        </p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {/* Location */}
                                        <motion.div
                                            className="p-4 rounded-xl"
                                            style={{
                                                background: "rgba(0, 0, 0, 0.05)",
                                                border: "1px solid rgba(0, 0, 0, 0.2)"
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <MapPin className="w-5 h-5 text-[#000000] mb-2" />
                                            <p className="text-xs text-gray-600 mb-1">
                                                {isRTL ? "الموقع" : "Location"}
                                            </p>
                                            <p className={`text-sm font-bold text-black ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                                {caseStudy.location}
                                            </p>
                                        </motion.div>

                                        {/* Timeline */}
                                        <motion.div
                                            className="p-4 rounded-xl"
                                            style={{
                                                background: "rgba(0, 0, 0, 0.05)",
                                                border: "1px solid rgba(0, 0, 0, 0.2)"
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Calendar className="w-5 h-5 text-[#000000] mb-2" />
                                            <p className="text-xs text-gray-600 mb-1">
                                                {isRTL ? "المدة الزمنية" : "Timeline"}
                                            </p>
                                            <p className={`text-sm font-bold text-black ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                                {caseStudy.timeline}
                                            </p>
                                        </motion.div>

                                        {/* Investment */}
                                        <motion.div
                                            className="p-4 rounded-xl"
                                            style={{
                                                background: "rgba(0, 0, 0, 0.05)",
                                                border: "1px solid rgba(0, 0, 0, 0.2)"
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <DollarSign className="w-5 h-5 text-[#000000] mb-2" />
                                            <p className="text-xs text-gray-600 mb-1">
                                                {isRTL ? "الاستثمار" : "Investment"}
                                            </p>
                                            <p className={`text-sm font-bold text-black ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                                {caseStudy.investment}
                                            </p>
                                        </motion.div>

                                        {/* ROI */}
                                        <motion.div
                                            className="p-4 rounded-xl"
                                            style={{
                                                background: "rgba(0, 0, 0, 0.05)",
                                                border: "1px solid rgba(0, 0, 0, 0.2)"
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
                                            <p className="text-xs text-gray-600 mb-1">
                                                {isRTL ? "العائد" : "ROI"}
                                            </p>
                                            <p className={`text-sm font-bold text-green-400 ${isRTL ? "font-almarai" : "font-poppins"}`}>
                                                {caseStudy.roi}
                                            </p>
                                        </motion.div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <h3
                                            className={`text-xl font-bold text-black mb-4 ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                        >
                                            {isRTL ? "الإنجازات الرئيسية" : "Key Achievements"}
                                        </h3>

                                        <div className="space-y-3">
                                            {caseStudy.achievements.map((achievement, index) => (
                                                <motion.div
                                                    key={index}
                                                    className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <div className="flex-shrink-0 mt-1">
                                                        <CheckCircle2 className="w-5 h-5 text-[#000000]" />
                                                    </div>
                                                    <p
                                                        className={`text-gray-700 ${
                                                            isRTL ? "font-almarai text-right" : "font-poppins"
                                                        }`}
                                                    >
                                                        {achievement}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative gradient */}
                                <div
                                    className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
                                    style={{
                                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.4) 0%, transparent 70%)"
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
