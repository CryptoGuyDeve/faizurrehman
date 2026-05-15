"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, PenTool, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/lib/supabase";

interface GuestMessage {
    id: number;
    name: string;
    message: string;
    created_at: string;
}

export function Guestbook() {
    const [messages, setMessages] = useState<GuestMessage[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);

    // Fetch initial messages
    useEffect(() => {
        fetchMessages();

        // Realtime subscription
        const channel = supabase
            .channel('guestbook_realtime')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'guestbook' },
                (payload) => {
                    const newMessage = payload.new as GuestMessage;
                    setMessages((prev) => [newMessage, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchMessages = async () => {
        const { data } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);

        if (data) setMessages(data);
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;
        setSending(true);

        const { error } = await supabase
            .from('guestbook')
            .insert([
                { name: name.trim(), message: message.trim() }
            ]);

        if (error) {
            console.error("Error signing guestbook:", error);
            alert("Failed to sign. Please try again.");
        } else {
            // Success - UI updates via realtime subscription
            setName("");
            setMessage("");
        }
        setSending(false);
    };

    function getInitials(name: string) {
        return name.slice(0, 2).toUpperCase();
    }

    return (
    <div className="relative w-full max-w-md mx-auto">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#0B0B0B]/80 backdrop-blur-3xl">

            {/* Reflection */}
            <div className="absolute left-[10%] top-0 h-px w-[40%] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 p-5 md:p-6">

                {/* Header */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-5">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

                    <div className="relative z-10 flex items-start justify-between gap-4">

                        <div>

                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                                    Interactive Wall
                                </span>
                            </div>

                            <h2 className="mt-4 text-[34px] font-[720] leading-[0.9] tracking-[-0.09em] text-white">
                                Guestbook
                            </h2>

                            <p className="mt-4 max-w-[260px] text-[13px] leading-[1.8] text-white/35">
                                Thoughts, feedback, and messages from people visiting the portfolio.
                            </p>

                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                            <PenTool className="h-5 w-5 text-white/70" />
                        </div>

                    </div>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={sending}
                        maxLength={20}
                        className="h-[56px] w-full rounded-[22px] border border-white/[0.06] bg-white/[0.03] px-5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-white/[0.14] focus:bg-white/[0.05]"
                    />

                    <div className="flex items-center gap-3">

                        <input
                            type="text"
                            placeholder="Leave a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={sending}
                            maxLength={100}
                            className="h-[56px] flex-1 rounded-[22px] border border-white/[0.06] bg-white/[0.03] px-5 text-sm text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:border-white/[0.14] focus:bg-white/[0.05]"
                        />

                        <button
                            type="submit"
                            disabled={!name || !message || sending}
                            className="group relative flex h-[56px] w-[56px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.04] transition-all duration-500 hover:border-white/[0.16] hover:bg-white disabled:opacity-40"
                        >
                            {/* Shine */}
                            <div className="absolute top-0 left-[-120%] h-full w-[100px] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[140%]" />

                            {sending ? (
                                <Loader2 className="relative z-10 h-4 w-4 animate-spin text-white group-hover:text-black" />
                            ) : (
                                <Send className="relative z-10 h-4 w-4 text-white/70 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                            )}
                        </button>

                    </div>

                </form>

                {/* Messages */}
                <div className="mt-5">

                    <div className="mb-4 flex items-center justify-between px-1">

                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/30" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/30">
                                Recent Messages
                            </span>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                            {messages.length} entries
                        </span>

                    </div>

                    <div className="max-h-[360px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">

                        {loading ? (

                            <div className="flex justify-center py-10">
                                <Loader2 className="h-5 w-5 animate-spin text-white/20" />
                            </div>

                        ) : messages.length === 0 ? (

                            <div className="flex flex-col items-center justify-center rounded-[26px] border border-white/[0.06] bg-white/[0.02] py-14 text-center">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03]">
                                    <PenTool className="h-5 w-5 text-white/25" />
                                </div>

                                <p className="mt-5 text-sm text-white/40">
                                    No messages yet
                                </p>

                                <p className="mt-1 text-xs text-white/20">
                                    Be the first to leave something here.
                                </p>

                            </div>

                        ) : (

                            <AnimatePresence initial={false} mode="popLayout">

                                {messages.map((msg) => (

                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="group relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.025] pl-5 pr-4 py-4 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                                        </div>

                                        <div className="relative z-10">

                                            {/* Top */}
                                            <div className="flex items-center justify-between gap-3">

                                                <div className="flex items-center gap-3">

                                                    <Avatar className="h-11 w-11 shrink-0 border border-white/[0.08]">
                                                        <AvatarFallback className="bg-white/[0.04] text-[11px] font-semibold text-white/70">
                                                            {getInitials(msg.name)}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>

                                                        <div className="flex items-center gap-2">

                                                            <span className="text-[13px] font-semibold text-white/90">
                                                                {msg.name}
                                                            </span>

                                                            <div className="h-1 w-1 rounded-full bg-white/20" />

                                                            <span className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                                Active
                                                            </span>

                                                        </div>

                                                        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/20">
                                                            {new Date(msg.created_at).toLocaleDateString()}
                                                        </p>

                                                    </div>

                                                </div>

                                                <div className="h-2 w-2 rounded-full bg-emerald-400/70" />

                                            </div>

                                            {/* Message */}
                                            <p className="mt-5 text-[14px] leading-[1.9] text-white/55 transition-colors duration-300 group-hover:text-white/72">
                                                {msg.message}
                                            </p>

                                        </div>

                                    </motion.div>

                                ))}

                            </AnimatePresence>

                        )}

                    </div>

                </div>

            </div>

        </div>

        {/* Custom Scrollbar */}
        <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(255,255,255,0.08);
                border-radius: 999px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(255,255,255,0.14);
            }
        `}</style>

    </div>
);
}
