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
import heroImg from "../assets/hero.png";

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
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e3e4db] text-[#3b252c] text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineUser className="text-[#8f6593] text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b252c] tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f6593] via-[#a372a8] to-[#3b252c]">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-[#3b252c]/80">
          A glimpse into my journey, core values, and dedication as a passionate fresher web developer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-[#e3e4db] p-6 sm:p-8 shadow-xl">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-[#8f6593]/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>
            <div className="w-24 h-24 bg-[#aea4bf]/15 rounded-full blur-2xl absolute -bottom-4 -left-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#e3e4db]">
              <div className="w-16 h-16 rounded-2xl bg-[#3b252c] flex items-center justify-center text-white shadow-md shadow-[#3b252c]/15 shrink-0 border border-[#3b252c]">
                <img
                  src={heroImg}
                  alt="Developer graphic"
                  className="w-10 h-10 object-contain brightness-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3b252c]">Your Name</h3>
                <p className="text-sm font-semibold text-[#8f6593]">Fresher Web Developer</p>
                <div className="flex items-center gap-1.5 text-xs text-[#3b252c]/70 mt-1">
                  <HiOutlineLocationMarker className="text-[#8f6593]" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-[#3b252c]/80">
              <div className="flex items-center justify-between py-2 border-b border-[#e3e4db]">
                <span className="flex items-center gap-2 text-[#3b252c]/70">
                  <HiOutlineBriefcase className="text-[#8f6593]" /> Availability:
                </span>
                <span className="font-bold text-[#8f6593] bg-[#8f6593]/10 border border-[#8f6593]/30 px-2.5 py-0.5 rounded-full text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#e3e4db]">
                <span className="flex items-center gap-2 text-[#3b252c]/70">
                  <FaLaptopCode className="text-[#8f6593]" /> Primary Focus:
                </span>
                <span className="font-bold text-[#3b252c]">React &amp; Modern Frontend</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#e3e4db]">
                <span className="flex items-center gap-2 text-[#3b252c]/70">
                  <HiOutlineMail className="text-[#8f6593]" /> Communication:
                </span>
                <span className="font-bold text-[#3b252c]">English &amp; Bengali</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#e3e4db] text-center">
              <div className="p-2.5 bg-[#fafaf8] rounded-xl border border-[#e3e4db]">
                <span className="block text-2xl font-black text-[#8f6593]">3+</span>
                <span className="text-[11px] text-[#3b252c]/70 font-semibold">Demo Projects</span>
              </div>
              <div className="p-2.5 bg-[#fafaf8] rounded-xl border border-[#e3e4db]">
                <span className="block text-2xl font-black text-[#3b252c]">500+</span>
                <span className="text-[11px] text-[#3b252c]/70 font-semibold">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-[#fafaf8] rounded-xl border border-[#e3e4db]">
                <span className="block text-2xl font-black text-[#8f6593]">100%</span>
                <span className="text-[11px] text-[#3b252c]/70 font-semibold">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-[#3b252c]/85 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3b252c] tracking-tight leading-snug">
              Turning complex design ideas into seamless, interactive web experiences.
            </h3>
            <p>
              I am an aspiring and self-driven <strong className="text-[#3b252c]">Fresher Web Developer</strong> with a solid academic foundation in Computer Science and an intense passion for modern frontend technologies. My journey began with experimenting with basic HTML &amp; CSS, which quickly evolved into building dynamic, full-fledged Single Page Applications with <strong className="text-[#8f6593]">React.js</strong> and <strong className="text-[#3b252c]">Tailwind CSS</strong>.
            </p>
            <p>
              As a fresher, I bring raw enthusiasm, fresh perspective, and a relentless drive to master modern tools. I place high value on writing clean, accessible, and maintainable code. I am eager to contribute to collaborative engineering teams where I can learn from senior developers and deliver immediate value.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-[#e3e4db] shadow-xs flex items-start gap-3 hover:border-[#8f6593] hover:shadow-md transition"
              >
                <HiOutlineCheckCircle className="text-xl text-[#8f6593] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#3b252c]">{item.title}</h4>
                  <p className="text-xs text-[#3b252c]/70 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-[#8f6593] hover:bg-[#774e7c] text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-[#8f6593]/25 hover:shadow-lg transition-all duration-300 border border-[#8f6593]"
            >
              <HiOutlineSparkles className="text-lg text-white" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#3b252c] text-[#3b252c] hover:text-white border-2 border-[#3b252c] px-6 py-3 rounded-xl font-bold shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <FaRocket className="text-sm text-[#8f6593] group-hover:text-white" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
