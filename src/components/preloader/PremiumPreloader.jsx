import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logo } from '../../assets';

const PremiumPreloader = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#04071d] via-[#0a0e2e] to-[#04071d]"
                    >
                        {/* Animated Background Orbs */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
                            />
                            <motion.div
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Logo Animation */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img
                                    src={logo}
                                    alt="Logo"
                                    className="w-32 h-32 object-contain"
                                    animate={{
                                        rotateY: [0, 360],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>

                            {/* Loading Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-center"
                            >
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    Loading Portfolio
                                </h2>
                                <p className="text-white/60 text-sm">
                                    Preparing an amazing experience...
                                </p>
                            </motion.div>

                            {/* Progress Bar */}
                            <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Progress Percentage */}
                            <motion.span
                                className="text-white/80 text-sm font-mono"
                                key={progress}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {progress}%
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && children}
        </>
    );
};

export default PremiumPreloader;
