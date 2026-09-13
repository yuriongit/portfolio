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
  resumeUrl: resume,
  selfie: selfie,
};

export const SKILLS = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  "Frameworks": ["Express", "FastAPI", "Gin", "React"],
  "Databases": ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
  "DevOps & Infrastructure": ["GitHub Actions", "Docker", ],
  "Build Tools & Runtimes": ["Node.js", "Bun"],
  "Development Environment": ["Linux", "Ubuntu"]
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
  "Linux": "linux",
  "Ubuntu": "ubuntu",
  "Gin": "gin",
}

export const PROJECTS = [
  {
    name: "Punch",
    definition: "HTTP Load Tester",
    period: "Aug, 2026 - Present",
    stack: ["Go", "BubbleTea", "Gin", "Docker", "Redis", "TypeScript", "React"],
    description:
      "Punch is a HTTP load tester. Planned to be available as both a CLI tool and web app. Being built to deepen my understanding of Docker, GitHub Actions, and handling concurrency with Go.",
    link: "https://github.com/yuriongit/punch",
  },
  {
    name: "Lilify",
    definition: "URL Shortener",
    period: "Jul, 2026 - Aug, 2026",
    stack: ["TypeScript", "Express", "MongoDB", "Docker", "GitHub Actions"],
    description:
      "A simple URL shortener, built with the purpose of focusing on learning and utilizing Docker alongside GitHub Actions.",
    link: "https://github.com/yuriongit/lilify",
  },
  {
    name: "CourtDreamz",
    definition: "NBA Fantasy Basketball",
    period: "Jun, 2026 - Present",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Cloudinary"],
    description: "Building an NBA fantasy basketball application that integrates the NBA Stats API into a custom FastAPI service with Redis caching and background workers for automated data synchronization.",
    link: null,
  },
  {
    name: "N/A",
    definition: "Internal Product Management System",
    description: "Built an internal product management system for an embroidery company, replacing a manual and error-prone Google-Sheets workflow for tracking customer orders.",
    period: "Apr, 2026",
    stack: ["TypeScript", "Express", "PostgreSQL", "Supabase"],
    link: null
  },
];
