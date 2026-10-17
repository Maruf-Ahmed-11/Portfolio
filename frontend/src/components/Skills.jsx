import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal } from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & DB", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 border-cyan-100",
    level: "Proficient",
    description: "Hooks, Router, Context API, Component Lifecycle",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 border-yellow-100",
    level: "Proficient",
    description: "Async/Await, DOM manipulation, Array methods, ES6 Modules",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 border-teal-100",
    level: "Proficient",
    description: "Utility classes, Flex/Grid layouts, Dark mode, Custom themes",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: "Advanced",
    description: "Semantic elements, SEO optimization, Forms & Accessibility",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations",
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    icon: SiBootstrap,
    color: "text-purple-500",
    bg: "bg-purple-50 border-purple-100",
    level: "Comfortable",
    description: "Responsive grid, Utility classes, Modal dialogs",
  },

  // Backend & DB
  {
    name: "Node.js (Basics)",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-500",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Familiar",
    description: "Server architecture, Event loop, NPM packages",
  },
  {
    name: "Express.js (Basics)",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-gray-700",
    bg: "bg-gray-50 border-gray-200",
    level: "Familiar",
    description: "Routing, Middleware, RESTful API endpoints",
  },
  {
    name: "MongoDB (CRUD)",
    category: "backend",
    icon: SiMongodb,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
    level: "Familiar",
    description: "Collections, Documents, Query filters, Aggregations",
  },
  {
    name: "Firebase",
    category: "backend",
    icon: SiFirebase,
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-100",
    level: "Comfortable",
    description: "Authentication, Firestore database, Hosting",
  },

  // Tools & Deployment
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
    level: "Proficient",
    description: "Branching, Pull Requests, Merge conflicts, Versioning",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
    level: "Proficient",
    description: "Fast HMR, Bundling, Config plugins, Build optimization",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-100",
    level: "Comfortable",
    description: "API testing, Request payloads, Header inspection",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900",
    bg: "bg-gray-50 border-gray-200",
    level: "Proficient",
    description: "CI/CD auto-deployments, Custom domains, Environment variables",
  },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    level: "Proficient",
    description: "DOM Inspection, Network tab, Console debugging, Performance",
  },
  {
    name: "npm & Ecosystem",
    category: "tools",
    icon: FaNpm,
    color: "text-red-500",
    bg: "bg-red-50 border-red-100",
    level: "Proficient",
    description: "Package management, Scripts, Dependency resolution",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <HiOutlineCode className="text-purple-400 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          The technologies, libraries, and developer tools I leverage to build fast, responsive, and delightful web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/40 scale-105"
                : "bg-[#0e071c]/80 text-zinc-300 border border-purple-500/20 hover:border-purple-400 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-400/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border text-2xl bg-[#140a28] border-purple-500/30 text-purple-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-all shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-purple-950/60 text-purple-300 border-purple-500/40 shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                        : skill.level === "Proficient"
                        ? "bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-500/30"
                        : "bg-purple-900/30 text-zinc-300 border-purple-500/20"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-1 group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]"></span>
                <span className="text-[11px] text-zinc-400 font-semibold capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
