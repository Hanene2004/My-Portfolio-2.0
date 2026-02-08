import { motion } from "framer-motion";
import React from "react";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import useMagnetic from "../reactbits/hooks/useMagnetic";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import MilestoneTimeline from "./MilestoneTimeline";
import ScrambleText from "./ui/ScrambleText";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ServiceCardMemo = React.memo(ServiceCard);

const About = () => {
  const { ref: resumeButtonRef, style: magneticStyle } = useMagnetic({
    radius: 100,
    strength: 0.3,
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <ScrambleText text="Overview." />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Ghabbara Hanene, a Computer Science Student and Fullstack Developer
        with expertise in modern frameworks like React, Angular, and Laravel.
        I'm also a Junior Data Scientist passionate about turning data into
        insights and building user-friendly solutions. I specialize in
        automation and ERP integration using tools like n8n and Odoo,
        streamlining business processes and creating intelligent workflows.
        With a fullstack mindset and data science skills, I bridge the gap
        between development, analytics, and automation to deliver comprehensive
        solutions.
      </motion.p>
      <button
        ref={resumeButtonRef}
        style={magneticStyle}
        className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-cyan-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        <span className="font-semibold flex gap-1.5 items-center">
          <RiBriefcase4Fill />
          Download Resume
        </span>
      </button>
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCardMemo key={service.title} index={index} {...service} />
        ))}
      </div>

      <MilestoneTimeline />
    </>
  );
};

export default SectionWrapper(About, "about");
