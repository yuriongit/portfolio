import { SKILLS } from "./info";
import { PROFILE } from "./info";
import { PROJECTS } from "./info";
import { SkillBadge } from "./components/SkillBadge";
import { SectionHeading } from "./components/SectionHeading";
import { Button, Link } from "./components/Button";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-neutral-900 antialiased tracking-tighter">
      <div className="relative mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-24 w-full">
        {/* Header */}
        <header className="mb-14 sm:mb-16 gap-8 flex items-center">
          <div className="gap-y-8 flex flex-col">
            <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 space-y-4.5">
                <div className="flex items-start flex-col gap-4">
                  <p className="italic">
                    Hey, I'm 
                  </p>
                  <h1 className="text-4xl uppercase font-black text-neutral-900 sm:text-5xl">
                    {PROFILE.name.slice(0, 4)}
                    <span className="ml-4">{PROFILE.name.slice(5, 11)}</span>,
                  </h1>
                </div>
                <p className="max-w-lg text-[15px] leading-relaxed text-neutral-600">
                  a <span className="text-blue-500 font-extrabold underline decoration-blue-500 decoration-dashed underline-offset-4">Software Engineer</span> with 1+ year of experience building full-stack applications, with a focus on backend systems,
                  APIs, and service architecture.
                </p>
              </div>
            </div>

            <div className="flex w-fit items-center gap-x-5 text-sm">
              <div className="bg-black/5 border-black/15 border p-2 flex items-center gap-2 rounded-md">
                <Button 
                  isLink={true}
                  href={PROFILE.resumeUrl} 
                  text={"Resume"}
                  size={1} />
                <Link
                  text={"GitHub"}
                  regular={false}
                  href={PROFILE.github}/>
              </div>
              <Link
                regular={true}
                text={"LinkedIn"}
                href={PROFILE.linkedin}/>
              <Link
                text={"Email"}
                regular={true}
                href={`mailto:${PROFILE.email}`}/>
              <Link
                text={"Phone"}
                regular={true}
                href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, "")}`}/>
            </div>
          </div>
          {/* Polaroid photo */}
          <div className="shrink-0 self-center sm:self-start">
            <div className="border border-neutral-200 bg-white p-2 pb-7 inset-shadow-sm/25 shadow-lg/35 shadow-blue-500 inset-shadow-blue-300/60">
              <img
                src={PROFILE.selfie}
                alt={`Yuri's self portrait`}
                className="block w-32 object-cover sm:w-45"
              />
              <p className="font-['JetBrains_Mono',ui-monospace,monospace] mt-2 text-center text-[10px] tracking-wide text-neutral-500"></p>
            </div>
          </div>
        </header>

        <div className="mb-14 h-px w-full bg-neutral-200" />

        {/* Skills */}
        <section className="mb-14 sm:mb-16">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="mb-2 text-xs font-extrabold tracking-widest text-blue-500/80 80">
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

        <div className="mb-14 h-px w-full bg-neutral-200 sm:mb-16" />

        {/* Projects */}
        <section className="flex flex-col gap-5">
          <SectionHeading>Projects</SectionHeading>
          <div className="flex flex-col gap-5">
            {PROJECTS.map((p, i) => {
              const isOpenSource = Boolean(p.link);
              return (
                <article
                  key={p.name}
                  className="rounded-xl border inset-shadow-sm hover:inset-shadow-blue-500/50 inset-shadow-blue-500/25 hover:bg-blue-50/50 border-neutral-200 p-6 transition-all duration-150 hover:border-neutral-300"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-extrabold text-neutral-900 sm:text-[17px]">
                      {p.name}
                    </h3>
                    <span className="text-[13px] text-neutral-500">
                      {p.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="text-[13px] font-bold text-neutral-700">{p.definition}</p>
                    <span className="text-neutral-300">·</span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[13px] font-bold ${
                        isOpenSource
                          ? "text-emerald-600"
                          : "text-neutral-400"
                      }`}
                    >
                      {isOpenSource ? "Open-Source" : "Closed-Source"}
                    </span>
                  </div>

                  <div className="w-full h-px mt-2.5 bg-zinc-500/35" />

                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.description}</p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded bg-neutral-900/5 px-1.5 py-0.5 text-xs font-medium text-neutral-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <Button 
                        isLink={true}
                        href={p.link} 
                        text={"Visit Repo"}
                        size={1} />
                    )}
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
