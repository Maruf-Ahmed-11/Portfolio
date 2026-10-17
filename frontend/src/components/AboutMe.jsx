import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const AboutMe = () => {
  const highlights = [
    {
      title: "Clean & Maintainable Code",
      desc: "Writing component-driven, reusable code adhering to modern best practices.",
    },
    {
      title: "Fast Learner & Adaptable",
      desc: "Quick to pick up new libraries, frameworks, and engineering workflows.",
    },
    {
      title: "Responsive & Pixel-Perfect",
      desc: "Obsessed with creating fluid layouts that work flawlessly on all devices.",
    },
    {
      title: "Problem Solver",
      desc: "Passionate about debugging, analytical thinking, and optimizing UX.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <HiOutlineUser className="text-purple-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          A developer dedicated to engineering modern, responsive, and human-friendly web applications with clean code and high attention to detail.        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-purple-600/20 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>
            <div className="w-24 h-24 bg-fuchsia-600/15 rounded-full blur-2xl absolute -bottom-4 -left-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-purple-500/20">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0">
                <img
                  src={profileImg}
                  alt="Maruf Ahmed Rohan"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Maruf Ahmed Rohan</h3>
                <p className="text-sm font-semibold text-purple-400">Full Stack Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1">
                  <HiOutlineLocationMarker className="text-purple-400" />
                  <span>Khulna, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                <span className="flex items-center gap-2 text-zinc-400">
                  <HiOutlineBriefcase className="text-purple-400" /> Availability:
                </span>
                <span className="font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 rounded-full text-xs shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                <span className="flex items-center gap-2 text-zinc-400">
                  <FaLaptopCode className="text-purple-400" /> Primary Focus:
                </span>
                <span className="font-bold text-white">React, Next.js &amp; Node</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-purple-500/15">
                <span className="flex items-center gap-2 text-zinc-400">
                  <HiOutlineMail className="text-purple-400" /> Communication:
                </span>
                <span className="font-bold text-white">English &amp; Bengali</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-purple-500/20 text-center">
              <div className="p-2.5 bg-[#140a28]/70 rounded-xl border border-purple-500/20">
                <span className="block text-2xl font-black text-purple-400">3+</span>
                <span className="text-[11px] text-zinc-400 font-semibold">Live Projects</span>
              </div>
              <div className="p-2.5 bg-[#140a28]/70 rounded-xl border border-purple-500/20">
                <span className="block text-2xl font-black text-fuchsia-400">500+</span>
                <span className="text-[11px] text-zinc-400 font-semibold">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-[#140a28]/70 rounded-xl border border-purple-500/20">
                <span className="block text-2xl font-black text-purple-300">100%</span>
                <span className="text-[11px] text-zinc-400 font-semibold">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-zinc-300/90 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Turning complex design ideas into seamless, interactive web experiences.
            </h3>
            <p>
              I am a dedicated <strong className="text-purple-300">Full Stack Developer</strong> with a solid academic foundation in Marketing and an intense passion for modern web technologies. My journey began with experimenting with basic web design, which quickly evolved into building dynamic, high-performance Single Page Applications with <strong className="text-purple-400">React.js</strong>, <strong className="text-fuchsia-400">Next.js</strong>, and <strong className="text-cyan-400">Tailwind CSS</strong>.
            </p>
            <p>
              I place high value on writing clean, accessible, and maintainable code. Whether crafting responsive user interfaces or integrating robust backend services with Node.js and MongoDB, I am eager to deliver immediate value and build delightful user experiences.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-[#0e071c]/80 border border-purple-500/20 shadow-xs flex items-start gap-3 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition"
              >
                <HiOutlineCheckCircle className="text-xl text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] transition-all duration-300 border border-purple-400/30"
            >
              <HiOutlineSparkles className="text-lg text-white" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-purple-500/30 hover:border-purple-400 px-6 py-3 rounded-full font-bold shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <FaRocket className="text-sm text-purple-400 group-hover:text-white" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
