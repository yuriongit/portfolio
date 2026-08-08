import { SKILL_META, SKILLS } from "./info";
import { PROFILE } from "./info";
import { PROJECTS } from "./info";

const linkClasses =
  "relative text-neutral-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-violet-400 after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100";

function SkillBadge({ name }) {
  const meta = SKILL_META[name];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 ring-1 text-xs font-medium text-neutral-300 ${
        meta ? `${meta.bg} ${meta.ring}` : "bg-white/5 ring-white/10"
      }`}
    >
      {meta && (
        <img
          src={`https://cdn.simpleicons.org/${meta.icon}/${meta.color}`}
          alt=""
          className="h-3 w-3"
          loading="lazy"
        />
      )}
      {name}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="font-[Fraunces,Georgia,serif] mb-7 flex items-center gap-2 text-xl font-medium text-neutral-100">
      <span className="inline-block h-2 w-2 rounded-sm bg-violet-400" />
      {children}
    </h2>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950/96 font-['Inter',ui-sans-serif,system-ui,sans-serif] text-neutral-100 antialiased">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');`}</style>


      <div className="relative mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-24">
        {/* Header */}
        <header className="mb-14 sm:mb-16">
          <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <p className="font-['JetBrains_Mono',ui-monospace,monospace] mb-4 text-[11px] tracking-[0.15em] text-violet-400">
                {PROFILE.title.toUpperCase()}
              </p>
              <h1 className="font-[Fraunces,Georgia,serif] text-4xl font-medium tracking-tight text-white sm:text-5xl">
                {PROFILE.name}
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-400">
                {PROFILE.blurb}
              </p>
            </div>

            {/* Polaroid photo */}
            <div className="shrink-0 self-center rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:self-start">
              <div className="border border-neutral-800 bg-neutral-900 p-2 pb-7 shadow-md shadow-violet-950/75">
                <img
                  src={PROFILE.selfie}
                  alt={`${PROFILE.name} — self portrait`}
                  className="block w-32 object-cover sm:w-40"
                />
                <p className="font-['JetBrains_Mono',ui-monospace,monospace] mt-2 text-center text-[10px] tracking-wide text-neutral-500">
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClasses} font-medium text-violet-300`}
            >
              Resume
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={linkClasses}>
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className={linkClasses}>
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, "")}`} className={linkClasses}>
              {PROFILE.phone}
            </a>
          </div>
        </header>

        <div className="mb-14 h-px w-full bg-neutral-800 sm:mb-16" />

        {/* Skills */}
        <section className="mb-14 sm:mb-16">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="font-['JetBrains_Mono',ui-monospace,monospace] mb-2 text-[11px] tracking-widest text-violet-400/80">
                  {category.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-14 h-px w-full bg-neutral-800 sm:mb-16" />

        {/* Projects */}
        <section>
          <SectionHeading>Projects</SectionHeading>
          <div className="flex flex-col gap-8 sm:gap-10">
            {PROJECTS.map((p, i) => {
              const isOpenSource = Boolean(p.link);
              return (
                <article
                  key={p.name}
                  className="border-l border-neutral-800 pl-4 transition-[border-color,padding] duration-200 hover:border-violet-400 hover:pl-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="font-['JetBrains_Mono',ui-monospace,monospace] text-xs text-violet-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium text-white underline decoration-neutral-600 decoration-1 underline-offset-4 hover:decoration-violet-400 sm:text-[17px]"
                        >
                            {p.name}
                        </a>
                      ) : (
                        <h3 className="text-base font-medium text-white sm:text-[17px]">{p.name}</h3>
                      )}
                    </div>
                    <span className="font-['JetBrains_Mono',ui-monospace,monospace] text-[11px] text-neutral-500">
                      {p.period}
                    </span>
                  </div>

                  <p className="font-['JetBrains_Mono',ui-monospace,monospace] mt-1 text-xs uppercase tracking-wide text-neutral-500">
                    {p.definition}
                  </p>

                  <span
                    className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ${
                      isOpenSource
                        ? "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20"
                        : "bg-neutral-500/10 text-neutral-400 ring-neutral-500/20"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${isOpenSource ? "bg-emerald-400" : "bg-neutral-500"}`}
                    />
                    {isOpenSource ? "Open-Source" : "Closed-Source"}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded bg-white/5 px-1.5 py-0.5 text-xs font-medium text-neutral-500">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}