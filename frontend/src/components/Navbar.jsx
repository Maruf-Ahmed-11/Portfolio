import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Active section detection when scrolling on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full max-w-[100vw] top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${scrolled || !isHomePage
        ? "bg-[#06020e]/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-purple-500/15"
        : "bg-transparent border-b border-purple-500/10"
        }`}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 md:px-12">
        {/* Logo: Maruf. DEVELOPER */}
        <Link to="/" className="group flex flex-col items-start leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-baseline">
            Maruf<span className="text-[#a855f7]">.</span>
          </span>
          <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-400 uppercase mt-0.5 group-hover:text-purple-300 transition-colors">
            DEVELOPER
          </span>
        </Link>

        {/* Desktop Navigation Links (Centered) */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id} className="relative">
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 py-1 ${isLinkActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isLinkActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full shadow-[0_0_8px_#a855f7]"></span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Social Icons + CV Link (matching 1st image) */}
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/Maruf-Ahmed-11"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-white hover:scale-110 transition-all text-base"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-white hover:scale-110 transition-all text-base"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white hover:scale-110 transition-all text-base"
          >
            <FaWhatsapp />
          </a>

          <span className="w-px h-4 bg-zinc-700/60 mx-1"></span>

          <Link
            to="/resume"
            aria-label="View Resume"
            className="p-1 rounded-lg text-zinc-400 hover:text-purple-300 hover:bg-white/5 transition-all text-lg"
            title="View Resume / CV"
          >
            <HiDocumentText />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl text-zinc-300 p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:bg-purple-900/40 transition focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden w-full max-w-full bg-[#0a0414]/98 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 py-6 px-4 sm:px-6" : "max-h-0 py-0 px-4 sm:px-6"
          }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-1.5 text-base font-medium transition ${isLinkActive ? "text-purple-400 font-bold" : "text-zinc-300 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Socials + Resume */}
          <li className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-4 text-zinc-400 text-lg">
              <a href="https://github.com/Maruf-Ahmed-11" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/maruf-ahmed-rohan/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-white">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/8801773532098?text=Hi%2C%20I%20saw%20your%20portfolio!" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-white">
                <FaWhatsapp />
              </a>
            </div>

            <Link
              to="/resume"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md"
            >
              <HiDocumentText />
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;