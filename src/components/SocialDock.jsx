import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { socialLinks } from "../constants";
import Magnetic from "./ui/Magnetic";

const SocialDock = () => {
    const iconMap = {
        AiFillGithub: <AiFillGithub size={24} />,
        AiFillLinkedin: <AiFillLinkedin size={24} />,
    };

    return (
        <div className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex items-center gap-4 bg-[#0e0c24]/80 backdrop-blur-md border border-[#2b2b42] px-6 py-3 rounded-full shadow-2xl"
            >
                {socialLinks.map((link) => (
                    <Magnetic key={link.name}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-500 transition-colors duration-200 p-2 hover:scale-125 transform inline-block"
                        >
                            {iconMap[link.iconName]}
                            <span className="sr-only">{link.name}</span>
                        </a>
                    </Magnetic>
                ))}

                <div className="w-[1px] h-6 bg-[#2b2b42] mx-2" />

                <Magnetic>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider hover:shadow-glow transition-all active:scale-95"
                    >
                        <HiOutlineDocumentDownload size={18} />
                        Resume
                    </a>
                </Magnetic>
            </motion.div>
        </div>
    );
};

export default SocialDock;
