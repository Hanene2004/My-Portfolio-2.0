import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import useParallax from "../reactbits/hooks/useParallax";
import { styles } from "../styles";
import useMediaQuery from "../utils/useMediaQuery";
import { ComputersCanvas } from "./canvas";
import LiveStatusBadge from "./ui/LiveStatusBadge";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedItems = [
    "Computer Science Student",
    "Fullstack Developer",
    "Junior Data Scientist",
  ];
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const { style: parallaxStyle } = useParallax({
    strength: 0.03,
    maxOffset: 15,
    enabled: !isMobile,
  });

  useEffect(() => {
    let timeout;

    const typeItem = () => {
      if (charIndex < typedItems[itemIndex].length) {
        setTypedText((prevText) => prevText + typedItems[itemIndex][charIndex]);
        setCharIndex(charIndex + 1);
        // Vary typing speed for a more natural feel
        const delay = Math.random() * 80 + 40;
        timeout = setTimeout(typeItem, delay);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setItemIndex((itemIndex + 1) % typedItems.length);
          setCharIndex(0);
          setTypedText("");
        }, 2000); // Wait longer on full text
      }
    };

    if (isTyping) {
      timeout = setTimeout(typeItem, 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, itemIndex, isTyping]);
  return (
    <section className={`relative w-full h-screen mx-auto`} id="hero">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div style={parallaxStyle}>
          <div className="flex flex-wrap gap-4 items-center">
            <LiveStatusBadge />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-transparent backdrop-blur-md border border-yellow-500/30 shadow-lg shadow-yellow-500/5 mb-6 group cursor-default"
            >
              <div className="relative">
                <span className="flex h-3 w-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <div className="absolute -inset-1 bg-yellow-500/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                  Top 115 Tunisia
                </span>
                <span className="text-white/60 text-[8px] font-medium uppercase tracking-widest -mt-0.5">
                  GitHub 2025
                </span>
              </div>
            </motion.div>
          </div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ghabbara Hanene</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm{" "}
            <span
              className="typed"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(245, 202, 153, 0.5), rgba(245, 202, 153, 0.5))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 8px",
                backgroundPosition: "0 100%",
                color: "#915EFF",
                display: "inline-block",
                fontWeight: "bold",
              }}
            >
              {typedText}
            </span>
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
            <br />
            <b>Turning complex problems into elegant, data-driven solutions.</b>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
