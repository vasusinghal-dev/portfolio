import { notFound } from "next/navigation";
import data from "@/src/data/portfolio.json";
import ProjectDetail from "@/src/components/Projects/ProjectDetail";
import * as React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return {
    alternates: {
      canonical: `/projects/${id}`,
    },
  };
}

export async function generateStaticParams() {
  return data.projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = data.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      {/* Back Navigation */}
      <div className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </div>
      <ProjectDetail project={project} />
    </div>
  );
}
