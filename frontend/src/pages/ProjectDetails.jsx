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
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#e3e4db]">
          <h2 className="text-2xl font-bold text-[#3b252c] mb-2">Project Not Found</h2>
          <p className="text-[#3b252c]/70 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-[#8f6593] hover:bg-[#774e7c] text-white px-5 py-2.5 rounded-xl font-bold transition border border-[#8f6593] shadow-md shadow-[#8f6593]/20"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#fafaf8] text-[#3b252c]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#8f6593] hover:text-[#3b252c] transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-[#e3e4db] shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-[#e3e4db] shadow-md aspect-video bg-[#fafaf8]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-[#8f6593]/10 text-[#8f6593] border border-[#8f6593]/30 text-xs font-bold px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3b252c] tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-[#3b252c]/65 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-[#8f6593] text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#fafaf8] text-[#3b252c] border border-[#e3e4db] px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#3b252c]">Project Overview</h3>
            <p className="text-[#3b252c]/80 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#fafaf8] border border-[#e3e4db]">
              <h3 className="text-base font-bold text-[#3b252c] flex items-center gap-2">
                <HiShieldCheck className="text-[#8f6593] text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#3b252c]/80">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#f4f4f0] border border-[#cdcdcd]">
              <h3 className="text-base font-bold text-[#3b252c] flex items-center gap-2">
                <HiLightBulb className="text-[#8f6593] text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#3b252c]/80">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-[#e3e4db] flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#8f6593] hover:bg-[#774e7c] text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-[#8f6593]/25 hover:shadow-lg transition border border-[#8f6593]"
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
                className="inline-flex items-center gap-2 bg-white hover:bg-[#3b252c] text-[#3b252c] hover:text-white border-2 border-[#3b252c] px-6 py-3 rounded-xl font-bold shadow-xs hover:shadow-lg transition"
              >
                <FaGithub className="text-lg" />
                <span>Source Code</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8f6593] hover:text-[#3b252c] hover:underline ml-auto"
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
