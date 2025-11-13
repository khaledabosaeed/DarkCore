"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { contactContent } from "./content"
import { MapPin, Phone, Mail, Linkedin, Youtube } from "lucide-react"

export function ContactSection() {
    const [language, setLanguage] = useState<"en" | "ar">("ar")
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                })
                setTimeout(() => setSubmitStatus('idle'), 5000)
            } else {
                setSubmitStatus('error')
                setTimeout(() => setSubmitStatus('idle'), 5000)
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus('idle'), 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section
            id="contact"
            className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)"
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(0, 0, 0, 0.25) 0%, transparent 70%)"
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
                        <span
                            style={{
                                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {currentContent.title}{" "}
                        </span>
                        <span
                            style={{
                                background: "linear-gradient(135deg, #000000 0%, #2d2d2d 50%, #4a4a4a 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {currentContent.highlightedTitle}
                        </span>
                    </h2>

                    <motion.p
                        className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                            isRTL ? "font-almarai" : "font-poppins"
                        }`}
                        style={{
                            background: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #5a5a5a 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
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
                            className="p-8 sm:p-10 rounded-2xl bg-white shadow-md"
                            style={{
                                border: "2px solid transparent",
                                backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(64,64,64,0.12) 50%, rgba(26,26,26,0.08) 100%)",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                            }}
                        >
                            <h3
                                className={`text-2xl sm:text-3xl font-bold mb-6 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                style={{
                                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {currentContent.form.title}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-[#000000]/10 border border-[#000000]/30 text-[#000000] text-center"
                                    >
                                        {isRTL ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً" : "Message sent successfully! We'll contact you soon"}
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-center"
                                    >
                                        {isRTL ? "حدث خطأ. الرجاء المحاولة مرة أخرى" : "An error occurred. Please try again"}
                                    </motion.div>
                                )}

                                {/* Name Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-700 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.name.label} *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={currentContent.form.name.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-700 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.email.label} *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={currentContent.form.email.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-700 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.phone.label}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder={currentContent.form.phone.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Company Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-700 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.company.label}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder={currentContent.form.company.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-medium text-gray-700 mb-2 ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    >
                                        {currentContent.form.message.label} *
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={currentContent.form.message.placeholder}
                                        className={`w-full px-4 py-3 rounded-lg bg-[#ffffff] border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-[#000000] transition-all duration-300 resize-none ${
                                            isRTL ? "text-right font-almarai" : "text-left font-poppins"
                                        }`}
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-4 rounded-lg font-semibold text-[#ffffff] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                    style={{
                                        background: isSubmitting
                                            ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)"
                                            : "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)"
                                    }}
                                    whileHover={!isSubmitting ? {
                                        scale: 1.02,
                                        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)"
                                    } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting
                                        ? (isRTL ? "جارٍ الإرسال..." : "Sending...")
                                        : currentContent.form.button
                                    }
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
                                    className="w-10 h-10 rounded-lg bg-black/5 hover:bg-[#000000]/10 border border-gray-200 hover:border-[#000000]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-5 h-5 text-gray-700 hover:text-[#000000]" />
                                </motion.a>

                                {/* Twitter/X */}
                                <motion.a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-black/5 hover:bg-[#000000]/10 border border-gray-200 hover:border-[#000000]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-700 hover:text-[#000000]"
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
                                    className="w-10 h-10 rounded-lg bg-black/5 hover:bg-[#000000]/10 border border-gray-200 hover:border-[#000000]/30 flex items-center justify-center transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Youtube className="w-5 h-5 text-gray-700 hover:text-[#000000]" />
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
                                className={`text-2xl sm:text-3xl font-bold mb-6 ${
                                    isRTL ? "font-almarai" : "font-poppins"
                                }`}
                                style={{
                                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {currentContent.offices.title}
                            </h3>

                            {/* Office Cards */}
                            <div className="space-y-4">
                                {currentContent.offices.locations.map((office, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-6 rounded-xl transition-all duration-300 bg-white shadow-md hover:shadow-lg"
                                        style={{
                                            border: "2px solid transparent",
                                            backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(64,64,64,0.12) 50%, rgba(26,26,26,0.08) 100%)",
                                            backgroundOrigin: "border-box",
                                            backgroundClip: "padding-box, border-box",
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -3 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-[#000000]/10 flex items-center justify-center">
                                                    <MapPin className="w-6 h-6 text-[#000000]" />
                                                </div>
                                            </div>
                                            <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                                                <h4
                                                    className={`text-lg font-bold mb-1 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                    style={{
                                                        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        backgroundClip: "text",
                                                    }}
                                                >
                                                    {office.city}
                                                </h4>
                                                <p
                                                    className={`text-sm mb-2 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                    style={{
                                                        background: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #5a5a5a 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        backgroundClip: "text",
                                                    }}
                                                >
                                                    {office.country}
                                                </p>
                                                <p
                                                    className={`text-sm mb-2 ${
                                                        isRTL ? "font-almarai" : "font-poppins"
                                                    }`}
                                                    style={{
                                                        background: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #5a5a5a 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        backgroundClip: "text",
                                                    }}
                                                >
                                                    {office.address}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-[#000000]" />
                                                    <a
                                                        href={`tel:${office.phone}`}
                                                        className={`text-sm text-[#000000] hover:text-[#404040] transition-colors ${
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
                        className="p-8 sm:p-10 rounded-2xl bg-gray-50 shadow-md"
                        style={{
                            border: "2px solid transparent",
                            backgroundImage: "linear-gradient(#fafafa, #fafafa), linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(64,64,64,0.15) 50%, rgba(26,26,26,0.1) 100%)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                        }}
                    >
                        <h3
                            className={`text-xl sm:text-2xl font-bold mb-6 text-center ${
                                isRTL ? "font-almarai" : "font-poppins"
                            }`}
                            style={{
                                background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {currentContent.generalInquiries.title}
                        </h3>

                        <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#000000]/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#000000]" />
                                </div>
                                <a
                                    href={`mailto:${currentContent.generalInquiries.email}`}
                                    className={`text-base sm:text-lg text-[#000000] hover:text-[#404040] transition-colors ${
                                        isRTL ? "font-almarai" : "font-poppins"
                                    }`}
                                >
                                    {currentContent.generalInquiries.email}
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#000000]/10 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#000000]" />
                                </div>
                                <a
                                    href={`tel:${currentContent.generalInquiries.phone}`}
                                    className={`text-base sm:text-lg text-[#000000] hover:text-[#404040] transition-colors ${
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
