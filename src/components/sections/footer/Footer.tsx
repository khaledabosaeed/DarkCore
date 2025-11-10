"use client"

import React, { useState, useEffect } from "react"
import { Linkedin, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { footerContent } from "./content"

export function Footer() {
    const [language, setLanguage] = useState("ar")

    useEffect(() => {
        const handleLanguageChange = () => {
            const currentLang = document.documentElement.lang || "ar"
            setLanguage(currentLang)
        }

        handleLanguageChange()

        const observer = new MutationObserver(handleLanguageChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"]
        })

        return () => observer.disconnect()
    }, [])

    const t = footerContent[language as keyof typeof footerContent]
    const isRTL = language === "ar"

    return (
        <footer
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #1a1a24 0%, #12121a 100%)"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] opacity-5"
                    style={{
                        background: "radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)"
                    }}
                />
            </div>

            {/* Social Media Section */}
            <div className="relative z-10 py-16 sm:py-20 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                    <motion.div
                        className="text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3
                            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 ${
                                isRTL ? "font-cairo" : "font-poppins"
                            }`}
                        >
                            {t.socialTitle}
                        </h3>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* LinkedIn */}
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-[#4ECDC4]" />
                        </motion.a>

                        {/* Twitter/X */}
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-[#4ECDC4]"
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
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/5 hover:bg-[#4ECDC4]/10 border border-white/10 hover:border-[#4ECDC4]/30 flex items-center justify-center transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 hover:text-[#4ECDC4]" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 ${isRTL ? "text-right" : "text-left"}`}>
                        {/* Logo and Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                                style={{
                                    background: "linear-gradient(to right, #4ECDC4 0%, #5bb5a2 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {t.logo}
                            </h2>
                            <p
                                className={`text-sm text-gray-400 leading-relaxed ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {t.description}
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3
                                className={`text-lg font-bold text-white mb-4 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {t.quickLinks.title}
                            </h3>
                            <ul className="space-y-2">
                                {t.quickLinks.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className={`text-sm text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300 ${
                                                isRTL ? "font-cairo" : "font-poppins"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3
                                className={`text-lg font-bold text-white mb-4 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {t.resources.title}
                            </h3>
                            <ul className="space-y-2">
                                {t.resources.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className={`text-sm text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300 ${
                                                isRTL ? "font-cairo" : "font-poppins"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Legal */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3
                                className={`text-lg font-bold text-white mb-4 ${
                                    isRTL ? "font-cairo" : "font-poppins"
                                }`}
                            >
                                {t.legal.title}
                            </h3>
                            <ul className="space-y-2">
                                {t.legal.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className={`text-sm text-gray-400 hover:text-[#4ECDC4] transition-colors duration-300 ${
                                                isRTL ? "font-cairo" : "font-poppins"
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        className="pt-8 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                            <p
                                className={`text-xs sm:text-sm text-gray-500 ${
                                    isRTL ? "font-cairo text-center sm:text-right" : "font-poppins text-center sm:text-left"
                                }`}
                            >
                                {t.copyright}
                            </p>
                            <p
                                className={`text-xs text-gray-500 ${
                                    isRTL ? "font-cairo text-center sm:text-right" : "font-poppins text-center sm:text-left"
                                }`}
                            >
                                {t.regulation}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
