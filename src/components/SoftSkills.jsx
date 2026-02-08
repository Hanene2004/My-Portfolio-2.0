import React, { useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { softSkills } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BiWrench, BiGroup, BiSolidBrain, BiPalette, BiSync, BiCommentDetail } from "react-icons/bi";
import ScrambleText from "./ui/ScrambleText";

const iconMap = {
    "Stress Management": BiSolidBrain,
    "Teamwork": BiGroup,
    "Problem Solving": BiWrench,
    "Design graphique": BiPalette,
    "Adaptability": BiSync,
    "Technical Communication": BiCommentDetail,
};

const MagneticBubble = ({ skill, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef(null);

    const Icon = iconMap[skill.name] || BiSolidBrain;

    // Random initial positions and float animation coefficients
    const initialPos = useMemo(() => ({
        x: Math.random() * 80 - 40,
        y: Math.random() * 80 - 40,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * -20
    }), []);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center to displace bubble
        const distLimit = 300;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < distLimit) {
            const power = (1 - dist / distLimit) * 50;
            mouseX.set(dx * 0.5);
            mouseY.set(dy * 0.5);
        } else {
            mouseX.set(0);
            mouseY.set(0);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                x: [initialPos.x, -initialPos.x, initialPos.x],
                y: [initialPos.y, -initialPos.y, initialPos.y],
            }}
            transition={{
                duration: initialPos.duration,
                repeat: Infinity,
                ease: "linear",
                delay: initialPos.delay
            }}
            style={{ x: springX, y: springY }}
            className="relative flex items-center justify-center p-4 cursor-pointer group"
        >
            {/* Liquid Background */}
            <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5"
            >
                {/* Internal Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.iconColor.replace('text-', 'from-').replace('500', '500/10')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Content */}
                <div className="flex flex-col items-center text-center p-6 z-10">
                    <div className={`${skill.iconColor} text-5xl mb-4 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500`}>
                        <Icon />
                    </div>
                    <span className="text-white font-bold text-lg mb-2 opacity-80 group-hover:opacity-100 tracking-wider">
                        {skill.name}
                    </span>
                    <p className="text-white/40 text-xs leading-tight opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {skill.description}
                    </p>
                </div>

                {/* Glass Liquid Surface Reflection */}
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none group-hover:animate-liquid-slide" />
            </motion.div>
        </motion.div>
    );
};

const SoftSkills = () => {
    return (
        <div className="relative py-20 min-h-[800px] overflow-hidden">
            {/* Massive Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div variants={textVariant()} className="mb-20">
                <p className={`${styles.sectionSubText} text-center`}>The Human Algorithm</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    <ScrambleText text="Soft Skills." />
                </h2>
            </motion.div>

            {/* Magnetic Field Container */}
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-7xl mx-auto px-4 relative">
                {softSkills.map((skill, index) => (
                    <MagneticBubble key={skill.name} index={index} skill={skill} />
                ))}
            </div>

            <style jsx="true">{`
                @keyframes liquid-slide {
                    0% { transform: translate(-10%, -10%) rotate(45deg); }
                    100% { transform: translate(10%, 10%) rotate(45deg); }
                }
                .animate-liquid-slide {
                    animation: liquid-slide 5s infinite linear;
                }
            `}</style>
        </div>
    );
};

export default SectionWrapper(SoftSkills, "soft-skills");
