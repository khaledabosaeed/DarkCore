'use client';

import React, { createContext, useContext, useState, useEffect, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'ar' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    isChangingLanguage: boolean;
    isRTL: boolean;
    disableAnimations: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Content Overlay Component
function ContentOverlay() {
    return (
        <motion.div
            className="fixed left-0 right-0 bottom-0 flex items-center justify-center"
            style={{
                top: '80px', // تحت النافبار
                zIndex: 90,
                background: 'rgba(10, 10, 15, 0.85)',
                backdropFilter: 'blur(8px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Spinner */}
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                {/* Outer ring */}
                <motion.div
                    className="w-16 h-16 rounded-full border-4 border-[#4ECDC4]/20"
                    style={{
                        borderTopColor: '#4ECDC4',
                        borderRightColor: '#4ECDC4',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Inner glow */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export function LanguageProvider({
    children,
    initialLocale
}: {
    children: React.ReactNode;
    initialLocale: Language;
}) {
    const [language, setLanguageState] = useState<Language>(initialLocale);
    const [isChangingLanguage, setIsChangingLanguage] = useState(false);
    const [disableAnimations, setDisableAnimations] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isRTL = language === 'ar';
    const router = useRouter();
    const pathname = usePathname();

    // Initialize language from URL
    useEffect(() => {
        setLanguageState(initialLocale);
    }, [initialLocale]);

    useEffect(() => {
        const applyLanguageChanges = () => {
            const html = document.documentElement;
            const body = document.body;

            // استخدام requestAnimationFrame لتجنب الرعشة
            requestAnimationFrame(() => {
                html.dir = language === 'ar' ? 'rtl' : 'ltr';
                html.lang = language;

                body.classList.remove('font-arabic', 'font-english');
                html.classList.remove('rtl', 'ltr');

                if (language === 'ar') {
                    body.classList.add('font-arabic');
                    html.classList.add('rtl');
                } else {
                    body.classList.add('font-english');
                    html.classList.add('ltr');
                }

                // إزالة أي style مباشر للخط إن وجد
                body.style.removeProperty('font-family');
            });
        };

        applyLanguageChanges();
    }, [language]);

    const setLanguage = (lang: Language) => {
        if (lang === language || isChangingLanguage) return;

        setIsChangingLanguage(true);
        setDisableAnimations(true);

        // استخدام startTransition لتجنب الرعشة
        startTransition(() => {
            const newPathname = pathname?.replace(/^\/(ar|en)/, `/${lang}`) || `/${lang}`;

            // الانتظار 1.5 ثانية ثم تحديث اللغة والـ URL
            setTimeout(() => {
                // تحديث اللغة (للنافبار والمحتوى)
                setLanguageState(lang);

                // تحديث URL بدون إعادة تحميل
                router.push(newPathname, { scroll: false });

                // إخفاء الـ overlay
                setIsChangingLanguage(false);

                // إعادة تفعيل الـ animations بعد 100ms
                setTimeout(() => {
                    setDisableAnimations(false);
                }, 100);
            }, 1500);
        });
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            isChangingLanguage: isChangingLanguage || isPending,
            isRTL,
            disableAnimations
        }}>
            {children}

            {/* Content Overlay - يظهر فقط أثناء تغيير اللغة */}
            <AnimatePresence>
                {isChangingLanguage && <ContentOverlay />}
            </AnimatePresence>
        </LanguageContext.Provider>
    );
}

// Hook للوصول للغة
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
