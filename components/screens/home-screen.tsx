"use client";

import { motion } from "framer-motion";
import { Layers, Zap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Spotlight } from "@/components/ui/spotlight";
import Projects from "@/components/projects";
import DownCard from "@/components/downcard";
import Footer from "@/components/footer";
import React from "react";
import { TimeWeather } from "@/components/widgets/time-weather";
import { CodingActivity } from "@/components/widgets/coding-activity";
import { Guestbook } from "@/components/widgets/guestbook";

// Animation variants for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

interface HomeScreenProps {
    tweet: React.ReactNode;
}

export function HomeScreen({ tweet }: HomeScreenProps) {
    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white/90 selection:bg-white/20 overflow-x-hidden font-sans">

            {/* --- Global Grain Overlay --- */}
            <div className="fixed inset-0 pointer-events-none opacity-25 z-50 mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
            </div>

            {/* --- Ambient Background --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 z-10 opacity-30"
                    fill="rgba(255, 255, 255, 0.03)"
                />
                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent" />
            </div>

            <main className="relative z-10 max-w-[620px] mx-auto px-6 py-16 md:py-24">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start gap-16"
                >
                    {/* --- Profile Card Section --- */}
                    <motion.div variants={itemVariants} className="w-full relative group">

                        {/* Hero Decorative Lines (Left) */}
                        <div className="absolute -left-12 lg:-left-24 top-0 bottom-0 hidden md:flex gap-3 items-start pointer-events-none">
                            {[40, 140, 80, 180, 60].map((h, i) => (
                                <motion.div
                                    key={`left-${i}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: h, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                    className="w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent relative"
                                >
                                    <div className="absolute inset-0 bg-white/10 blur-[2px]" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Hero Decorative Lines (Right) */}
                        <div className="absolute -right-12 lg:-right-24 top-0 bottom-0 hidden md:flex gap-3 items-start justify-end pointer-events-none">
                            {[160, 60, 120, 40, 90].map((h, i) => (
                                <motion.div
                                    key={`right-${i}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: h, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.7 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                    className="w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent relative"
                                >
                                    <div className="absolute inset-0 bg-white/10 blur-[2px]" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Banner */}
                        <div className="relative w-full h-40 md:h-48 rounded-[20px] overflow-hidden mb-[-60px] md:mb-[-70px] border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                            <img
                                src="/cryptobanner.jpg"
                                alt="Profile Banner"
                                className="w-full h-full object-cover opacity-90 scale-105 group-hover:scale-100 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90" />
                        </div>

                        {/* Header Content */}
                        <div className="px-4 relative z-10">
                            <div className="relative inline-block">
                                {/* PFP Container */}
                                <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full p-1.5 bg-[#050505] ring-1 ring-white/10 shadow-2xl">
                                    <Avatar className="h-full w-full rounded-full border border-white/5">
                                        <AvatarImage src="/crypto.jpg" alt="faizurrehman" className="object-cover" />
                                        <AvatarFallback className="text-black bg-white">FR</AvatarFallback>
                                    </Avatar>
                                    {/* Status Indicator */}
                                    <div className="absolute bottom-2 right-2 h-5 w-5 bg-[#050505] rounded-full flex items-center justify-center ring-4 ring-[#050505]">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Time & Weather Widget - Absolute Top Right of Profile Card Content */}
                            <div className="absolute top-0 right-0 z-20 hidden md:block">
                                <TimeWeather />
                            </div>
                            <div className="md:hidden mt-4 mb-2">
                                <TimeWeather />
                            </div>

                            <div className="mt-6 flex flex-col gap-4">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-2">
                                        FaizBuildsStuff
                                    </h1>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-mono text-emerald-400/80 uppercase tracking-widest">
                                            Faizur Rehman
                                        </p>
                                        <p className="text-base md:text-lg text-white/50 font-medium tracking-tight">
                                            Full-Stack Developer & UI Designer
                                        </p>
                                    </div>
                                </div>

                                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg tracking-tight font-light">
                                    Crafting <span className="text-white font-medium">high-performance</span> digital experiences with a focus on motion, aesthetics, and scalability.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Spacer Line */}
                    <motion.div variants={itemVariants} className="w-full px-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>

                    {/* --- Pinned Tweet Section --- */}
                    <motion.div variants={itemVariants} className="w-full space-y-6">
                        <div className="flex items-center gap-3 text-white/60 px-2">
                            <Zap className="h-4 w-4 text-emerald-400" />
                            <h2 className="text-xs font-bold tracking-[0.2em] uppercase">
                                Latest Update
                            </h2>
                        </div>

                        {/* Tweet Container */}
                        <div className="
                 relative w-full rounded-2xl border border-white/5 bg-[#0A0A0A]/50 
                 overflow-hidden backdrop-blur-sm
                 flex justify-center 
                 [&_.react-tweet-theme]:!bg-transparent [&_.react-tweet-theme]:!my-0
             ">
                            <div className="scale-90 origin-top w-full flex justify-center -my-4">
                                {tweet}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Projects Section --- */}
                    <motion.div variants={itemVariants} className="w-full space-y-10">
                        <div className="flex items-center gap-3 text-white/60 px-2">
                            <Layers className="h-4 w-4" />
                            <h2 className="text-xs font-bold tracking-[0.2em] uppercase">
                                Selected Work
                            </h2>
                        </div>

                        <Projects />
                    </motion.div>

                    {/* --- Coding Activity Section --- */}
                    <motion.div variants={itemVariants} className="w-full">
                        <CodingActivity />
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full pt-8">
                        <Guestbook />
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full pt-16">
                        <DownCard />
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full pt-8 pb-16">
                        <Footer />
                    </motion.div>

                </motion.div>
            </main>
        </div>
    );
}
