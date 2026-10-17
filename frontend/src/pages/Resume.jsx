import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import cvAvatar from "../assets/cv-avatar.jpg";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#06020e] pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-zinc-100 font-sans print:bg-white print:text-black print:p-0 print:m-0">
      {/* Top Action Bar (Positioned well below fixed navbar, hidden in print) */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 bg-[#0e071c] border border-purple-500/30 px-5 py-2.5 rounded-full shadow-xs hover:border-purple-400 hover:text-white transition"
        >
          <HiArrowLeft className="text-base text-purple-400" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Direct Download Button */}
          <a
            href="/Maruf_Ahmed_Rohan_CV.pdf"
            download="Maruf_Ahmed_Rohan_CV.pdf"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-purple-950/70 hover:bg-purple-900 border border-purple-500/40 px-5 py-2.5 rounded-full shadow-xs transition hover:scale-105"
          >
            <HiDownload className="text-base text-purple-300" /> Download CV (PDF)
          </a>

          {/* Browser Print / Save as PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40 hover:shadow-lg transition cursor-pointer hover:scale-105"
          >
            <HiPrinter className="text-base text-white" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Container (Matching provided 2-column executive CV layout) */}
      <div className="max-w-5xl mx-auto bg-[#0e071c] text-zinc-200 rounded-2xl shadow-2xl border border-purple-500/25 overflow-hidden print:bg-white print:text-black print:shadow-none print:border-none print:p-0 print:rounded-none print:max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 min-h-[960px]">
          
          {/* Left Column (Sidebar: Photo, Name, Contact, Languages, Strengths) */}
          <aside className="md:col-span-4 print:col-span-4 bg-[#140827] print:bg-[#180b30] text-zinc-100 print:text-white p-6 sm:p-7 border-r border-purple-500/20 print:border-purple-900/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Profile Avatar & Header */}
              <div className="text-center pb-4 border-b border-purple-500/20 print:border-purple-800/40">
                <div className="relative inline-block mb-3.5">
                  <img
                    src={cvAvatar}
                    alt="Maruf Ahmed Rohan"
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400/70 shadow-lg shadow-purple-950/80"
                  />
                  <span className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-[#140827] rounded-full"></span>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tight leading-tight">
                  Maruf Ahmed Rohan
                </h1>
                <p className="text-xs font-bold text-purple-300 mt-1 uppercase tracking-wider">
                  Full Stack Web Developer
                </p>
                <p className="text-[11px] text-zinc-400 print:text-purple-200 font-medium">
                  React &amp; Next.js Specialist
                </p>
              </div>

              {/* Section: Contact */}
              <div>
                <h3 className="text-xs font-bold text-purple-300 uppercase tracking-widest border-b border-purple-500/20 print:border-purple-800/40 pb-1.5 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Contact
                </h3>
                <div className="space-y-2.5 text-xs text-zinc-300 print:text-gray-200">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400/80 block">Phone</span>
                    <a
                      href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-purple-300 transition flex items-center gap-1.5 font-medium mt-0.5"
                    >
                      <HiPhone className="text-purple-400 text-sm shrink-0" />
                      <span>+880 1773-532098</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400/80 block">Email</span>
                    <a
                      href="mailto:maruf04ahmed12rohan04@gmail.com"
                      className="hover:text-purple-300 transition flex items-center gap-1.5 font-medium mt-0.5 truncate"
                    >
                      <HiMail className="text-purple-400 text-sm shrink-0" />
                      <span className="truncate">maruf04ahmed12rohan04@gmail.com</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400/80 block">Location</span>
                    <div className="flex items-center gap-1.5 font-medium mt-0.5">
                      <HiLocationMarker className="text-purple-400 text-sm shrink-0" />
                      <span>Khulna, Bangladesh</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-purple-400/80 block">Profiles</span>
                    <div className="flex flex-col gap-1.5 mt-1 font-medium">
                      <a
                        href="https://github.com/Maruf-Ahmed-11"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-purple-300 flex items-center gap-1.5 transition"
                      >
                        <FaGithub className="text-purple-400 text-sm shrink-0" />
                        <span>github.com/Maruf-Ahmed-11</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-purple-300 flex items-center gap-1.5 transition"
                      >
                        <FaLinkedin className="text-purple-400 text-sm shrink-0" />
                        <span>linkedin.com/in/maruf-ahmed-rohan</span>
                      </a>
                      <a
                        href="/"
                        className="hover:text-purple-300 flex items-center gap-1.5 transition"
                      >
                        <FaGlobe className="text-purple-400 text-sm shrink-0" />
                        <span>Portfolio Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Languages */}
              <div>
                <h3 className="text-xs font-bold text-purple-300 uppercase tracking-widest border-b border-purple-500/20 print:border-purple-800/40 pb-1.5 mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Languages
                </h3>
                <ul className="space-y-1.5 text-xs text-zinc-300 print:text-gray-200">
                  <li className="flex items-center justify-between">
                    <span>Bangla</span>
                    <span className="text-purple-400 print:text-purple-200 font-semibold text-[11px]">Native</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>English</span>
                    <span className="text-purple-400 print:text-purple-200 font-semibold text-[11px]">Working Proficiency</span>
                  </li>
                </ul>
              </div>

              {/* Section: Strengths */}
              <div>
                <h3 className="text-xs font-bold text-purple-300 uppercase tracking-widest border-b border-purple-500/20 print:border-purple-800/40 pb-1.5 mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  Strengths
                </h3>
                <ul className="space-y-1.5 text-xs text-zinc-300 print:text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Fast learner &amp; adaptable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Teamwork &amp; collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Analytical problem solving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Communication &amp; debugging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Time management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-xs"></span>
                    <span>Clean &amp; modular code</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Status Badge */}
            <div className="pt-4 border-t border-purple-500/20 print:border-purple-800/40 text-[11px] text-zinc-400 print:text-purple-200">
              <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 print:text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Frontend / Full-Stack Roles
              </span>
            </div>
          </aside>

          {/* Right Column (Main: Summary, Technical Skills, Projects, Education, Certifications) */}
          <main className="md:col-span-8 print:col-span-8 bg-[#0e071c] print:bg-white text-zinc-200 print:text-gray-900 p-6 sm:p-8 space-y-6">
            
            {/* Section: Professional Summary */}
            <section>
              <h2 className="text-sm font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 print:text-gray-700 leading-relaxed">
                Aspiring Full Stack Web Developer with strong foundations in React, Next.js, TypeScript, Tailwind CSS, Node.js, and MongoDB. Passionate about building responsive, accessible, high-performance web applications and continuously learning modern technologies to deliver clean, maintainable user-centric digital products.
              </p>
            </section>

            {/* Section: Technical Skills */}
            <section>
              <h2 className="text-sm font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
                Technical Skills
              </h2>

              <div className="space-y-1.5 text-xs">
                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Frontend</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    HTML5, CSS3, JavaScript (ES6+), TypeScript, Responsive Design, Tailwind CSS, DaisyUI, React, Next.js
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Backend</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    Node.js, Express.js, REST API, Authentication (Better-Auth, JWT), CRUD Architecture
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Database</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    MongoDB, Mongoose, PostgreSQL (Basics)
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Tools</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    Git, GitHub, VS Code, npm, Vite, Postman, Chrome DevTools
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Deployment</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    Vercel, Netlify, Render
                  </span>
                </div>

                <div className="grid grid-cols-12 gap-2 py-0.5">
                  <span className="col-span-3 sm:col-span-2 font-bold text-purple-400 print:text-purple-800">Concepts</span>
                  <span className="col-span-9 sm:col-span-10 text-zinc-300 print:text-gray-800">
                    Async/Await, Fetch API, State Management (Context API), Modular Architecture, Basic DSA, Problem Solving
                  </span>
                </div>
              </div>
            </section>

            {/* Section: Projects */}
            <section>
              <h2 className="text-sm font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
                Featured Projects
              </h2>

              <div className="space-y-3.5">
                {/* Project 1 */}
                <div className="border-l-2 border-purple-500 print:border-blue-600 pl-3.5 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-gray-900 flex items-center gap-2">
                      Developer Portfolio &amp; Personal Showcase
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-purple-400 print:text-blue-600">
                      <a href="/" className="hover:underline flex items-center gap-0.5">
                        Live Demo <HiExternalLink />
                      </a>
                      <span>•</span>
                      <a href="https://github.com/Maruf-Ahmed-11/Portfolio" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        GitHub <HiExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 font-medium mt-0.5">
                    Tech Stack: React, Tailwind CSS, JavaScript (ES6+), React Router, Vite
                  </p>
                  <ul className="mt-1 list-disc list-inside text-xs text-zinc-300 print:text-gray-700 space-y-0.5">
                    <li>
                      Designed and developed a fully responsive web application with active section scroll-spy and responsive mobile navigation.
                    </li>
                    <li>
                      Built dynamic routing for individual project deep-dives and an ATS-friendly printable resume view with zero dependency bloat.
                    </li>
                    <li>
                      Implemented rich glassmorphic aesthetic with custom purple gradient theme, dynamic floating badge animations, and responsive layouts.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="border-l-2 border-fuchsia-500 print:border-indigo-600 pl-3.5 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-gray-900 flex items-center gap-2">
                      Bazar Dor – Daily Commodity Price Tracker
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-fuchsia-400 print:text-indigo-600">
                      <a href="https://a07-bazar-dor-flax.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        Live Demo <HiExternalLink />
                      </a>
                      <span>•</span>
                      <a href="https://github.com/Maruf-Ahmed-11/A07-Bazar-Dor" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        GitHub <HiExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 font-medium mt-0.5">
                    Tech Stack: Next.js, React, TypeScript, Tailwind CSS, DaisyUI, MongoDB, Better-Auth
                  </p>
                  <ul className="mt-1 list-disc list-inside text-xs text-zinc-300 print:text-gray-700 space-y-0.5">
                    <li>
                      Engineered a daily commodity price tracker for Bangladesh markets featuring real-time fluctuation indicators and percentage changes.
                    </li>
                    <li>
                      Implemented secure multi-provider authentication (Google, GitHub, email/password) via Better-Auth with duplicate account conflict resolution.
                    </li>
                    <li>
                      Built dynamic product catalog pages calculating minimum, maximum, and average rates across regional markets with multi-parameter sorting.
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="border-l-2 border-cyan-500 print:border-emerald-600 pl-3.5 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-gray-900 flex items-center gap-2">
                      FitLog – Focused Gym Companion &amp; Planner
                    </h3>
                    <div className="flex items-center gap-2.5 text-xs font-bold text-cyan-400 print:text-emerald-600">
                      <a href="https://fitlog-app-a6-bice.vercel.app" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        Live Demo <HiExternalLink />
                      </a>
                      <span>•</span>
                      <a href="https://github.com/Maruf-Ahmed-11/fitlog-app-a6" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-0.5">
                        GitHub <HiExternalLink />
                      </a>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 font-medium mt-0.5">
                    Tech Stack: Next.js, React, TypeScript, Tailwind CSS, React Context API, Fetch API
                  </p>
                  <ul className="mt-1 list-disc list-inside text-xs text-zinc-300 print:text-gray-700 space-y-0.5">
                    <li>
                      Built a focused workout tracker allowing users to browse exercise libraries, view technical specifications, and manage daily training splits.
                    </li>
                    <li>
                      Architected global state management with Context API to dynamically synchronize &quot;Today&apos;s Plan&quot;, &quot;Save for Later&quot;, and live navbar badge counters.
                    </li>
                    <li>
                      Developed an active metrics dashboard calculating combined workout duration and estimated calorie burn with custom sorting by Duration, Calories, or Rating.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: Education */}
            <section>
              <h2 className="text-sm font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
                Education
              </h2>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-bold text-white print:text-gray-900">
                      2nd Year Undergraduate, Marketing
                    </h3>
                    <span className="text-zinc-400 print:text-gray-500 font-medium text-[11px]">
                      2025 – Present
                    </span>
                  </div>
                  <p className="text-zinc-400 print:text-gray-600">
                    Govt. BL College, Khulna, Bangladesh
                  </p>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 mt-0.5">
                    <strong className="text-zinc-300 print:text-gray-700">Coursework:</strong> Principles of Marketing, Consumer Behavior, Market Research &amp; Analysis, Brand Management.
                  </p>
                </div>

                <div className="pt-2 border-t border-purple-500/10 print:border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-white print:text-gray-900">
                      Higher Secondary Certificate (HSC) – Science
                    </h4>
                    <p className="text-zinc-400 print:text-gray-600">
                      Bangladesh Noubahini School &amp; College, Khulna • <span className="text-purple-400 print:text-blue-600 font-semibold">GPA: 4.83 / 5.00</span>
                    </p>
                  </div>
                  <span className="text-zinc-400 print:text-gray-500 font-medium text-[11px]">
                    2022 – 2024
                  </span>
                </div>

                <div className="pt-2 border-t border-purple-500/10 print:border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-white print:text-gray-900">
                      Secondary School Certificate (SSC) – Science
                    </h4>
                    <p className="text-zinc-400 print:text-gray-600">
                      Bangladesh Noubahini School &amp; College, Khulna • <span className="text-purple-400 print:text-blue-600 font-semibold">GPA: 5.00 / 5.00</span>
                    </p>
                  </div>
                  <span className="text-zinc-400 print:text-gray-500 font-medium text-[11px]">
                    2020 – 2022
                  </span>
                </div>
              </div>
            </section>

            {/* Section: Certifications & Training */}
            <section>
              <h2 className="text-sm font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
                Certifications &amp; Training
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 bg-[#140a28] print:bg-gray-50 rounded-lg border border-purple-500/20 print:border-gray-200">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-bold text-white print:text-gray-900 text-xs">
                      AI-Driven Full Stack Web Engineering (MERN)
                    </h4>
                    <span className="text-[10px] font-bold text-purple-300 print:text-gray-600 bg-purple-950/60 print:bg-gray-200 px-1.5 py-0.5 rounded shrink-0">
                      2026 (Ongoing)
                    </span>
                  </div>
                  <p className="text-[11px] text-purple-400 print:text-blue-600 font-semibold mt-0.5">
                    Programming Hero
                  </p>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 mt-1">
                    TypeScript, React, Tailwind CSS, Node.js, Next.js, and MongoDB.
                  </p>
                </div>

                <div className="p-2.5 bg-[#140a28] print:bg-gray-50 rounded-lg border border-purple-500/20 print:border-gray-200">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-bold text-white print:text-gray-900 text-xs">
                      Professional Front-End Web Engineering
                    </h4>
                    <span className="text-[10px] font-bold text-purple-300 print:text-gray-600 bg-purple-950/60 print:bg-gray-200 px-1.5 py-0.5 rounded shrink-0">
                      2025
                    </span>
                  </div>
                  <p className="text-[11px] text-purple-400 print:text-blue-600 font-semibold mt-0.5">
                    NonAcademy-Batch Alpha 1.0.
                  </p>
                  <p className="text-[11px] text-zinc-400 print:text-gray-600 mt-1">
                    Semantic HTML5, Modern CSS Grid/Flexbox, React, and Accessible UI standards.
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
