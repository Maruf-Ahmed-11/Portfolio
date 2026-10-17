import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-cyber-grid"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Image with Orbiting Floating Icons */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-6">
          {/* Ambient Radial Spotlight */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-600/35 via-fuchsia-600/25 to-purple-400/20 rounded-full blur-2xl animate-pulse-glow pointer-events-none"></div>

          {/* Orbital Rings */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-500/20 pointer-events-none"></div>
          <div className="absolute w-[360px] h-[360px] sm:w-[470px] sm:h-[470px] rounded-full border border-purple-500/10 pointer-events-none"></div>

          {/* Main Circular Portrait Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-b from-purple-500/50 via-purple-900/30 to-purple-950/80 shadow-[0_0_60px_rgba(168,85,247,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-400/40 bg-gradient-to-b from-[#1a082b] to-[#07020e] relative">
              <img
                src={profileImg}
                alt="Fuad Al Maimun"
                className="w-full h-full object-cover object-[center_18%] scale-105"
              />
              {/* Inner bottom subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06020e]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Orbiting Floating Tech Badges */}
          {/* 1. TypeScript (Top-Left) */}
          <div className="absolute top-2 left-4 sm:-left-2 z-10 animate-float-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#007acc] text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-[0_0_18px_rgba(0,122,204,0.6)] border border-blue-400/40">
              TS
            </div>
          </div>

          {/* 2. JavaScript (Middle-Left) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6 z-10 animate-float-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f7df1e] text-black flex items-center justify-center font-black text-sm sm:text-base shadow-[0_0_18px_rgba(247,223,30,0.55)] border border-yellow-300/40">
              JS
            </div>
          </div>

          {/* 3. MongoDB (Bottom-Left) */}
          <div className="absolute bottom-4 left-6 sm:left-2 z-10 animate-float-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#09180e] text-emerald-400 flex items-center justify-center text-lg sm:text-xl shadow-[0_0_18px_rgba(16,185,129,0.4)] border border-emerald-500/50">
              <SiMongodb />
            </div>
          </div>

          {/* 4. Node.js (Bottom-Right) */}
          <div className="absolute bottom-2 right-8 sm:right-6 z-10 animate-float-4">
            <div className="px-3.5 py-1.5 rounded-xl bg-[#0d1d11] text-emerald-400 font-bold text-xs sm:text-sm shadow-[0_0_18px_rgba(16,185,129,0.45)] border border-emerald-500/50 flex items-center gap-1.5">
              <FaNodeJs className="text-sm sm:text-base text-emerald-400" />
              <span>Node</span>
            </div>
          </div>

          {/* 5. Tailwind CSS (Middle-Right Lower) */}
          <div className="absolute bottom-24 -right-2 sm:-right-4 z-10 animate-float-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#071526] text-sky-400 flex items-center justify-center text-lg sm:text-xl shadow-[0_0_18px_rgba(56,189,248,0.45)] border border-sky-400/40">
              <SiTailwindcss />
            </div>
          </div>

          {/* 6. Next.js (Middle-Right Upper) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 z-10 animate-float-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black text-white flex items-center justify-center text-base sm:text-lg font-bold shadow-[0_0_18px_rgba(255,255,255,0.25)] border border-zinc-700">
              <SiNextdotjs />
            </div>
          </div>

          {/* 7. React (Top-Right) */}
          <div className="absolute top-4 right-4 sm:-right-1 z-10 animate-float-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#08152b] text-[#61dafb] flex items-center justify-center text-xl sm:text-2xl shadow-[0_0_20px_rgba(97,218,251,0.5)] border border-cyan-400/40">
              <FaReact />
            </div>
          </div>
        </div>

        {/* Right Column: Written Part (matching 1st image) */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Tagline */}
          <div className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] font-semibold text-purple-300 uppercase">
            <span className="w-8 h-[2px] bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
            <span>WELCOME TO MY PORTFOLIO</span>
          </div>

          {/* Big Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-100">
                Fuad Al Maimun
              </span>
              <span className="text-purple-400 font-light animate-pulse ml-1">|</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-extrabold text-white pt-1">
              Full Stack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                Developer
              </span>
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-zinc-300/80 max-w-xl leading-relaxed">
            Passionate about building responsive, modern, and accessible web applications using React, Next.js, and TypeScript with a strong focus on clean architecture and delightful user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Let's Work Together ↗ -> links directly to #contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#a855f7] hover:from-[#a855f7] hover:to-[#c026d3] text-white px-7 py-3.5 rounded-full font-bold shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(192,38,211,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <span>Let's Work Together</span>
              <HiArrowUpRight className="text-lg" />
            </a>

            {/* Download CV ↗ -> links to /resume */}
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-purple-500/30 hover:border-purple-400 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xs backdrop-blur-sm cursor-pointer text-sm sm:text-base group"
            >
              <span>Download CV</span>
              <HiArrowUpRight className="text-lg text-zinc-400 group-hover:text-white transition-colors" />
            </Link>
          </div>

          {/* Connect with me */}
          <div className="flex items-center gap-3 pt-3">
            <span className="text-xs font-medium text-zinc-400">Connect with me</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Maruf-Ahmed-11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full bg-white/5 border border-zinc-700/60 hover:border-purple-400 hover:text-purple-300 flex items-center justify-center text-zinc-300 transition"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-white/5 border border-zinc-700/60 hover:border-purple-400 hover:text-purple-300 flex items-center justify-center text-zinc-300 transition"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="mailto:maruf614maruf614@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-white/5 border border-zinc-700/60 hover:border-purple-400 hover:text-purple-300 flex items-center justify-center text-zinc-300 transition"
              >
                <HiMail className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator (matching 1st image) */}
      <div className="flex flex-col items-center justify-center gap-1.5 text-zinc-500 pt-8 pb-2">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-500">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-purple-500/40 flex items-start justify-center p-1 shadow-[0_0_10px_rgba(168,85,247,0.25)]">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;