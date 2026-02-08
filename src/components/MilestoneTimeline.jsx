import React from 'react';
import { motion } from 'framer-motion';
import { milestones } from '../constants';
import { fadeIn } from '../utils/motion';

const MilestoneTimeline = () => {
    return (
        <div className="mt-20 flex flex-col items-center">
            <div className="relative w-full max-w-4xl px-4">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-purple-500/50 hidden md:block" />

                {milestones.map((milestone, index) => (
                    <motion.div
                        key={milestone.title}
                        variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.3, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                        className={`relative flex items-center justify-center mb-12 w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Desktop Middle Circle */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#04071d] z-10 hidden md:block shadow-[0_0_10px_#06b6d4]" />

                        {/* Content Card */}
                        <div className={`w-full md:w-[45%] p-6 rounded-2xl bg-[#111522] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl ${index % 2 === 0 ? "text-left md:mr-10" : "text-left md:ml-10"
                            }`}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <img src={milestone.icon} alt={milestone.title} className="w-5 h-5 object-contain opacity-80" />
                                </div>
                                <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">
                                    {milestone.date}
                                </span>
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">
                                {milestone.title}
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {milestone.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MilestoneTimeline;
