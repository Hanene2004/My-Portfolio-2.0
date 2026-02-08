import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiTrendingUp } from 'react-icons/bi';
import { supabase } from '../../lib/supabaseClient';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const incrementVisitorCount = async () => {
            if (!supabase) {
                console.warn('Supabase not configured. Visitor counter using local storage.');
                const localCount = localStorage.getItem('portfolio-visitor-count') || '0';
                setVisitorCount(parseInt(localCount, 10));
                setIsLoading(false);
                return;
            }

            try {
                // Get current count
                const { data: currentData, error: fetchError } = await supabase
                    .from('visitors')
                    .select('visit_count')
                    .eq('id', 1)
                    .single();

                if (fetchError) {
                    console.error('Error fetching visitor count:', fetchError);
                    // Fallback to localStorage if database fails
                    const localCount = localStorage.getItem('portfolio-visitor-count') || '0';
                    setVisitorCount(parseInt(localCount, 10));
                    setIsLoading(false);
                    return;
                }

                const currentCount = currentData?.visit_count || 0;
                const newCount = currentCount + 1;

                // Update count in database
                const { error: updateError } = await supabase
                    .from('visitors')
                    .update({
                        visit_count: newCount,
                        last_updated: new Date().toISOString()
                    })
                    .eq('id', 1);

                if (updateError) {
                    console.error('Error updating visitor count:', updateError);
                }

                // Animate the counter
                let start = currentCount;
                const duration = 1000; // 1 second
                const increment = Math.ceil((newCount - start) / 60);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= newCount) {
                        setVisitorCount(newCount);
                        setIsLoading(false);
                        clearInterval(timer);
                    } else {
                        setVisitorCount(start);
                    }
                }, duration / 60);

                return () => clearInterval(timer);
            } catch (error) {
                console.error('Unexpected error:', error);
                setIsLoading(false);
            }
        };

        incrementVisitorCount();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-40 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg flex items-center gap-2"
        >
            <BiTrendingUp className="text-cyan-400 text-xl" />
            <div className="flex flex-col">
                <span className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">
                    Visitors
                </span>
                <span className="text-white font-bold text-lg leading-none">
                    {isLoading ? '...' : visitorCount.toLocaleString()}
                </span>
            </div>
        </motion.div>
    );
};

export default VisitorCounter;
