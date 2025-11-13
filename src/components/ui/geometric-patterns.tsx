"use client"

import { motion } from "framer-motion"

// Hexagon Pattern for Investment Theme
export function HexagonPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hexagons" width="80" height="70" patternUnits="userSpaceOnUse">
                        <motion.path
                            d="M40 0 L60 17.5 L60 52.5 L40 70 L20 52.5 L20 17.5 Z"
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.3)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
        </div>
    )
}

// Animated Grid Lines
export function AnimatedGridLines() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Vertical Lines */}
                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={`v-${i}`}
                        x1={`${(i + 1) * 12.5}%`}
                        y1="0%"
                        x2={`${(i + 1) * 12.5}%`}
                        y2="100%"
                        stroke="rgba(0, 0, 0, 0.08)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, duration: 1.5 }}
                        viewport={{ once: true }}
                    />
                ))}

                {/* Horizontal Lines */}
                {[...Array(6)].map((_, i) => (
                    <motion.line
                        key={`h-${i}`}
                        x1="0%"
                        y1={`${(i + 1) * 16.66}%`}
                        x2="100%"
                        y2={`${(i + 1) * 16.66}%`}
                        stroke="rgba(0, 0, 0, 0.08)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
                        viewport={{ once: true }}
                    />
                ))}
            </svg>
        </div>
    )
}

// Floating Geometric Shapes
export function FloatingShapes() {
    const shapes = [
        { type: "circle", size: 60, left: "10%", top: "15%", delay: 0 },
        { type: "square", size: 40, left: "85%", top: "25%", delay: 0.2 },
        { type: "triangle", size: 50, left: "20%", top: "70%", delay: 0.4 },
        { type: "circle", size: 35, left: "75%", top: "60%", delay: 0.6 },
        { type: "square", size: 45, left: "50%", top: "10%", delay: 0.8 }
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: shape.left,
                        top: shape.top,
                        width: shape.size,
                        height: shape.size
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    whileInView={{ opacity: 0.05, scale: 1, rotate: 360 }}
                    transition={{
                        delay: shape.delay,
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 3
                    }}
                    viewport={{ once: false }}
                >
                    {shape.type === "circle" && (
                        <div className="w-full h-full rounded-full border-2 border-[#000000]" />
                    )}
                    {shape.type === "square" && (
                        <div className="w-full h-full border-2 border-[#404040] rotate-45" />
                    )}
                    {shape.type === "triangle" && (
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <polygon
                                points="50,10 90,90 10,90"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                            />
                        </svg>
                    )}
                </motion.div>
            ))}
        </div>
    )
}

// Investment Circuit Board Pattern
export function CircuitPattern() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal connections */}
                <motion.path
                    d="M 0 100 L 200 100"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                />
                <motion.path
                    d="M 300 200 L 500 200"
                    stroke="rgba(0, 0, 0, 0.4)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    viewport={{ once: true }}
                />

                {/* Nodes */}
                {[
                    { cx: 0, cy: 100 },
                    { cx: 200, cy: 100 },
                    { cx: 300, cy: 200 },
                    { cx: 500, cy: 200 }
                ].map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r="4"
                        fill="#000000"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                    />
                ))}
            </svg>
        </div>
    )
}

// Gradient Mesh Background
export function GradientMesh() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, transparent 70%)",
                    top: "10%",
                    left: "5%"
                }}
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(64, 64, 64, 0.12) 0%, transparent 70%)",
                    bottom: "10%",
                    right: "5%"
                }}
                animate={{
                    x: [0, -40, 0],
                    y: [0, -25, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}

// All patterns combined
export function InvestmentPatterns({ variant = "all" }: { variant?: "hexagon" | "grid" | "shapes" | "circuit" | "mesh" | "all" }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {(variant === "all" || variant === "hexagon") && <HexagonPattern />}
            {(variant === "all" || variant === "grid") && <AnimatedGridLines />}
            {(variant === "all" || variant === "shapes") && <FloatingShapes />}
            {(variant === "all" || variant === "mesh") && <GradientMesh />}
        </div>
    )
}
