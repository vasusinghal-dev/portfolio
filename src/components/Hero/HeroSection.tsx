"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import data from "@/src/data/portfolio.json";
import { gsap } from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewResume = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(data.meta.resume_pdf, "_blank", "noopener,noreferrer");
  };

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = data.meta.resume_pdf;
    link.download = "VasuDev_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="hero-content">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            {data.hero.statement}
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            {data.hero.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="hero-cta group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <span className="text-sm font-medium">{data.hero.cta}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <div className="hero-cta relative group">
            <button
              onClick={handleViewResume}
              className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 cursor-pointer pr-12 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">View Resume</span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="absolute z-20 right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-border bg-background flex items-center justify-center opacity-100 scale-100 -rotate-90 group-hover:rotate-0 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer shadow-sm"
              title="Download PDF"
              aria-label="Download resume as PDF"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
