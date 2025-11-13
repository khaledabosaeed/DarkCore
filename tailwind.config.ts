/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Black & White Theme (ثيم أبيض وأسود)
                primary: {
                    DEFAULT: '#000000', // أسود نقي
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#000000',
                },
                // Secondary Colors - Grays (درجات الرمادي)
                secondary: {
                    DEFAULT: '#404040',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                },
                // Accent Colors - للتفاصيل (رمادي داكن)
                accent: {
                    DEFAULT: '#171717',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                // Status Colors
                success: {
                    DEFAULT: '#000000',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    500: '#000000',
                    600: '#171717',
                    700: '#262626',
                },
                info: {
                    DEFAULT: '#737373',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                },
                warning: {
                    DEFAULT: '#525252',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    500: '#525252',
                    600: '#404040',
                    700: '#262626',
                },
                error: {
                    DEFAULT: '#171717',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    500: '#171717',
                    600: '#000000',
                    700: '#000000',
                },
                // Neutral colors
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
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

            // Background images والتدرجات مع الألوان الجديدة (Light Theme - أبيض وأسود)
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #000000 0%, #404040 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                'gradient-accent': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
                'gradient-mixed': 'linear-gradient(135deg, #000000 0%, #262626 50%, #404040 100%)',
                'gradient-hero': 'linear-gradient(135deg, #000000 0%, #1a1a1a 35%, #2d2d2d 100%)',
                'gradient-section': 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #ffffff 100%)',
                'gradient-text': 'linear-gradient(135deg, #000000 0%, #404040 50%, #666666 100%)',
                'gradient-text-vibrant': 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #6a6a6a 100%)',
                // Investment-themed gradients (light theme)
                'gradient-investment': 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 50%, rgba(0, 0, 0, 0.03) 100%)',
                'gradient-investment-soft': 'linear-gradient(135deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.005) 50%, rgba(0, 0, 0, 0.01) 100%)',
                'gradient-investment-strong': 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.05) 100%)',
                'gradient-card-soft': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 250, 250, 0.9) 100%)',
                'gradient-card-hover': 'linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)',
                'gradient-dark-soft': 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(250, 250, 250, 1) 50%, rgba(245, 245, 245, 1) 100%)',
                'gradient-dark-investment': 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 245, 0.95) 50%, rgba(255, 255, 255, 1) 100%)',
                // Radial gradients (light theme)
                'gradient-radial-primary': 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
                'gradient-radial-secondary': 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)',
                'gradient-radial-soft': 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.02) 0%, transparent 60%)',
            },

            // Box shadows مع الألوان الجديدة (Light Theme)
            boxShadow: {
                'primary': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
                'primary-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
                'secondary': '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'colored': '0 10px 25px rgba(0, 0, 0, 0.1)',
                'glow': '0 0 20px rgba(0, 0, 0, 0.08)',
                'glow-secondary': '0 0 20px rgba(0, 0, 0, 0.05)',
                'light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
                'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
                'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.06)',
            },

            // Text colors (Light Theme - أبيض وأسود)
            textColor: {
                'primary-dark': '#000000',
                'secondary-dark': '#262626',
                'muted': '#737373',
                'light': '#a3a3a3',
                'on-primary': '#ffffff',
                'on-secondary': '#ffffff',
                'on-accent': '#ffffff',
            },

            // Border colors (Light Theme)
            borderColor: {
                'primary-light': '#e5e5e5',
                'secondary-light': '#d4d4d4',
                'light': '#f5f5f5',
                'accent': '#000000',
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