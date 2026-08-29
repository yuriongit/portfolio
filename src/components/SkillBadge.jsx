import { SKILL_META } from "../info";

export const SkillBadge = ({ name }) => {
  const icon = SKILL_META[name];
  return (
    <span
      className="hover:cursor-default inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-blue-500 bg-blue-500/90 text-sm font-medium text-white"
    >
      {icon && (
        <img src={`src/public/skill-icons/${icon}.svg`} alt="" className="size-5 saturate-0 invert" loading="lazy" />
      )}
      {name}
    </span>
  );
}