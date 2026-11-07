import { useWindowManager } from "../state/windowManager";
import Icon from "../components/Icon";
import { useState } from "react";
import { PROJECT_KINDS, PROJECTS } from "../content/projects";
import type { ProjectKind } from "./types";
import { contactLinks } from "../content/profile";
import { restart } from "../components/Boot/bootState";
import { useIsMobile } from "../hooks/useIsMobile";
import { QUICK_VIEW_HASH } from "../state/route";
import { useLang } from "../i18n/lang";
import { useStrings } from "../i18n/strings";
import { Button, Explorer, Well } from "./shared";
import type { AppProps } from "./types";

export const MyComputer = () => {
    const t = useStrings();
    const { getApp } = useWindowManager();
    const lang = useLang();
    const title = (id: string) => getApp(id)?.title[lang] ?? id;

    return (
        <Explorer
            path={t.explorer.myComputer}
            items={[
                { id: "projects", label: title("projects"), icon: "folder", appId: "projects" },
                { id: "about", label: title("about"), icon: "user", appId: "about" },
                { id: "resume", label: lang === "fr" ? "CV.txt" : "Resume.txt", icon: "notepad", appId: "resume" },
                { id: "recycle", label: title("recycle"), icon: "recycle", appId: "recycle" },
            ]}
        />
    );
};

/** Readable list of projects grouped by kind: title, stack chips and summary. Used on phones. */
const ProjectList = () => {
    const { open } = useWindowManager();
    const lang = useLang();
    const t = useStrings();

    return (
        <Well>
            {PROJECT_KINDS.map((kind) => (
                <section key={kind}>
                    <h2 className="flex items-center gap-2 bg-classic-grey px-3 py-1.5 font-bold">
                        <Icon name="folder" size={20} />
                        {t.folders[kind]}
                    </h2>
                    <ul className="flex flex-col">
                        {PROJECTS.filter((p) => p.kind === kind).map((p) => (
                            <li key={p.id} className="border-b border-classic-grey last:border-b-0">
                                <button
                                    type="button"
                                    onClick={() => open(p.id)}
                                    className="flex w-full gap-3 p-3 text-left active:bg-classic-blue active:text-white"
                                >
                                    <Icon name="program" size={32} />
                                    <span className="flex min-w-0 flex-col gap-1">
                                        <span className="font-bold">{p.title[lang]}</span>
                                        <span className="line-clamp-2">{p.summary[lang]}</span>
                                        {p.stack.length > 0 && (
                                            <span className="flex flex-wrap gap-1">
                                                {p.stack.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="bg-classic-grey px-1.5 text-[12px] bevel-raised"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </span>
                                        )}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </Well>
    );
};

/** Explorer with Professional / Personal subfolders (a list on phones). */
export const ProjectsFolder = () => {
    const isMobile = useIsMobile();
    const lang = useLang();
    const t = useStrings();
    const [folder, setFolder] = useState<ProjectKind | null>(null);

    if (isMobile) return <ProjectList />;

    if (!folder) {
        return (
            <Explorer
                key="root"
                path={t.explorer.projectsPath}
                items={PROJECT_KINDS.map((kind) => ({
                    id: kind,
                    label: t.folders[kind],
                    icon: "folder",
                    onOpen: () => setFolder(kind),
                }))}
            />
        );
    }

    return (
        <Explorer
            key={folder}
            path={`${t.explorer.projectsPath}\\${t.folders[folder]}`}
            onUp={() => setFolder(null)}
            items={PROJECTS.filter((p) => p.kind === folder).map((p) => ({
                id: p.id,
                label: p.title[lang],
                icon: "program",
                appId: p.id,
            }))}
        />
    );
};

export const Contact = () => {
    const lang = useLang();
    const t = useStrings();
    const links = contactLinks(lang);
    const colon = lang === "fr" ? " :" : ":";

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <Well>
                <div className="flex flex-col gap-3 p-3 text-[12px] max-sm:text-[15px]">
                    <p>
                        {t.contact.intro}{" "}
                        <a href={QUICK_VIEW_HASH} className="text-classic-blue underline">
                            {t.contact.quickViewLink}
                        </a>
                        .
                    </p>
                    {links.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <b>
                                        {l.label}
                                        {colon}
                                    </b>{" "}
                                    <a
                                        href={l.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-classic-blue underline"
                                    >
                                        {l.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-classic-dark">{t.contact.none}</p>
                    )}
                </div>
            </Well>
        </div>
    );
};

export const RecycleBin = () => {
    const t = useStrings();
    return (
        <Explorer
            path={t.explorer.recycleBin}
            items={[
                { id: "sql", label: "legacy_scripts.sql", icon: "document" },
                { id: "vb", label: "old_erp_forms.frm", icon: "document" },
            ]}
        />
    );
};

export const Help = () => {
    const t = useStrings();
    const [before, path, after] = t.help.browse;

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <Well>
                <div className="flex flex-col gap-2 p-3 text-[12px] leading-relaxed max-sm:text-[15px]">
                    <div className="flex items-center gap-2">
                        <Icon name="help" size={32} />
                        <h1 className="text-[15px] font-bold">{t.help.welcome}</h1>
                    </div>
                    <p>{t.help.intro}</p>
                    <ul className="list-disc pl-5">
                        {t.help.tips.map((tip) => (
                            <li key={tip}>{tip}</li>
                        ))}
                        <li>
                            {before}
                            <b>{path}</b>
                            {after}
                        </li>
                        <li>{t.help.language}</li>
                    </ul>
                </div>
            </Well>
        </div>
    );
};

export const ShutDown = ({ windowId }: AppProps) => {
    const { close } = useWindowManager();
    const t = useStrings();

    return (
        <div className="flex flex-1 flex-col gap-4 p-3">
            <div className="flex items-center gap-3">
                <Icon name="shutdown" size={32} />
                <p>{t.shutDown.text}</p>
            </div>
            <div className="flex justify-center gap-2">
                <Button autoFocus onClick={restart}>
                    {t.shutDown.restart}
                </Button>
                <Button onClick={() => close(windowId)}>{t.shutDown.cancel}</Button>
            </div>
        </div>
    );
};
