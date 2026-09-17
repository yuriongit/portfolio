// Import all SVG icons explicitly
import bun from "../assets/icons/bun.svg";
import docker from "../assets/icons/docker.svg";
import express from "../assets/icons/express.svg";
import fastapi from "../assets/icons/fastapi.svg";
import githubactions from "../assets/icons/githubactions.svg";
import go from "../assets/icons/go.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import mongodb from "../assets/icons/mongodb.svg";
import redis from "../assets/icons/redis.svg";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import vercel from "../assets/icons/vercel.svg";
import railway from "../assets/icons/railway.svg";
import mysql from "../assets/icons/mysql.svg";
import postgresql from "../assets/icons/postgresql.svg";
import nodedotjs from "../assets/icons/nodedotjs.svg";
import linux from "../assets/icons/linux.svg";
import ubuntu from "../assets/icons/ubuntu.svg";
import gin from "../assets/icons/gin.svg";

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
  Redis: redis,
  React: react,
  Python: python,
  FastAPI: fastapi,
  Vercel: vercel,
  Railway: railway,
  MySQL: mysql,
  PostgreSQL: postgresql,
  "Node.js": nodedotjs,
  Linux: linux,
  Ubuntu: ubuntu,
  Gin: gin
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