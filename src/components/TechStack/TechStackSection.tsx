"use client";

import { useEffect, useRef } from "react";
import data from "@/src/data/portfolio.json";
import {
  Code2,
  Layers,
  Palette,
  Server,
  Brain,
  Cloud,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { iconMap } from "@/src/lib/TechConfig";

const categoryIcons: Record<string, React.ReactNode> = {
  Core: <Layers size={18} />,
  Frontend: <Palette size={18} />,
  Backend: <Server size={18} />,
  "AI & Integrations": <Brain size={18} />,
  "Infrastructure & Services": <Cloud size={18} />,
};

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      categoriesRef.current.forEach((category, i) => {
        gsap.from(category, {
          scrollTrigger: {
            trigger: category,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const addToCategoriesRef = (el: HTMLDivElement | null) => {
    if (el && !categoriesRef.current.includes(el)) {
      categoriesRef.current.push(el);
    }
  };

  const categories = data.techStack.categories;

  return (
    <section id="tech" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">
              TECHNOLOGIES
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {data.techStack.title}
          </h2>

          <p className="text-foreground/50 text-lg">
            {data.techStack.description}
          </p>
        </div>

        {/* Categories with Pill Design */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name} ref={addToCategoriesRef} className="group">
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-md bg-primary/10">
                  {categoryIcons[category.name]}
                </div>
                <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
                  {category.name}
                </span>
                <span className="text-xs text-foreground/30">
                  ({category.items.length})
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-border/30 to-transparent" />
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => {
                  const item = iconMap[tech];
                  if (!item) return null;

                  return (
                    <div
                      key={tech}
                      className="group/pill inline-flex items-center gap-2 px-3 py-1.5
                                 rounded-full bg-gradient-to-r from-card/50 to-card/30
                                 border border-border/30 backdrop-blur-sm
                                 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5
                                 transition-all duration-300 cursor-pointer"
                    >
                      <span
                        className={`transition-transform duration-300 group-hover/pill:scale-110 ${item.hoverColor}`}
                      >
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground/70 group-hover/pill:text-foreground">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-foreground/30 flex items-center justify-center gap-2">
            <Code2 className="w-3 h-3" />
            Constantly learning and expanding my toolkit
          </p>
        </div>
      </div>
    </section>
  );
}
