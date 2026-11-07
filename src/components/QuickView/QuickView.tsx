import type { ReactNode } from "react";
import { PROJECTS } from "../../content/projects";
import { contactLinks, PROFILE } from "../../content/profile";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <section className="mt-8 print:mt-5">
        <h2 className="mb-3 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-wider text-teal-800 uppercase">
            {title}
        </h2>
        {children}
    </section>
);

const btn =
    "rounded border border-neutral-300 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100";

/** Plain, scrollable, printable one-page résumé for people who just want the facts. */
const QuickView = () => {
    const links = contactLinks();
    const projects = PROJECTS.filter((p) => p.status !== "Placeholder");

    return (
        <div className="fixed inset-x-0 top-0 z-[300000] h-(--app-h) overflow-y-auto bg-neutral-100 print:static font-sans text-[16px] text-neutral-900 antialiased print:h-auto print:overflow-visible print:bg-white">
            <div className="sticky top-0 z-10 border-b border-neutral-200 bg-white/95 backdrop-blur print:hidden">
                <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-2 px-4 py-2">
                    <a href="#/" className={btn}>
                        ← Back to desktop
                    </a>
                    <span className="flex-1" />
                    {PROFILE.resumePdf && (
                        <a href={PROFILE.resumePdf} download={PROFILE.resumePdfName} className={btn}>
                            Download PDF
                        </a>
                    )}
                    <button type="button" onClick={() => window.print()} className={btn}>
                        Print / Save as PDF
                    </button>
                </div>
            </div>

            <main className="mx-auto max-w-3xl bg-white px-5 py-8 leading-relaxed sm:my-6 sm:rounded-lg sm:px-10 sm:shadow print:m-0 print:p-0 print:shadow-none">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <img
                        src={PROFILE.photo}
                        alt={PROFILE.name}
                        width={112}
                        height={112}
                        className="size-24 shrink-0 rounded-full object-cover sm:size-28"
                    />
                    <div>
                    <h1 className="text-3xl font-bold">{PROFILE.name}</h1>
                    <p className="text-lg text-neutral-600">
                        {PROFILE.title} · {PROFILE.location}
                    </p>
                    {links.length > 0 && (
                        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="text-teal-700 underline underline-offset-2">
                                        {l.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    </div>
                </header>

                <Section title="Summary">
                    <p>{PROFILE.summary}</p>
                </Section>

                <Section title="Experience">
                    <div className="flex flex-col gap-5">
                        {PROFILE.experience.map((e) => (
                            <div key={e.role}>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                    <h3 className="font-semibold">{e.role}</h3>
                                    <span className="text-sm text-neutral-500">{e.period}</span>
                                </div>
                                <p className="text-neutral-600 italic">
                                    {[e.company, e.place].filter(Boolean).join(", ")}
                                </p>
                                <ul className="mt-1 list-disc pl-5">
                                    {e.points.map((pt) => (
                                        <li key={pt}>{pt}</li>
                                    ))}
                                </ul>
                                <p className="mt-1 text-sm text-neutral-600">
                                    <span className="font-medium">Tech:</span> {e.stack.join(" · ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </Section>

                {projects.length > 0 && (
                    <Section title="Projects">
                        <div className="flex flex-col gap-4">
                            {projects.map((p) => (
                                <div key={p.id}>
                                    <h3 className="font-semibold">
                                        {p.title}
                                        {p.status && <span className="ml-2 text-sm font-normal text-neutral-500">{p.status}</span>}
                                    </h3>
                                    <p>{p.summary}</p>
                                    {p.stack.length > 0 && <p className="mt-1 text-sm text-neutral-600">{p.stack.join(" · ")}</p>}
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                <Section title="Skills">
                    <div className="flex flex-col gap-2">
                        {PROFILE.skills.map((g) => (
                            <div key={g.group} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                                <h3 className="w-24 shrink-0 text-sm font-semibold text-neutral-600 sm:pt-0.5">{g.group}</h3>
                                <ul className="flex flex-wrap gap-1.5">
                                    {g.items.map((s) => (
                                        <li
                                            key={s}
                                            className="rounded bg-neutral-100 px-2 py-0.5 text-sm print:border print:border-neutral-300"
                                        >
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Education">
                    <div className="flex flex-col gap-4">
                        {PROFILE.education.map((e) => (
                            <div key={e.program}>
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                    <h3 className="font-semibold">{e.program}</h3>
                                    <span className="text-sm text-neutral-500">{e.period}</span>
                                </div>
                                <p className="text-neutral-600 italic">{[e.school, e.place].filter(Boolean).join(", ")}</p>
                                <p className="mt-1 text-sm">{e.details}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Languages">
                    <p>{PROFILE.languages.join(" · ")}</p>
                </Section>
            </main>
        </div>
    );
};

export default QuickView;
