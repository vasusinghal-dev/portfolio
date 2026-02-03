"use client";

import data from "@/src/data/portfolio.json";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Interactive systems built with deliberate architecture. Click any
            card for full details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              // Removed onMouseEnter/Leave handlers since we don't need hoveredProject state
              className="group relative block"
            >
              {/* Card Container */}
              <div className="relative h-full bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                {/* Image/Thumbnail Section */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-foreground/20 text-4xl font-light">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  {/* Tech badges overlay */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground/70 rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground/50 rounded-full border border-border/50">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-light tracking-tight group-hover:text-primary/90 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-foreground/60 text-sm mt-1">
                        {project.id.includes("trackwise")
                          ? "SaaS Platform"
                          : "Developer Tool"}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <ChevronRight />
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Key decisions preview */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"></div>
                      <span className="text-xs font-semibold tracking-wider text-foreground/50 uppercase">
                        Key Decisions
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {project.decisions.slice(0, 2).map((decision, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg
                            className="flex-shrink-0 w-4 h-4 text-primary/60 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          <span className="text-sm text-foreground/70 leading-tight line-clamp-2">
                            {decision}
                          </span>
                        </li>
                      ))}
                      {project.decisions.length > 2 && (
                        <li className="text-sm text-foreground/50">
                          + {project.decisions.length - 2} more decisions
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="px-6 py-3 border-t border-border/30 bg-muted/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse"></div>
                    <span className="text-xs text-foreground/50">Active</span>
                  </div>
                  <span className="text-xs text-foreground/40">
                    Click to explore →
                  </span>
                </div>
              </div>

              {/* Glow effect on hover - using group-hover instead of state */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        {data.projects.length > 4 && (
          <div className="mt-12 text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-muted/10 hover:bg-muted/20 transition-colors group">
              <span className="text-sm font-medium text-foreground/70">
                View all project details
              </span>
              <svg
                className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
