"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import data from "@/src/data/portfolio.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;

      if (currentScrollY < 100) {
        // At the very top, always show
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > scrollThreshold
      ) {
        // Scrolling down past threshold
        if (!isHoveringTop) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHoveringTop]);

  // Handle hover at top of viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isNearTop = e.clientY < 80; // 80px from top
      setIsHoveringTop(isNearTop);

      if (isNearTop) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHoveringTop(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // GSAP ScrollTrigger for active section
  useEffect(() => {
    const sections = data.header.sections.map((s) => s.id);

    const scrollTriggers = sections.map((sectionId) => {
      return ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
      });
    });

    return () => {
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl transition-all duration-500 ease-in-out ${
        isVisible
          ? "top-4 opacity-100 translate-y-0"
          : "-top-24 opacity-0 translate-y-[-100%]"
      }`}
    >
      <nav className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Name with improved hover effect */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
            >
              {data.meta.name}
            </button>

            {/* Desktop Navigation with improved indicator */}
            <div className="hidden md:flex items-center space-x-1 relative">
              {data.header.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium relative z-10 transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-white shadow-lg transform scale-105"
                      : `text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                         hover:bg-gray-100/50 dark:hover:bg-gray-800/50`
                  }`}
                >
                  {section.label}
                  {/* Subtle bottom border for active state */}
                  {activeSection === section.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button with improved animation */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X
                  size={22}
                  className="text-gray-900 dark:text-white transition-transform duration-300 rotate-90"
                />
              ) : (
                <Menu
                  size={22}
                  className="text-gray-900 dark:text-white transition-transform duration-300"
                />
              )}
            </button>
          </div>

          {/* Mobile Navigation with improved animation */}
          <div className="relative">
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-2 pb-2">
                {data.header.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{section.label}</span>
                      {activeSection === section.id && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
