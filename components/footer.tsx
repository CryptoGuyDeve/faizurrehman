"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/CryptoGuyDeve" },
    { icon: Twitter, url: "https://x.com/Faiz_Rrhman" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/faizu-rrehman-4856b4319/" },
    { icon: Instagram, url: "https://www.instagram.com/cryptoguy.officiall/" },
  ];

  return (
    <footer className="w-full mt-10 text-white/60">

      {/* ================= BIO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-white/40">About Me</span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-white/70 max-w-2xl">
          I&apos;m <b>FaizBuildsStuff</b>, a 16-year-old developer obsessed with quality.
          Building tools like <span className="text-white/90">Sward</span> and <span className="text-white/90">ClingAI</span> to push the web forward.
          I combine clean code with fluid motion to create software that feels effortless.
        </p>

        <div className="h-px w-full bg-white/5 my-8"></div>
      </motion.div>

      {/* ================= FOOTER BOTTOM SECTION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* COPYRIGHT */}
        <p className="text-xs text-white/40 font-medium">
          © 2030 FaizBuildsStuff. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, color: "#fff" }}
              className="text-white/50 hover:text-white transition-colors"
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
