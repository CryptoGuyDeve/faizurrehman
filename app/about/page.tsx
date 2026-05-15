"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    User,
    Code,
    Sparkles,
    Cpu,
    Terminal,
    ArrowUpRight,
    Twitter,
    Github,
    Linkedin,
    Instagram,
} from "lucide-react";

import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);


const expertise = [
    {
        icon: <Code className="w-5 h-5" />,
        title: "Frontend Engineering",
        desc: "Crafting immersive interfaces with modern architecture, fluid interactions, and refined motion systems.",
    },
    {
        icon: <Terminal className="w-5 h-5" />,
        title: "Backend Systems",
        desc: "Building scalable APIs, dashboards, infrastructure, and production-ready full-stack experiences.",
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Creative Motion",
        desc: "Transforming interfaces into cinematic digital experiences with subtle yet impactful animation.",
    },
    {
        icon: <Cpu className="w-5 h-5" />,
        title: "Performance",
        desc: "Optimized experiences focused on responsiveness, SEO, scalability, and speed.",
    },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // HERO
            const heroTl = gsap.timeline();

            heroTl.from(".hero-badge", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            heroTl.from(".hero-title", {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            }, "-=0.5");

            heroTl.from(".hero-desc", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.8");

            heroTl.from(".hero-card", {
                y: 50,
                opacity: 0,
                scale: 0.96,
                duration: 1.2,
                ease: "power4.out",
            }, "-=1");

            // Sections
            gsap.utils.toArray<HTMLElement>(".fade-section").forEach((el) => {
                gsap.from(el, {
                    y: 70,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });
            });

            // Stagger Grids
            gsap.utils.toArray<HTMLElement>(".stagger-grid").forEach((grid) => {
                gsap.from(grid.children, {
                    y: 50,
                    opacity: 0,
                    stagger: 0.12,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: grid,
                        start: "top 85%",
                    },
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="
                relative
                min-h-screen
                overflow-x-hidden
                bg-[#060606]
                text-white
                selection:bg-white/20
            "
        >

            {/* Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

                {/* Main Glow */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-[10%]

                        -translate-x-1/2

                        w-[500px]
                        h-[500px]

                        md:w-[900px]
                        md:h-[900px]

                        rounded-full

                        blur-3xl
                        opacity-60
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle,
                                rgba(255,255,255,0.08) 0%,
                                rgba(255,255,255,0.03) 40%,
                                transparent 75%
                            )
                        `,
                    }}
                />

                {/* Secondary Glow */}
                <div
                    className="
                        absolute
                        right-[-10%]
                        bottom-[10%]

                        w-[400px]
                        h-[400px]

                        md:w-[700px]
                        md:h-[700px]

                        rounded-full

                        blur-3xl
                        opacity-30
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle,
                                rgba(255,255,255,0.05) 0%,
                                transparent 70%
                            )
                        `,
                    }}
                />

                {/* Noise */}
                <div className="
                    absolute inset-0
                    opacity-[0.03]
                    mix-blend-overlay
                    bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
                " />

            </div>

            <div className="relative z-10">

                {/* HERO */}
                <section className="relative pt-32 md:pt-48 px-6 pb-24">

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end">

                        {/* LEFT */}
                        <div>

                            {/* Badge */}
                            <div className="hero-badge flex items-center gap-3 mb-7 text-white/35">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/70" />

                                <span className="uppercase tracking-[0.28em] text-[10px] font-semibold">
                                    About The Developer
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="relative isolate">

                                {/* Glow */}
                                <div
                                    className="absolute left-0 top-0 w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-full blur-3xl opacity-60"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 75%)",
                                    }}
                                />

                                <h1 className="hero-title relative text-[48px] sm:text-[74px] md:text-[118px] font-[760] tracking-[-0.10em] leading-[0.9] text-white">
                                    Creative
                                    <br />

                                    <span className="italic font-serif font-light text-white/80">
                                        Engineering
                                    </span>
                                </h1>

                            </div>

                            {/* Desc */}
                            <p className="hero-desc mt-8 max-w-2xl text-sm sm:text-base md:text-lg leading-[1.9] text-white/40 font-light">
                                I create cinematic digital experiences focused on refined interaction,
                                scalable engineering, and premium visual systems for ambitious brands,
                                startups, and founders.
                            </p>

                            {/* CTA */}
                            <button className="hero-desc group relative overflow-hidden mt-10 h-[56px] px-7 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.06]">

                                <div className="absolute top-0 left-[-120%] h-full w-[120px] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                                <span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-[-0.03em] text-white">
                                    Let&apos;s Build Something

                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>

                            </button>

                        </div>

                        {/* RIGHT CARD */}
                        <div className="hero-card relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-3xl p-7 md:p-8">

                            {/* Reflection */}
                            <div className="absolute top-0 left-[10%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            <div className="relative z-10">

                                {/* Top */}
                                <div className="flex items-center gap-4 mb-10">

                                    <div className="w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center">
                                        <User className="w-6 h-6 text-white/80" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-[650] tracking-[-0.05em]">
                                            Faiz
                                        </h3>

                                        <p className="text-sm text-white/35">
                                            Creative Developer
                                        </p>
                                    </div>

                                </div>

                                {/* Quote */}
                                <p className="text-white/45 leading-[1.9] text-[15px] font-light">
                                    Focused on building premium immersive experiences that merge engineering,
                                    motion, and storytelling.
                                </p>

                                {/* Socials */}
                                <div className="flex items-center gap-3 mt-10">

                                    {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="group flex items-center justify-center w-11 h-11 rounded-2xl border border-white/[0.08] bg-white/[0.04] transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.08]"
                                        >
                                            <Icon className="w-4 h-4 text-white/45 transition-colors duration-500 group-hover:text-white" />
                                        </a>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* Floating Insight Strip */}
                <section className="relative px-6 -mt-8 md:-mt-14 z-20">

                    <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-3xl">

                        {/* Glow */}
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                            }}
                        />

                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4">

                            {[
                                ["50+", "Projects Built"],
                                ["24h", "Average Response"],
                                ["100%", "Custom Crafted"],
                                ["∞", "Creative Energy"],
                            ].map(([value, label], i) => (
                                <div
                                    key={i}
                                    className="relative p-6 md:p-8 border-r border-b md:border-b-0 border-white/[0.06] last:border-r-0"
                                >

                                    <div className="text-[30px] md:text-[42px] font-[760] tracking-[-0.08em] text-white">
                                        {value}
                                    </div>

                                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                                        {label}
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </section>



                {/* PHILOSOPHY */}
                <section className="fade-section relative px-6 py-32">

                    <div className="max-w-7xl mx-auto relative">

                        {/* BG TEXT */}
                        <div className="absolute top-0 right-0 text-[120px] md:text-[220px] font-[800] tracking-[-0.12em] text-white/[0.02] leading-none pointer-events-none select-none">
                            VISION
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">

                            {/* LEFT */}
                            <div className="relative flex justify-center lg:justify-start">

                                {/* Ambient Glow */}
                                <div
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full blur-3xl opacity-60"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                                    }}
                                />

                                {/* Main Image */}
                                <div className="relative w-full max-w-[520px] overflow-hidden rounded-[38px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-3xl">

                                    {/* Reflection */}
                                    <div className="absolute top-0 left-[10%] z-20 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                    {/* Glow */}
                                    <div
                                        className="absolute inset-0 z-10 opacity-70"
                                        style={{
                                            background:
                                                "radial-gradient(circle at top, rgba(255,255,255,0.10), transparent 70%)",
                                        }}
                                    />

                                    <img
                                        src="/crypto.jpg"
                                        alt="Profile"
                                        className="w-full h-[520px] object-cover grayscale scale-[1.06] transition-all duration-1000 hover:scale-100 hover:grayscale-0"
                                    />

                                    {/* Bottom Info */}
                                    <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-8">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>
                                                <p className="text-[11px] uppercase tracking-[0.22em] text-white/40 mb-2">
                                                    Creative Developer
                                                </p>

                                                <h3 className="text-2xl md:text-3xl font-[700] tracking-[-0.06em] text-white">
                                                    Faiz
                                                </h3>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                                {/* Floating Glass Card */}
                                <div className="absolute -bottom-8 -right-2 md:-right-12 w-[240px] rounded-[28px] border border-white/[0.08] bg-black/60 backdrop-blur-3xl p-5 md:p-6">

                                    {/* Glow */}
                                    <div
                                        className="absolute inset-0 rounded-[28px] opacity-60"
                                        style={{
                                            background:
                                                "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 70%)",
                                        }}
                                    />

                                    <div className="relative z-10">

                                        <div className="flex items-center gap-2 mb-4">

                                            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />

                                            <span className="uppercase tracking-[0.18em] text-[10px] text-white/35">
                                                Philosophy
                                            </span>

                                        </div>

                                        <p className="text-sm leading-[1.8] text-white/45">
                                            “The best interfaces don’t just work
                                            they create emotion.”
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT */}
                            <div className="relative">

                                {/* Tiny Label */}
                                <div className="flex items-center gap-3 mb-6">

                                    <div className="w-1.5 h-1.5 rounded-full bg-white/70" />

                                    <span className="uppercase tracking-[0.28em] text-[10px] font-semibold text-white/35">
                                        Philosophy
                                    </span>

                                </div>

                                {/* Heading */}
                                <div className="relative isolate">

                                    {/* Soft Glow */}
                                    <div
                                        className="absolute left-0 top-0 w-[260px] h-[260px] rounded-full blur-3xl opacity-40"
                                        style={{
                                            background:
                                                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                                        }}
                                    />

                                    <h2 className="relative text-[42px] sm:text-[58px] md:text-[88px] leading-[0.9] tracking-[-0.09em] font-[760] text-white">

                                        Building products
                                        <br />

                                        <span className="italic font-serif font-light text-white/80">
                                            people remember.
                                        </span>

                                    </h2>

                                </div>

                                {/* Description */}
                                <div className="mt-10 space-y-8 max-w-2xl">

                                    <p className="text-white/42 text-sm sm:text-base md:text-lg leading-[1.95] font-light">
                                        I believe software should create emotional impact
                                        not just functionality. Every interaction, transition,
                                        and visual detail should feel immersive, intentional,
                                        and premium.
                                    </p>

                                    <p className="text-white/42 text-sm sm:text-base md:text-lg leading-[1.95] font-light">
                                        My focus is building cinematic digital experiences
                                        that combine storytelling, modern engineering,
                                        and refined design systems.
                                    </p>

                                </div>

                                {/* Bottom Cards */}
                                <div className="grid grid-cols-2 gap-4 mt-12">

                                    {[
                                        "Cinematic Motion",
                                        "Premium UX",
                                        "Modern Systems",
                                        "Creative Direction",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.03] px-4 py-5 backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.05]"
                                        >

                                            {/* Hover Glow */}
                                            <div
                                                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                                style={{
                                                    background:
                                                        "radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 70%)",
                                                }}
                                            />

                                            <span className="relative z-10 text-sm text-white/55 tracking-[-0.02em]">
                                                {item}
                                            </span>

                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* FOOTER */}
                <div className="px-6 pb-20">

                    <div className="
                        max-w-7xl
                        mx-auto

                        border-t
                        border-white/[0.08]

                        pt-16
                    ">
                        <Footer />
                    </div>

                </div>

            </div>

        </div>
    );
}