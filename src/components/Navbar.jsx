import {
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { navItems } from "../data/navItems.js";
import useNavbarLogic from "../hooks/useNavBarLogic.js";

const Navbar = ({ activeSection }) => {
  const { dark, isOpen, scrolled, toggleTheme, toggleMenu, closeMenu } =
    useNavbarLogic();

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "glass py-3 md:py-4 shadow-sm" : "py-4 md:py-6"}
    `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 hover-lift">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold">VD</span>
            </div>

            <span className="text-xl md:text-lg font-semibold">VasuDev</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-text-muted-light dark:text-text-muted-dark hover:text-text-light  dark:hover:text-text-dark group"
                }`}
              >
                {item.label}

                <span
                  className="
                  absolute left-0 bottom-0 h-0.5 w-0
                  bg-primary transition-all duration-200
                  group-hover:w-full
                "
                />
              </a>
            ))}

            {/* MEDIA + THEME */}
            <div className="flex items-center gap-3 ml-6">
              <a
                href="https://github.com/vasusinghal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-lg
                  hover:bg-primary/10
                  text-text-light dark:text-text-dark
                  transition-colors hover-lift
                "
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/vasusinghal-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-lg
                  hover:bg-primary/10
                  text-text-light dark:text-text-dark
                  transition-colors hover-lift
                "
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>

              <button
                onClick={toggleTheme}
                className="
                  p-2 rounded-lg
                  hover:bg-primary/10
                  text-text-light dark:text-text-dark
                  transition-colors hover-lift
                "
                aria-label="Toggle theme"
              >
                {dark ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden mt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="card p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => closeMenu()}
                className={`block py-3 px-4 text-lg rounded-lg transition-colors ${
                  activeSection === item.id && "bg-primary/10 text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="flex justify-center items-center gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/vasusinghal-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/vasusinghal-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              <button
                onClick={() => {
                  closeMenu();
                  toggleTheme();
                }}
                className="p-2 rounded-lg"
                aria-label="Toggle theme"
              >
                {dark ? (
                  <FaSun className="w-6 h-6" />
                ) : (
                  <FaMoon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
