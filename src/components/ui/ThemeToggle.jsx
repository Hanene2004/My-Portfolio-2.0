import React from 'react';
import { motion } from 'framer-motion';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-24 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <BiSun className="text-yellow-400 text-2xl" />
                ) : (
                    <BiMoon className="text-indigo-600 text-2xl" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
