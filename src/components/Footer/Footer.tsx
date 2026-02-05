import { MapPin } from "lucide-react";
import data from "@/src/data/portfolio.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-medium mb-1">{data.meta.name}</div>
            <div className="text-sm text-foreground/60">{data.meta.title}</div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={data.meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={data.meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <MapPin className="w-4 h-4" />
              {data.meta.location}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-foreground/50">
          <p>
            © {new Date().getFullYear()} {data.meta.name}. All work and code
            presented here.
          </p>
          <p className="mt-1">Built with Next.js, Tailwind CSS, and GSAP.</p>
        </div>
      </div>
    </footer>
  );
}
