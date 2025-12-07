import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiEslint,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbDeviceDesktop } from "react-icons/tb";
import { MdAnimation, MdSpeed } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

export const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white dark:text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: VscGithubInverted, color: "text-current" },
  { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
  { name: "ESLint", icon: SiEslint, color: "text-[#4B32C3]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "VS Code", icon: DiVisualstudio, color: "text-[#007ACC]" },
];

export const specialties = [
  {
    title: "Frontend Architecture",
    description:
      "Building scalable, maintainable applications with modern frameworks and patterns",
    icon: MdSpeed,
    tags: [
      "Component Design",
      "State Management",
      "Performance",
      "Type Safety",
    ],
  },
  {
    title: "UI Engineering",
    description:
      "Creating polished interfaces with attention to detail and user experience",
    icon: MdAnimation,
    tags: [
      "Responsive Design",
      "CSS Animations",
      "Design Systems",
      "Accessibility",
    ],
  },
  {
    title: "Development Workflow",
    description:
      "Efficient tools and practices for consistent, high-quality delivery",
    icon: TbDeviceDesktop,
    tags: ["Version Control", "Build Tools", "Code Quality", "CI/CD"],
  },
];
