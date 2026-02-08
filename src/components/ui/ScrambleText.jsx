import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, delay = 0, duration = 0.8, className = "" }) => {
    const [displayOutput, setDisplayOutput] = useState('');
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!isInView) return;

        let frame = 0;
        let queue = [];

        for (let i = 0; i < text.length; i++) {
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            queue.push({ from: '', to: text[i], start, end, char: '' });
        }

        let animationFrame;
        const update = () => {
            let output = '';
            let complete = 0;

            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = chars[Math.floor(Math.random() * chars.length)];
                        queue[i].char = char;
                    }
                    output += `<span className="text-cyan-500/60">${char}</span>`;
                } else {
                    output += from;
                }
            }

            setDisplayOutput(output);

            if (complete === queue.length) {
                cancelAnimationFrame(animationFrame);
            } else {
                frame++;
                animationFrame = requestAnimationFrame(update);
            }
        };

        const timer = setTimeout(() => {
            update();
        }, delay * 1000);

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationFrame);
        };
    }, [isInView, text, delay]);

    return (
        <span
            ref={containerRef}
            className={className}
            dangerouslySetInnerHTML={{ __html: displayOutput || text.replace(/./g, ' ') }}
        />
    );
};

export default ScrambleText;
