import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e3e4db] text-[#3b252c] text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineSparkles className="text-[#8f6593] text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3b252c] tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f6593] via-[#a372a8] to-[#3b252c]">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-[#3b252c]/80">
          Explore real-world web applications I built to solve practical problems, demonstrating clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl border border-[#e3e4db] shadow-xs hover:shadow-2xl hover:shadow-[#3b252c]/10 hover:border-[#8f6593] transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#fafaf8] border-b border-[#e3e4db]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#3b252c] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#e3e4db] shadow-xs">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-[#3b252c] group-hover:text-[#8f6593] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#3b252c]/75 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-[#fafaf8] text-[#3b252c] border border-[#e3e4db]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-white text-[#3b252c]/65 border border-[#e3e4db]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions (Distinct Buttons) */}
              <div className="pt-4 border-t border-[#e3e4db] flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8f6593] hover:text-[#3b252c] transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="p-2 text-[#3b252c] hover:bg-[#3b252c] hover:text-white rounded-lg border border-[#e3e4db] hover:border-[#3b252c] transition shadow-2xs"
                    >
                      <FaGithub className="text-base" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-[#8f6593] hover:bg-[#774e7c] text-white shadow-xs hover:shadow-md transition border border-[#8f6593]"
                    >
                      <span>Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-[#3b252c]/70">
          Want to see more code and experiments? Check out my{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#8f6593] hover:text-[#3b252c] underline decoration-[#8f6593]/40 hover:decoration-[#8f6593] inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
