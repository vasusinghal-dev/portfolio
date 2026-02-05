"use client";

import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import data from "@/src/data/portfolio.json";
import Image from "next/image";
import Link from "next/link";

type ProjectPageProps = { project: (typeof data.projects)[number] };

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Background gradient */}
          <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl opacity-50" />

          <div className="relative">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 mb-6 px-4 py-2 rounded-full bg-muted/30 border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                  Featured Project
                </div>

                <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  {project.title}
                  <span className="block text-foreground/40 text-xl font-normal mt-3">
                    {project.description}
                  </span>
                </h1>

                <div className="flex items-center gap-4 mt-8">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 group/link"
                  >
                    View Repository
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  {project.id !== "portfolio" && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/15 hover:border-primary/30 transition-all duration-300 group/link"
                    >
                      Live Preview
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}

                  <div className="flex items-center gap-2 text-sm text-foreground/50">
                    <div className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse"></div>
                    Active Development
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="lg:w-1/3">
                <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 text-sm font-medium bg-muted/40 text-foreground/70 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:text-primary/90 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Architecture Decisions */}
            <div className="lg:col-span-2 space-y-12">
              {/* Architecture Decisions */}
              <div className="group relative">
                {/* Background glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                <div className="relative bg-card border border-border/60 rounded-2xl p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    </div>
                    <h2 className="text-2xl font-light tracking-tight">
                      Architectural Decisions
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {project.decisions.map((decision, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300 group/decision"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-primary/60" />
                        </div>
                        <div>
                          <span className="text-foreground/80 leading-relaxed block mb-2 group-hover/decision:text-foreground transition-colors">
                            {decision}
                          </span>
                          <span className="text-xs text-foreground/40 font-medium">
                            Decision {i + 1} • Key architectural choice
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Preview */}
              <div className="rounded-2xl border border-border/50 overflow-hidden bg-background">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                    </div>
                    <span className="text-sm text-foreground/50 font-medium">
                      {project.title.split("—")[0]?.trim()} • Live Preview
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-foreground/40" />
                </div>

                <div className="p-8">
                  {project.thumbnail ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-border/30">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} Preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-muted/20 to-muted/5 border border-border/30 flex items-center justify-center">
                      <div className="text-foreground/20 text-4xl font-light">
                        Project Preview
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Metadata & Details */}
            <div className="space-y-8">
              {/* Project Timeline */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-4">
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-sm text-foreground/70">Status</span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400/80 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/60 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-sm text-foreground/70">Type</span>
                    <span className="text-sm text-foreground/60">
                      {project.id.includes("trackwise")
                        ? "SaaS Platform"
                        : "Portfolio System"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <span className="text-sm text-foreground/70">
                      Complexity
                    </span>
                    <span className="text-sm text-foreground/60">
                      {project.tech.length > 10 ? "Advanced" : "Intermediate"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-foreground/70">
                      Architecture
                    </span>
                    <span className="text-sm text-foreground/60">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Development Approach */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-4">
                  Development Approach
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Built with server-first architecture using Next.js App
                      Router
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      TypeScript end-to-end for type safety across all layers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Centralized validation with shared Zod schemas
                    </p>
                  </div>
                </div>
              </div>

              {/* View Code CTA */}
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/2 p-6 hover:border-primary/30 hover:from-primary/10 hover:to-primary/5 transition-all duration-300 group/cta"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-light tracking-tight">
                    Explore the Codebase
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-primary/60 group-hover/cta:text-primary group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-foreground/60 mb-4">
                  Dive into the implementation details, architecture patterns,
                  and development decisions.
                </p>
                <span className="text-xs text-foreground/40">
                  GitHub Repository →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 px-4 sm:px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects
              .filter((p) => p.id !== project.id)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="group rounded-xl border border-border/50 p-6 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-light tracking-tight group-hover:text-primary/90 transition-colors">
                      {otherProject.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-4">
                    {otherProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {otherProject.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-muted/30 text-foreground/60 rounded border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
