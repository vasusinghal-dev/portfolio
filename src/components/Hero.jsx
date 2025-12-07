import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { stats } from "../data/heroData.js";
import { useRef } from "react";

import useHeroAnimation from "../hooks/useHeroAnimation.js";
const Hero = () => {
  const heroRef = useRef();
  useHeroAnimation(heroRef);

  return (
    <div
      ref={heroRef}
      className="min-h-screen pt-24 flex items-center justify-center relative mb-16 md:mb-0 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1536px] mx-auto px-6 md:px-12 text-center">
        {/* Intro Badge */}
        <div className="hero-badge shine-hover inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 shine-effect">
          <span className="text-sm font-medium text-primary">
            🎓 Recent BCA Graduate
          </span>
        </div>

        {/* Main Title */}
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Vasu</span>
          <br />
          <span className="text-2xl md:text-4xl font-normal text-text-muted-light dark:text-text-muted-dark">
            Frontend Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle max-w-2xl mx-auto text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8">
          I build beautiful, responsive web applications with clean code.
          Passionate about creating intuitive user experiences and continuously
          learning new technologies.
        </p>

        {/* Call to Action */}
        <div className="hero-cta flex justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
          <a href="#projects" className="btn-primary hover-lift">
            View My Projects
          </a>
          <a href="#contact" className="btn-secondary hover-lift">
            Get In Touch
          </a>
          <a
            href="/VasuDev_Resume.pdf"
            download
            className="px-4 md:px-6 py-2 md:py-3 rounded-lg border border-border hover:border-primary transition-all flex items-center gap-2 hover-lift"
          >
            <FaFileDownload />
            Resume
          </a>
        </div>

        {/* Quick Stats */}
        <div className="hero-stats grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 card card-hover min-w-28"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="hero-social flex justify-center gap-4">
          <a
            href="https://github.com/vasusinghal-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover-lift"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vasusinghal-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all hover-lift"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
