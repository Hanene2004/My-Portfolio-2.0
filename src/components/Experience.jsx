import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ScrambleText from "./ui/ScrambleText";

const ExperienceCard = ({ index, experience }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.1, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-[#1d1d36] relative overflow-hidden group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Quote Icon Simulation (Testimonial Style) */}
            <p className='text-white font-black text-[48px] leading-none opacity-20 group-hover:opacity-40 transition-opacity'>"</p>

            <div className='mt-1'>
                <ul className='mt-5 list-disc ml-5 space-y-2 mb-10'>
                    {experience.points.map((point, i) => (
                        <li
                            key={`experience-point-${i}`}
                            className='text-white tracking-wider text-[14px] leading-[24px]'
                        >
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Footer info: Logo + Name/Role */}
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>
                        <p className='text-white font-medium text-[16px]'>
                            <span className='blue-text-gradient'>@</span> {experience.company_name}
                        </p>
                        <p className='mt-1 text-secondary text-[12px]'>
                            {experience.title} | {experience.date}
                        </p>
                    </div>

                    {/* Clean Logo: White circle container to handle images with white backgrounds */}
                    <div className='w-12 h-12 rounded-full flex justify-center items-center bg-white p-1 border-2 border-blue-500/30 overflow-hidden shadow-pink-glow'>
                        <img
                            src={experience.icon}
                            alt={`feedback_by-${experience.company_name}`}
                            className='w-full h-full object-contain'
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Hover Reveal Certificate */}
            <AnimatePresence>
                {isHovered && experience.image && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className='absolute inset-0 bg-primary z-10 flex flex-col justify-center items-center p-4'
                    >
                        <img
                            src={experience.image}
                            alt='certificate'
                            className='w-full h-auto rounded-lg shadow-2xl'
                            loading="lazy"
                        />
                        <p className="mt-4 text-[12px] font-bold text-secondary tracking-widest uppercase">Internship Certificate</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ExperienceCardMemo = React.memo(ExperienceCard);

const Experience = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-center`}>
                        My Professional Journey
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>
                        <ScrambleText text="Experience." />
                    </h2>
                </motion.div>
            </div>
            <motion.div
                className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                {experiences.map((experience, index) => (
                    <ExperienceCardMemo key={experience.company_name} index={index} experience={experience} />
                ))}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");
