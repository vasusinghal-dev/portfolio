"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import data from "@/src/data/portfolio.json";
import ProjectDetail from "@/src/components/Projects/ProjectDetail";

type ProjectModalPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProjectModalPage({ params }: ProjectModalPageProps) {
  const { id } = React.use(params);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const project = data.projects.find((p) => p.id === id);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [router]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        router.back();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [router]);

  if (!project) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-white/10 z-[9999] animate-fade-in" />

      {/* Modal container */}
      <div className="fixed inset-0 z-[10000] overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          {/* Modal content */}
          <div
            ref={modalRef}
            className="relative w-full max-w-6xl bg-background rounded-3xl border border-border/50 shadow-2xl shadow-primary/5 animate-slide-in-from-bottom-8 duration-500"
          >
            {/* Close button */}
            <button
              onClick={() => router.back()}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card hover:border-border transition-all duration-300 group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
            </button>

            {/* Project detail content */}
            <div className="max-h-[90vh] overflow-y-auto">
              <ProjectDetail project={project} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
