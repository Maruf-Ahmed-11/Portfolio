import { Link } from "react-router-dom";
import { HiArrowLeft, HiPrinter, HiDownload } from "react-icons/hi";
import cvAvatar from "../assets/cv-avatar.jpg";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#06020e] pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans print:bg-white print:p-0 print:m-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-[820px] mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 bg-[#0e071c] border border-purple-500/30 px-5 py-2.5 rounded-full shadow-xs hover:border-purple-400 hover:text-white transition"
        >
          <HiArrowLeft className="text-base text-purple-400" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Maruf_Ahmed_Rohan_CV.pdf"
            download="Maruf_Ahmed_Rohan_CV.pdf"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 px-5 py-2.5 rounded-full shadow-xs transition hover:scale-105"
            title="Download Single-Page Printable CV"
          >
            <HiDownload className="text-base text-purple-300" /> Download CV (PDF)
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40 hover:shadow-lg transition cursor-pointer hover:scale-105"
          >
            <HiPrinter className="text-base text-white" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Single-Page CV Sheet (A4 Dimensions for Physical Paper Print) */}
      <div className="w-full max-w-[820px] mx-auto bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden print:w-[210mm] print:h-[297mm] print:max-w-none print:rounded-none print:shadow-none print:m-0 print:overflow-hidden">
        <div className="grid grid-cols-12 min-h-[1100px] print:min-h-0 print:h-full">
          
          {/* Left Column (Sidebar: 4 cols ~ 34% width) */}
          <aside className="col-span-12 sm:col-span-4 print:col-span-4 bg-[#221247] text-white p-6 sm:p-6 print:p-6 flex flex-col justify-between relative">
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-2.5 bg-[#7c3aed]"></div>

            <div className="space-y-5 pt-3">
              {/* Centered Profile Picture */}
              <div className="text-center">
                <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-[#7c3aed] to-purple-400 shadow-md mb-2.5">
                  <img
                    src={cvAvatar}
                    alt="Maruf Ahmed Rohan"
                    className="w-32 h-32 rounded-full object-cover border-2 border-white/20 mx-auto"
                  />
                </div>

                <h1 className="text-2xl font-black text-white leading-tight tracking-tight">
                  Maruf<br />Ahmed Rohan
                </h1>
                <p className="text-xs font-semibold text-purple-200 mt-1">
                  Full Stack Web Developer
                </p>
                <p className="text-[11px] text-purple-300">
                  React &amp; Next.js
                </p>
              </div>

              {/* CONTACT */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-purple-400/20 pb-1">
                  CONTACT
                </h3>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      PHONE
                    </span>
                    <span className="text-white font-medium text-xs">
                      +880 1773-532098
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      EMAIL
                    </span>
                    <span className="text-white font-medium text-xs break-all">
                      maruf04ahmed12rohan04@gmail.com
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      LOCATION
                    </span>
                    <span className="text-white font-medium text-xs">
                      Khulna, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              {/* LANGUAGES */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-purple-400/20 pb-1">
                  LANGUAGES
                </h3>
                <div className="space-y-1 text-xs text-white">
                  <p><strong className="text-purple-200">Bangla</strong> - Native</p>
                  <p><strong className="text-purple-200">English</strong> - Intermediate</p>
                </div>
              </div>

              {/* STRENGTHS */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-black text-white uppercase tracking-wider border-b border-purple-400/20 pb-1">
                  STRENGTHS
                </h3>
                <ul className="space-y-1 text-xs text-white">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Fast learner</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Teamwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Time management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Debugging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400 text-xs">■</span>
                    <span>Clean code</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="pt-3 border-t border-purple-400/20 text-[10px] text-purple-300 text-center">
              Available for Full-Stack &amp; Frontend Roles
            </div>
          </aside>

          {/* Right Column (Main Content: 8 cols ~ 66% width) */}
          <main className="col-span-12 sm:col-span-8 print:col-span-8 bg-white text-gray-800 p-6 sm:p-7 print:p-6 space-y-4">
            
            {/* PROFESSIONAL SUMMARY */}
            <div>
              <h2 className="text-xs font-black text-[#1e1338] uppercase tracking-wider border-b-2 border-[#6d28d9] pb-1 mb-1.5">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[11px] text-gray-700 leading-relaxed">
                Aspiring Full Stack Developer with strong foundations in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Git. Passionate about building responsive, accessible web applications and continuously learning modern technologies.
              </p>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h2 className="text-xs font-black text-[#1e1338] uppercase tracking-wider border-b-2 border-[#6d28d9] pb-1 mb-1.5">
                TECHNICAL SKILLS
              </h2>

              <div className="space-y-1 text-[11px]">
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Frontend</span>
                  <span className="text-gray-800">HTML5, CSS3, JavaScript (ES6+), TypeScript, Responsive Design, Tailwind CSS, Bootstrap, DaisyUI, React, Next.js</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Backend</span>
                  <span className="text-gray-800">Node.js, Express.js, REST API, Authentication (JWT, Better Auth), WebSockets basics</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Database</span>
                  <span className="text-gray-800">MongoDB, Mongoose, PostgreSQL, MySQL, Firebase</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Tools</span>
                  <span className="text-gray-800">Git, GitHub, VS Code, npm, Vite, Postman, Chrome DevTools</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Deployment</span>
                  <span className="text-gray-800">Vercel, Netlify, Render, Railway</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-20 font-bold text-[#6d28d9] shrink-0">Concepts</span>
                  <span className="text-gray-800">OOP, Async/Await, Fetch API, CRUD, MVC, Basic DSA, Problem Solving</span>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div>
              <h2 className="text-xs font-black text-[#1e1338] uppercase tracking-wider border-b-2 border-[#6d28d9] pb-1 mb-2">
                PROJECTS
              </h2>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-gray-900">
                    <span className="text-[#6d28d9]">■</span>
                    <span>Developer Portfolio &amp; Personal Showcase</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    React, Tailwind CSS, JavaScript (ES6+), React Router, Vite
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-bold text-gray-900">
                    <span className="text-[#6d28d9]">■</span>
                    <span>Bazar Dor – Daily Commodity Price Tracker</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Next.js, TypeScript, Tailwind CSS, DaisyUI, MongoDB, Better Auth
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-bold text-gray-900">
                    <span className="text-[#6d28d9]">■</span>
                    <span>FitLog – Focused Gym Companion &amp; Planner</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Next.js, React, TypeScript, Tailwind CSS, Context API
                  </p>
                </div>
              </div>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xs font-black text-[#1e1338] uppercase tracking-wider border-b-2 border-[#6d28d9] pb-1 mb-2">
                EDUCATION
              </h2>

              <div className="space-y-1.5 text-xs">
                <div>
                  <div className="flex items-center justify-between font-bold text-gray-900">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#6d28d9]">■</span>
                      <span>2nd Year Undergraduate, Marketing</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-normal">2025 – Present</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Govt. BL College, Khulna
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-gray-900">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#6d28d9]">■</span>
                      <span>Higher Secondary Certificate (HSC) – Science</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-normal">GPA: 4.83 / 5.00</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Bangladesh Noubahini School &amp; College, Khulna (2022 – 2024)
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-gray-900">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#6d28d9]">■</span>
                      <span>Secondary School Certificate (SSC) – Science</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-normal">GPA: 5.00 / 5.00</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Bangladesh Noubahini School &amp; College, Khulna (2020 – 2022)
                  </p>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS & TRAINING */}
            <div>
              <h2 className="text-xs font-black text-[#1e1338] uppercase tracking-wider border-b-2 border-[#6d28d9] pb-1 mb-2">
                CERTIFICATIONS &amp; TRAINING
              </h2>

              <div className="space-y-1.5 text-xs">
                <div>
                  <div className="flex items-center justify-between font-bold text-gray-900">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#6d28d9]">■</span>
                      <span>AI-Driven Full Stack Web Engineering (MERN)</span>
                    </div>
                    <span className="text-[10px] text-purple-700 font-semibold">2026 (Ongoing)</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    Programming Hero — React, Next.js, Node.js, MongoDB, TypeScript
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between font-bold text-gray-900">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#6d28d9]">■</span>
                      <span>Professional Front-End Web Engineering with React</span>
                    </div>
                    <span className="text-[10px] text-gray-600 font-semibold">2025</span>
                  </div>
                  <p className="text-gray-600 pl-3.5 text-[11px]">
                    NonAcademy-Batch Alpha 1.0. — Semantic HTML5, CSS Grid/Flexbox, React
                  </p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
