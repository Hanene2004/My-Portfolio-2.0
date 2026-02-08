import React from 'react';
import { motion } from 'framer-motion';

const LiveStatusBadge = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111522]/80 backdrop-blur-md border border-green-500/20 shadow-lg shadow-green-500/5 mb-6"
        >
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400/90 text-xs font-bold tracking-widest uppercase">
                Available for new projects
            </span>
        </motion.div>
    );
};

export default LiveStatusBadge;
