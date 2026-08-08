import resume from "./assets/resume.pdf";
import selfie from "./assets/selfie.webp";

export const PROFILE = {
  name: "Yuri Okeren",
  title: "Software Engineer",
  blurb:
    "Software Engineer with over a year of experience building full-stack applications, from API design through deployment, with a growing focus on backend systems and architecture.",
  email: "yuri.dev44@outlook.com",
  phone: "365-737-0015",
  github: "https://github.com/yuriongit",
  linkedin: "http://linkedin.com/in/yuri-okeren/",
  resumeUrl: resume,
  selfie: selfie,
};

export const SKILLS = {
  Languages: ["TypeScript", "Go", "Python", "SQL", "JavaScript"],
  "Frameworks & Libraries": ["Express", "FastAPI", "React", "Vitest", "Pytest"],
  Databases: ["MongoDB", "Supabase", "Redis"],
  "DevOps & Infra": ["Git", "GitHub Actions", "Docker"],
  "Build Tools & Runtimes": ["Bun", "Node.js"],
  Tooling: ["Vim", "Postman"],
};

// Logo + brand-tinted badge per skill, via the Simple Icons CDN.
// Class strings are written out in full (not built with template interpolation)
// so Tailwind's compiler can statically find and generate them.
export const SKILL_META = {
  TypeScript: { icon: "typescript", color: "3178C6", bg: "bg-[#3178C6]/10", ring: "ring-[#3178C6]/20" },
  Go: { icon: "go", color: "00ADD8", bg: "bg-[#00ADD8]/10", ring: "ring-[#00ADD8]/20" },
  Python: { icon: "python", color: "3776AB", bg: "bg-[#3776AB]/10", ring: "ring-[#3776AB]/20" },
  SQL: { icon: "mysql", color: "4479A1", bg: "bg-[#4479A1]/10", ring: "ring-[#4479A1]/20" },
  JavaScript: { icon: "javascript", color: "F7DF1E", bg: "bg-[#F7DF1E]/10", ring: "ring-[#F7DF1E]/20" },
  "Node.js": { icon: "nodedotjs", color: "339933", bg: "bg-[#339933]/10", ring: "ring-[#339933]/20" },
  Bun: { icon: "bun", color: "FBF0DF", bg: "bg-[#E25098]/15", ring: "ring-[#E25098]/20" },
  Express: { icon: "express", color: "FFFFFF", bg: "bg-white/10", ring: "ring-white/20" },
  FastAPI: { icon: "fastapi", color: "009688", bg: "bg-[#009688]/10", ring: "ring-[#009688]/20" },
  React: { icon: "react", color: "61DAFB", bg: "bg-[#61DAFB]/10", ring: "ring-[#61DAFB]/20" },
  MongoDB: { icon: "mongodb", color: "47A248", bg: "bg-[#47A248]/10", ring: "ring-[#47A248]/20" },
  Redis: { icon: "redis", color: "DC382D", bg: "bg-[#DC382D]/10", ring: "ring-[#DC382D]/20" },
  Supabase: { icon: "supabase", color: "3ECF8E", bg: "bg-[#3ECF8E]/10", ring: "ring-[#3ECF8E]/20" },
  "GitHub Actions": { icon: "githubactions", color: "2088FF", bg: "bg-[#2088FF]/10", ring: "ring-[#2088FF]/20" },
  Docker: { icon: "docker", color: "2496ED", bg: "bg-[#2496ED]/10", ring: "ring-[#2496ED]/20" },
  Git: { icon: "git", color: "F05032", bg: "bg-[#F05032]/10", ring: "ring-[#F05032]/20" },
  Vim: { icon: "vim", color: "019733", bg: "bg-[#019733]/10", ring: "ring-[#019733]/20" },
  Postman: { icon: "postman", color: "FF6C37", bg: "bg-[#FF6C37]/10", ring: "ring-[#FF6C37]/20" },
  Vitest: { icon: "vitest", color: "6E9F18", bg: "bg-[#6E9F18]/10", ring: "ring-[#6E9F18]/20" },
  Pytest: { icon: "pytest", color: "0A9EDC", bg: "bg-[#0A9EDC]/10", ring: "ring-[#0A9EDC]/20" },
};

export const PROJECTS = [
  {
    name: "CourtDreamz",
    definition: "Fantasy Basketball Platform",
    period: "June 2026 - Present",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Cloudinary"],
    description:
      "Architected a multi-service fantasy sports platform, defining service boundaries, caching, and data ownership before implementation. Built a paginated FastAPI service for player and team data with background workers syncing live NBA stats.",
    link: null,
  },
  {
    name: "Punch",
    definition: "Distributed Load Tester",
    period: "July 2026",
    stack: ["Go", "Docker", "PowerShell 7"],
    description:
      "Built a distributed HTTP load testing framework over a custom TCP protocol, sustaining 500k+ requests per second through concurrent worker orchestration, health monitoring, and semaphore-based concurrency control.",
    link: null,
  },
  {
    name: "Lilify",
    definition: "URL Shortener",
    period: "July 2026 - Present",
    stack: ["TypeScript", "Express", "MongoDB", "Docker", "GitHub Actions"],
    description:
      "Built a URL-shortening REST API with collision-safe key generation and a React frontend, validating input on both client and API with shared types throughout. Containerized with Docker and CI via GitHub Actions.",
    link: "https://github.com/yuriongit/lilify",
  },
];