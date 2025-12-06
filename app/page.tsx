"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, User, Rocket } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Spotlight } from "@/components/ui/spotlight";
import { Separator } from "@/components/ui/separator";
import Projects from "@/components/projects";
import DownCard from "@/components/downcard";
import Footer from "@/components/footer";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-white/20 overflow-x-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 z-10"
          fill="rgba(255, 255, 255, 0.08)"
        />
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-20 md:py-32">
        
        {/* --- Hero Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-20" />
            <div className="
              relative inline-flex items-center gap-2 px-3 py-1.5 
              rounded-full bg-white/5 border border-white/10 
              text-xs font-medium text-white/80
              backdrop-blur-md shadow-sm
            ">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>
          </motion.div>

          {/* Intro / Avatar Block */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-6 w-full"
          >
            <div className="flex-1 space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white/95">
                faizurrehman
              </h1>
              <p className="text-lg text-white/60 font-medium">
                Full-Stack Developer & UI Designer
              </p>
            </div>
            
            <div className="relative flex-shrink-0">
               {/* Glow effect behind avatar */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-full" />
               <div className="relative p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm">
                 <Avatar className="h-20 w-20 sm:h-24 sm:w-24 border border-white/5">
                    <AvatarImage src="/crypto.jpg" alt="faizurrehman" className="object-cover" />
                    <AvatarFallback className="text-black bg-white">FR</AvatarFallback>
                 </Avatar>
               </div>
            </div>
          </motion.div>

          {/* Bio Description */}
          <motion.div variants={itemVariants} className="space-y-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
            <p>
              I build <span className="text-white font-semibold">pixel-perfect</span> interfaces 
              and craft digital experiences that are fast, accessible, and visually stunning.
            </p>
            <p>
              Merging technical depth with creative design to create 
              software that feels <span className="italic text-white/90">alive</span>.
            </p>
          </motion.div>
          
          {/* Social / Connect (Optional placeholder or small links could go here) */}
          
          {/* Divider */}
          <motion.div variants={itemVariants} className="w-full pt-8 pb-4">
            <Separator className="bg-white/10" />
          </motion.div>

          {/* --- Projects Section --- */}
          <motion.div variants={itemVariants} className="w-full space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white/90 flex items-center gap-2">
                <Layers className="h-5 w-5 text-white/50" />
                Selected Projects
              </h2>
              {/* Optional 'View All' Link could go here */}
            </div>
            
            <Projects />
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full pt-10">
            <DownCard />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full pt-6">
            <Footer />
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
