"use client";

import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Sparkles, Layers, User, Rocket } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Projects from "@/components/projects";
import { Spotlight } from "@/components/ui/spotlight";
import DownCard from "@/components/downcard";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-[#09090B] text-white
 scroll-smooth overflow-hidden"
    >
      {/* ===================== FULL-PAGE SPOTLIGHT ===================== */}
      <Spotlight
        className="
          absolute top-0 left-0
          w-[200%] h-[200%]
          md:w-[140%] md:h-[160%]
          opacity-70 dark:opacity-35
          pointer-events-none
          z-1
          spotlight-animate
        "
        fill="white"
      />

      {/* Theme Toggle */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-40">
        <ModeToggle />
      </div>

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center justify-center pt-4 sm:pt-8">
        {/* Glow Circle */}
        <div
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] 
          rounded-full bg-black/10 dark:bg-white/10 blur-3xl opacity-30 z-2"
        />

        {/* Content Wrapper */}
        <div
          className="relative z-30 flex flex-col items-center justify-center
                      -translate-y-[10%] sm:-translate-y-[18%]
                      w-full px-4 sm:px-6"
        >
          <div className="max-w-xl w-full">
            {/* Separator */}
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Separator
                orientation="vertical"
                className="
                  h-28 sm:h-48
                  bg-black/60 dark:bg-white/70
                  w-[3px] rounded-full
                  backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.4)]
                "
              />
            </div>

            {/* TEXT BLOCK */}
            <div className="space-y-4 sm:space-y-6 text-left relative z-40">
              {/* ⭐ FULL UPGRADED AVATAR ⭐ */}
              <div className="flex items-center gap-3 mb-1 sm:mb-2 -translate-y-[5%] sm:-translate-y-[8%]">
                <div
                  className="
                  relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden
                  shadow-lg border border-white/20 dark:border-white/10
                  transition-transform duration-300 hover:scale-110
                "
                >
                  {/* Neon Glow Ring */}
                  <div
                    className="
                    absolute inset-0 rounded-full 
                    ring-2 ring-white/30 dark:ring-white/20
                    shadow-[0_0_20px_rgba(255,255,255,0.45)]
                    pointer-events-none
                  "
                  />

                  {/* Rotating Shine */}
                  <div
                    className="
                    absolute inset-0 rounded-full 
                    bg-gradient-to-tr from-transparent via-white/20 to-transparent
                    animate-shine pointer-events-none
                  "
                  />

                  <Avatar className="h-full w-full rounded-full overflow-hidden">
                    <AvatarImage
                      src="/crypto.jpg"
                      alt="avatar"
                      className="object-cover scale-110"
                    />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-bold italic leading-tight tracking-tight flex items-start gap-2">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                I build UI Design projects
                <br className="hidden sm:block" />
                that improve my workflow and save my time
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg font-medium italic text-black/70 dark:text-white/80 flex items-center gap-2">
                <Layers className="h-4 w-4 sm:h-5 sm:w-5" />
                Components, systems & tools built for creators.
              </p>

              {/* Intro */}
              <p className="text-sm sm:text-base italic text-black/60 dark:text-white/60 flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  I'm <span className="font-bold">faizurrehman</span>, also
                  known as <span className="font-bold">crypto</span>.
                </span>

                <span className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                  Frontend engineer, UI designer & emerging creator from
                  Pakistan — always building, always experimenting.
                </span>
              </p>

              {/* Projects Label */}
              <div className="mt-4 sm:mt-6">
                <span className="text-lg sm:text-xl font-bold italic">
                  Projects
                </span>
                <Separator className="mt-2 sm:mt-3 bg-black/20 dark:bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS SECTION ===================== */}
      <section
        id="projects"
        className="relative w-full flex items-start justify-center bg-transparent"
      >
        <div
          className="
      w-full 
      max-w-xl 
      -mt-[12%]   /* ⬅️ Pull projects much closer to the separator */
      sm:-mt-[10%]
      z-30 
      px-4
    "
        >
          <Projects />
          <div className="mt-10">
            <DownCard />
            <Footer />
          </div>
        </div>
      </section>

      {/* Avatar shine animation keyframes */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }
        .animate-shine {
          animation: shine 2.5s linear infinite;
        }
      `}</style>
    </div>
  );
}
