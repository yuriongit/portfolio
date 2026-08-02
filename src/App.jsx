import { PROFILE } from "./info";
import { SKILLS } from "./info";
import { PROJECTS } from "./info";
export default function Portfolio() {
    return (
        <div
            className="min-h-screen antialiased"
            style={{
                background: "#FAFAF8",
                color: "#171614",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .serif { font-family: 'Fraunces', Georgia, serif; }
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .accent-link {
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .accent-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: #9C6B2E;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.25s ease;
        }
        .accent-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .project-row {
          transition: border-color 0.2s ease, padding-left 0.2s ease;
        }
        .project-row:hover {
          border-left-color: #9C6B2E !important;
          padding-left: 20px !important;
        }
        .polaroid {
          transform: rotate(3deg);
          transition: transform 0.35s ease;
        }
        .polaroid:hover {
          transform: rotate(0.5deg) scale(1.015);
        }
      `}</style>

            <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
                {/* Header */}
                <header className="mb-16">
                    <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0 flex-1">
                            <p className="mono mb-4 text-[11px] tracking-[0.15em]" style={{ color: "#9C6B2E" }}>
                                {PROFILE.title.toUpperCase()}
                            </p>
                            <h1 className="serif text-4xl font-medium tracking-tight sm:text-5xl">{PROFILE.name}</h1>
                            <p className="mt-6 max-w-xl text-[15px] leading-relaxed" style={{ color: "#5C584F" }}>
                                {PROFILE.blurb}
                            </p>
                        </div>

                        {/* Polaroid photo */}
                        <div className="polaroid shrink-0 self-center sm:self-start">
                            <div
                                style={{
                                    background: "#FFFFFF",
                                    padding: "8px 8px 28px 8px",
                                    boxShadow: "0 10px 28px rgba(23, 22, 20, 0.14)",
                                    border: "1px solid #E5E2D9",
                                }}
                            >
                                <img
                                    src={PROFILE.selfie}
                                    alt={`${PROFILE.name} — self portrait`}
                                    className="block w-36 object-cover sm:w-41"
                                />
                                <p
                                    className="mono mt-2 text-center rotate-90 text-sm tracking-wide"
                                    style={{ color: "#9C948A" }}
                                >
                                    :)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        <a
                            href={PROFILE.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accent-link font-medium"
                        >
                            Resume
                        </a>
                        <a
                            href={PROFILE.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accent-link"
                            style={{ color: "#5C584F" }}
                        >
                            GitHub
                        </a>
                        <a
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="accent-link"
                            style={{ color: "#5C584F" }}
                        >
                            LinkedIn
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="accent-link" style={{ color: "#5C584F" }}>
                            {PROFILE.email}
                        </a>
                        <a
                            href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, "")}`}
                            className="accent-link"
                            style={{ color: "#5C584F" }}
                        >
                            {PROFILE.phone}
                        </a>
                    </div>
                </header>

                <div className="mb-16 h-px w-full" style={{ background: "#E5E2D9" }} />

                {/* Skills */}
                <section className="mb-16">
                    <h2 className="serif mb-7 text-xl font-medium" style={{ color: "#171614" }}>
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                        {Object.entries(SKILLS).map(([category, items]) => (
                            <div key={category}>
                                <p className="mono mb-1.5 text-[11px] tracking-widest" style={{ color: "#9C6B2E" }}>
                                    {category.toUpperCase()}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: "#3C3934" }}>
                                    {items.join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mb-16 h-px w-full" style={{ background: "#E5E2D9" }} />

                {/* Projects */}
                <section>
                    <h2 className="serif mb-7 text-xl font-medium" style={{ color: "#171614" }}>
                        Projects
                    </h2>
                    <div className="flex flex-col gap-9">
                        {PROJECTS.map((p, i) => (
                            <article
                                key={p.name}
                                className="project-row"
                                style={{
                                    borderLeft: "1px solid #E5E2D9",
                                    paddingLeft: "16px",
                                }}
                            >
                                <div className="mb-1.5 flex items-baseline gap-3">
                                    <span className="mono text-xs" style={{ color: "#9C6B2E" }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="text-[15px] font-medium">{p.name}</h3>
                                    <span className="mono ml-auto text-[11px]" style={{ color: "#9C948A" }}>
                                        {p.period}
                                    </span>
                                </div>
                                <p className="mb-3 text-sm leading-relaxed" style={{ color: "#5C584F" }}>
                                    {p.description}
                                </p>
                                <div className="flex flex-wrap gap-x-3 gap-y-1">
                                    {p.stack.map((s) => (
                                        <span key={s} className="mono text-[11px]" style={{ color: "#9C948A" }}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <footer className="mono mt-20 text-[11px]" style={{ color: "#9C948A" }}>
                    {PROFILE.name} — {new Date().getFullYear()}
                </footer>
            </div>
        </div>
    );
}
