'use client';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useState } from 'react';

function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isClicked, setIsClicked] = useState(false);
    const [pendingLanguage, setPendingLanguage] = useState<'ar' | 'en' | null>(null);

    const toggleLanguage = () => {
        // Trigger click animation
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 400);

        const newLang = language === 'ar' ? 'en' : 'ar';

        // تعيين اللغة المعلقة (للزر فقط)
        setPendingLanguage(newLang);

        // Change language (will update after 1.5s)
        setLanguage(newLang);

        // إعادة تعيين اللغة المعلقة بعد التحديث
        setTimeout(() => {
            setPendingLanguage(null);
        }, 1500);
    };

    return (
        <div className="relative group">
            {/* Tooltip */}
            <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1a24] px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50"
                style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                }}
            >
                {language === 'ar' ? 'Switch Language' : 'تبديل اللغة'}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a24] rotate-45"></div>
            </motion.div>

            {/* Toggle Switch Container */}
            <motion.button
                onClick={toggleLanguage}
                className="relative flex items-center gap-1 px-1 py-1 rounded-full border border-[#4ECDC4]/30 hover:border-[#4ECDC4]/60 transition-all duration-200 overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, rgba(78, 205, 196, 0.08) 0%, rgba(78, 205, 196, 0.12) 100%)",
                    minWidth: "90px"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isClicked ? {
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.4 }
                } : {}}
                aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
                {/* Glow Effect on Click */}
                {isClicked && (
                    <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%)"
                        }}
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                )}

                {/* AR Option */}
                <motion.div
                    className={`relative z-10 flex items-center justify-center gap-1 px-3 py-1.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                        (pendingLanguage || language) === 'ar'
                            ? 'text-[#0a0a0f]'
                            : 'text-gray-400'
                    }`}
                    animate={{
                        scale: (pendingLanguage || language) === 'ar' ? 1 : 0.85,
                        fontWeight: (pendingLanguage || language) === 'ar' ? 700 : 500,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30
                    }}
                >
                    <span className="font-cairo">ع</span>
                </motion.div>

                {/* Sliding Background - ينتقل بشكل خفيف */}
                <motion.div
                    className="absolute top-1 bottom-1 rounded-full"
                    style={{
                        background: "linear-gradient(135deg, #4ECDC4 0%, #5bb5a2 100%)",
                        boxShadow: "0 4px 12px rgba(78, 205, 196, 0.5), 0 0 25px rgba(78, 205, 196, 0.3)",
                        width: "calc(50% - 4px)"
                    }}
                    animate={{
                        x: (pendingLanguage || language) === 'ar' ? '4px' : 'calc(100% + 4px)',
                        scale: isClicked ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                        x: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 0.8
                        },
                        scale: {
                            duration: 0.3
                        }
                    }}
                />

                {/* EN Option */}
                <motion.div
                    className={`relative z-10 flex items-center justify-center gap-1 px-3 py-1.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                        (pendingLanguage || language) === 'en'
                            ? 'text-[#0a0a0f]'
                            : 'text-gray-400'
                    }`}
                    animate={{
                        scale: (pendingLanguage || language) === 'en' ? 1 : 0.85,
                        fontWeight: (pendingLanguage || language) === 'en' ? 700 : 500,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30
                    }}
                >
                    <span className="font-poppins">EN</span>
                </motion.div>
            </motion.button>

            {/* Language Icon - Rotates on hover */}
            <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-[#4ECDC4] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ scale: 1.2 }}
                animate={isClicked ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Languages className="w-3 h-3 text-[#0a0a0f]" />
            </motion.div>
        </div>
    );
}

export { LanguageSwitcher };
