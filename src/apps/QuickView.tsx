import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { PROJECTS } from "../content/projects";
import { contactLinks, useProfile } from "../content/profile";
import { useLang } from "../i18n/lang";
import { useStrings } from "../i18n/strings";
import Icon from "../components/Icon";
import LanguageRadios from "../components/LanguageRadios";
import { StatusBar, Well } from "./shared";

/** Win98 group box: etched border with the title in the top edge. */
const Section = ({ title, children }: { title: string; children: ReactNode }) => (
    <fieldset className="mt-5 border border-classic-dark px-4 pt-1 pb-3 shadow-[1px_1px_#fff] print:mt-4 print:break-inside-avoid-page print:shadow-none">
        <legend className="px-1 font-bold">{title}</legend>
        {children}
    </fieldset>
);

const Chip = ({ children }: { children: ReactNode }) => (
    <li className="bg-classic-grey px-2 py-0.5 bevel-raised print:border print:border-classic-dark print:bg-white print:shadow-none">
        {children}
    </li>
);

/** The one-page résumé itself, shared by the window and the print copy. */
const ResumeDocument = () => {
    const lang = useLang();
    const t = useStrings().quickView;
    const profile = useProfile();
    const links = contactLinks(lang);

    return (
        <article className="mx-auto max-w-3xl px-5 py-6 text-[13px] leading-relaxed max-sm:px-3 max-sm:text-[15px] print:max-w-none print:p-0 print:text-[11pt]">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5 print:flex-row print:items-center">
                <img
                    src={profile.photo}
                    alt={profile.name}
                    width={96}
                    height={96}
                    className="size-24 shrink-0 bg-white object-cover p-[2px] bevel-sunken print:shadow-none"
                />
                <div>
                    <h1 className="text-[22px] font-bold leading-tight">{profile.name}</h1>
                    <p className="text-[15px] text-classic-darker">
                        {profile.title} · {profile.location}
                    </p>
                    {links.length > 0 && (
                        <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} target="_blank" rel="noreferrer" className="text-classic-blue underline">
                                        {l.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </header>

            <Section title={t.summary}>
                <p>{profile.summary}</p>
            </Section>

            <Section title={t.experience}>
                <div className="flex flex-col gap-4">
                    {profile.experience.map((e) => (
                        <div key={e.role}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                <h3 className="font-bold">{e.role}</h3>
                                <span className="text-classic-darker">{e.period}</span>
                            </div>
                            <p className="text-classic-darker italic">{[e.company, e.place].filter(Boolean).join(", ")}</p>
                            <ul className="mt-1 list-disc pl-5">
                                {e.points.map((pt) => (
                                    <li key={pt}>{pt}</li>
                                ))}
                            </ul>
                            <p className="mt-1 text-classic-darker">
                                <b>{t.tech}</b> {e.stack.join(" · ")}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t.projects}>
                <div className="flex flex-col gap-3">
                    {PROJECTS.map((p) => (
                        <div key={p.id}>
                            <h3 className="font-bold">
                                {p.title[lang]}
                                {p.status && <span className="ml-2 font-normal text-classic-darker">{p.status[lang]}</span>}
                            </h3>
                            <p>{p.summary[lang]}</p>
                            {p.stack.length > 0 && <p className="mt-0.5 text-classic-darker">{p.stack.join(" · ")}</p>}
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t.skills}>
                <div className="flex flex-col gap-2">
                    {profile.skills.map((g) => (
                        <div key={g.group} className="flex flex-col gap-1 sm:flex-row sm:gap-3 print:flex-row">
                            <h3 className="w-24 shrink-0 font-bold sm:pt-0.5">{g.group}</h3>
                            <ul className="flex flex-wrap gap-1">
                                {g.items.map((s) => (
                                    <Chip key={s}>{s}</Chip>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t.education}>
                <div className="flex flex-col gap-3">
                    {profile.education.map((e) => (
                        <div key={e.program}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                <h3 className="font-bold">{e.program}</h3>
                                <span className="text-classic-darker">{e.period}</span>
                            </div>
                            <p className="text-classic-darker italic">{[e.school, e.place].filter(Boolean).join(", ")}</p>
                            <p className="mt-0.5">{e.details}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title={t.languages}>
                <p>{profile.languages.join(" · ")}</p>
            </Section>
        </article>
    );
};

const toolBtn =
    "flex items-center gap-1.5 px-2 py-0.5 hover:bevel-raised active:bevel-pressed max-sm:py-2 focus-visible:outline-1 focus-visible:outline-dotted";

/** Quick View: the plain one-page résumé as a regular desktop window. */
const QuickView = () => {
    const strings = useStrings();
    const t = strings.quickView;
    const profile = useProfile();

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            {/* Toolbar */}
            <div className="mb-0.5 flex shrink-0 flex-wrap items-center gap-1 border-b border-b-classic-dark pb-0.5 shadow-[0_1px_#fff]">
                {profile.resumePdf && (
                    <a href={profile.resumePdf} download={profile.resumePdfName} className={toolBtn}>
                        <Icon name="pdf" size={16} />
                        {t.download}
                    </a>
                )}
                <button type="button" onClick={() => window.print()} className={toolBtn}>
                    <Icon name="document" size={16} />
                    {t.print}
                </button>
                <LanguageRadios name="quickview-lang" label={t.language} className="ml-auto px-2 max-sm:ml-0" />
            </div>

            <Well>
                <ResumeDocument />
            </Well>

            <StatusBar>
                {profile.name} · {strings.langName}
            </StatusBar>

            {/* Print-only copy outside the desktop, so printing gives a clean résumé
                regardless of the window's size, position, scroll or the UI zoom. */}
            {createPortal(
                <div className="print-resume hidden bg-white text-black print:block">
                    <ResumeDocument />
                </div>,
                document.body,
            )}
        </div>
    );
};

export default QuickView;
