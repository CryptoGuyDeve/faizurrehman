"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 pb-10 text-white/80">
      {/* ================= BIO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-4"
      >
        <h3 className="text-xl font-semibold text-white mb-3">BIO</h3>

        <Separator className="my-4 bg-white/10" />

        <p className="text-sm leading-relaxed text-white/70">
          I'm Faizurrehman, a 16-year-old self-taught developer and UI
          enthusiast from Lahore, Pakistan. Over the past few years, I've built
          modern web experiences, SaaS tools, and creative UI systems using
          technologies like React, Next.js, TypeScript, and design tools such as
          Figma and After Effects.
          <br />
          <br />
          I love creating smooth, fast, and modern digital experiences — from
          social platforms like Grouplyy to design-driven products like Sward
          and creative tools under ClingAI. My focus is always on speed,
          workflow, and clean UI that feels modern and intentional.
          <br />
          <br />
          Today, I work on improving my skillset every day while building
          products that help people explore, create, and interact with better
          design and better code. Always building, always experimenting.
        </p>

        <Separator className="my-6 bg-white/10" />
      </motion.div>

      {/* ================= FOOTER BOTTOM SECTION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-xl mx-auto px-4 flex items-center justify-between"
      >
        {/* COPYRIGHT */}
        <p className="text-xs text-white/50">
          © 2030 <span className="font-semibold text-white">FaizuRrehman</span>.
          All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <motion.a
            href="https://github.com/CryptoGuyDeve"
            target="_blank"
            whileHover={{ scale: 1.2, opacity: 1 }}
            className="opacity-60 hover:opacity-100 transition"
          >
            <Github size={18} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/faizu-rrehman-4856b4319/"
            target="_blank"
            whileHover={{ scale: 1.2, opacity: 1 }}
            className="opacity-60 hover:opacity-100 transition"
          >
            <Linkedin size={18} />
          </motion.a>

          {/* Twitter / X */}
          <motion.a
            href="https://x.com/Faiz_Rrhman"
            target="_blank"
            whileHover={{ scale: 1.2, opacity: 1 }}
            className="opacity-60 hover:opacity-100 transition"
          >
            <Twitter size={18} />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/cryptoguy.officiall/"
            target="_blank"
            whileHover={{ scale: 1.2, opacity: 1 }}
            className="opacity-60 hover:opacity-100 transition"
          >
            <Instagram size={18} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
