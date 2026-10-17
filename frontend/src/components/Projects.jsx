import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden w-full"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-4 sm:left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
          <HiOutlineSparkles className="text-purple-400 text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-200">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400">
          Explore real-world web applications I built to solve practical problems, demonstrating clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:border-purple-400/60 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#140a28] border-b border-purple-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-[#06020e]/85 backdrop-blur-md text-purple-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-purple-500/30 shadow-xs">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-purple-950/40 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-[#140a28] text-zinc-400 border border-purple-500/20">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-400 hover:text-white transition"
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
                      className="p-2 text-zinc-300 bg-[#140a28] hover:bg-purple-600 hover:text-white rounded-lg border border-purple-500/20 hover:border-purple-400 transition shadow-2xs"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.35)] hover:shadow-[0_0_18px_rgba(192,38,211,0.6)] transition border border-purple-400/30"
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
        <p className="text-sm text-zinc-400">
          Want to see more code and experiments? Check out my{" "}
          <a
            href="https://github.com/Maruf-Ahmed-11"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-purple-400 hover:text-white underline decoration-purple-500/40 hover:decoration-purple-400 inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
