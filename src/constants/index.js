import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI/UX Learner",
    icon: creator,
  },
  {
    title: "Backend Learner",
    icon: backend,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Frontend Developer (Learning & Freelance Projects)",
    company_name: "Self-Initiated",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Building personal projects using React, TypeScript, and Tailwind CSS.",
      "Practicing version control with Git and hosting code on GitHub.",
      "Following modern frontend development practices and UI/UX principles.",
      "Actively improving skills and preparing for real-world job opportunities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "All projects showcased here are the result of self-learning and relentless curiosity. If you're looking for a developer who learns fast and builds faster, you're looking at him.",
    name: "Vasu Singhal",
    designation: "Self-Taught Developer",
    company: "Independent",
    image: "https://your-image-url.png",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "A sleek car rental web app with a responsive UI, allowing users to browse, filter, and book rental vehicles.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/yourusername/car-rent", // Replace!
  },
  {
    name: "Job IT",
    description:
      "Job board application with dynamic filtering, salary estimates, and role-based search powered by REST APIs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/yourusername/job-it", // Replace!
  },
  {
    name: "Trip Guide",
    description:
      "A travel booking UI concept that includes flights, hotels, and destination suggestions with a clean design.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yourusername/trip-guide", // Replace!
  },
];

export { services, technologies, experiences, testimonials, projects };
