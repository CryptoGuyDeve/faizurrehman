"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    ArrowUpRight,
    Activity,
    Sparkles,
} from "lucide-react";

export function CodingActivity() {
    const languages = [
        { name: "TypeScript", percent: 54 },
        { name: "React / Next.js", percent: 80 },
        { name: "Node.js", percent: 76 },
        { name: "Figma", percent: 23 },
    ];

    return (
        <div
            className="
                group
                relative
                w-full
                overflow-hidden

                rounded-[32px]

                border
                border-white/[0.08]

                bg-white/[0.025]

                p-6
                md:p-7

                backdrop-blur-3xl

                transition-all
                duration-700

                hover:border-white/[0.14]
                hover:bg-white/[0.04]
            "
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-3xl" />
            </div>

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Top Reflection */}
            <div className="absolute left-[10%] top-0 h-px w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Shine */}
            <div className="absolute top-0 left-[-120%] h-full w-[120px] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-all duration-1000 group-hover:left-[140%]" />

            <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

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
                            "
                        >
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent" />
                            </div>

                            <Terminal className="relative z-10 h-5 w-5 text-white/75" />
                        </div>

                        <div>
                            <div className="flex items-center gap-2">

                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/35">
                                    Live Activity
                                </span>

                            </div>

                            <h3
                                className="
                                    mt-2

                                    text-[24px]
                                    md:text-[28px]

                                    font-[720]

                                    tracking-[-0.08em]

                                    text-white
                                "
                            >
                                Coding
                                <span className="ml-2 font-serif font-light italic text-white/55">
                                    Analytics
                                </span>
                            </h3>

                        </div>

                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-white/45" />

                        <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                            Weekly
                        </span>
                    </div>

                </div>

                {/* Description */}
                <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-white/38">
                    Current development stack and engineering focus across modern frontend systems, backend tooling, and scalable application architecture.
                </p>

                {/* Stats */}
                <div className="mt-10 space-y-5">

                    {languages.map((lang, index) => (
                        <div key={lang.name}>

                            <div className="mb-2 flex items-center justify-between">

                                <div className="flex items-center gap-2">

                                    <div className="h-1.5 w-1.5 rounded-full bg-white/30" />

                                    <span className="text-[13px] font-medium text-white/70">
                                        {lang.name}
                                    </span>

                                </div>

                                <span className="text-[11px] font-medium text-white/30">
                                    {lang.percent}%
                                </span>

                            </div>

                            <div className="relative h-[10px] overflow-hidden rounded-full bg-white/[0.04]">

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.04] to-transparent" />

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percent}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.08,
                                        ease: "easeOut",
                                    }}
                                    className="
                                        relative
                                        h-full
                                        overflow-hidden
                                        rounded-full

                                        bg-gradient-to-r
                                        from-white
                                        via-white/80
                                        to-white/40
                                    "
                                >
                                    {/* Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                </motion.div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-5">

                    <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                        <Code2 className="h-3.5 w-3.5 text-white/40" />

                        <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                            24 hrs coding
                        </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/[0.06] px-3 py-2">
                        <Activity className="h-3.5 w-3.5 text-emerald-400" />

                        <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">
                            Active Now
                        </span>
                    </div>

                </div>

            </div>
        </div>
    );
}