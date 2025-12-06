"use client";

import React from "react";
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
    <div className="w-full">
      <motion.ul
        className="grid grid-cols-1 gap-4"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {projectList.map((p, i) => {
          // Use Google's favicon service which provides a fallback and is more reliable than direct /favicon.ico
          const favicon = `https://www.google.com/s2/favicons?sz=128&domain_url=${p.url}`;

          return (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => window.open(p.url, "_blank")}
              className="
                group flex items-start gap-4 w-full p-4
                rounded-xl cursor-pointer
                border border-white/5 
                bg-white/[0.01]
                transition-colors duration-300
                hover:border-white/10
              "
            >
              {/* Favicon */}
              <div
                className="
                  flex-shrink-0 relative h-10 w-10 rounded-lg 
                  overflow-hidden bg-white/5 shadow-inner border border-white/5
                "
              >
                {/* using standard img to avoid next/image domain config issues and strict 404 handling */}
                <img
                  src={favicon}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Text Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-white/40 tabular-nums">
                    {p.date}
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/50 line-clamp-2 leading-relaxed group-hover:text-white/70 transition-colors">
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
