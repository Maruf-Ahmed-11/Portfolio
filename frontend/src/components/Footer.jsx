import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#3b252c] border-t border-[#543942] text-[#e3e4db]/75 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-extrabold text-white flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-lg bg-[#8f6593] flex items-center justify-center text-white font-mono text-sm shadow-xs border border-[#8f6593] group-hover:scale-105 transition-transform">
                D
              </span>
              <span className="font-extrabold tracking-tight text-white group-hover:text-[#e3e4db] transition-colors">
                DevPortfolio<span className="text-[#8f6593]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#e3e4db]/75 max-w-md leading-relaxed">
              Passionate Fresher Web Developer specializing in building clean, responsive, and user-centric web applications with React.js and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8f6593] shadow-[0_0_6px_#8f6593]"></span>
              <span className="text-xs text-[#e3e4db]/80 font-medium">
                Open to Junior Frontend / Full-Stack Opportunities
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
                <Link to="/resume" className="text-[#8f6593] hover:text-white font-bold transition">
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
            <p className="text-sm text-[#e3e4db]/75">
              Have a question or looking to hire? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-[#2a1a1f] hover:bg-[#8f6593] hover:text-white flex items-center justify-center text-[#e3e4db] border border-[#543942] transition"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-[#2a1a1f] hover:bg-[#8f6593] hover:text-white flex items-center justify-center text-[#e3e4db] border border-[#543942] transition"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-lg bg-[#2a1a1f] hover:bg-[#8f6593] hover:text-white flex items-center justify-center text-[#e3e4db] border border-[#543942] transition"
              >
                <FaTwitter className="text-base" />
              </a>
              <a
                href="mailto:youremail@example.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-[#2a1a1f] hover:bg-[#8f6593] hover:text-white flex items-center justify-center text-[#e3e4db] border border-[#543942] transition"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#543942] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e3e4db]/60">
          <p>
            &copy; {new Date().getFullYear()} DevPortfolio. Designed &amp; Built with React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-[#e3e4db]/80 hover:text-white font-semibold transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm text-[#8f6593]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
