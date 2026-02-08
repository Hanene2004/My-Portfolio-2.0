import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import CanvasErrorBoundary from "./canvas/CanvasErrorBoundary";
import SkillKeyboard from "./SkillKeyboard";
import ScrambleText from "./ui/ScrambleText";

const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My technical stack
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    <ScrambleText text="Skills." />
                </h2>
            </motion.div>
            <CanvasErrorBoundary>
                <SkillKeyboard />
            </CanvasErrorBoundary>
        </>
    );
};

export default Skills;
