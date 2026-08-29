import { SKILL_META } from "../info";

export const SkillBadge = ({ name }) => {
  const meta = SKILL_META[name];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.75 ring-1 text-[13px] font-medium text-neutral-700 dark:text-neutral-300 ${
        meta ? `${meta.bg} ${meta.ring}` : "bg-neutral-900/5 dark:bg-white/5 ring-neutral-900/10 dark:ring-white/10"
      }`}
    >
      {meta && (
        <img src={`https://cdn.simpleicons.org/${meta.icon}/${meta.color}`} alt="" className="h-3.5 w-3.5" loading="lazy" />
      )}
      {name}
    </span>
  );
}