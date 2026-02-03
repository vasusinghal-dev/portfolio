"use client";

import { useEffect, useRef } from "react";
import data from "@/src/data/portfolio.json";
import { gsap } from "gsap";

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Professional Journey</h2>
          <p className="text-foreground/60">Education and career progression</p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {data.timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1.5 rounded-full border-4 border-background bg-primary z-10" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="text-sm text-primary font-medium mb-1">
                  {item.year}
                </div>
                <h3 className="text-lg font-light mb-1">{item.title}</h3>
                <div className="text-foreground/60 mb-2">{item.company}</div>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
