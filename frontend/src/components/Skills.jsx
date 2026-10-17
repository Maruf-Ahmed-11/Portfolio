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
  FaWindows,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiNotion,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { HiOutlineCode, HiOutlineServer, HiOutlineTerminal } from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & DB", icon: HiOutlineServer },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Languages & Core Frontend
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    level: "Proficient",
    description: "Async/Await, DOM manipulation, Array methods, ES6 Modules",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    level: "Proficient",
    description: "Type safety, Interfaces, Generics, Component props typing",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    level: "Advanced",
    description: "Semantic elements, SEO optimization, Forms & Accessibility",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations",
  },

  // Frameworks & Libraries
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    level: "Proficient",
    description: "Hooks, Router, Context API, Component Lifecycle, State",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    level: "Proficient",
    description: "App Router, Server Components, SSR, Dynamic Routing, API Routes",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    level: "Proficient",
    description: "Utility classes, Flex/Grid layouts, Dark mode, Custom themes",
  },

  // Backend & Database
  {
    name: "Node.js (Basics)",
    category: "backend",
    icon: FaNodeJs,
    level: "Familiar",
    description: "Server architecture, Event loop, NPM packages, API endpoints",
  },
  {
    name: "MongoDB (CRUD)",
    category: "backend",
    icon: SiMongodb,
    level: "Familiar",
    description: "Collections, Documents, Query filters, Aggregations, CRUD",
  },

  // Deployment Platform
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    level: "Proficient",
    description: "CI/CD auto-deployments, Custom domains, Preview builds, Environment variables",
  },

  // Design & Graphics
  {
    name: "Figma (UI/UX)",
    category: "tools",
    icon: SiFigma,
    level: "Comfortable",
    description: "Wireframing, UI prototyping, Inspecting dev specs, Component systems",
  },

  // Tools & Technologies
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    level: "Proficient",
    description: "Branching, Pull Requests, Merge conflicts, Versioning, Collaboration",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    level: "Proficient",
    description: "Extensions, Debugging, Custom snippets, Keybindings, Integrated terminal",
  },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    level: "Proficient",
    description: "DOM Inspection, Network tab, Console debugging, Performance",
  },
  {
    name: "npm & Ecosystem",
    category: "tools",
    icon: FaNpm,
    level: "Proficient",
    description: "Package management, Scripts, Dependency resolution",
  },
  {
    name: "Notion",
    category: "tools",
    icon: SiNotion,
    level: "Proficient",
    description: "Task tracking, Project documentation, Engineering knowledge base",
  },
  {
    name: "Windows Environment",
    category: "tools",
    icon: FaWindows,
    level: "Proficient",
    description: "PowerShell, Developer CLI, PATH configuration, System tools",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-4 sm:right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

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
