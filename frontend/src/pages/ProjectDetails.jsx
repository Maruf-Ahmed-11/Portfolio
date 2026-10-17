import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-[#0e071c]/90 p-8 rounded-2xl shadow-xl border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-zinc-400 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-full font-bold transition border border-purple-400/40 shadow-md shadow-purple-900/30"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#06020e] text-zinc-100 relative overflow-hidden w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-4 sm:left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-white transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-[#0e071c]/90 rounded-2xl border border-purple-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-md aspect-video bg-[#140a28]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-purple-950/60 text-purple-300 border border-purple-500/30 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.2)]">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-purple-400 text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-950/40 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Project Overview</h3>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#140a28] border border-purple-500/20">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiShieldCheck className="text-purple-400 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#140a28]/60 border border-purple-500/20">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiLightBulb className="text-purple-400 text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-purple-500/20 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] transition border border-purple-400/30"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-purple-500/30 hover:border-purple-400 px-6 py-3 rounded-full font-bold shadow-xs hover:shadow-lg transition"
              >
                <FaGithub className="text-lg" />
                <span>Source Code</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-400 hover:text-white transition ml-auto"
            >
              View Developer Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
