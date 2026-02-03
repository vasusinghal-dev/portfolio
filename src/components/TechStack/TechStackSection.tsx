"use client";

import { useEffect, useRef } from "react";
import data from "@/src/data/portfolio.json";
import { Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categoryIcons, iconMap } from "@/src/lib/TechConfig";

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="tech" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Toolkit
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {data.techStack.title}
          </h2>

          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            {data.techStack.description}
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.techStack.categories.map((category) => (
            <div
              key={category.name}
              ref={addToCardsRef}
              className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl p-8 
                       hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500
                       backdrop-blur-sm overflow-hidden"
            >
              {/* Category Header */}
              <div className="relative flex items-center gap-3 mb-8">
                <div
                  className="p-2 rounded-lg bg-primary/10 border border-primary/20 
                              group-hover:bg-primary/15 transition-colors"
                >
                  {categoryIcons[category.name]}
                </div>
                <h3 className="font-semibold text-xl text-foreground/90">
                  {category.name}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="relative space-y-4">
                {category.items.map((tech) => {
                  const icon = iconMap[tech].icon || <Code2 size={24} />;
                  const hoverColor = iconMap[tech].hoverColor;
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-3 p-3 rounded-lg border border-transparent transition-all duration-300 group/item"
                    >
                      <div
                        className={`p-2 rounded-md bg-foreground/5 border border-border/50
                                    group-hover/item:bg-primary/10 group-hover/item:border-primary/30
                                    transition-colors text-foreground ${hoverColor}`}
                      >
                        {icon}
                      </div>
                      <span
                        className="text-lg font-medium text-foreground/80 
                                     group-hover/item:text-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent 
                              transform rotate-45 group-hover:from-primary/20 transition-colors"
                />
              </div>

              {/* Hover line indicator */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent
                            group-hover:w-3/4 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
