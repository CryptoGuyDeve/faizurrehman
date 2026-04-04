"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Cpu, Sparkles, Code, Terminal, Twitter, Github, Linkedin, Instagram } from "lucide-react";
import Footer from "@/components/footer";

const stats = [
    { label: "Founded", value: "2024" },
    { label: "Completed Projects", value: "50+" },
    { label: "Average Response Time", value: "< 24h" },
    { label: "Coffee Consumed", value: "∞" }
];

const expertise = [
    { icon: <Code />, title: "Frontend Engineering", desc: "Crafting fluid, high-performance UIs using Next.js and GSAP." },
    { icon: <Terminal />, title: "Full-Stack Ops", desc: "Scalable backends with Supabase, Prisma, and custom Node.js APIs." },
    { icon: <Sparkles />, title: "Motion & UX", desc: "Bridging the gap between static design and interactive experiences." },
    { icon: <Cpu />, title: "Infrastructure", desc: "Optimizing for deployment, SEO, and massive performance gains." }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
            {/* Header Hero */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4"
                        >
                            <User className="w-8 h-8" />
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                        >
                            ABOUT <br />
                            <span className="text-emerald-500 italic">FAIZ.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/40 text-2xl font-light leading-relaxed font-mono uppercase tracking-widest"
                        >
                            A 16-year-old developer obsessed with quality.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <p className="text-xl text-white/70 leading-relaxed italic mb-8">
                            &quot;I combine clean code with fluid motion to create software that feels effortless. My goal is to push the boundaries of what&apos;s possible on the web.&quot;
                        </p>
                        <div className="flex items-center gap-6">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all border border-white/10">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Stats */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-5xl font-black text-white italic tracking-tighter">{stat.value}</span>
                            <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Deep Expertise */}
            <section className="py-32 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter italic">Deep Expertise.</h2>
                        <div className="h-1 w-20 bg-emerald-500" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertise.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col gap-6"
                            >
                                <div className="p-4 w-fit rounded-2xl bg-white/5 text-white/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-all border border-white/5 group-hover:border-emerald-500/20">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bio Grid Paragraph */}
            <section className="py-24 px-6 bg-white/2">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2 aspect-square rounded-[60px] bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl">
                        <img 
                            src="/crypto.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold italic tracking-tighter">Mission Statement.</h2>
                        <p className="text-xl text-white/50 leading-relaxed font-light">
                            I started building in the web early on, fascinated by how code could bring ideas to life instantly. Over the years, I&apos;ve shifted focus toward the <span className="text-white font-medium italic">intersection of engineering and art</span>.
                        </p>
                        <p className="text-xl text-white/50 leading-relaxed font-light">
                            I believe the future of software isn&apos;t just about utility—it&apos;s about <span className="text-white font-medium italic">emotional impact</span>. Every pixel, every easing curve, and every line of code should serve the user&apos;s experience.
                        </p>
                        <button className="bg-emerald-500 text-black px-10 py-4 rounded-2xl font-bold hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                            HIRE THE AMBITION
                        </button>
                    </div>
                </div>
            </section>

            <div className="px-6 py-20">
                <div className="max-w-[1200px] mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
