import React from 'react';
import { motion } from 'framer-motion';

const SkeletonBase = ({ className }) => (
    <div className={`bg-white/5 animate-pulse rounded-xl ${className}`} />
);

export const SectionSkeleton = () => (
    <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10">
                <SkeletonBase className="h-4 w-32 mb-4" />
                <SkeletonBase className="h-10 w-64" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <SkeletonBase key={i} className="h-64 w-full" />
                ))}
            </div>
        </div>
    </div>
);

export const HeroSkeleton = () => (
    <div className="w-full h-screen flex items-center px-4 md:px-20">
        <div className="flex flex-col gap-6 w-full max-w-2xl">
            <SkeletonBase className="h-6 w-24" />
            <SkeletonBase className="h-16 w-full" />
            <SkeletonBase className="h-8 w-3/4" />
            <div className="flex gap-4 mt-4">
                <SkeletonBase className="h-12 w-32" />
                <SkeletonBase className="h-12 w-32" />
            </div>
        </div>
    </div>
);

export const WorksSkeleton = () => (
    <div className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16">
                <SkeletonBase className="h-4 w-32 mb-4" />
                <SkeletonBase className="h-10 w-64" />
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
                {[1, 2, 4].map((i) => (
                    <SkeletonBase key={i} className="w-full lg:w-[calc(50%-20px)] h-[320px] rounded-xl" />
                ))}
            </div>
        </div>
    </div>
);
