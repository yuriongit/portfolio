import resume from "./assets/resume.pdf";
import selfie from "./assets/selfie.webp";
// Lilify images
import lilifyHome from "./assets/projects/lilify/home.png";
import lilifyShortenedExample from "./assets/projects/lilify/shortened-url.png";
import lilifyLoading from "./assets/projects/lilify/loading.png";
import lilifyRedirected from "./assets/projects/lilify/redirected.png";
// CourtDreamz images
import courtdreamzChooseCaptain from "./assets/projects/courtdreamz/choose-captain.png";
export const PROFILE = {
  name: "Yuri Okeren",
  title: "Software Engineer",
  blurb:
    "a Software Engineer with 1½ years of experience building full-stack applications, with a focus on backend systems, APIs, and service architecture.",
  email: "yuri.dev44@outlook.com",
  phone: "3657370015",
  github: "https://github.com/yuriongit",
  resumeUrl: resume,
  selfie: selfie,
};

export const SKILLS = {
  Languages: ["Go", "TypeScript", "JavaScript", "Python", "SQL"],
  Frameworks: ["Express", "Gin", "FastAPI", "React"],
  Databases: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  "DevOps & Infrastructure": ["GitHub Actions", "Docker"],
  "Build Tools & Runtimes": ["Node.js", "Bun"],
  "Development Environment": ["Linux", "Ubuntu"],
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
  Redis: "redis",
  React: "react",
  Python: "python",
  FastAPI: "fastapi",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  "Node.js": "nodedotjs",
  Linux: "linux",
  Ubuntu: "ubuntu",
  Gin: "gin",
};

export const PROJECTS = [
  {
    name: "Punch",
    definition: "HTTP Load Tester",
    period: "Aug, 2026 - Present",
    stack: ["Go", "Cobra", "GitHub Actions"],
    description:
      "A customizable, simple, and lightweight HTTP CLI load testing tool. You give it a config file describing the test you want to run, and it sends requests to your target and its children (multiple paths if specified), and reports how it performed.",
    link: "https://github.com/yuriongit/punch",
  },
  {
    name: "Lilify",
    definition: "URL Shortener",
    period: "Jul, 2026 - Aug, 2026",
    stack: ["TypeScript", "Express", "MongoDB", "Redis", "Docker", "GitHub Actions"],
    description:
      "A simple URL shortener, built with the purpose of focusing on learning and utilizing Docker alongside GitHub Actions.",
    link: "https://github.com/yuriongit/lilify",
    images: [lilifyHome, lilifyShortenedExample, lilifyLoading, lilifyRedirected],
  },
  {
    name: "CourtDreamz",
    definition: "NBA Fantasy Basketball",
    period: "Jun, 2026 - Present",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Cloudinary"],
    description:
      "Building an NBA fantasy basketball application that integrates the NBA Stats API into a custom FastAPI service background workers for automated data synchronization.",
    link: null,
    images: [courtdreamzChooseCaptain]
  },
  {
    name: "Clientele Tooling",
    definition: "Internal Product Management System",
    description:
      "Built an internal product management system for an embroidery company, replacing a manual and error-prone Google-Sheets workflow for tracking customer orders.",
    period: "Apr, 2026",
    stack: ["TypeScript", "Express", "PostgreSQL", "Supabase"],
    link: null,
  },
];
