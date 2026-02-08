import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ScrambleText from "./ui/ScrambleText";

const EducationCard = ({ institution, degree, duration }) => (
    <div className='flex items-start gap-4 py-6 border-b border-[#2b2b42] last:border-none w-full max-w-2xl'>
        <div className='w-12 h-12 rounded-lg bg-[#232339] flex justify-center items-center flex-shrink-0'>
            <div className="relative">
                <div className="w-6 h-6 rounded-full bg-[#8eadff]/40" />
                <div className="w-5 h-5 rounded-full bg-[#8eadff]/60 absolute -bottom-1 -right-1" />
            </div>
        </div>

        <div>
            <h3 className='text-white text-[20px] font-bold leading-tight'>
                {institution}
            </h3>
            <p className='text-secondary text-[14px] mt-1'>
                {degree}
            </p>
            <p className='text-[#8eadff] text-[12px] mt-1 font-medium'>
                {duration}
            </p>
        </div>
    </div>
);

const Education = () => {
    return (
        <div className="mt-12 bg-[#0e0c24]/50 p-8 rounded-3xl border border-[#1d1d36]">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Academic Background
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    <ScrambleText text="Education." />
                </h2>
            </motion.div>

            <div className='flex flex-col items-center sm:items-start'>
                {education.map((edu, index) => (
                    <EducationCard key={`edu-${index}`} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Education, "education");
