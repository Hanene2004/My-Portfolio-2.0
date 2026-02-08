import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicRibbon = () => {
    const { scrollYProgress } = useScroll();

    // Subtle parallax effect based on scroll
    const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const scrollY3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <div className='fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none'>
            <svg
                className='absolute inset-0 w-full h-[400%]'
                viewBox='0 0 100 400'
                preserveAspectRatio='none'
            >
                <defs>
                    <linearGradient id='ribbon-cyan' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='#06b6d4' stopOpacity='0' />
                        <stop offset='20%' stopColor='#06b6d4' stopOpacity='0.15' />
                        <stop offset='50%' stopColor='#06b6d4' stopOpacity='0.3' />
                        <stop offset='80%' stopColor='#06b6d4' stopOpacity='0.15' />
                        <stop offset='100%' stopColor='#06b6d4' stopOpacity='0' />
                    </linearGradient>
                    <linearGradient id='ribbon-indigo' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='#6366f1' stopOpacity='0' />
                        <stop offset='30%' stopColor='#6366f1' stopOpacity='0.1' />
                        <stop offset='50%' stopColor='#6366f1' stopOpacity='0.25' />
                        <stop offset='70%' stopColor='#6366f1' stopOpacity='0.1' />
                        <stop offset='100%' stopColor='#6366f1' stopOpacity='0' />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Path 1: Cyan Ribbon Left */}
                <motion.path
                    style={{ y: scrollY1 }}
                    d="M 20 0 Q 30 50 15 100 T 20 200 T 15 300 T 20 400"
                    fill="none"
                    stroke="url(#ribbon-cyan)"
                    strokeWidth="0.4"
                    filter="url(#glow)"
                    animate={{
                        d: [
                            "M 20 0 Q 30 50 15 100 T 20 200 T 15 300 T 20 400",
                            "M 25 0 Q 15 50 30 100 T 25 200 T 30 300 T 25 400",
                            "M 20 0 Q 30 50 15 100 T 20 200 T 15 300 T 20 400"
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Path 2: Indigo Ribbon Middle */}
                <motion.path
                    style={{ y: scrollY2 }}
                    d="M 50 0 Q 40 100 60 200 T 50 400"
                    fill="none"
                    stroke="url(#ribbon-indigo)"
                    strokeWidth="0.8"
                    filter="url(#glow)"
                    animate={{
                        d: [
                            "M 50 0 Q 40 100 60 200 T 50 400",
                            "M 55 0 Q 65 100 45 200 T 55 400",
                            "M 50 0 Q 40 100 60 200 T 50 400"
                        ]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Path 3: Cyan Ribbon Right */}
                <motion.path
                    style={{ y: scrollY3 }}
                    d="M 80 0 Q 70 50 85 150 T 80 300 T 85 400"
                    fill="none"
                    stroke="url(#ribbon-cyan)"
                    strokeWidth="0.5"
                    filter="url(#glow)"
                    animate={{
                        d: [
                            "M 80 0 Q 70 50 85 150 T 80 300 T 85 400",
                            "M 75 0 Q 85 50 70 150 T 75 300 T 70 400",
                            "M 80 0 Q 70 50 85 150 T 80 300 T 85 400"
                        ]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Path 4: Faint Indigo Ribbon Left */}
                <motion.path
                    style={{ y: scrollY2 }}
                    d="M 5 0 Q 15 80 5 160 T 5 320 T 5 400"
                    fill="none"
                    stroke="url(#ribbon-indigo)"
                    strokeWidth="0.3"
                    opacity="0.5"
                    animate={{
                        d: [
                            "M 5 0 Q 15 80 5 160 T 5 320 T 5 400",
                            "M 10 0 Q 0 80 10 160 T 10 320 T 10 400",
                            "M 5 0 Q 15 80 5 160 T 5 320 T 5 400"
                        ]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </svg>

            {/* Subtle Gradient Overlays for depth */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#04071d] via-transparent to-[#04071d] opacity-50' />
        </div>
    );
};

export default DynamicRibbon;
