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
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Your University / College Name",
    location: "Dhaka, Bangladesh",
    period: "2022 – 2026 (Expected)",
    grade: "CGPA: 3.50+ / 4.00",
    description:
      "Gained comprehensive theoretical and practical knowledge in computational thinking, software engineering, and web technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Engineering",
      "Operating Systems & Computer Networks",
      "Software Design Patterns",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Your College Name",
    location: "Dhaka, Bangladesh",
    period: "2019 – 2021",
    grade: "GPA: 5.00 / 5.00 (A+)",
    description:
      "Completed higher secondary education with a major in Science, developing strong analytical thinking and mathematical problem-solving skills.",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Tech (ICT)"],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Your High School Name",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2019",
    grade: "GPA: 5.00 / 5.00 (A+)",
    description:
      "Graduated secondary school with distinction in Science, establishing foundational curiosity for science and computing.",
    coursework: ["General Science", "Advanced Mathematics", "Computer Studies"],
  },
];

const certifications = [
  {
    title: "Complete Web Development Bootcamp (MERN)",
    issuer: "Online Learning Academy",
    year: "2024",
    desc: "Built 10+ real-world applications covering React, Tailwind CSS, Node.js, Express, and MongoDB.",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2023",
    desc: "Verified competency in semantic HTML5, modern CSS Grid/Flexbox, and accessible web standards.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    desc: "Mastery of ES6+, functional programming, OOP in JS, and algorithmic problem-solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e3e4db] text-[#3b252c] text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineAcademicCap className="text-[#8f6593] text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b252c] tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f6593] via-[#a372a8] to-[#3b252c]">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-[#3b252c]/80">
          My educational journey and professional credentials that built my foundational computer science and engineering mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-[#3b252c] flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-[#8f6593]" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-[#e3e4db] p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-[#8f6593] transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#8f6593] to-[#3b252c]"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#3b252c]">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-bold text-[#8f6593] mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#3b252c]/70 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-[#3b252c]/50" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-[#3b252c]/50" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-[#8f6593]/10 text-[#8f6593] border border-[#8f6593]/30 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-[#3b252c]/80 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#3b252c]/65 mb-2 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-[#8f6593] text-sm" />
                    Key Courses Studied
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#fafaf8] text-[#3b252c] border border-[#e3e4db]"
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
          <h3 className="text-xl font-bold text-[#3b252c] flex items-center gap-2 mb-4">
            <FaCertificate className="text-[#3b252c]" />
            <span>Certifications &amp; Courses</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-[#e3e4db] p-5 shadow-xs hover:border-[#8f6593] hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#fafaf8] text-[#8f6593] border border-[#e3e4db] flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineBadgeCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-[#3b252c] bg-[#e3e4db]/60 border border-[#cdcdcd] px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-[#3b252c] text-sm mt-3">
                  {cert.title}
                </h4>
                <p className="text-xs font-bold text-[#8f6593] mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-[#3b252c]/70 mt-2 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-[#3b252c] border border-[#543942] text-white shadow-lg">
              <h4 className="font-bold text-base mb-1">Continuous Learner</h4>
              <p className="text-xs text-[#e3e4db]/90 leading-relaxed mb-3">
                Always sharpening my problem-solving abilities and keeping updated with modern web standards and React 19 innovations.
              </p>
              <span className="inline-block bg-[#2a1a1f] text-[#e3e4db] border border-[#543942] text-xs font-bold px-3 py-1 rounded-full">
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
