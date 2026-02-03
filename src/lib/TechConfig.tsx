import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiZod,
  SiCloudinary,
} from "react-icons/si";
import { Cloud, Cpu, Layers, Palette, Server } from "lucide-react";
import {
  BetterAuth,
  GSAP,
  Postmark,
  Resend,
} from "../components/Icons/MyBrandIcons";

export const categoryIcons: Record<string, React.ReactNode> = {
  Core: <Layers className="text-primary" size={25} />,
  Frontend: <Palette className="text-primary" size={25} />,
  Backend: <Server className="text-primary" size={25} />,
  "Infrastructure & Services": <Cloud className="text-primary" size={25} />,
};

export const iconMap: Record<
  string,
  { icon: React.ReactNode; hoverColor: string }
> = {
  "Next.js": {
    icon: <SiNextdotjs size={24} />,
    hoverColor:
      "group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]",
  },
  React: {
    icon: <SiReact size={24} />,
    hoverColor:
      "group-hover:text-[#61DAFB] group-hover:drop-shadow-[0_0_20px_rgba(97,218,251,0.8)] group-hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]",
  },
  TypeScript: {
    icon: <SiTypescript size={24} />,
    hoverColor:
      "group-hover:text-[#3178C6] group-hover:drop-shadow-[0_0_20px_rgba(49,120,198,0.8)] group-hover:shadow-[0_0_30px_rgba(49,120,198,0.3)]",
  },

  "Tailwind CSS": {
    icon: <SiTailwindcss size={24} />,
    hoverColor:
      "group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  GSAP: {
    icon: <GSAP className="w-6 h-6" />,
    hoverColor:
      "group-hover:text-[#88CE02] group-hover:drop-shadow-[0_0_20px_rgba(136,206,2,0.9)] group-hover:shadow-[0_0_30px_rgba(136,206,2,0.3)]",
  },

  PostgreSQL: {
    icon: <SiPostgresql size={24} />,
    hoverColor:
      "group-hover:text-[#3366CC] group-hover:drop-shadow-[0_0_20px_rgba(51,102,204,0.9)] group-hover:shadow-[0_0_30px_rgba(51,102,204,0.3)]",
  },
  Prisma: {
    icon: <SiPrisma size={24} />,
    hoverColor:
      "group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover:shadow-[0_0_30px_rgba(0,0,0,0.8)]",
  },
  "Better Auth": {
    icon: <BetterAuth className="w-6 h-6" />,
    hoverColor:
      "group-hover:text-[#059669] group-hover:drop-shadow-[0_0_20px_rgba(5,150,105,0.9)] group-hover:shadow-[0_0_30px_rgba(5,150,105,0.3)]",
  },
  Zod: {
    icon: <SiZod size={24} />,
    hoverColor:
      "group-hover:text-[#3B82F6] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.55)] group-hover:shadow-[0_0_52px_rgba(59,130,246,0.25)]",
  },

  Cloudinary: {
    icon: <SiCloudinary size={24} />,
    hoverColor:
      "group-hover:text-[#2C3E9E] group-hover:drop-shadow-[0_0_26px_rgba(44,62,158,0.55)] group-hover:shadow-[0_0_42px_rgba(44,62,158,0.55)]",
  },
  Postmark: {
    icon: <Postmark className="w-6 h-6" />,
    hoverColor:
      "group-hover:text-[#FFE01B] group-hover:drop-shadow-[0_0_20px_rgba(255,224,27,0.9)] group-hover:shadow-[0_0_32px_rgba(255,224,27,0.35)]",
  },
  Arcjet: {
    icon: <Cpu size={24} />,
    hoverColor:
      "group-hover:text-[#7C3AED] group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.9)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
  },
  Resend: {
    icon: <Resend className="w-6 h-6" />,
    hoverColor:
      "group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.85)] group-hover:shadow-[0_0_36px_rgba(255,255,255,0.25)]",
  },
};
