// Import all SVG icons explicitly
import bun from "../assets/bun.svg";
import docker from "../assets/docker.svg";
import express from "../assets/express.svg";
import fastapi from "../assets/fastapi.svg";
import githubactions from "../assets/githubactions.svg";
import go from "../assets/go.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import mongodb from "../assets/mongodb.svg";
import supabase from "../assets/supabase.svg";
import redis from "../assets/redis.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import vercel from "../assets/vercel.svg";
import railway from "../assets/railway.svg";
import mysql from "../assets/mysql.svg";
import postgresql from "../assets/postgresql.svg";
import nodedotjs from "../assets/nodedotjs.svg";

// Map skill names to imported icons
const iconMap = {
  Bun: bun,
  Docker: docker,
  Express: express,
  FastApi: fastapi,
  "GitHub Actions": githubactions,
  Go: go,
  JavaScript: javascript,
  TypeScript: typescript,
  MongoDB: mongodb,
  Supabase: supabase,
  Redis: redis,
  React: react,
  Python: python,
  FastAPI: fastapi,
  Vercel: vercel,
  Railway: railway,
  MySQL: mysql,
  PostgreSQL: postgresql,
  "Node.js": nodedotjs,
};

export const SkillBadge = ({ name }) => {
  const icon = iconMap[name];
  return (
    <span
      className="hover:cursor-default inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-blue-500 bg-blue-500/90 text-sm font-medium text-white"
    >
      {icon && (
        <img src={icon} alt="" className="size-5 saturate-0 invert" loading="lazy" />
      )}
      {name}
    </span>
  );
}