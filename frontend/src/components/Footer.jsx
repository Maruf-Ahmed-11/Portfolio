import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06020e] border-t border-purple-500/20 text-zinc-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="group flex flex-col items-start leading-none"
            >
              <span className="text-2xl font-black tracking-tight text-white flex items-baseline">
                Maruf<span className="text-[#a855f7]">.</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-400 uppercase mt-0.5 group-hover:text-purple-300 transition-colors">
                DEVELOPER
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed pt-2">
              Passionate Full Stack Developer specializing in building clean, modern, and high-performance web applications with React.js, Next.js, and TypeScript.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              <span className="text-xs text-zinc-300 font-medium">
                Available for Full-time Roles &amp; Freelance Projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-purple-400 hover:text-white font-bold transition">
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-zinc-400">
              Have a question or looking to hire? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Maruf-Ahmed-11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-[#140a28] hover:bg-purple-600 hover:text-white flex items-center justify-center text-zinc-300 border border-purple-500/20 hover:border-purple-400 transition"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-[#140a28] hover:bg-purple-600 hover:text-white flex items-center justify-center text-zinc-300 border border-purple-500/20 hover:border-purple-400 transition"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Profile"
                className="w-9 h-9 rounded-lg bg-[#140a28] hover:bg-purple-600 hover:text-white flex items-center justify-center text-zinc-300 border border-purple-500/20 hover:border-purple-400 transition"
              >
                <FaWhatsapp className="text-base" />
              </a>
              <a
                href="mailto:maruf04ahmed12rohan04@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-[#140a28] hover:bg-purple-600 hover:text-white flex items-center justify-center text-zinc-300 border border-purple-500/20 hover:border-purple-400 transition"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Maruf Ahmed Rohan. Built with React, Vite &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-purple-300 font-semibold transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
