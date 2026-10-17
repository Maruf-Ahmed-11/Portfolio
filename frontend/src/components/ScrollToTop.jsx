import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is an in-page anchor hash (e.g. #projects, #contact)
    if (hash) {
      const targetId = hash.replace("#", "");
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

      // Slight timeout to allow components to mount/render before measuring position
      const timer = setTimeout(scrollToElement, 60);
      return () => clearTimeout(timer);
    } else {
      // Whenever route changes without a hash, always scroll instantly to the absolute top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
