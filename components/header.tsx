"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show/Hide on scroll
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down
            } else {
                setIsVisible(true); // Scrolling up
            }
            
            setIsScrolled(currentScrollY > 20);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Magnetic effect for the logo and links
    useEffect(() => {
        const elements = document.querySelectorAll(".magnetic-item");
        elements.forEach((el) => {
            const handleMouseMove = (e: any) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = el.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
            };
            const handleMouseLeave = () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            };
            el.addEventListener("mousemove", handleMouseMove);
            el.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                el.removeEventListener("mousemove", handleMouseMove);
                el.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);

    return (
        <header
            className={cn(
    "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-20px)] sm:w-full max-w-[95vw] sm:max-w-fit px-0 sm:px-4",
    isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
)}
        >
            <div 
                ref={navRef}
                className={cn(
    "flex items-center justify-between w-full md:w-auto gap-2 p-1.5 rounded-full border transition-all duration-500",
                    isScrolled 
                        ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                        : "bg-white/5 backdrop-blur-md border-white/5"
                )}
            >
                {/* Logo Pill */}
                <Link 
                    href="/" 
                    className="magnetic-item group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 p-2.5 rounded-full transition-colors duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                    <Zap className="w-5 h-5 text-black fill-black" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 px-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full",
                                    isActive ? "text-white" : "text-white/40 hover:text-white/80"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

                {/* CTA / Action */}
                <Link 
                    href="/pricing"
                    className="magnetic-item group hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white pl-4 pr-2 py-1.5 rounded-full text-sm font-bold border border-white/5 transition-all"
                >
                    Build Stuff
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-emerald-400 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
<AnimatePresence>
    {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-[32px] border border-white/10 bg-black/90 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl md:hidden"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

                <div className="absolute right-[-20%] bottom-[-20%] h-[180px] w-[180px] rounded-full bg-emerald-500/[0.08] blur-3xl" />
            </div>

            <div className="relative z-10">

                {/* Top Card */}
                <div className="relative overflow-hidden rounded-[26px] border border-white/5 bg-white/[0.03] p-5">

                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                                Personal Brand
                            </span>
                        </div>

                        <h3 className="mt-4 text-[32px] font-[720] leading-[0.9] tracking-[-0.09em] text-white">
                            Faiz

                            <span className="block font-serif font-light italic text-white/55">
                                BuildsStuff
                            </span>
                        </h3>

                        <p className="mt-4 max-w-[240px] text-[13px] leading-[1.7] text-white/35">
                            Modern web experiences, cinematic interfaces, and powerful development for startups and creators.
                        </p>

                    </div>
                </div>

                {/* Navigation Links */}
                <div className="mt-3 flex flex-col gap-2">

                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "group relative flex items-center justify-between overflow-hidden rounded-[22px] border px-5 py-4 transition-all duration-300",
                                    isActive
                                        ? "border-white/10 bg-white/[0.06] text-white"
                                        : "border-transparent bg-transparent text-white/45 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                                )}
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                                </div>

                                <span className="relative z-10 text-[15px] font-semibold tracking-[-0.03em]">
                                    {link.name}
                                </span>

                                <ArrowRight className="relative z-10 h-4 w-4 translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                            </Link>
                        );
                    })}

                </div>

                {/* CTA */}
                <Link
                    href="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative mt-3 flex h-[58px] items-center justify-center overflow-hidden rounded-[22px] bg-emerald-500 text-sm font-black tracking-[0.08em] text-black transition-all duration-300 hover:bg-emerald-400"
                >
                    {/* Shine */}
                    <div className="absolute top-0 left-[-120%] h-full w-[120px] rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>

                    <span className="relative z-10 flex items-center gap-2">
                        START BUILDING

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </Link>

            </div>
        </motion.div>
    )}
</AnimatePresence>
        </header>
    );
}
