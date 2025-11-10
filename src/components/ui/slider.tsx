"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"

export interface SliderImage {
    src: string
    alt: string
    altAr: string
}

interface ImageSliderProps {
    speed?: number
    direction?: 'left' | 'right'
    pauseOnHover?: boolean
    image: SliderImage[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({
    speed = 50,
    direction = "left",
    pauseOnHover = true,
    image: imageArr,
}) => {
    const [isArabic, setIsArabic] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const controls = useAnimationControls()
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkLanguage = () => {
            setIsArabic(document.documentElement.lang === "ar")
        }

        checkLanguage()

        const observer = new MutationObserver(checkLanguage)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        })

        return () => observer.disconnect()
    }, [])

    const images = imageArr
    const imageWidth = 320 + 32 // width + margin
    const totalWidth = images.length * imageWidth

    const startAnimation = () => {
        const xStart = direction === "left" ? 0 : -totalWidth
        const xEnd = direction === "left" ? -totalWidth : 0

        controls.start({
            x: [xStart, xEnd],
            transition: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
            },
        })
    }
    useEffect(() => {
        if (!isPaused) {
            startAnimation()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speed, direction, isPaused])

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            setIsPaused(true)
            controls.stop()
        }
    }

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            setIsPaused(false)
            startAnimation()
        }
    }

    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images, ...images] // Triple for smoother loop

    return (
        <div className="w-full overflow-hidden relative py-12" dir="ltr">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none z-10 
                bg-gradient-to-r from-white/30 via-transparent to-white/30"></div>

            {/* Main Slider Container */}
            <motion.div
                ref={sliderRef}
                className="flex cursor-pointer gap-8"
                animate={controls}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {duplicatedImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-80 h-64 relative rounded-2xl overflow-hidden shadow-lg group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileHover={{
                            scale: 1.05,
                            zIndex: 20,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                    >
                        {/* Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src || "/placeholder.svg"}
                                height={256}
                                width={320}
                                alt={isArabic ? image.altAr : image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Subtle Overlay Gradient - Reduced opacity */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Floating Elements - Removed text content */}
                            <motion.div
                                className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: hoveredIndex === index ? 1 : 0,
                                    opacity: hoveredIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </motion.div>
                        </div>

                        {/* Border Glow Effect */}
                        <motion.div
                            className="absolute inset-0 border-2 border-transparent rounded-2xl"
                            animate={{
                                borderColor: hoveredIndex === index ? "rgba(188, 255, 187, 0.5)" : "transparent"
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Shimmer Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 rounded-2xl"
                            animate={{
                                x: hoveredIndex === index ? ["0%", "100%"] : "0%",
                                opacity: hoveredIndex === index ? [0, 1, 0] : 0
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                repeat: hoveredIndex === index ? Infinity : 0,
                                repeatDelay: 2
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Left/Right Fade Overlays */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20"></div>
            <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20"></div>
            {/* Progress Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary/30 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
export { ImageSlider }