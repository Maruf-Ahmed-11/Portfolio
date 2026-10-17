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
    <div className="min-h-screen bg-[#fafaf8] py-10 px-4 sm:px-6 lg:px-8 text-[#3b252c] font-sans print:bg-white print:text-black print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#3b252c] bg-white border border-[#e3e4db] px-4 py-2.5 rounded-lg shadow-xs hover:border-[#3b252c] hover:bg-[#3b252c] hover:text-white transition"
        >
          <HiArrowLeft className="text-base text-[#8f6593]" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#8f6593] hover:bg-[#774e7c] px-5 py-2.5 rounded-lg shadow-md shadow-[#8f6593]/25 border border-[#8f6593] hover:shadow-lg transition cursor-pointer"
          >
            <HiPrinter className="text-base text-white" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white text-[#3b252c] rounded-2xl shadow-xl border border-[#e3e4db] p-8 sm:p-12 print:bg-white print:text-black print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b border-[#e3e4db] print:border-gray-200 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3b252c] print:text-gray-900 tracking-tight">
                Your Name
              </h1>
              <p className="text-lg font-bold text-[#8f6593] print:text-blue-700 mt-1">
                Fresher Web Developer | Frontend &amp; React Developer
              </p>
              <p className="text-sm text-[#3b252c]/75 print:text-gray-500 mt-1">
                Passionate about building responsive, high-performance web applications with modern UI/UX.
              </p>
            </div>

            {/* Quick Badges / Availability */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-[#3b252c]/80 print:text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#8f6593]/10 text-[#8f6593] border border-[#8f6593]/30 print:bg-emerald-50 print:text-emerald-700 print:border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-[#8f6593] print:bg-emerald-500 animate-pulse"></span>
                Open for Junior / Entry-Level Roles
              </span>
              <span className="text-xs text-[#3b252c]/60 print:text-gray-500 mt-1">Ready to join immediately</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-[#3b252c]/80 print:text-gray-600 pt-4 border-t border-[#e3e4db] print:border-gray-100">
            <a
              href="mailto:youremail@example.com"
              className="flex items-center gap-1.5 hover:text-[#8f6593] print:hover:text-blue-600 transition"
            >
              <HiMail className="text-[#8f6593] print:text-blue-600 text-base shrink-0" />
              <span className="truncate">youremail@example.com</span>
            </a>
            <a
              href="tel:+8801700000000"
              className="flex items-center gap-1.5 hover:text-[#8f6593] print:hover:text-blue-600 transition"
            >
              <HiPhone className="text-[#8f6593] print:text-blue-600 text-base shrink-0" />
              <span>+880 1700-000000</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-[#8f6593] print:text-blue-600 text-base shrink-0" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8f6593] print:hover:text-blue-600 transition"
            >
              <FaGithub className="text-[#3b252c] print:text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8f6593] print:hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-[#8f6593] print:text-blue-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-[#8f6593] print:hover:text-blue-600 transition"
            >
              <FaGlobe className="text-[#8f6593] print:text-blue-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-[#3b252c]/85 print:text-gray-700 leading-relaxed text-justify">
            Passionate, detail-oriented, and highly motivated <strong className="text-[#3b252c] print:text-gray-900">Fresher Web Developer</strong> with strong foundational proficiency in <strong className="text-[#8f6593] print:text-gray-900">JavaScript (ES6+)</strong>, <strong className="text-[#8f6593] print:text-gray-900">React.js</strong>, <strong className="text-[#3b252c] print:text-gray-900">Tailwind CSS</strong>, and modern component-driven front-end architectures. Dedicated to writing clean, maintainable, and accessible code to craft responsive and intuitive web interfaces. An agile learner and enthusiastic team player seeking an entry-level Junior Web Developer / Frontend Developer position to contribute to impactful software products while expanding full-stack skills.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#fafaf8] print:bg-gray-50/80 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-[#3b252c]/80 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, React Router, Context API, Responsive Design.
              </p>
            </div>

            <div className="p-3 bg-[#fafaf8] print:bg-gray-50/80 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">
                Backend &amp; Database (Foundational):
              </span>
              <p className="text-[#3b252c]/80 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Node.js (Basics), Express.js (Basics), RESTful APIs, JSON, MongoDB (CRUD), Firebase Authentication.
              </p>
            </div>

            <div className="p-3 bg-[#fafaf8] print:bg-gray-50/80 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-[#3b252c]/80 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Git, GitHub, VS Code, Vite, npm, Postman, Chrome DevTools, Vercel, Netlify.
              </p>
            </div>

            <div className="p-3 bg-[#fafaf8] print:bg-gray-50/80 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">
                Core Competencies &amp; Practices:
              </span>
              <p className="text-[#3b252c]/80 print:text-gray-700 leading-relaxed text-xs sm:text-sm">
                Component-Driven Architecture, UI/UX Principles, Cross-Browser Compatibility, Performance Optimization, Problem Solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="border-l-2 border-[#8f6593] print:border-blue-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-[#3b252c] print:text-gray-900 flex items-center gap-2">
                  Developer Portfolio &amp; Interactive Showcase
                  <span className="text-xs font-semibold text-[#8f6593] print:text-blue-600 font-mono bg-[#fafaf8] print:bg-blue-50 border border-[#e3e4db] print:border-none px-2 py-0.5 rounded">
                    Personal Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-[#8f6593] print:text-blue-600">
                  <a href="/" className="hover:underline flex items-center gap-1">
                    Live View <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#3b252c]/70 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, React Router, Vite
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-[#3b252c]/85 print:text-gray-700 space-y-1">
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
            <div className="border-l-2 border-[#3b252c] print:border-indigo-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-[#3b252c] print:text-gray-900 flex items-center gap-2">
                  TechGear - Modern E-Commerce Platform
                  <span className="text-xs font-semibold text-[#3b252c] print:text-indigo-600 font-mono bg-[#fafaf8] print:bg-indigo-50 border border-[#e3e4db] print:border-none px-2 py-0.5 rounded">
                    Frontend &amp; State Project
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-[#3b252c] print:text-indigo-600">
                  <a href="https://example.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#3b252c]/70 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, Context API, REST API
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-[#3b252c]/85 print:text-gray-700 space-y-1">
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
            <div className="border-l-2 border-[#aea4bf] print:border-emerald-600 pl-4 py-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-bold text-[#3b252c] print:text-gray-900 flex items-center gap-2">
                  TaskFlow - Agile Kanban Productivity App
                  <span className="text-xs font-semibold text-[#3b252c] print:text-emerald-600 font-mono bg-[#fafaf8] print:bg-emerald-50 border border-[#e3e4db] print:border-none px-2 py-0.5 rounded">
                    Web Application
                  </span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-bold text-[#8f6593] print:text-emerald-600">
                  <a href="https://example.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <HiExternalLink />
                  </a>
                  <span>•</span>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                    GitHub Code <HiExternalLink />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#3b252c]/70 print:text-gray-500 font-medium mt-0.5">
                Tech Stack: React.js, Tailwind CSS, JavaScript (ES6+), LocalStorage
              </p>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-[#3b252c]/85 print:text-gray-700 space-y-1">
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
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
              <div>
                <h3 className="font-bold text-[#3b252c] print:text-gray-900">
                  B.Sc. in Computer Science &amp; Engineering (CSE)
                </h3>
                <p className="text-[#3b252c]/70 print:text-gray-600 text-xs sm:text-sm">
                  Your University / College Name, City
                </p>
              </div>
              <div className="text-xs sm:text-sm text-[#3b252c]/60 print:text-gray-500 font-medium mt-1 sm:mt-0 sm:text-right">
                <span>Graduation Year: 2025 / 2026</span>
                <span className="block text-[#8f6593] print:text-blue-600 font-bold">CGPA: 3.50+ / 4.00</span>
              </div>
            </div>
            <p className="text-xs text-[#3b252c]/70 print:text-gray-600">
              <strong className="font-bold text-[#3b252c] print:text-gray-700">Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Software Architecture.
            </p>
          </div>
        </section>

        {/* Section: Certifications & Training */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Certifications &amp; Training
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-[#fafaf8] print:bg-gray-50 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <h4 className="font-bold text-[#3b252c] print:text-gray-900">
                Complete Web Development Bootcamp (MERN)
              </h4>
              <p className="text-xs text-[#8f6593] print:text-gray-500 font-semibold mt-0.5">Online Learning Academy (6-Month Intensive)</p>
              <p className="text-xs text-[#3b252c]/70 print:text-gray-600 mt-1">
                Completed 60+ assignments, built 10+ real-world web apps using React, Tailwind CSS, Node, and MongoDB.
              </p>
            </div>

            <div className="p-3 bg-[#fafaf8] print:bg-gray-50 rounded-lg border border-[#e3e4db] print:border-gray-100">
              <h4 className="font-bold text-[#3b252c] print:text-gray-900">
                Responsive Web Design &amp; JavaScript Algorithms
              </h4>
              <p className="text-xs text-[#8f6593] print:text-gray-500 font-semibold mt-0.5">freeCodeCamp Certification</p>
              <p className="text-xs text-[#3b252c]/70 print:text-gray-600 mt-1">
                Demonstrated mastery in semantic HTML5, CSS Flexbox/Grid, and algorithmic JavaScript problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-[#3b252c] print:text-gray-900 uppercase tracking-wider border-b border-[#e3e4db] print:border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#8f6593] print:bg-blue-600 rounded-xs"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3b252c]/85 print:text-gray-700">
            <div>
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">Soft Skills:</span>
              <p>Problem Solving, Collaborative Teamwork, Fast Learner &amp; Adaptability, Time Management, Attention to Detail.</p>
            </div>
            <div>
              <span className="font-bold text-[#3b252c] print:text-gray-900 block mb-1">Languages:</span>
              <p>Bengali (Native), English (Professional Working Proficiency).</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
