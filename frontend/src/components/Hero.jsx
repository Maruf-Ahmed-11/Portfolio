import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#8f6593]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#aea4bf]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e3e4db]/40 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e3e4db] text-[#3b252c] text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8f6593] shadow-[0_0_8px_#8f6593] animate-pulse"></span>
            <span>Available for Hire • Fresher Web Developer</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-[#3b252c]/75 font-semibold text-lg">
              Hello, I am a passionate
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3b252c] tracking-tight leading-tight">
              Frontend &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f6593] via-[#a372a8] to-[#3b252c]">
                React Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#3b252c]/80 max-w-2xl leading-relaxed">
            I craft clean, fast, and responsive modern web applications with{" "}
            <span className="text-[#3b252c] font-bold">React.js</span>,{" "}
            <span className="text-[#3b252c] font-bold">JavaScript (ES6+)</span>, and{" "}
            <span className="text-[#8f6593] font-bold">Tailwind CSS</span>.
            Dedicated to writing maintainable code and bringing intuitive user experiences to life.
          </p>

          {/* Action Buttons (Distinct, High-Contrast CTAs) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA - Solid Amethyst Mauve */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-[#8f6593] hover:bg-[#774e7c] text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-[#8f6593]/25 hover:shadow-xl hover:shadow-[#8f6593]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base border border-[#8f6593]"
            >
              <HiDocumentText className="text-xl text-white" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button - High Contrast Espresso Outline (Reference Style) */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#3b252c] text-[#3b252c] hover:text-white border-2 border-[#3b252c] px-6 py-3.5 rounded-xl font-bold shadow-xs hover:shadow-lg transition-all duration-300 text-sm sm:text-base cursor-pointer group"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base text-[#8f6593] group-hover:text-white transition-colors" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-bold text-[#8f6593] hover:text-[#3b252c] px-3 py-3.5 transition underline decoration-[#8f6593]/40 hover:decoration-[#8f6593] underline-offset-4"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-[#e3e4db]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#3b252c]/70 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-[#8f6593]" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3b252c] font-semibold border border-[#e3e4db] shadow-xs hover:border-[#8f6593] hover:shadow-sm transition">
                <FaReact className="text-[#8f6593] text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3b252c] font-semibold border border-[#e3e4db] shadow-xs hover:border-[#8f6593] hover:shadow-sm transition">
                <FaJsSquare className="text-amber-500 text-base" /> JavaScript (ES6+)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3b252c] font-semibold border border-[#e3e4db] shadow-xs hover:border-[#8f6593] hover:shadow-sm transition">
                <SiTailwindcss className="text-[#8f6593] text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3b252c] font-semibold border border-[#e3e4db] shadow-xs hover:border-[#8f6593] hover:shadow-sm transition">
                <SiVite className="text-purple-500 text-base" /> Vite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3b252c] font-semibold border border-[#e3e4db] shadow-xs hover:border-[#8f6593] hover:shadow-sm transition">
                <FaGitAlt className="text-[#3b252c] text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase & Visual Card */}
        <div className="lg:col-span-5 relative">
          {/* Visual Code Box (Dark Espresso Accent) */}
          <div className="relative bg-[#3b252c] rounded-2xl shadow-2xl border border-[#543942] overflow-hidden text-left">
            {/* Terminal Window Header */}
            <div className="bg-[#2a1a1f] px-4 py-3 flex items-center justify-between border-b border-[#543942]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#8f6593]"></div>
                <div className="w-3 h-3 rounded-full bg-[#aea4bf]"></div>
                <div className="w-3 h-3 rounded-full bg-[#cdcdcd]"></div>
              </div>
              <span className="text-xs text-[#e3e4db]/80 font-mono">DeveloperProfile.jsx</span>
              <div className="w-12"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-[#e3e4db] leading-relaxed overflow-x-auto">
              <p>
                <span className="text-[#aea4bf]">const</span>{" "}
                <span className="text-[#fafaf8] font-semibold">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">role:</span>{" "}
                <span className="text-[#fafaf8]">"Fresher Web Developer"</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">focus:</span>{" "}
                <span className="text-[#fafaf8]">"React &amp; Modern Frontend"</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">skills:</span> [
              </p>
              <p className="pl-8 text-[#fafaf8]">
                "JavaScript", "React", "Tailwind", "REST APIs"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">status:</span>{" "}
                <span className="text-[#aea4bf]">"Available Immediately"</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">fastLearner:</span>{" "}
                <span className="text-[#8f6593] font-bold">true</span>,
              </p>
              <p className="pl-4">
                <span className="text-[#cdcdcd]">codeQuality:</span>{" "}
                <span className="text-[#fafaf8]">"Clean &amp; Component-Driven"</span>
              </p>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-[#543942] text-xs text-[#e3e4db]/80 flex items-center gap-1.5">
                <span className="text-[#8f6593] font-bold">&#10003;</span> Ready for entry-level challenges
              </div>
            </div>
          </div>

          {/* Floating Pill Badges */}
          <div className="absolute -bottom-4 -left-4 bg-white border border-[#e3e4db] rounded-xl p-3 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#8f6593] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              3+
            </div>
            <div>
              <p className="text-xs font-bold text-[#3b252c]">Featured Projects</p>
              <p className="text-[11px] text-[#3b252c]/65 font-medium">Ready to explore</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white border border-[#e3e4db] rounded-xl p-3 shadow-xl flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8f6593] shadow-[0_0_6px_#8f6593]"></span>
            <p className="text-xs font-bold text-[#3b252c]">100% Responsive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;