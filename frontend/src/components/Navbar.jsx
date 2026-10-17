import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";

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

  // Shadow and active section detection when scrolling on home page
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
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${scrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e3e4db]"
          : "bg-[#fafaf8]/80 backdrop-blur-xs border-b border-[#e3e4db]/60"
        }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#3b252c] group flex items-center gap-2.5"
        >
          <span className="w-9 h-9 rounded-xl bg-[#3b252c] flex items-center justify-center text-white font-mono text-lg shadow-sm group-hover:scale-105 transition-transform">
            D
          </span>
          <span className="font-extrabold tracking-tight text-[#3b252c] transition-colors">
            DevPortfolio<span className="text-[#8f6593]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id} className="group">
                <a
                  href={href}
                  className={`relative py-1 font-semibold text-sm transition-colors duration-200 ${isLinkActive
                      ? "text-[#8f6593] font-bold"
                      : "text-[#3b252c]/70 hover:text-[#3b252c]"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#8f6593] transition-all duration-300 rounded-full ${isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA (Resume Button - Primary Amethyst Mauve) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-[#8f6593] hover:bg-[#774e7c] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-[#8f6593]/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-[#8f6593]"
          >
            <HiDocumentText className="text-lg text-white" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl text-[#3b252c] p-2 rounded-xl bg-white border border-[#e3e4db] hover:bg-[#f4f4f0] transition focus:outline-none shadow-xs"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-white/98 backdrop-blur-xl border-b border-[#e3e4db] shadow-xl overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 py-6 px-6" : "max-h-0 py-0 px-6"
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
                  className={`block py-1.5 text-base font-semibold transition ${isLinkActive ? "text-[#8f6593] font-bold" : "text-[#3b252c]/75 hover:text-[#3b252c]"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Button */}
          <li className="pt-2 border-t border-[#e3e4db]">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-[#8f6593] hover:bg-[#774e7c] text-white py-3 rounded-xl font-bold shadow-md shadow-[#8f6593]/25 transition border border-[#8f6593]"
            >
              <HiDocumentText className="text-xl text-white" />
              View Full Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;