"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { contactContent } from "./content"
import { MapPin, Phone, Mail, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
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

    const currentContent = contactContent[language]
    const isRTL = language === "ar"

    return (
        <section
            id="contact"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "#0a0a0f"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.25) 0%, transparent 70%)"
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
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                    >
                        <span className="text-white">{currentContent.title} </span>
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
                    </h2>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed ${
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

                {/* Main Content Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20`}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="p-8 sm:p-10 rounded-2xl border border-white/10"
                            style={{
                                background: "rgba(26, 26, 36, 0.4)",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            <h3
                                className={`text-2xl sm:text-3xl font-bold text-white mb-6 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.form.title}
                            </h3>

                            <form className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-300 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.name.label}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={currentContent.form.name.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ECDC4] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-300 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.email.label}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={currentContent.form.email.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ECDC4] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Company Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-300 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.company.label}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={currentContent.form.company.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ECDC4] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-300 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.message.label}
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder={currentContent.form.message.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#4ECDC4] transition-all duration-300 resize-none ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className={`w-full px-8 py-4 rounded-lg font-semibold text-[#0a0a0f] bg-[#4ECDC4] hover:bg-[#5bb5a2] transition-all duration-300 shadow-lg hover:shadow-[#4ECDC4]/50 ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {currentContent.form.button}
                                </motion.button>
                            </form>

                            {/* Social Media Icons */}
                            <motion.div
                                className="mt-8 flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {/* LinkedIn */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#4ECDC4]" />
                                </motion.a>

                                {/* Twitter/X */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-400 hover:text-[#4ECDC4]"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </motion.a>

                                {/* YouTube */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Youtube className="w-5 h-5 text-gray-400 hover:text-[#4ECDC4]" />
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Global Offices */}
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <h3
                                className={`text-2xl sm:text-3xl font-bold text-white mb-6 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                            >
                                {currentContent.offices.title}
                            </h3>

                            {/* Office Cards */}
                            <div className="space-y-4">
                                {currentContent.offices.locations.map((office, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-6 rounded-xl border border-white/10 hover:border-[#4ECDC4]/30 transition-all duration-300"
                                        style={{
                                            background: "rgba(26, 26, 36, 0.4)",
                                            backdropFilter: "blur(10px)"
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -3 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-[#4ECDC4]" />
                                                </div>
                                            </div>
                                            <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                                                <h4
                                                    className={`text-lg font-bold text-white mb-1 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                >
                                                    {office.city}
                                                </h4>
                                                <p
                                                    className={`text-sm text-gray-400 mb-2 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                >
                                                    {office.country}
                                                </p>
                                                <p
                                                    className={`text-sm text-gray-300 mb-2 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                >
                                                    {office.address}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-[#4ECDC4]" />
                                                    <a
                                                        href={`tel:${office.phone}`}
                                                        className={`text-sm text-[#4ECDC4] hover:text-[#5bb5a2] transition-colors ${
                                                            isRTL ? "font-almarai" : "font-poppins"
                                                        }`}
                                                    >
                                                        {office.phone}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* General Inquiries */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="p-8 sm:p-10 rounded-2xl border border-[#4ECDC4]/30"
                        style={{
                            background: "rgba(78, 205, 196, 0.05)",
                            backdropFilter: "blur(20px)"
                        }}
                    >
                        <h3
                            className={`text-xl sm:text-2xl font-bold text-white mb-6 text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                        >
                            {currentContent.generalInquiries.title}
                        </h3>

                        <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#4ECDC4]" />
                                </div>
                                <a
                                    href={`mailto:${currentContent.generalInquiries.email}`}
                                    className={`text-base sm:text-lg text-[#4ECDC4] hover:text-[#5bb5a2] transition-colors ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {currentContent.generalInquiries.email}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#4ECDC4]" />
                                </div>
                                <a
                                    href={`tel:${currentContent.generalInquiries.phone}`}
                                    className={`text-base sm:text-lg text-[#4ECDC4] hover:text-[#5bb5a2] transition-colors ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {currentContent.generalInquiries.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
