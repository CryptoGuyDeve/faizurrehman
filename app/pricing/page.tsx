"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import {
    HelpCircle, Plus, Minus, Waves,
    Zap, Star, Shield, ArrowUpRight,
    Check, Sparkles, Globe, Terminal,
    Layers, Cpu, Smartphone, LayoutGrid,
    MousePointer2, Search, Settings, Mail,
    MessageCircle,
    Disc3,
} from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        id: "starter",
        name: "Single Page",
        price: "$72",
        description: "Perfect for early-stage founders who need a clean, fast, and professional web presence.",
        features: [
            "1 High-Converting Landing Page",
            "Modern UI Design (Clean & Minimal)",
            "Mobile Responsive Optimization",
            "Basic SEO Setup",
            "Smooth Micro-Interactions",
            "3 Revisions Included",
            "Delivery in 4–6 Days"
        ],
        icon: <Zap className="w-8 h-8" />,
        color: "emerald"
    },
    {
        id: "studio",
        name: "Multi Page",
        price: "$143",
        description: "For brands serious about standing out with premium design, smooth interactions, and conversion-focused structure.",
        features: [
            "Multi-Section Premium Landing Page",
            "Advanced Animations (GSAP / Smooth UX)",
            "High-End UI/UX (Your Brand Feel)",
            "Performance Optimized (Fast Load)",
            "Conversion-Focused Structure",
            "SEO + Social Optimization",
            "5–7 Revisions (Priority Handling)",
            "Delivery in 7–12 Days"
        ],
        isPopular: true,
        icon: <Star className="w-8 h-8 fill-emerald-500" />,
        color: "white"
    },
    {
        id: "scale",
        name: "Full System",
        price: "$251",
        description: "Built for serious businesses that need full-scale systems, advanced features, and long-term scalability.",
        features: [
            "Full Website / SaaS Interface Build",
            "Custom Dashboard / App UI",
            "Advanced Animations + Interactions",
            "Scalable Architecture (Future Ready)",
            "Custom Features / Integrations",
            "Design System + Component Library",
            "Priority Support + Consultation",
            "Post-Launch Support"
        ],
        icon: <Shield className="w-8 h-8" />,
        color: "emerald"
    }
];

const faqs = [
    {
        question: "How long does a website take to build?",
        answer: "A single page usually takes about 4-6 days. For larger projects with more sections and complex animations, it typically takes between 1-2 weeks. I'll always give you a clear timeline before we start."
    },
    {
        question: "Can I update the site myself?",
        answer: "Yes! If we use a CMS (Content Management System), you can easily update text and images. If it's a code-only project, I can provide a simple guide or help you with updates later."
    }
];

const processSteps = [
    { title: "Plan", desc: "We talk about your goals and ideas.", icon: <Search /> },
    { title: "Design", desc: "I create the look and feel of your site.", icon: <Layers /> },
    { title: "Build", desc: "I write the clean, fast code.", icon: <Terminal /> },
    { title: "Test", desc: "Making sure it works on every device.", icon: <Settings /> },
    { title: "Launch", desc: "Your site goes live for the world.", icon: <Globe /> }
];

const deliverables = [
    { title: "Design Files", icon: <LayoutGrid className="text-emerald-500" /> },
    { title: "Source Code", icon: <Terminal className="text-emerald-500" /> },
    { title: "Google SEO", icon: <Search className="text-emerald-500" /> },
    { title: "Custom Motion", icon: <Sparkles className="text-emerald-500" /> }
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/5 py-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left group"
            >
                <span className={cn(
                    "text-xl font-bold tracking-tight transition-colors",
                    isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                )}>
                    {faq.question}
                </span>
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border transition-all",
                    isOpen ? "bg-emerald-500 border-emerald-500 text-black rotate-180" : "bg-white/5 border-white/10 text-white/40"
                )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="text-white/40 text-lg leading-relaxed pt-6 max-w-2xl">
                    {faq.answer}
                </p>
            </motion.div>
        </div>
    );
}

export default function PricingPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // General Entrance - Individualized for reliability
            gsap.utils.toArray<HTMLElement>(".pricing-line").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });

            gsap.utils.toArray<HTMLElement>(".floating-card").forEach((card, i) => {
                gsap.to(card, {
                    y: i % 2 === 0 ? -18 : 18,
                    duration: 4 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            // Parallax Glow
            gsap.to(".parallax-glow", {
                yPercent: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#060606] text-white selection:bg-white/30 overflow-x-hidden">
            {/* Global Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

                {/* Main Ambient Glow */}
                <div
                    className="
            absolute
            left-1/2
            top-[10%]

            -translate-x-1/2

            w-[700px]
            h-[700px]

            rounded-full

            opacity-60

            blur-3xl
        "
                    style={{
                        background: `
                radial-gradient(
                    circle,
                    rgba(255,255,255,0.10) 0%,
                    rgba(255,255,255,0.05) 30%,
                    rgba(255,255,255,0.02) 50%,
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

            w-[500px]
            h-[500px]

            rounded-full

            opacity-40

            blur-3xl
        "
                    style={{
                        background: `
                radial-gradient(
                    circle,
                    rgba(255,255,255,0.06) 0%,
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
                {/* Hero */}
                <section className="pt-40 md:pt-52 pb-20 px-6">

                    <div className="
        max-w-5xl
        mx-auto

        flex
        flex-col
        items-center

        text-center
    ">

                        {/* Mini Label */}
                        <div className="
            mb-10

            flex
            items-center
            gap-3

            text-white/35
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
            ">
                                Pricing & Services
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="relative isolate">

                            {/* Ambient Glow */}
                            <div
                                className="
                    absolute
                    left-1/2
                    top-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    w-[320px]
                    h-[320px]

                    md:w-[620px]
                    md:h-[620px]

                    rounded-full

                    blur-3xl
                    opacity-70

                    pointer-events-none
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

                            <h1
                                className="
                    relative

                    text-[48px]
                    sm:text-[72px]
                    md:text-[120px]

                    font-[750]

                    tracking-[-0.10em]
                    leading-[0.9]

                    text-white
                "
                            >
                                Premium Digital
                                <br />

                                <span className="
                    italic
                    font-light
                    text-white/90
                    font-serif
                ">
                                    Experiences
                                </span>
                            </h1>

                        </div>

                        {/* Description */}
                        <p className="
            mt-10

            max-w-2xl

            text-sm
            sm:text-base
            md:text-lg

            leading-[1.8]

            text-white/40
            font-light
        ">
                            Strategic design and development for
                            founders, startups, and modern brands
                            looking to create fast, cinematic,
                            and unforgettable digital products.
                        </p>

                    </div>

                </section>

                {/* HORIZONTAL PRICING TIERS - LEFT TO RIGHT */}
                {/* HORIZONTAL PRICING TIERS */}
                <section className="px-6 py-20">

                    <div
                        className="
            max-w-[1400px]
            mx-auto

            grid
            grid-cols-1
            lg:grid-cols-[1fr_1.15fr_1fr]

            gap-8
            items-stretch
        "
                    >
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={cn(
                                    `
        pricing-line
        floating-card
        group
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-white/[0.07]

        bg-white/[0.025]

        backdrop-blur-3xl

        p-6
        md:p-7

        transition-all
        duration-700

        hover:-translate-y-1.5
        hover:border-white/[0.14]

        flex
        flex-col

        min-h-[520px]
        `,
                                    plan.isPopular &&
                                    `
        bg-white/[0.04]
        border-white/[0.14]
        lg:-translate-y-4
        `
                                )}
                            >

                                {/* Ambient Glow */}
                                <div
                                    className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition-opacity
            duration-700

            pointer-events-none
        "
                                >
                                    <div
                                        className="
                absolute
                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                w-[260px]
                h-[260px]

                rounded-full

                blur-3xl
            "
                                        style={{
                                            background: `
                    radial-gradient(
                        circle,
                        rgba(255,255,255,0.08) 0%,
                        transparent 70%
                    )
                `,
                                        }}
                                    />
                                </div>

                                {/* Reflection */}
                                <div
                                    className="
            absolute
            top-0
            left-[10%]

            w-[40%]
            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
        "
                                />

                                {/* Top */}
                                <div className="relative z-10">

                                    {/* Badge */}
                                    <div className="
            flex
            items-center
            justify-between
            mb-8
        ">

                                        <div
                                            className="
                    flex
                    items-center
                    justify-center

                    w-11
                    h-11

                    rounded-2xl

                    border
                    border-white/[0.08]

                    bg-white/[0.04]

                    text-white/70
                "
                                        >
                                            {plan.icon}
                                        </div>

                                        {plan.isPopular && (
                                            <div
                                                className="
                        px-3
                        py-1.5

                        rounded-full

                        bg-white/[0.06]
                        border
                        border-white/[0.08]

                        text-[9px]
                        uppercase

                        tracking-[0.18em]

                        text-white/70
                    "
                                            >
                                                Popular
                                            </div>
                                        )}

                                    </div>

                                    {/* Name */}
                                    <h3
                                        className="
                text-[28px]
                md:text-[34px]

                font-[720]

                tracking-[-0.08em]

                text-white
                leading-none
            "
                                    >
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="
                mt-4

                text-[13px]
                md:text-[14px]

                leading-[1.8]

                text-white/38

                max-w-[280px]
            "
                                    >
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="
            flex
            items-end
            gap-2

            mt-8
        ">

                                        <span
                                            className="
                    text-[44px]
                    md:text-[56px]

                    font-[760]

                    tracking-[-0.10em]

                    leading-none

                    text-white
                "
                                        >
                                            {plan.price}
                                        </span>

                                        <span
                                            className="
                    text-white/25
                    text-xs
                    pb-2
                "
                                        >
                                            one-time
                                        </span>

                                    </div>

                                </div>

                                {/* Divider */}
                                <div
                                    className="
            relative
            z-10

            my-8

            h-px

            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
        "
                                />

                                {/* Features */}
                                <div
                                    className="
            relative
            z-10

            flex
            flex-col
            gap-4

            flex-1
        "
                                >
                                    {plan.features.slice(0, 5).map((f) => (
                                        <div
                                            key={f}
                                            className="
                    flex
                    items-start
                    gap-3
                "
                                        >

                                            <div
                                                className="
                        mt-1

                        w-1.5
                        h-1.5

                        rounded-full

                        bg-white/40

                        shrink-0
                    "
                                            />

                                            <span
                                                className="
                        text-[13px]
                        md:text-[14px]

                        text-white/42

                        leading-relaxed
                    "
                                            >
                                                {f}
                                            </span>

                                        </div>
                                    ))}
                                </div>

                                {/* Bottom CTA */}
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <button
            className={cn(
                "group/button relative z-10 mt-8 flex h-[54px] w-full items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-5 backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.06]",
                plan.isPopular && "bg-white text-black"
            )}
        >
            {/* Shine */}
            <div className="absolute top-0 left-[-120%] h-full w-[120px] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover/button:left-[140%]" />

            {/* Ambient Hover */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/button:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 scale-75 rounded-full bg-white/20 opacity-0 blur-2xl transition-all duration-500 group-hover/button:scale-125 group-hover/button:opacity-100" />

            <span
                className={cn(
                    "relative z-10 flex items-center gap-2 text-sm font-semibold tracking-[-0.03em] transition-all duration-500",
                    plan.isPopular
                        ? "text-black group-hover/button:text-white"
                        : "text-white"
                )}
            >
                Start Project

                <ArrowUpRight className="h-4 w-4 transition-all duration-500 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:rotate-12" />
            </span>

            {/* Bottom Line */}
            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-500 group-hover/button:w-[82%]" />
        </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
        align="center"
        sideOffset={12}
        className="w-[92vw] max-w-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-3xl"
    >
        {/* Header */}
        <div className="relative overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.03] p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

            <div className="relative z-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                    Start Your Project
                </p>

                <h3 className="mt-3 text-[22px] leading-tight font-[650] tracking-[-0.06em] text-white sm:text-[26px]">
                    {plan.name}
                    <span className="block text-white/55 italic font-serif font-light">
                        {plan.price} package
                    </span>
                </h3>
            </div>
        </div>

        {/* Contact Buttons */}
        <div className="mt-2 flex flex-col gap-2">
            
            {/* Email */}
            <a
                href={`mailto:m.faizurrehman.business@gmail.com?subject=${encodeURIComponent(
                    `Interested in ${plan.name} Plan`
                )}&body=${encodeURIComponent(
                    `Hey Faiz,

I am interested in your "${plan.name}" package (${plan.price}).

Project Details:
• Brand / Company:
• Project Type:
• Deadline:
• Extra Notes:

Looking forward to working with you.`
                )}`}
                className="group/item flex items-center gap-4 rounded-[22px] border border-transparent bg-transparent p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                        Email
                    </p>

                    <p className="truncate text-xs text-white/40">
                        Ready-made inquiry template
                    </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-hover/item:text-white" />
            </a>

            {/* WhatsApp */}
            <a
                href={`https://wa.me/923260502484?text=${encodeURIComponent(
                    `Hey Faiz 👋

I am interested in your "${plan.name}" plan (${plan.price}).

Project Details:
• Brand / Company:
• Project Type:
• Deadline:
• Extra Notes:

Looking forward to working together.`
                )}`}
                target="_blank"
                className="group/item flex items-center gap-4 rounded-[22px] border border-transparent bg-transparent p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <MessageCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                        WhatsApp
                    </p>

                    <p className="truncate text-xs text-white/40">
                        Instant project discussion
                    </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-hover/item:text-white" />
            </a>

            {/* Discord */}
            <button
                onClick={() => navigator.clipboard.writeText("cryptodeve_")}
                className="group/item flex items-center gap-4 rounded-[22px] border border-transparent bg-transparent p-4 text-left transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
            >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <Disc3 className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                        Discord
                    </p>

                    <p className="truncate text-xs text-white/40">
                        Copy username instantly
                    </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 group-hover/item:text-white" />
            </button>
        </div>
    </DropdownMenuContent>
</DropdownMenu>

                            </div>
                        ))}
                    </div>

                </section>

                {/* EXPERIENCE STRIP */}
                <section className="px-6 py-32">

                    <div
                        className="
            max-w-7xl
            mx-auto

            relative
            overflow-hidden

            rounded-[42px]

            border
            border-white/[0.08]

            bg-white/[0.02]

            backdrop-blur-3xl

            p-10
            md:p-20
        "
                    >

                        {/* Ambient Glow */}
                        <div
                            className="
                absolute
                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                w-[500px]
                h-[500px]

                rounded-full

                blur-3xl
                opacity-60

                pointer-events-none
            "
                            style={{
                                background: `
                    radial-gradient(
                        circle,
                        rgba(255,255,255,0.08) 0%,
                        transparent 70%
                    )
                `,
                            }}
                        />

                        {/* Top Reflection */}
                        <div
                            className="
                absolute
                top-0
                left-[10%]

                w-[40%]
                h-[1px]

                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
            "
                        />

                        <div
                            className="
                relative
                z-10

                flex
                flex-col
                lg:flex-row

                items-start
                lg:items-center

                justify-between

                gap-16
            "
                        >

                            {/* Left */}
                            <div className="max-w-2xl">

                                <div
                                    className="
                        flex
                        items-center
                        gap-3

                        mb-8
                    "
                                >

                                    <div
                                        className="
                            h-1.5
                            w-1.5

                            rounded-full

                            bg-white/70
                        "
                                    />

                                    <span
                                        className="
                            uppercase

                            tracking-[0.28em]

                            text-[10px]
                            font-semibold

                            text-white/35
                        "
                                    >
                                        Creative Development
                                    </span>

                                </div>

                                <h2
                                    className="
                        text-[34px]
                        sm:text-[52px]
                        md:text-[72px]

                        leading-[0.92]
                        tracking-[-0.08em]

                        font-[720]

                        text-white
                    "
                                >
                                    More than just
                                    <br />

                                    <span
                                        className="
                            italic
                            font-serif
                            font-light

                            text-white/80
                        "
                                    >
                                        another website.
                                    </span>

                                </h2>

                            </div>

                            {/* Right */}
                            <p
                                className="
                    max-w-lg

                    text-sm
                    sm:text-base
                    md:text-lg

                    leading-[1.9]

                    text-white/40
                    font-light
                "
                            >
                                Every project is crafted with
                                cinematic motion, refined interaction,
                                and modern visual systems designed
                                to make your brand feel premium,
                                memorable, and impossible to ignore.
                            </p>

                        </div>

                    </div>

                </section>



                <div className="px-6 pb-20">
                    <div className="max-w-[1200px] mx-auto border-t border-white/10 pt-20">
                        <Footer showBio={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}
