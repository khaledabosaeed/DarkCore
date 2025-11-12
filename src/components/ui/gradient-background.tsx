"use client"

import { motion } from "framer-motion"

interface GradientBackgroundProps {
    variant?: "default" | "investment" | "hero" | "section" | "card"
    intensity?: "light" | "medium" | "strong"
    animated?: boolean
    children?: React.ReactNode
}

export function GradientBackground({
    variant = "default",
    intensity = "medium",
    animated = true,
    children
}: GradientBackgroundProps) {
    const variants = {
        default: {
            gradient: "linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(26, 26, 36, 0.9) 50%, rgba(13, 17, 23, 0.95) 100%)",
            overlay: "radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 70%)"
        },
        investment: {
            gradient: "linear-gradient(135deg, rgba(20, 40, 160, 0.1) 0%, rgba(78, 205, 196, 0.05) 50%, rgba(91, 181, 162, 0.1) 100%)",
            overlay: "radial-gradient(ellipse at center, rgba(78, 205, 196, 0.15) 0%, transparent 70%)"
        },
        hero: {
            gradient: "linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(26, 26, 36, 0.7) 35%, rgba(20, 40, 160, 0.1) 100%)",
            overlay: "radial-gradient(circle at 30% 50%, rgba(78, 205, 196, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(91, 181, 162, 0.15) 0%, transparent 50%)"
        },
        section: {
            gradient: "linear-gradient(180deg, rgba(10, 10, 15, 0.95) 0%, rgba(15, 15, 20, 0.9) 50%, rgba(10, 10, 15, 0.95) 100%)",
            overlay: "radial-gradient(circle at top, rgba(78, 205, 196, 0.08) 0%, transparent 60%)"
        },
        card: {
            gradient: "linear-gradient(135deg, rgba(26, 26, 36, 0.6) 0%, rgba(20, 20, 28, 0.5) 100%)",
            overlay: "radial-gradient(circle at top right, rgba(78, 205, 196, 0.1) 0%, transparent 70%)"
        }
    }

    const intensities = {
        light: 0.3,
        medium: 0.5,
        strong: 0.8
    }

    const currentVariant = variants[variant]
    const opacity = intensities[intensity]

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Base Gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: currentVariant.gradient,
                    opacity: opacity
                }}
            />

            {/* Animated Overlay */}
            {animated && (
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: currentVariant.overlay,
                        opacity: opacity * 0.6
                    }}
                    animate={{
                        opacity: [opacity * 0.4, opacity * 0.8, opacity * 0.4],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}

            {/* Static Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: currentVariant.overlay,
                    opacity: opacity * 0.3
                }}
            />

            {/* Content */}
            {children && <div className="relative z-10">{children}</div>}
        </div>
    )
}

// Animated Gradient Mesh
export function AnimatedGradientMesh() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${200 + i * 100}px`,
                        height: `${200 + i * 100}px`,
                        background: `radial-gradient(circle, rgba(${
                            i % 2 === 0 ? "78, 205, 196" : "91, 181, 162"
                        }, ${0.2 - i * 0.05}) 0%, transparent 70%)`,
                        left: `${i * 25}%`,
                        top: `${i * 20}%`
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.8, 1],
                        opacity: [0.2, 0.4, 0.2, 0.2]
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5
                    }}
                />
            ))}
        </div>
    )
}

// Gradient Border
interface GradientBorderProps {
    children: React.ReactNode
    className?: string
    animated?: boolean
}

export function GradientBorder({ children, className = "", animated = false }: GradientBorderProps) {
    return (
        <div
            className={`relative rounded-xl overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(91, 181, 162, 0.1) 100%)",
                padding: "2px"
            }}
        >
            {animated && (
                <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                        background: "linear-gradient(135deg, rgba(78, 205, 196, 0.4) 0%, rgba(91, 181, 162, 0.3) 100%)"
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}
            <div className="relative bg-[#0a0a0f] rounded-xl">{children}</div>
        </div>
    )
}

