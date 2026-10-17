import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "2nd Year Undergraduate, Marketing",
    institution: "Govt. BL College",
    location: "Khulna, Bangladesh",
    period: "2025– Present",
    description:
      "Currently pursuing an undergraduate degree in Marketing while rigorously training as a full-stack web developer to build modern, user-centric digital products.",
    coursework: [
      "Principles of Marketing",
      "Consumer Behavior",
      "Market Research & Analysis",
      "Brand Management",
      "Digital Marketing Strategies",
      "Business Communication",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Bangladesh Noubahini School & College",
    location: "Khulna, Bangladesh",
    period: "2022 – 2024",
    grade: "GPA: 4.83 / 5.00 (A)",
    description:
      "Completed higher secondary education with a major in Science, developing strong analytical thinking and mathematical problem-solving skills.",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Tech (ICT)"],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Bangladesh Noubahini School & College",
    location: "Khulna, Bangladesh",
    period: "2020 – 2022",
    grade: "GPA: 5.00 / 5.00 (A+)",
    description:
      "Graduated secondary school with distinction in Science, establishing foundational curiosity for science and computing.",
    coursework: ["General Science", "Advanced Mathematics", "Computer Studies"],
  },
];

const certifications = [
  {
    title: "AI-Driven Full Stack Web Engineering (MERN)",
    issuer: "Programming Hero",
    year: "2026 (Ongoing)",
    desc: "Building real-world applications covering TypeScript, React, Tailwind CSS, Node.js, Next.js, and MongoDB.",
  },
  {
    title: "Professional Front-End Web Engineering with React",
    issuer: "NonAcademy-Batch Alpha 1.0.",
    year: "2025",
    desc: "Verified competency in semantic HTML5, modern CSS Grid/Flexbox, and accessible web standards.",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <HiOutlineAcademicCap className="text-purple-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          My educational background and academic journey combining business acumen with modern full-stack engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-purple-400" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 to-fuchsia-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-bold text-purple-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-purple-400/70" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-purple-400/70" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {edu.grade && (
                    <span className="inline-block bg-purple-950/60 text-purple-300 border border-purple-500/40 text-xs font-bold px-3 py-1 rounded-full shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                      {edu.grade}
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-purple-400 text-sm" />
                    Key Courses Studied
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#140a28] text-zinc-300 border border-purple-500/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Continuous Learning (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <FaCertificate className="text-purple-400" />
            <span>Certifications &amp; Courses</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#140a28] text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <HiOutlineBadgeCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-white text-sm mt-3">
                  {cert.title}
                </h4>
                <p className="text-xs font-bold text-purple-400 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1a082b] to-[#0a0314] border border-purple-500/30 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <h4 className="font-bold text-base mb-1 text-white">Continuous Learner</h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                Always sharpening my problem-solving abilities and keeping updated with modern web standards and React 19 innovations.
              </p>
              <span className="inline-block bg-purple-950/70 text-purple-300 border border-purple-500/40 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Active Code Contributor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
