"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { insightsContent } from "./content"
import { FileText, TrendingUp, BookOpen, ArrowRight, Download } from "lucide-react"

export function InsightsSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")

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

    // Icon mapping for reports
    const reportIcons = [FileText, TrendingUp, BookOpen]

    return (
        <section
            id="insights"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "#0a0a0f"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
                    }}
                />
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
                            isRTL ? "font-cairo" : "font-poppins"
                        }`}
                    >
                        <span className="text-white">{currentContent.title} </span>
                        {currentContent.highlightedTitle && (
                            <span
                                style={{
                                    background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
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
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed ${
                            isRTL ? "font-cairo" : "font-poppins"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {currentContent.subtitle}
                    </motion.p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
                    {currentContent.articles.map((article, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300 overflow-hidden"
                            style={{
                                background: "rgba(26, 26, 36, 0.4)",
                                backdropFilter: "blur(10px)"
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)"
                            }}
                        >
                            <div className="p-6 sm:p-8">
                                {/* Category and Read Time */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${
                                            isRTL ? "font-cairo" : "font-poppins"
                                        }`}
                                        style={{
                                            background: "rgba(78, 205, 196, 0.1)",
                                            color: "#4ECDC4"
                                        }}
                                    >
                                        {article.category}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500">
                                        {article.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className={`text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#4ECDC4] transition-colors ${
                                        isRTL ? "font-cairo" : "font-poppins"
                                    }`}
                                >
                                    {article.title}
                                </h3>

                                {/* Date */}
                                <p className="text-sm text-gray-500 mb-4">
                                    {article.date}
                                </p>

                                {/* Description */}
                                <p
                                    className={`text-sm sm:text-base text-gray-400 leading-relaxed mb-6 ${
                                        isRTL ? "font-cairo" : "font-poppins"
                                    }`}
                                >
                                    {article.description}
                                </p>

                                {/* Read More Link */}
                                <motion.a
                                    href={article.link}
                                    className={`inline-flex items-center gap-2 text-[#4ECDC4] font-semibold hover:gap-3 transition-all duration-300 ${
                                        isRTL ? "flex-row-reverse font-cairo" : "font-poppins"
                                    }`}
                                    whileHover={{ x: isRTL ? -5 : 5 }}
                                >
                                    {language === "en" ? "Read More" : "اقرأ المزيد"}
                                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Reports Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white ${
                            isRTL ? "font-cairo" : "font-poppins"
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
                                    className="p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#4ECDC4]/50 transition-all duration-300"
                                    style={{
                                        background: "rgba(20, 20, 28, 0.6)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 40px rgba(78, 205, 196, 0.15)"
                                    }}
                                >
                                    {/* Icon */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4ECDC4]/10 mb-6"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4ECDC4]" />
                                    </motion.div>

                                    {/* Title */}
                                    <h4
                                        className={`text-xl sm:text-2xl font-bold text-white mb-3 ${
                                            isRTL ? "font-cairo" : "font-poppins"
                                        }`}
                                    >
                                        {report.title}
                                    </h4>

                                    {/* Description */}
                                    <p
                                        className={`text-sm sm:text-base text-gray-400 leading-relaxed mb-6 ${
                                            isRTL ? "font-cairo" : "font-poppins"
                                        }`}
                                    >
                                        {report.description}
                                    </p>

                                    {/* Download Link */}
                                    <motion.a
                                        href={report.link}
                                        className={`inline-flex items-center gap-2 text-[#4ECDC4] font-semibold hover:gap-3 transition-all duration-300 ${
                                            isRTL ? "flex-row-reverse font-cairo" : "font-poppins"
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
                </motion.div>

                {/* Subscribe Section */}
                <motion.div
                    className="mt-20 sm:mt-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="max-w-4xl mx-auto p-8 sm:p-10 md:p-12 rounded-2xl border border-white/10"
                        style={{
                            background: "rgba(20, 20, 28, 0.5)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <div className="text-center mb-8">
                            <h3
                                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {currentContent.subscribe.title}
                            </h3>
                            <p
                                className={`text-base sm:text-lg text-gray-300 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {currentContent.subscribe.description}
                            </p>
                        </div>

                        {/* Email Subscription Form */}
                        <div className={`flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                            <input
                                type="email"
                                placeholder={currentContent.subscribe.placeholder}
                                className={`flex-1 px-6 py-4 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ECDC4] transition-all duration-300 ${
                                    isRTL ? "text-right font-cairo" : "text-left font-poppins"
                                }`}
                            />
                            <motion.button
                                className={`px-8 py-4 rounded-lg font-semibold text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-lg hover:shadow-[#4ECDC4]/50 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {currentContent.subscribe.button}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
