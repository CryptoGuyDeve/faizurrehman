"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import {
    HelpCircle, Plus, Minus, Waves,
    Zap, Star, Shield, ArrowUpRight,
    Check, Sparkles, Globe, Terminal,
    Layers, Cpu, Smartphone, LayoutGrid,
    MousePointer2, Search, Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        id: "starter",
        name: "Single Page",
        price: "$36", 
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
        price: "$72", 
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
        price: "$110", 
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
                    isOpen ? "text-emerald-400" : "text-white/70 group-hover:text-white"
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
        <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 overflow-x-hidden">
            {/* Global Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="parallax-glow absolute top-0 left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/10 blur-[180px] rounded-full" />
                <div className="parallax-glow absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-emerald-400/5 blur-[150px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="relative z-10">
                {/* Hero Minimalist */}
                <section className="pt-48 pb-10 px-6">
                    <div className="max-w-[1200px] mx-auto text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 mb-10"
                        >
                            <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-white/40">Our Pricing</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-[140px] font-black tracking-tighter mb-12 leading-[0.8] uppercase italic"
                        >
                            SIMPLE & <span className="text-emerald-500">FAIR.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/30 text-2xl font-light max-w-2xl leading-relaxed italic"
                        >
                            High-quality design and development that helps your business grow. Pick a plan that fits your needs.
                        </motion.p>
                    </div>
                </section>

                {/* HORIZONTAL PRICING TIERS - LEFT TO RIGHT */}
                <section className="px-6 py-20">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={cn(
                                    "pricing-line group relative p-10 rounded-[50px] border transition-all duration-700 bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-emerald-500/20 overflow-hidden flex flex-col justify-between h-full",
                                    plan.isPopular && "border-emerald-500/30 bg-emerald-500/[0.03]"
                                )}
                            >
                                {plan.isPopular && (
                                    <div className="absolute top-8 right-8">
                                        <div className="bg-emerald-500 text-black px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest italic shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                            Most Requested
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all border border-white/5 mb-8">
                                        {plan.icon}
                                    </div>
                                    
                                    <h3 className="text-3xl font-black mb-1 tracking-tighter uppercase italic">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                                    </div>

                                    <div className="space-y-4 mb-12">
                                        {plan.features.map(f => (
                                            <div key={f} className="flex items-center gap-3">
                                                <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                    <Check size={8} strokeWidth={4} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30 truncate">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className={cn(
                                    "w-full py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] overflow-hidden group/btn transition-all duration-500 shadow-xl",
                                    plan.isPopular ? "bg-white text-black hover:bg-emerald-400" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                                )}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* THE BUILD PROCESS */}
                <section className="py-40 px-6 border-y border-white/5 bg-white/[0.01]">
                    <div className="max-w-[1200px] mx-auto text-center mb-24">
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 italic uppercase">HOW I WORK.</h2>
                        <p className="text-white/30 text-xl font-light italic">A clear and simple process from start to finish.</p>
                    </div>

                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
                        {processSteps.map((step, i) => (
                            <div key={i} className="group p-10 rounded-[40px] bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all flex flex-col gap-8">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all">
                                    {step.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3 italic tracking-tight">{step.title}</h4>
                                    <p className="text-white/30 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* COMPARISON MATRIX (MINIMAL) */}
                <section className="py-40 px-6 overflow-x-auto">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="mb-20 text-left">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">WHAT&apos;S INCLUDED.</h2>
                            <p className="text-white/40 text-lg italic">Comparing the details across each plan.</p>
                        </div>

                        <div className="w-full min-w-[800px] border border-white/10 rounded-[40px] overflow-hidden bg-white/5 backdrop-blur-3xl">
                            <table className="w-full border-collapse">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="p-8 text-left text-xs font-black uppercase tracking-widest text-white/30">Service Category</th>
                                        <th className="p-8 text-center text-xs font-black uppercase tracking-widest">Single Page</th>
                                        <th className="p-8 text-center text-xs font-black uppercase tracking-widest text-emerald-400">Multi Page</th>
                                        <th className="p-8 text-center text-xs font-black uppercase tracking-widest text-white/30">Full System</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Structure", "1 Page", "Multiple Pages", "Full App Interface"],
                                        ["Animations", "Core Effects", "Advanced Motion", "Full Custom Motion"],
                                        ["SEO Work", "Basic Setup", "Advanced Optimization", "Full SEO Strategy"],
                                        ["Updates", "Manual", "Easy CMS", "Custom Dashboard"],
                                        ["Security", "SSL + Core", "Advanced Protection", "Enterprise Security"],
                                        ["Typical Time", "4-6 Days", "1-2 Weeks", "Custom Timeline"]
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="p-8 text-sm font-bold text-white/60">{row[0]}</td>
                                            <td className="p-8 text-center text-xs text-white/30 uppercase">{row[1]}</td>
                                            <td className="p-8 text-center text-xs text-emerald-400 font-bold uppercase">{row[2]}</td>
                                            <td className="p-8 text-center text-xs text-white/30 uppercase">{row[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* HIGH-VALUE DELIVERABLES */}
                <section className="py-40 px-6">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-none">YOUR <br /><span className="text-emerald-500">ASSETS.</span></h2>
                            <p className="text-white/30 text-xl font-light italic leading-relaxed mb-12">
                                You don&apos;t just get a website; you get the design files, clean code, and everything you need to succeed online.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {deliverables.map(d => (
                                    <div key={d.title} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                                        {d.icon}
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{d.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="relative aspect-square rounded-[60px] bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-1000">
                                <Terminal className="w-40 h-40 text-emerald-500/20" />
                                <div className="absolute top-10 left-10 p-6 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/10 font-mono text-[10px] text-emerald-400">
                                    git commit -m "Final Website Launch"
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ RE-INTEGRATED */}
                <section className="py-40 px-6 bg-white/[0.01]">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-4xl md:text-6xl font-black mb-16 tracking-tighter italic uppercase underline decoration-emerald-500 decoration-4"
                        >
                            Common Questions.
                        </motion.h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CALL TO ACTION */}
                <section className="py-60 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[120px] rounded-full" />
                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-6xl md:text-[180px] font-black mb-16 tracking-tighter italic uppercase leading-none mix-blend-difference">READY TO <br /><span className="text-emerald-500">START?</span></h2>
                        <button className="group relative px-20 py-10 rounded-full bg-white text-black font-black text-2xl uppercase tracking-[0.3em] overflow-hidden transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
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
