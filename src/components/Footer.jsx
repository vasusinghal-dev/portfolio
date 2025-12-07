import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 py-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-white">VD</span>
                </div>
                <span className="font-medium">VasuDev</span>
              </div>
              <p className="text-sm text-text-muted">
                © {currentYear} All rights reserved
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/vasusinghal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vasusinghal-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Made With Section */}
            <div className="text-sm text-text-muted-light dark:text-text-muted-dark flex items-center gap-2 px-4 py-3 rounded-lg bg-card/50 border border-transparent hover:border-border hover:bg-card transition-all duration-300">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse-subtle" />
              <span>using</span>
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors font-medium hover:underline underline-offset-2"
                >
                  React
                </a>
                <span className="text-text-muted">•</span>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors font-medium hover:underline underline-offset-2"
                >
                  Tailwind
                </a>
                <span className="text-text-muted">•</span>
                <a
                  href="https://gsap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors font-medium hover:underline underline-offset-2"
                >
                  GSAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden">
        <div className="px-4 py-6">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-white">VD</span>
              </div>
              <div>
                <span className="font-semibold text-lg">VasuDev</span>
                <p className="text-xs text-text-muted mt-0.5">
                  © {currentYear} All rights reserved
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/vasusinghal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vasusinghal-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border w-full mb-5"></div>

          {/* Made With Section */}
          <div className="space-y-4">
            <div className="text-sm text-text-muted flex items-center justify-center gap-2">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center">
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors active:scale-95"
                >
                  React
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors active:scale-95"
                >
                  Tailwind
                </a>
                <a
                  href="https://gsap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors active:scale-95"
                >
                  GSAP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Enhanced for Mobile */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all active:scale-95 hover-lift z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </footer>
  );
};
export default Footer;
