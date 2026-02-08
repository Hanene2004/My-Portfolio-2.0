import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import ScrambleText from "./ui/ScrambleText";

const AchievementCard = ({ Achievement }) => {
  const [activeCertification, setActiveCertification] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Achievement.date}
      iconStyle={{ background: Achievement.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={Achievement.icon}
            alt={Achievement.company_name}
            className="object-contain rounded-full"
          />
        </div>
      }
    >
      <div onMouseMove={handleMouseMove}>
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {Array.isArray(Achievement.title)
            ? Achievement.title.map((t, i) => <div key={i}>{t}</div>)
            : Achievement.title}
        </h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {Achievement.points.map((point, index) => (
          <li
            key={`Achievement-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider group relative"
            onMouseEnter={() =>
              Achievement.images &&
              Achievement.images[index] &&
              setActiveCertification(Achievement.images[index])
            }
            onMouseLeave={() => setActiveCertification(null)}
          >
            <span className="cursor-default hover:text-blue-300 transition-colors duration-200">
              {point}
            </span>

            {Achievement.credential && Achievement.credential[index] && (
              <div className="my-1">
                <a
                  href={Achievement.credential[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-[12px] underline hover:text-blue-300 transition-colors duration-200"
                >
                  View Credential
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Floating Preview Image */}
      <AnimatePresence>
        {activeCertification && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed z-[9999] pointer-events-none rounded-lg overflow-hidden shadow-2xl border-2 border-blue-500/30"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 150,
              width: "300px",
            }}
          >
            <img
              src={activeCertification}
              alt="Certification Preview"
              className="w-full h-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </VerticalTimelineElement>
  );
};

const Achievement = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Achieved so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          <ScrambleText text="Achievements." />
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`Achievement-${index}`}
              Achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>

      <span id="skills"></span>
    </>
  );
};

export default SectionWrapper(Achievement, "achievements");
