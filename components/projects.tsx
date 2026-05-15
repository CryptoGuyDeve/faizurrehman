"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
    const projectList = [
        {
            title: "sward.lol",
            description: "Modern personal site with animations.",
            year: "2024",
            url: "https://sword-lol-git-main-cryptoguydeves-projects.vercel.app/",
        },
        {
            title: "Matera Media",
            description: "Digital Agency that help content creators and B2B Businesses",
            year: "2024",
            url: "https://new-matera-media.vercel.app/",
        },
        {
            title: "truststartup.app",
            description: "Secure platform for startup trust management.",
            year: "2024",
            url: "https://truststartup.vercel.app/",
        },
        {
            title: "grouplyy.com",
            description: "Social grouping platform with modern UI.",
            year: "2025",
            url: "https://grouplyy-r886otal9-cryptoguydeves-projects.vercel.app/",
        },
        {
            title: "clingai.space",
            description: "Explore and share AI-generated content.",
            year: "2025",
            url: "https://www.clingai.space/",
        },
        {
            title: "codemotion.online",
            description: "Creative coding lessons & clean components.",
            year: "2024",
            url: "https://www.codemotion.online",
        },
        {
            title: "Crypto Portfolio",
            description: "Personal crypto dashboard interface.",
            year: "2025",
            url: "https://crypto-portfolio-rose.vercel.app/",
        },
        {
            title: "Ragon Solutions",
            description: "Corporate digital solutions agency.",
            year: "2024",
            url: "https://ragonsolutions.com/",
        },
    ];

    return (
        <div className="relative w-full">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
            </div>

            <motion.div
                className="relative grid grid-cols-1 gap-5 md:grid-cols-2"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
            >
                {projectList.map((p, i) => (
                    <motion.a
                        key={i}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            },
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: "easeOut",
                        }}
                        className="
    group
    relative
    overflow-hidden

    rounded-[26px]

    border
    border-white/[0.08]

    bg-white/[0.025]

    p-5
    md:p-6

    min-h-[240px]
    md:min-h-[260px]

    backdrop-blur-2xl

    transition-all
    duration-700

    hover:border-white/[0.16]
    hover:bg-white/[0.04]
    hover:shadow-[0_20px_80px_rgba(255,255,255,0.04)]
"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                            <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />
                        </div>

                        {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Top Reflection */}
                        <div className="absolute left-[10%] top-0 h-px w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* Shine */}
                        <div className="absolute top-0 left-[-120%] h-full w-[120px] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                        <div className="relative z-10 flex h-full flex-col justify-between">

                            {/* Top */}
                            <div className="flex items-start justify-between">

                                <div
                                    className="
                                        relative

                                        flex
                                        h-12
                                        w-12

                                        items-center
                                        justify-center

                                        overflow-hidden

                                        rounded-2xl

                                        border
                                        border-white/[0.08]

                                        bg-white/[0.04]

                                        transition-all
                                        duration-500

                                        group-hover:scale-110
                                        group-hover:border-white/[0.16]
                                        group-hover:bg-white
                                    "
                                >
                                    {/* Icon Glow */}
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                                    </div>

                                    <ArrowUpRight className="relative z-10 h-5 w-5 text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-white/30" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/25">
                                        {p.year}
                                    </span>
                                </div>

                            </div>

                            {/* Bottom */}
                            <div className="mt-10 md:mt-12">

                                <h3
                                    className="
                                        text-[22px]
md:text-[25px]

                                        font-[700]

                                        tracking-[-0.07em]

                                        text-white/92

                                        transition-all
                                        duration-500

                                        group-hover:text-white
                                    "
                                >
                                    {p.title}
                                </h3>

                                <p
                                    className="
                                        mt-4

                                        max-w-[90%]

                                        text-[14px]
                                        leading-[1.8]

                                        text-white/38

                                        transition-all
                                        duration-500

                                        group-hover:text-white/60
                                    "
                                >
                                    {p.description}
                                </p>

                                {/* Bottom Line */}
                                <div className="mt-5 flex items-center gap-3">

                                    <div className="h-px flex-1 bg-gradient-to-r from-white/[0.12] to-transparent transition-all duration-500 group-hover:from-white/[0.25]" />

                                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/25 transition-all duration-500 group-hover:text-white/50">
                                        View Project
                                    </span>

                                </div>

                            </div>

                        </div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;