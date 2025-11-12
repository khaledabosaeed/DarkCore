/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors - #1428A0 (الألوان الجديدة)
                primary: {
                    DEFAULT: '#1428A0',
                    50: '#eff3fb',
                    100: '#dce5f6',
                    200: '#b9cbec',
                    300: '#97b1e3',
                    400: '#7497d9',
                    500: '#1428A0', // اللون الرئيسي الجديد
                    600: '#102080',
                    700: '#0c1860',
                    800: '#081040',
                    900: '#040820',
                    950: '#020410',
                },
                // Secondary Colors - #84939E (الألوان الثانوية الجديدة)
                secondary: {
                    DEFAULT: '#84939e',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#84939e', // اللون الثانوي الجديد
                    600: '#687580',
                    700: '#475569',
                    800: '#334155',
                    900: '#1e293b',
                    950: '#0f172a',
                },
                // Accent Colors (مكملة للألوان الأساسية)
                accent: {
                    DEFAULT: '#14b8a6',
                    50: '#f0fdfc',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                },
                // Status Colors
                success: {
                    DEFAULT: '#1428A0',
                    50: '#eff3fb',
                    100: '#dce5f6',
                    500: '#1428A0',
                    600: '#102080',
                    700: '#0c1860',
                },
                info: {
                    DEFAULT: '#84939e',
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    500: '#84939e',
                    600: '#687580',
                    700: '#475569',
                },
                warning: {
                    DEFAULT: '#f59e0b',
                    50: '#fffbeb',
                    100: '#fef3c7',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                },
                error: {
                    DEFAULT: '#ef4444',
                    50: '#fef2f2',
                    100: '#fee2e2',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                },
                // Neutral colors
                neutral: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },

            // خطوط Google Fonts - سهلة ومضمونة
            fontFamily: {
                // الخطوط من Google Fonts
                'inter': ['var(--font-inter)', 'sans-serif'],
                'cairo': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'tajawal': ['var(--font-tajawal)', 'Arial', 'sans-serif'],

                // أسماء مبسطة للاستخدام (باستخدام Cairo - خط ممتاز)
                'arabic': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'light': ['var(--font-cairo)', 'Arial', 'sans-serif'],      // وزن 300
                'normal': ['var(--font-cairo)', 'Arial', 'sans-serif'],     // وزن 400
                'medium': ['var(--font-cairo)', 'Arial', 'sans-serif'],     // وزن 500
                'semibold': ['var(--font-cairo)', 'Arial', 'sans-serif'],   // وزن 600
                'bold': ['var(--font-cairo)', 'Arial', 'sans-serif'],       // وزن 700
                'heavy': ['var(--font-cairo)', 'Arial', 'sans-serif'],      // وزن 800-900

                // أسماء حسب الاستخدام - كلها Cairo
                'arabic-title': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'arabic-body': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'arabic-heading': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'arabic-light': ['var(--font-cairo)', 'Arial', 'sans-serif'],
                'arabic-heavy': ['var(--font-cairo)', 'Arial', 'sans-serif'],

                // Tajawal كخيار بديل
                'tajawal-light': ['var(--font-tajawal)', 'Arial', 'sans-serif'],
                'tajawal-bold': ['var(--font-tajawal)', 'Arial', 'sans-serif'],
            },

            // الأوزان للخطوط العربية
            fontWeight: {
                'arabic-light': '200',
                'arabic-normal': '400',
                'arabic-medium': '500',
                'arabic-semibold': '600',
                'arabic-bold': '700',
                'arabic-heavy': '800',
                'arabic-black': '900',
            },

            // Background images والتدرجات مع الألوان الجديدة
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #1428A0 0%, #2d4bb8 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #84939e 0%, #a3b1ba 100%)',
                'gradient-accent': 'linear-gradient(135deg, #14b8a6 0%, rgba(20, 184, 166, 0.1) 100%)',
                'gradient-mixed': 'linear-gradient(135deg, #1428A0 0%, #84939e 50%, #2d4bb8 100%)',
                'gradient-hero': 'linear-gradient(135deg, #102080 0%, #1428A0 35%, #84939e 100%)',
                'gradient-section': 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
                // Investment-themed gradients
                'gradient-investment': 'linear-gradient(135deg, rgba(20, 40, 160, 0.15) 0%, rgba(78, 205, 196, 0.1) 50%, rgba(91, 181, 162, 0.15) 100%)',
                'gradient-investment-soft': 'linear-gradient(135deg, rgba(78, 205, 196, 0.05) 0%, rgba(91, 181, 162, 0.03) 50%, rgba(78, 205, 196, 0.05) 100%)',
                'gradient-investment-strong': 'linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.15) 50%, rgba(78, 205, 196, 0.2) 100%)',
                'gradient-card-soft': 'linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 20, 28, 0.5) 100%)',
                'gradient-card-hover': 'linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(91, 181, 162, 0.05) 100%)',
                'gradient-dark-soft': 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(26, 26, 36, 0.9) 50%, rgba(13, 17, 23, 0.95) 100%)',
                'gradient-dark-investment': 'linear-gradient(135deg, rgba(10, 10, 15, 0.98) 0%, rgba(20, 40, 160, 0.05) 50%, rgba(10, 10, 15, 0.98) 100%)',
                // Radial gradients
                'gradient-radial-primary': 'radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.15) 0%, transparent 70%)',
                'gradient-radial-secondary': 'radial-gradient(circle at 50% 50%, rgba(91, 181, 162, 0.12) 0%, transparent 70%)',
                'gradient-radial-soft': 'radial-gradient(ellipse at center, rgba(78, 205, 196, 0.1) 0%, transparent 60%)',
            },

            // Box shadows مع الألوان الجديدة
            boxShadow: {
                'primary': '0 4px 6px -1px rgba(20, 40, 160, 0.15), 0 2px 4px -1px rgba(20, 40, 160, 0.06)',
                'primary-lg': '0 10px 15px -3px rgba(20, 40, 160, 0.2), 0 4px 6px -4px rgba(20, 40, 160, 0.1)',
                'secondary': '0 4px 6px -1px rgba(132, 147, 158, 0.15), 0 2px 4px -1px rgba(132, 147, 158, 0.06)',
                'colored': '0 10px 25px rgba(20, 40, 160, 0.15)',
                'glow': '0 0 20px rgba(20, 40, 160, 0.3)',
                'glow-secondary': '0 0 20px rgba(132, 147, 158, 0.2)',
                'light': '0 1px 3px 0 rgba(132, 147, 158, 0.08), 0 1px 2px 0 rgba(132, 147, 158, 0.04)',
                'medium': '0 4px 6px -1px rgba(132, 147, 158, 0.12), 0 2px 4px -1px rgba(132, 147, 158, 0.08)',
                'strong': '0 10px 15px -3px rgba(20, 40, 160, 0.25), 0 4px 6px -2px rgba(20, 40, 160, 0.1)',
            },

            // Text colors
            textColor: {
                'primary-dark': '#081040',
                'secondary-dark': '#334155',
                'muted': '#84939e',
                'light': '#94a3b8',
                'on-primary': '#ffffff',
                'on-secondary': '#ffffff',
                'on-accent': '#ffffff',
            },

            // Border colors
            borderColor: {
                'primary-light': '#5eead4',
                'secondary-light': '#cbd5e1',
                'light': '#e2e8f0',
                'accent': '#14b8a6',
            },

            // Animation والحركات
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'bounce-soft': 'bounceSoft 0.6s ease-in-out',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                // Investment animations
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                'wave': 'wave 4s ease-in-out infinite',
                'money-flow': 'moneyFlow 5s linear infinite',
                'growth': 'growth 2s ease-out',
                'chart-line': 'chartLine 2s ease-out',
                'gradient-shift': 'gradientShift 8s ease-in-out infinite',
                'investment-pulse': 'investmentPulse 3s ease-in-out infinite',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceSoft: {
                    '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%, 43%': { transform: 'translateY(-8px)' },
                    '70%': { transform: 'translateY(-4px)' },
                    '90%': { transform: 'translateY(-2px)' },
                },
                glowPulse: {
                    '0%': { boxShadow: '0 0 20px rgba(20, 40, 160, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(20, 40, 160, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                // Investment animations
                pulseGlow: {
                    '0%, 100%': { 
                        boxShadow: '0 0 20px rgba(78, 205, 196, 0.3), 0 0 40px rgba(78, 205, 196, 0.1)',
                        opacity: '0.8'
                    },
                    '50%': { 
                        boxShadow: '0 0 40px rgba(78, 205, 196, 0.6), 0 0 80px rgba(78, 205, 196, 0.2)',
                        opacity: '1'
                    },
                },
                wave: {
                    '0%, 100%': { transform: 'translateY(0) scaleY(1)', opacity: '0.3' },
                    '50%': { transform: 'translateY(-20px) scaleY(1.1)', opacity: '0.6' },
                },
                moneyFlow: {
                    '0%': { transform: 'translateY(100%) rotate(0deg)', opacity: '0' },
                    '50%': { opacity: '0.6' },
                    '100%': { transform: 'translateY(-10%) rotate(360deg)', opacity: '0' },
                },
                growth: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                chartLine: {
                    '0%': { strokeDashoffset: '100%', opacity: '0' },
                    '100%': { strokeDashoffset: '0%', opacity: '1' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                investmentPulse: {
                    '0%, 100%': { 
                        transform: 'scale(1)',
                        opacity: '0.4'
                    },
                    '50%': { 
                        transform: 'scale(1.1)',
                        opacity: '0.8'
                    },
                },
            },

            // Spacing إضافي
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },

            // Border radius إضافي
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },

            // Z-index values
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            }
        },
    },
    plugins: [
        // إضافة أي plugins تحتاجها
    ],
};