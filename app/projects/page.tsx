"use client";

import React from "react";
import { motion } from "framer-motion";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { Layers, ArrowUpRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function ProjectsPage() {
    return (
        <div className="relative min-h-screen w-full bg-[#050505] text-white/90 overflow-x-hidden selection:bg-white/20">

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-25 z-50 mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
                    fill="rgba(255,255,255,0.03)"
                />

                <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-white/[0.03] to-transparent" />
            </div>

            <main className="relative z-10 max-w-[1100px] mx-auto px-6 py-24 md:py-32">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-28"
                >

                    {/* HERO */}
                    <motion.section
                        variants={itemVariants}
                        className="relative flex flex-col items-center justify-center text-center pt-8 md:pt-16 pb-10 overflow-hidden"
                    >

                        {/* Ambient Glow */}
                        <div
                            className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        pointer-events-none

        w-[420px]
        h-[420px]

        sm:w-[620px]
        sm:h-[620px]

        rounded-full

        opacity-70

        blur-3xl
    "
                            style={{
                                background: `
            radial-gradient(
                circle,
                rgba(255,255,255,0.10) 0%,
                rgba(255,255,255,0.06) 25%,
                rgba(255,255,255,0.03) 45%,
                transparent 75%
            )
        `,
                            }}
                        />

                        {/* Grid Overlay */}
                        <div className="
        absolute inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:70px_70px]
        pointer-events-none
    " />


                        {/* Main Heading */}
                        <div className="
    relative
    flex
    flex-col
    items-center
    leading-none
    w-full
">

                            {/* Reach */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1] as const,
                                }}
                                className="
            relative
            z-10

            text-[42px]
            sm:text-[64px]
            md:text-[100px]
            lg:text-[130px]

            font-[720]

            tracking-[-0.10em]
            leading-[0.9]

            text-white
        "
                            >
                                Reach
                            </motion.h1>

                            {/* New */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.15,
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1] as const,
                                }}
                                className="
            relative
            z-20

            -mt-1
            sm:-mt-2
            md:-mt-4

            px-3
            sm:px-6
        "
                            >

                                {/* Ring */}
                                <div className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            pointer-events-none
        ">

                                    {/* Main Ring */}
                                    <div className="
                w-[170px]
                sm:w-[250px]
                md:w-[420px]

                h-[50px]
                sm:h-[75px]
                md:h-[115px]

                rounded-full

                border
                border-white/40

                rotate-[-7deg]
            " />

                                    {/* Blur Ring */}
                                    <div className="
                absolute

                w-[170px]
                sm:w-[250px]
                md:w-[420px]

                h-[50px]
                sm:h-[75px]
                md:h-[115px]

                rounded-full

                border
                border-white/10

                blur-md
                rotate-[-7deg]
            " />

                                </div>

                                {/* Text */}
                                <h2
                                    className="
                relative

                text-[46px]
                sm:text-[68px]
                md:text-[105px]
                lg:text-[125px]

                italic
                font-light
                font-serif

                text-white

                tracking-[-0.08em]
                leading-none
            "
                                >
                                    New
                                </h2>

                                {/* Sparkles */}
                                <div className="
            absolute

            -right-3
            top-0

            sm:right-0
            sm:top-1

            flex
            flex-col
            gap-0.5

            text-white/80
        ">
                                    <span className="text-[10px] sm:text-xs">
                                        ✦
                                    </span>

                                    <span className="text-[8px] sm:text-[10px] opacity-70">
                                        ✦
                                    </span>
                                </div>

                            </motion.div>

                            {/* Horizons */}
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.25,
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1] as const,
                                }}
                                className="
            relative
            z-10

            text-[42px]
            sm:text-[64px]
            md:text-[100px]
            lg:text-[130px]

            font-[720]

            tracking-[-0.10em]
            leading-[0.9]

            text-white

            -mt-1
        "
                            >
                                Horizons
                            </motion.h1>

                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                            }}
                            className="
            mt-10
            max-w-[650px]
            text-sm
            sm:text-base
            md:text-lg
            text-white/40
            leading-relaxed
            font-light
        "
                        >
                            Designing immersive digital products,
                            high-performance interfaces, and modern
                            web experiences with a strong focus on
                            motion, aesthetics, and scalability.
                        </motion.p>



                    </motion.section>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />

                    {/* PROJECTS */}
                    <motion.section
                        variants={itemVariants}
                        className="space-y-10"
                    >

                        <div className="flex items-center gap-3 text-white/60">
                            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                            <span className="text-xs uppercase tracking-[0.25em] font-bold">
                                Archive
                            </span>
                        </div>

                        <Projects />
                    </motion.section>

                    {/* CTA */}
                    <motion.section
                        variants={itemVariants}
                        className="
        relative
        overflow-hidden
        rounded-[42px]
        border border-white/[0.08]
        bg-[#0A0A0A]/90
        backdrop-blur-3xl
        p-8 md:p-14
    "
                    >

                        {/* Metallic Glow */}
                        <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]
        pointer-events-none
    " />

                        {/* Silver Reflection */}
                        <div className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[250px]
        bg-white/10
        blur-[140px]
        opacity-30
        rounded-full
        pointer-events-none
    " />

                        {/* Noise Grid */}
                        <div className="
        absolute inset-0
        opacity-[0.03]
        [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        [background-size:60px_60px]
        pointer-events-none
    " />

                        {/* Glass Shine */}
                        <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-white/[0.06]
        via-transparent
        to-transparent
        pointer-events-none
    " />

                        {/* Border Shine */}
                        <div className="
        absolute
        inset-[1px]
        rounded-[42px]
        border
        border-white/[0.04]
        pointer-events-none
    " />

                        <div className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        justify-between
        items-start
        lg:items-end
        gap-16
    ">

                            {/* Left Content */}
                            <div className="max-w-2xl">

                                {/* Mini Label */}
                                <div className="
                mb-8
                flex
                items-center
                gap-3
            ">
                                    <div className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-white/70
                " />

                                    <span className="
                    uppercase
                    tracking-[0.28em]
                    text-[10px]
                    font-semibold
                    text-white/35
                ">
                                        Open For Projects
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2 className="
    max-w-[720px]

    text-[30px]
    sm:text-[38px]
    md:text-[52px]

    font-[620]
    tracking-[-0.08em]
    leading-[0.95]

    text-white
">
                                    Building digital experiences
                                    that make brands look
                                    <span className="text-white/55 italic"> unforgettable.</span>
                                </h2>

                                {/* Description */}
                                <p className="
    mt-7
    max-w-[620px]

    text-sm
    sm:text-[15px]
    md:text-[17px]

    leading-[1.8]
    text-white/42
    font-light
">
                                    I help startups, creators, and modern brands
                                    craft premium websites and product experiences
                                    that not only look exceptional —
                                    but instantly build trust, attention, and authority.
                                </p>
                            </div>

                            {/* Right Side */}
                            <div className="
            w-full
            lg:w-auto
            flex
            flex-col
            items-start
            lg:items-end
            gap-6
        ">

                                {/* Availability */}
                                <div className="
                flex
                items-center
                gap-3
                text-white/35
                text-sm
            ">
                                    <div className="
                    relative
                    flex
                    h-2.5
                    w-2.5
                ">
                                        <span className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        rounded-full
                        bg-white/50
                        animate-ping
                    " />

                                        <span className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white
                    " />
                                    </div>

                                    Currently accepting collaborations
                                </div>

                                {/* Button */}
                                <button className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.04]
                backdrop-blur-2xl
                px-7
                py-4
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:border-white/[0.18]
            ">

                                    {/* Silver Glow */}
                                    <div className="
                    absolute
                    inset-0
                    bg-white/5
                    opacity-70
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                " />

                                    {/* Top Highlight */}
                                    <div className="
                    absolute
                    inset-[1px]
                    rounded-full
                    bg-gradient-to-b
                    from-white/[0.14]
                    to-transparent
                    opacity-70
                " />

                                    {/* Shine Effect */}
                                    <div className="
                    absolute
                    top-0
                    left-[-120%]
                    h-full
                    w-[120px]
                    rotate-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-all
                    duration-1000
                    group-hover:left-[140%]
                " />

                                    <span className="
    relative
    z-10
    flex
    items-center
    gap-4
">

                                        {/* Text */}
                                        <span className="
        relative
        overflow-hidden
        flex
        flex-col
        h-[22px]
    ">

                                            {/* Default Text */}
                                            <span className="
            text-white
            font-[520]
            tracking-[-0.03em]
            text-sm
            md:text-[15px]
            transition-transform
            duration-500
            ease-out
            group-hover:-translate-y-full
        ">
                                                Let&apos;s Build Something
                                            </span>

                                            {/* Hover Text */}
                                            <span className="
            absolute
            top-full
            left-0
            text-white/70
            font-[520]
            tracking-[-0.03em]
            text-sm
            md:text-[15px]
            transition-transform
            duration-500
            ease-out
            group-hover:-translate-y-full
        ">
                                                Let&apos;s Build Something
                                            </span>

                                        </span>

                                        {/* Arrow Container */}
                                        <span className="
        relative
        flex
        items-center
        justify-center

        w-11
        h-11

        rounded-full

        border
        border-white/[0.08]

        bg-gradient-to-b
        from-white/[0.08]
        to-white/[0.02]

        backdrop-blur-2xl

        overflow-hidden

        transition-all
        duration-500

        group-hover:border-white/20
        group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
    ">

                                            {/* Metallic Shine */}
                                            <div className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-700
        ">
                                                <div className="
                absolute
                top-[-120%]
                left-[-40%]

                w-[160%]
                h-[220%]

                rotate-[25deg]

                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent

                transition-all
                duration-1000

                group-hover:translate-x-[120%]
                group-hover:translate-y-[60%]
            " />
                                            </div>

                                            {/* Arrow */}
                                            <span className="
            relative
            flex
            items-center
            justify-center

            transition-all
            duration-500

            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
        ">
                                                <ArrowUpRight className="
                w-[17px]
                h-[17px]
                text-white/90
            " />
                                            </span>

                                            {/* Inner Glow */}
                                            <div className="
            absolute
            inset-[1px]
            rounded-full
            bg-gradient-to-b
            from-white/[0.08]
            to-transparent
            opacity-70
        " />

                                        </span>

                                    </span>
                                </button>

                            </div>

                        </div>

                    </motion.section>

                    {/* FOOTER */}
                    <motion.div
                        variants={itemVariants}
                        className="pt-10"
                    >
                        <Footer />
                    </motion.div>

                </motion.div>

            </main>
        </div>
    );
}