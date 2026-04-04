"use client";

import React from "react";
import { motion } from "framer-motion";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { Layers, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-[1200px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-emerald-400 mb-6"
                    >
                        <Layers className="w-5 h-5" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">Archive & Lab</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none"
                    >
                        SELECTED <br />
                        <span className="text-white/20 italic">WORKS.</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 text-xl max-w-2xl font-light leading-relaxed"
                    >
                        A curated collection of digital experiences, design systems, and experimental interfaces built with precision and motion.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <Projects />
                </div>
            </section>

            {/* Contact Bridge */}
            <section className="py-32 px-6">
                <div className="max-w-[1200px] mx-auto border-t border-white/10 pt-20 flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Have a project <br /> in mind?</h2>
                        <p className="text-white/40 text-lg">Let&apos;s build something that stands out. Whether it&apos;s a SaaS tool, a portfolio, or a complex 3D experience.</p>
                    </div>
                    <button className="group flex items-center gap-4 bg-white text-black pl-8 pr-4 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all shrink-0">
                        GET IN TOUCH
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </button>
                </div>
            </section>

            <div className="px-6 pb-20">
                <div className="max-w-[1200px] mx-auto">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
