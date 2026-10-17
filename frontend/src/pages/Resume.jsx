import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#06020e] py-10 px-4 sm:px-6 lg:px-8 text-zinc-100 font-sans print:bg-white print:text-black print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 bg-[#0e071c] border border-purple-500/30 px-5 py-2.5 rounded-full shadow-xs hover:border-purple-400 hover:text-white transition"
        >
          <HiArrowLeft className="text-base text-purple-400" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40 hover:shadow-lg transition cursor-pointer"
          >
            <HiPrinter className="text-base text-white" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-[#0e071c] text-zinc-200 rounded-2xl shadow-2xl border border-purple-500/25 p-8 sm:p-12 print:bg-white print:text-black print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-purple-500/20 print:border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-gray-900 tracking-tight">
                Maruf Ahmed Rohan
              </h1>
              <p className="text-lg font-bold text-purple-400 print:text-blue-700 mt-1">
                Full Stack Developer | React &amp; Next.js Developer
              </p>
              <p className="text-sm text-zinc-400 print:text-gray-500 mt-1">
                Passionate about building responsive, high-performance web applications with modern UI/UX.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-zinc-300 print:text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-950/60 text-purple-300 border border-purple-500/40 print:bg-emerald-50 print:text-emerald-700 print:border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 print:bg-emerald-500 animate-pulse"></span>
                Open for Full-Stack / Frontend Roles
              </span>
              <span className="text-xs text-zinc-400 print:text-gray-500 mt-1">Ready to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-zinc-300 print:text-gray-600 pt-4 border-t border-purple-500/20 print:border-gray-100">
            <a
              href="mailto:maruf04ahmed12rohan04@gmail.com"
              className="flex items-center gap-1.5 hover:text-purple-300 print:hover:text-blue-600 transition"
            >
              <HiMail className="text-purple-400 print:text-blue-600 text-base shrink-0" />
              <span className="truncate">maruf04ahmed12rohan04@gmail.com</span>
            </a>
            <a
              href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-purple-300 print:hover:text-blue-600 transition"
            >
              <HiPhone className="text-purple-400 print:text-blue-600 text-base shrink-0" />
              <span>+880 1773-532098</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-purple-400 print:text-blue-600 text-base shrink-0" />
              <span>Khulna, Bangladesh</span>
            </div>
            <a
              href="https://github.com/Maruf-Ahmed-11"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-purple-300 print:hover:text-blue-600 transition"
            >
              <FaGithub className="text-zinc-300 print:text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-purple-300 print:hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-purple-400 print:text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-purple-300 print:hover:text-blue-600 transition"
            >
              <FaGlobe className="text-purple-400 print:text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-zinc-300 print:text-gray-700 leading-relaxed text-justify">
            Passionate, detail-oriented, and highly motivated <strong className="text-white print:text-gray-900">Full Stack Developer</strong> with strong foundational proficiency in <strong className="text-purple-300 print:text-gray-900">JavaScript (ES6+)</strong>, <strong className="text-purple-300 print:text-gray-900">React.js</strong>, <strong className="text-fuchsia-300 print:text-gray-900">Next.js</strong>, <strong className="text-cyan-300 print:text-gray-900">Tailwind CSS</strong>, and modern component-driven architectures. Dedicated to writing clean, maintainable, and accessible code to craft responsive and intuitive web interfaces. Seeking opportunities to contribute to impactful software products while expanding full-stack engineering skills.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#140a28] print:bg-gray-50/80 rounded-lg border border-purple-500/20 print:border-gray-100">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-zinc-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router, Context API, Responsive Design.
              </p>
            </div>

            <div className="p-3 bg-[#140a28] print:bg-gray-50/80 rounded-lg border border-purple-500/20 print:border-gray-100">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Backend &amp; Database:
              </span>
              <p className="text-zinc-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js, Express.js, RESTful APIs, JSON, MongoDB (CRUD), Firebase Authentication.
              </p>
            </div>

            <div className="p-3 bg-[#140a28] print:bg-gray-50/80 rounded-lg border border-purple-500/20 print:border-gray-100">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-zinc-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Postman, Chrome DevTools, Vercel, Netlify.
              </p>
            </div>

            <div className="p-3 bg-[#140a28] print:bg-gray-50/80 rounded-lg border border-purple-500/20 print:border-gray-100">
              <span className="font-bold text-white print:text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-zinc-300 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Performance Optimization, Problem Solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-purple-500 print:border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  Developer Portfolio &amp; Interactive Showcase
                  <span className="text-xs font-semibold text-purple-300 print:text-blue-600 font-mono bg-purple-950/60 print:bg-blue-50 border border-purple-500/30 print:border-none px-2 py-0.5 rounded">
                    Personal Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-purple-400 print:text-blue-600">
                  <a href="/" className="hover:underline flex items-center gap-1">
                    Live View <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Maruf-Ahmed-11" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, React Router, Vite
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-zinc-300 print:text-gray-700 space-y-1">
                <li>
                  Designed and developed a fully responsive web application with active section scroll-spy and responsive mobile navigation.
                </li>
                <li>
                  Built dynamic routing for individual project deep-dives and an ATS-friendly printable resume view with zero dependency bloat.
                </li>
                <li>
                  Achieved high lighthouse performance scores through modern utility-first CSS and optimized asset bundling.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-fuchsia-500 print:border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  TechGear - Modern E-Commerce Platform
                  <span className="text-xs font-semibold text-fuchsia-300 print:text-indigo-600 font-mono bg-fuchsia-950/60 print:bg-indigo-50 border border-fuchsia-500/30 print:border-none px-2 py-0.5 rounded">
                    Frontend &amp; State Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-fuchsia-400 print:text-indigo-600">
                  <a href="https://example.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Maruf-Ahmed-11" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, Context API, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-zinc-300 print:text-gray-700 space-y-1">
                <li>
                  Architected a complete online catalog with live search, dynamic category filtering, and real-time price slider.
                </li>
                <li>
                  Engineered global cart state management with React Context and localStorage persistence for persistent shopping sessions.
                </li>
                <li>
                  Designed a smooth slide-over cart drawer with instant quantity calculations and simulated checkout flow.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-cyan-500 print:border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-white print:text-gray-900 flex items-center gap-2">
                  TaskFlow - Agile Kanban Productivity App
                  <span className="text-xs font-semibold text-cyan-300 print:text-emerald-600 font-mono bg-cyan-950/60 print:bg-emerald-50 border border-cyan-500/30 print:border-none px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-cyan-400 print:text-emerald-600">
                  <a href="https://example.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/Maruf-Ahmed-11" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-zinc-400 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), LocalStorage
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-zinc-300 print:text-gray-700 space-y-1">
                <li>
                  Created an interactive task management board with multi-column status tracking (Backlog, In Progress, Completed).
                </li>
                <li>
                  Implemented custom priority flags, title/description validation, and instant search filter.
                </li>
                <li>
                  Employed clean modular component structure with reusable modal and card subcomponents.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Education
          </h2>

          <div className="space-y-3.5">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-gray-900">
                    2nd Year Undergraduate, Marketing
                  </h3>
                  <p className="text-zinc-400 print:text-gray-600 text-xs sm:text-sm">
                    Govt. BL College, Khulna, Bangladesh
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 print:text-gray-500 font-medium mt-1 sm:mt-0 sm:text-right">
                  <span>2025 – Present</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 print:text-gray-600 mt-1">
                <strong className="font-bold text-zinc-300 print:text-gray-700">Relevant Coursework:</strong> Principles of Marketing, Consumer Behavior, Market Research &amp; Analysis, Brand Management, Digital Marketing Strategies, Business Communication.
              </p>
            </div>

            <div className="pt-2 border-t border-purple-500/10 print:border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h4 className="font-semibold text-white print:text-gray-900 text-xs sm:text-sm">
                  Higher Secondary Certificate (HSC) – Science
                </h4>
                <p className="text-zinc-400 print:text-gray-600 text-xs">
                  Bangladesh Noubahini School &amp; College, Khulna <span className="text-purple-400 print:text-blue-600 font-semibold">• GPA: 4.83 / 5.00</span>
                </p>
              </div>
              <div className="text-xs text-zinc-400 print:text-gray-500 font-medium mt-0.5 sm:mt-0 sm:text-right">
                <span>2022 – 2024</span>
              </div>
            </div>

            <div className="pt-2 border-t border-purple-500/10 print:border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h4 className="font-semibold text-white print:text-gray-900 text-xs sm:text-sm">
                  Secondary School Certificate (SSC) – Science
                </h4>
                <p className="text-zinc-400 print:text-gray-600 text-xs">
                  Bangladesh Noubahini School &amp; College, Khulna <span className="text-purple-400 print:text-blue-600 font-semibold">• GPA: 5.00 / 5.00</span>
                </p>
              </div>
              <div className="text-xs text-zinc-400 print:text-gray-500 font-medium mt-0.5 sm:mt-0 sm:text-right">
                <span>2020 – 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certifications & Training */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Certifications &amp; Training
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#140a28] print:bg-gray-50 rounded-lg border border-purple-500/20 print:border-gray-100">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-bold text-white print:text-gray-900">
                  AI-Driven Full Stack Web Engineering (MERN)
                </h4>
                <span className="text-[10px] font-bold text-purple-300 print:text-gray-600 bg-purple-950/60 print:bg-gray-200 px-1.5 py-0.5 rounded shrink-0">
                  2026 (Ongoing)
                </span>
              </div>
              <p className="text-xs text-purple-400 print:text-gray-500 font-semibold mt-0.5">Programming Hero</p>
              <p className="text-xs text-zinc-400 print:text-gray-600 mt-1">
                Building real-world applications covering TypeScript, React, Tailwind CSS, Node.js, Next.js, and MongoDB.
              </p>
            </div>

            <div className="p-3 bg-[#140a28] print:bg-gray-50 rounded-lg border border-purple-500/20 print:border-gray-100">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-bold text-white print:text-gray-900">
                  Professional Front-End Web Engineering with React
                </h4>
                <span className="text-[10px] font-bold text-purple-300 print:text-gray-600 bg-purple-950/60 print:bg-gray-200 px-1.5 py-0.5 rounded shrink-0">
                  2025
                </span>
              </div>
              <p className="text-xs text-purple-400 print:text-gray-500 font-semibold mt-0.5">NonAcademy-Batch Alpha 1.0.</p>
              <p className="text-xs text-zinc-400 print:text-gray-600 mt-1">
                Verified competency in semantic HTML5, modern CSS Grid/Flexbox, and accessible web standards.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-white print:text-gray-900 uppercase tracking-wider border-b border-purple-500/20 print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-purple-500 print:bg-blue-600 rounded-xs"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300 print:text-gray-700">
            <div>
              <span className="font-bold text-white print:text-gray-900 block mb-1">Soft Skills:</span>
              <p>Problem Solving, Collaborative Teamwork, Fast Learner &amp; Adaptability, Time Management, Attention to Detail.</p>
            </div>
            <div>
              <span className="font-bold text-white print:text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
