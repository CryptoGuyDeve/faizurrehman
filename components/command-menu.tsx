"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
    Layers,
    LayoutGrid,
    Twitter,
    Github,
    Linkedin,
    Mail,
    Search,
    ArrowRight,
} from "lucide-react";

export const CommandMenu = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const openLink = (url: string) => {
        window.open(url, "_blank");
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0A]/90 shadow-2xl backdrop-blur-xl"
                    >
                        <Command
                            label="Global Command Menu"
                            className="w-full flex flex-col font-sans"
                        >
                            <div className="flex items-center border-b border-white/5 px-4 py-3">
                                <Search className="mr-3 h-5 w-5 text-white/30" />
                                <Command.Input
                                    autoFocus
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent text-lg text-white placeholder:text-white/30 focus:outline-none"
                                />
                                <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-white/10 bg-white/5 px-2 text-[10px] font-medium text-white/40">
                                    <span className="text-xs">ESC</span>
                                </kbd>
                            </div>

                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                                <Command.Empty className="py-6 text-center text-sm text-white/30">
                                    No results found.
                                </Command.Empty>

                                <div className="mb-2 px-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
                                    Navigation
                                </div>
                                <Command.Group>
                                    <CommandItem onSelect={() => setOpen(false)}>
                                        <Layers className="mr-3 h-4 w-4 text-white/50" />
                                        <span>Home</span>
                                        <Shortcut>H</Shortcut>
                                    </CommandItem>
                                    <CommandItem onSelect={() => setOpen(false)}>
                                        <LayoutGrid className="mr-3 h-4 w-4 text-white/50" />
                                        <span>Projects</span>
                                        <Shortcut>P</Shortcut>
                                    </CommandItem>
                                </Command.Group>

                                <div className="mb-2 mt-4 px-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
                                    Socials
                                </div>
                                <Command.Group>
                                    <CommandItem
                                        onSelect={() => openLink("https://github.com/FaizBuildsStuff")}
                                    >
                                        <Github className="mr-3 h-4 w-4 text-white/50" />
                                        <span>GitHub</span>
                                    </CommandItem>
                                    <CommandItem
                                        onSelect={() => openLink("https://x.com/Faiz_Rrhman")}
                                    >
                                        <Twitter className="mr-3 h-4 w-4 text-white/50" />
                                        <span>Twitter</span>
                                    </CommandItem>
                                    <CommandItem
                                        onSelect={() =>
                                            openLink("https://www.linkedin.com/in/faizu-rrehman-4856b4319/")
                                        }
                                    >
                                        <Linkedin className="mr-3 h-4 w-4 text-white/50" />
                                        <span>LinkedIn</span>
                                    </CommandItem>
                                </Command.Group>

                                <div className="mb-2 mt-4 px-2 text-[10px] font-medium uppercase tracking-widest text-white/30">
                                    Actions
                                </div>
                                <Command.Group>
                                    <CommandItem
                                        onSelect={() => {
                                            navigator.clipboard.writeText("m.faizurrehman.crypto@gmail.com");
                                            setOpen(false);
                                        }}
                                    >
                                        <Mail className="mr-3 h-4 w-4 text-white/50" />
                                        <span>Copy Email</span>
                                        <div className="ml-auto flex items-center gap-2">
                                            <span className="text-[10px] text-white/30 font-mono hidden group-hover:block transition-all">m.faizurrehman.crypto@gmail.com</span>
                                            <Shortcut>↵</Shortcut>
                                        </div>
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const CommandItem = ({
    children,
    onSelect,
}: {
    children: React.ReactNode;
    onSelect?: () => void;
}) => {
    return (
        <Command.Item
            onSelect={onSelect}
            className="group relative flex cursor-pointer select-none items-center rounded-lg px-2 py-3 text-sm text-white/70 outline-none data-[selected=true]:bg-white/10 data-[selected=true]:text-white transition-all duration-200"
        >
            {children}
            <div className="absolute right-2 hidden group-data-[selected=true]:block">
                <ArrowRight className="h-4 w-4 text-white/50" />
            </div>
        </Command.Item>
    );
};

const Shortcut = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="ml-auto text-xs tracking-widest text-white/30 group-data-[selected=true]:text-white/50">
            {children}
        </span>
    );
};
