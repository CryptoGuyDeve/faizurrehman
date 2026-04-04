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
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-fit px-4",
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
            )}
        >
            <div 
                ref={navRef}
                className={cn(
                    "flex items-center gap-2 p-1.5 rounded-full border transition-all duration-500",
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
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-full mt-4 left-0 right-0 p-2 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-white/5 text-lg font-bold text-white/50 hover:text-white transition-all group"
                                >
                                    {link.name}
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                </Link>
                            ))}
                            <Link
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-emerald-500 m-2 p-5 rounded-2xl text-center font-black text-black text-lg hover:bg-emerald-400 transition-colors"
                            >
                                START BUILDING
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
