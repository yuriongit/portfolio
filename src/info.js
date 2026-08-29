import resume from "./public/resume.pdf";
import selfie from "./public/selfie.webp";

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
  "Frameworks & Libraries": ["Express", "FastAPI", "React"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase"],
  "DevOps & Infrastructure": ["GitHub Actions", "Docker"],
  "Build Tools & Runtimes": ["Bun", "Node.js"],
  "Deployment & Hosting": ["Railway", "Vercel"]
};


// Logo + brand-tinted badge per skill, via the Simple Icons CDN.
// Class strings are written out in full (not built with template interpolation)
// so Tailwind's compiler can statically find and generate them.
export const SKILL_META = {
  Bun: "bun",
  Docker: "docker",
  Express: "express",
  FastApi: "fastapi",
  "GitHub Actions": "githubactions",
  Go: "go",
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  MongoDB: "mongodb",
  Supabase: "supabase",
  Redis: "redis",
  React: "react",
  Python: "python",
  FastAPI: "fastapi",
  Vercel: "vercel",
  Railway: "railway",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  "Node.js": "nodedotjs",
}

export const PROJECTS = [
  {
    name: "CourtDreamz",
    definition: "Fantasy Basketball Platform",
    period: "Jun, 2026 - Present",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Cloudinary"],
    description:
      "Built a multi-service fantasy sports platform integrating the Swar NBA API into a custom FastAPI service with Redis caching and background workers for automated data synchronization.",
    link: null,
  },
  {
    name: "N/A - Clientele Internal Tooling",
    definition: "Internal Product Management System",
    description: "Built an internal product management system for an embroidery business, replacing a manual and error-prone Google Sheets workflow for tracking customer orders.",
    period: "Apr, 2026",
    stack: ["TypeScript", "Express", "PostgreSQL", "Supabase"],
    link: null
  },
  {
    name: "Lilify",
    definition: "URL Shortener",
    period: "Jul, 2026 - Aug, 2026",
    stack: ["TypeScript", "Express", "MongoDB", "Redis", "Docker", "GitHub Actions"],
    description:
      "A small project primarily focused on learning and applying GitHub Actions and Docker. Currently live; see repository for more details.",
    link: "https://github.com/yuriongit/lilify",
  },
  {
    name: "Punch",
    definition: "Distributed Load Tester",
    period: "Jul, 2026",
    stack: ["Go", "Docker", "PowerShell"],
    description:
      "Built a small HTTP load testing tool in Go to explore concurrency, goroutines, mutexes, and coordinating concurrent workers.",
    link: null,
  },
];
