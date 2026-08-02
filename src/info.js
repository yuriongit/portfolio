import resume from "./assets/resume.pdf"
import selfie from "./assets/selfie.webp"

export const PROFILE = {
  name: "Yuri Okeren",
  title: "Software Engineer",
  blurb:
    "Software Engineer with 1 over year of experience building full-stack applications, from API design through deployment, with a growing focus on backend systems and architecture.",
  email: "yuri.dev44@outlook.com",
  phone: "365-737-0015",
  github: "https://github.com/yuriongit",
  linkedin: "http://linkedin.com/in/yuri-okeren/",
  resumeUrl: resume,
  selfie: selfie
};

export const SKILLS = {
  Languages: ["TypeScript", "Go", "Python", "SQL", "JavaScript"],
  Frameworks: ["Node.js", "Bun", "Express", "FastAPI", "React"],
  "Data & infra": ["MongoDB", "Redis", "Supabase", "Docker", "Docker Compose"],
  Tooling: ["Git", "GitHub Actions", "Vim", "Postman", "Vitest / Pytest"],
};

export const PROJECTS = [
  {
    name: "Fantasy Basketball Platform",
    period: "June 2026 — present",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Cloudinary"],
    description:
      "Architected a multi-service fantasy sports platform, defining service boundaries, caching, and data ownership before implementation. Built a paginated FastAPI service for player and team data with background workers syncing live NBA stats.",
    link: null,
  },
  {
    name: "Distributed Load Tester",
    period: "July 2026",
    stack: ["Go", "Docker", "PowerShell 7"],
    description:
      "Built a distributed HTTP load testing framework over a custom TCP protocol, sustaining 500k+ requests per second through concurrent worker orchestration, health monitoring, and semaphore-based concurrency control.",
    link: null,
  },
  {
    name: "URL Shortener",
    period: "July 2026 — present",
    stack: ["TypeScript", "Express", "MongoDB", "Docker", "GitHub Actions"],
    description:
      "Built a URL-shortening REST API with collision-safe key generation and a SvelteKit frontend, validating input on both client and API with shared types throughout. Containerized with Docker Compose and CI via GitHub Actions.",
    link: null,
  },
];