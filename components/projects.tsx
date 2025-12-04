"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
      {
        title: "sward.lol",
        description: "A modern personal site with animations and a clean design.",
        date: "2024",
        url: "https://www.sward.lol",
      },
      {
        title: "truststartup.app",
        description: "Startup trust management platform with secure features.",
        date: "2024",
        url: "https://truststartup.vercel.app/",
      },
    {
      title: "grouplyy.com",
      description: "A clean social grouping platform with a modern UI.",
      date: "2025",
      url: "https://lebaas-x-b659.vercel.app/",
    },
    {
      title: "clingai.space",
      description:
        "Website where users can share and explore AI-generated content.",
      date: "2025",
      url: "https://www.clingai.space/",
    },
    {
      title: "codemotion.online",
      description:
        "Creative coding lessons & projects with elegant UI components.",
      date: "2024",
      url: "https://www.codemotion.online",
    },
    {
      title: "Crypto Portfolio",
      description:
        "A personal crypto portfolio dashboard with a clean interface.",
      date: "2025",
      url: "https://crypto-portfolio-rose.vercel.app/",
    },
    {
      title: "Ragon Solutions",
      description:
        "A software solutions company delivering modern digital products.",
      date: "2024",
      url: "https://ragonsolutions.com/",
    },
    {
      title: "Cal.com",
      description: "A modern scheduling platform for teams and individuals.",
      date: "2024",
      url: "https://cal.com",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto mt-4 px-0">
      <motion.ul
        className="flex flex-col gap-4"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {projectList.map((p, i) => {
          const favicon = `${p.url.replace(/\/$/, "")}/favicon.ico`;

          return (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.025,
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="
                group flex items-start gap-4 w-full p-4
                rounded-xl cursor-pointer
                border border-white/5 
                backdrop-blur-sm
                transition-all duration-300
                hover:border-white/20
                hover:shadow-[0_0_25px_rgba(255,255,255,0.10)]
              "
            >
              {/* Animated Glow Border on Hover */}
              <motion.div
                className="
                  absolute inset-0 rounded-xl pointer-events-none
                "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Favicon */}
              <motion.div
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="
                  flex-shrink-0 relative h-10 w-10 rounded-md 
                  overflow-hidden bg-black/10 dark:bg-white/10 shadow-sm
                "
              >
                <Image
                  src={favicon}
                  alt={p.title}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <h3
                    className="
                      text-sm font-semibold truncate 
                      text-white
                    "
                  >
                    {p.title}
                  </h3>

                  <span className="text-sm text-white/30">•</span>

                  <span className="text-sm text-white/50">
                    {p.date}
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/60 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Projects;
