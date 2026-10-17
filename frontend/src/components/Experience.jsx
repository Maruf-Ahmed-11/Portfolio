import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer Trainee / Intern",
    company: "Software Development Firm / Tech Lab",
    location: "Dhaka, Bangladesh",
    period: "Jan 2024 – Jun 2024",
    type: "Internship / Practical Training",
    badgeColor: "bg-[#8f6593]/10 text-[#8f6593] border-[#8f6593]/30",
    responsibilities: [
      "Engineered reusable and accessible React components according to Figma design specifications.",
      "Integrated RESTful APIs, handled asynchronous state loading states, and reduced unnecessary re-renders.",
      "Adopted professional Git workflow (feature branching, clean commit messages, code review PRs).",
      "Collaborated in Agile sprints with team members to resolve UI bugs and enhance responsiveness.",
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Git", "REST APIs"],
  },
  {
    role: "Independent & Freelance Web Developer",
    company: "Self-Employed / Client Work",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance & Projects",
    badgeColor: "bg-[#3b252c]/10 text-[#3b252c] border-[#3b252c]/25",
    responsibilities: [
      "Designed and deployed responsive web interfaces for multiple clients and personal portfolio initiatives.",
      "Delivered pixel-perfect mobile-first designs with Tailwind CSS achieving top Lighthouse performance scores.",
      "Configured automated deployments and DNS hosting setups on Vercel and Netlify.",
      "Communicated directly with project stakeholders to gather requirements and iterate based on feedback.",
    ],
    technologies: ["React", "HTML5/CSS3", "JavaScript", "Tailwind CSS", "Vercel"],
  },
  {
    role: "Academic Project Lead & Developer",
    company: "University Software Lab",
    location: "Dhaka, Bangladesh",
    period: "2023 – 2024",
    type: "Academic & Team Project",
    badgeColor: "bg-[#aea4bf]/20 text-[#3b252c] border-[#aea4bf]/40",
    responsibilities: [
      "Spearheaded the frontend architecture for a multi-page web portal as part of the academic capstone.",
      "Coordinated task delegation among 3 team members and conducted internal code walkthroughs.",
      "Implemented clean form validations, authentication flow, and local state persistence.",
    ],
    technologies: ["JavaScript", "Bootstrap 5", "Node.js Basics", "Database Systems"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "Rapid Onboarding",
    desc: "Solid foundational knowledge in React 19, modern JavaScript, and Git ensures minimal ramp-up time.",
  },
  {
    icon: HiOutlineSparkles,
    title: "High Energy & Drive",
    desc: "Passionate about writing clean code, actively taking feedback, and solving complex problems with enthusiasm.",
  },
  {
    icon: FaHandsHelping,
    title: "Team Player",
    desc: "Thrives in collaborative environments with respectful communication and strong empathy for peers.",
  },
  {
    icon: FaAward,
    title: "Modern Best Practices",
    desc: "Trained on the latest tools (Vite, Tailwind v4, Component-driven design) with zero outdated baggage.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e3e4db] text-[#3b252c] text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineBriefcase className="text-[#8f6593] text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b252c] tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f6593] via-[#a372a8] to-[#3b252c]">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-[#3b252c]/80">
          My practical internships, freelance endeavors, and collaborative project experience demonstrating hands-on readiness.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-[#e3e4db] p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-[#8f6593] transition-all duration-300 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-[#3b252c]">
                  {exp.role}
                </h3>
                <p className="text-sm font-bold text-[#8f6593] mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-[#3b252c]/70 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-semibold text-[#3b252c]">
                  <HiOutlineCalendar className="text-[#8f6593]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-[#3b252c]/60">
                  <HiOutlineLocationMarker className="text-[#3b252c]/40" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#3b252c]/85">
                  <HiOutlineCheckCircle className="text-[#8f6593] text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-[#e3e4db] flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-[#3b252c]/60 mr-1">
                Tech:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#fafaf8] text-[#3b252c] border border-[#e3e4db]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me as a Fresher Callout Card (Deep Espresso Aubergine with Amethyst accents) */}
      <div className="max-w-4xl mx-auto bg-[#3b252c] rounded-2xl border border-[#543942] p-8 shadow-xl text-white">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Why Hire Me as a Fresher Developer?
          </h3>
          <p className="text-sm text-[#e3e4db]/80">
            What I bring to your engineering team from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#2a1a1f] border border-[#543942] hover:border-[#8f6593] transition">
                <div className="w-10 h-10 rounded-lg bg-[#8f6593] text-white flex items-center justify-center shrink-0 shadow-xs font-bold">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-[#e3e4db]/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
