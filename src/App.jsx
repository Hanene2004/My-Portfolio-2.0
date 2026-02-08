import React, { useEffect, useState, Suspense, useRef } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  StarsCanvas,
  SocialDock,
  DynamicRibbon,
} from "./components";

const About = React.lazy(() => import("./components/About"));
const Achievement = React.lazy(() => import("./components/Achievement"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));
const Hero = React.lazy(() => import("./components/Hero"));
const Works = React.lazy(() => import("./components/Works"));
const Education = React.lazy(() => import("./components/Education"));
const Skills = React.lazy(() => import("./components/Skills"));
const SoftSkills = React.lazy(() => import("./components/SoftSkills"));
import PremiumPreloader from "./components/preloader/PremiumPreloader";
import EasterEggs from "./components/EasterEggs";
import ElasticCursor from "./components/ElasticCursor";
import ThemeToggle from "./components/ui/ThemeToggle";
import VisitorCounter from "./components/ui/VisitorCounter";
import BackToTop from "./components/ui/BackToTop";
import SEOHead from "./components/SEOHead";
import ReactBitsAudioProvider from "./reactbits/context/ReactBitsAudioProvider";
import ReactBitsCursorProvider from "./reactbits/context/ReactBitsCursorProvider";
import { ThemeProvider } from "./context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";

const Spotlight = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId;

    const updatePosition = () => {
      setPosition({ x: mouseRef.current.x, y: mouseRef.current.y });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300 hidden sm:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEOHead />
        <ReactBitsCursorProvider>
          <ReactBitsAudioProvider>
            <PremiumPreloader>
              <BrowserRouter>
                <div className="relative z-0">
                  <Spotlight />
                  <ElasticCursor />
                  <DynamicRibbon />
                  <EasterEggs />
                  <ThemeToggle />
                  <VisitorCounter />
                  <BackToTop />
                  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Suspense fallback={<div className="h-screen" />}>
                      <Hero />
                    </Suspense>
                  </div>
                  <StarsCanvas />
                  <Suspense fallback={null}>
                    <About />
                    <Experience />
                    <Education />
                    <Works />
                    <Skills />
                    <SoftSkills />
                    <Achievement />
                  </Suspense>
                  <SocialDock />
                  <div className="relative z-0">
                    <Suspense fallback={null}>
                      <Contact />
                    </Suspense>
                  </div>
                </div>
              </BrowserRouter>
            </PremiumPreloader>
          </ReactBitsAudioProvider>
        </ReactBitsCursorProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
