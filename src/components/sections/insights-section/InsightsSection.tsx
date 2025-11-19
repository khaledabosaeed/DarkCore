"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { insightsContent } from "./content"
import { Sun, Recycle, Building2, TrendingUp, ArrowUpRight, DollarSign } from "lucide-react"
import { InvestmentBackground, AnimatedColorGradient } from "@/components/ui/investment-shapes"
import { PortfolioChart } from "@/components/ui/portfolio-chart"
import { CaseStudyModal } from "@/components/ui/case-study-modal"
import { InvestmentPatterns } from "@/components/ui/geometric-patterns"

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

export function InsightsSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const handleLanguageChange = () => {
            const htmlLang = document.documentElement.lang
            setLanguage(htmlLang === "ar" ? "ar" : "en")
        }

        handleLanguageChange()

        const observer = new MutationObserver(handleLanguageChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        })

        return () => observer.disconnect()
    }, [])

    const currentContent = insightsContent[language]
    const isRTL = language === "ar"

    // Icon mapping for sectors
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
        sun: Sun,
        recycle: Recycle,
        building: Building2
    }

    return (
        <section
            id="insights"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "#ffffff"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 opacity-15"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.2) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Investment Background Shapes */}
                <InvestmentBackground variant="grid" intensity="light" />

                {/* Animated Color Gradient */}
                <AnimatedColorGradient />

                {/* Geometric Patterns */}
                <InvestmentPatterns variant="shapes" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        <span className="text-black">{currentContent.title} </span>
                        {currentContent.highlightedTitle && (
                            <span
                                style={{
                                    background: "linear-gradient(to right, #000000 0%, #404040 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {currentContent.highlightedTitle}
                            </span>
                        )}
                    </h2>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.subtitle}
                    </motion.p>
                </motion.div>

                {/* Portfolio Distribution Chart */}
                <motion.div
                    className="mb-20 sm:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="relative p-8 sm:p-12 rounded-2xl bg-white border border-gray-200 shadow-md"
                    >
                        <div className="text-center mb-12">
                            <h3
                                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.portfolioTitle}
                            </h3>
                            <p
                                className={`text-base sm:text-lg text-gray-700 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.portfolioSubtitle}
                            </p>
                        </div>

                        <PortfolioChart data={currentContent.portfolio} isRTL={isRTL} />
                    </div>
                </motion.div>

                {/* Sector Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
                    {currentContent.articles.map((article, index) => {
                        const Icon = iconMap[article.icon]
                        return (
                            <motion.div
                                key={index}
                                className="group relative rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -15,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Card */}
                                <div
                                    className="relative p-6 sm:p-8 h-full bg-white border border-gray-200 rounded-2xl shadow-md flex flex-col items-center justify-center text-center"
                                >
                                    {/* Icon Section */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-6 mx-auto"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(64, 64, 64, 0.15) 100%)"
                                        }}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#000000]" />
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className={`flex items-center justify-center gap-2 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                                        <span
                                            className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full ${
                                                isRTL ? "font-almarai" : "font-poppins"
                                            }`}
                                            style={{
                                                background: "rgba(0, 0, 0, 0.15)",
                                                color: "#000000"
                                            }}
                                        >
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className={`text-xl sm:text-2xl font-bold text-black mb-4 group-hover:text-[#000000] transition-colors duration-300 text-center ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`text-sm sm:text-base text-gray-700 leading-relaxed mb-6 text-center ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {article.description}
                                    </p>

                                    {/* Stats Row */}
                                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200">
                                        {/* Growth Rate */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10">
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">
                                                    {isRTL ? "النمو المتوقع" : "Growth"}
                                                </p>
                                                <p className="text-sm font-bold text-green-400">
                                                    {article.growthRate}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Investment Size */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000000]/10">
                                                <DollarSign className="w-4 h-4 text-[#000000]" />
                                            </div>
                                            <div className={isRTL ? "text-right" : ""}>
                                                <p className="text-xs text-gray-600">
                                                    {isRTL ? "حجم الاستثمار" : "Investment"}
                                                </p>
                                                <p className="text-sm font-bold text-[#000000]">
                                                    {article.investmentSize}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Learn More Link */}
                                    <motion.button
                                        className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black bg-black/5 hover:bg-[#000000]/20 border border-gray-200 hover:border-[#000000]/50 transition-all duration-300 ${
                                            isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            setSelectedCaseStudy(article.caseStudy)
                                            setIsModalOpen(true)
                                        }}
                                    >
                                        {isRTL ? "عرض دراسة الحالة" : "View Case Study"}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </motion.button>

                                    {/* Gradient Overlay on Hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, transparent 50%)"
                                        }}
                                    />

                                    {/* Background Pattern */}
                                    <div
                                        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none"
                                        style={{
                                            background: "radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, transparent 70%)"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Reports Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-black ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        {currentContent.reportsTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {currentContent.reports.map((report, index) => {
                            const Icon = reportIcons[index]
                            return (
                                <motion.div
                                    key={index}
                                    className="p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-[#000000]/50 transition-all duration-300"
                                    style={{
                                        background: "rgba(245, 245, 245, 0.6)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                                    }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000000]/10 mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#000000]" />
                                    </motion.div>

                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-black mb-3 ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {report.title}
                                    </h4>

                                    <p
                                        className={`text-sm sm:text-base text-gray-700 leading-relaxed mb-6 ${
                                            isRTL ? "font-almarai" : "font-poppins"
                                        }`}
                                    >
                                        {report.description}
                                    </p>

                                    <motion.a
                                        href={report.link}
                                        className={`inline-flex items-center gap-2 text-[#000000] font-semibold hover:gap-3 transition-all duration-300 ${
                                            isRTL ? "flex-row-reverse font-almarai" : "font-poppins"
                                        }`}
                                        whileHover={{ x: isRTL ? -5 : 5 }}
                                    >
                                        {currentContent.downloadPDF}
                                        <Download className="w-4 h-4" />
                                    </motion.a>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div> */}

                {/* Subscribe Section */}
                {/* <motion.div
                    className="mt-20 sm:mt-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl border border-gray-200"
                        style={{
                            background: "rgba(245, 245, 245, 0.5)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <div className="text-center mb-8">
                            <h3
                                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.subscribe.title}
                            </h3>
                            <p
                                className={`text-base sm:text-lg text-gray-700 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.subscribe.description}
                            </p>
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                            <input
                                type="email"
                                placeholder={currentContent.subscribe.placeholder}
                                className={`flex-1 px-6 py-4 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 ${
                                    isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                }`}
                            />
                            <motion.button
                                className={`px-8 py-4 rounded-lg font-semibold text-[#ffffff] bg-[#000000] hover:bg-[#404040] transition-all duration-300 shadow-lg hover:shadow-[#000000]/50 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentContent.subscribe.button}
                            </motion.button>
                        </div>
                    </div>
                </motion.div> */}

                {/* Case Study Modal */}
                <CaseStudyModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    caseStudy={selectedCaseStudy}
                    isRTL={isRTL}
                />
            </div>
        </section>
    )
}
