import { useWindowManager } from "../state/windowManager";
import Icon from "../components/Icon";
import { useState } from "react";
import { PROJECT_FOLDERS, PROJECTS } from "../content/projects";
import type { ProjectKind } from "./types";
import { contactLinks } from "../content/profile";
import { restart } from "../components/Boot/bootState";
import { useIsMobile } from "../hooks/useIsMobile";
import { QUICK_VIEW_HASH } from "../state/route";
import { Button, Explorer, Well } from "./shared";
import type { AppProps } from "./types";

export const MyComputer = () => (
    <Explorer
        path="My Computer"
        items={[
            {
                id: "projects",
                label: "Projects",
                icon: "folder",
                appId: "projects",
            },
            { id: "about", label: "About Me", icon: "user", appId: "about" },
            {
                id: "resume",
                label: "Resume.txt",
                icon: "notepad",
                appId: "resume",
            },
            {
                id: "recycle",
                label: "Recycle Bin",
                icon: "recycle",
                appId: "recycle",
            },
        ]}
    />
);

/** Readable list of projects grouped by kind: title, stack chips and summary. Used on phones. */
const ProjectList = () => {
    const { open } = useWindowManager();
    return (
        <Well>
            {PROJECT_FOLDERS.map((folder) => (
                <section key={folder.kind}>
                    <h2 className="flex items-center gap-2 bg-classic-grey px-3 py-1.5 font-bold">
                        <Icon name="folder" size={20} />
                        {folder.label}
                    </h2>
                    <ul className="flex flex-col">
                        {PROJECTS.filter((p) => p.kind === folder.kind).map(
                            (p) => (
                                <li
                                    key={p.id}
                                    className="border-b border-classic-grey last:border-b-0"
                                >
                                    <button
                                        type="button"
                                        onClick={() => open(p.id)}
                                        className="flex w-full gap-3 p-3 text-left active:bg-classic-blue active:text-white"
                                    >
                                        <Icon name="program" size={32} />
                                        <span className="flex min-w-0 flex-col gap-1">
                                            <span className="font-bold">
                                                {p.title}
                                            </span>
                                            <span className="line-clamp-2">
                                                {p.summary}
                                            </span>
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
                            ),
                        )}
                    </ul>
                </section>
            ))}
        </Well>
    );
};

/** Explorer with Professional / Personal subfolders (a list on phones). */
export const ProjectsFolder = () => {
    const isMobile = useIsMobile();
    const [folder, setFolder] = useState<ProjectKind | null>(null);

    if (isMobile) return <ProjectList />;

    if (!folder) {
        return (
            <Explorer
                key="root"
                path={"C:\\Projects"}
                items={PROJECT_FOLDERS.map((f) => ({
                    id: f.kind,
                    label: f.label,
                    icon: "folder",
                    onOpen: () => setFolder(f.kind),
                }))}
            />
        );
    }

    const label = PROJECT_FOLDERS.find((f) => f.kind === folder)?.label ?? "";
    return (
        <Explorer
            key={folder}
            path={`C:\\Projects\\${label}`}
            onUp={() => setFolder(null)}
            items={PROJECTS.filter((p) => p.kind === folder).map((p) => ({
                id: p.id,
                label: p.title,
                icon: "program",
                appId: p.id,
            }))}
        />
    );
};

export const Contact = () => {
    const links = contactLinks();
    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <Well>
                <div className="flex flex-col gap-3 p-3 text-[12px] max-sm:text-[15px]">
                    <p>
                        Want to get in touch? Reach me at any of these, or open
                        the{" "}
                        <a
                            href={QUICK_VIEW_HASH}
                            className="text-classic-blue underline"
                        >
                            Quick View résumé
                        </a>
                        .
                    </p>
                    {links.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                            {links.map((l) => (
                                <li key={l.label}>
                                    <b>{l.label}:</b>{" "}
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
                        <p className="text-classic-dark">
                            Contact details coming soon.
                        </p>
                    )}
                </div>
            </Well>
        </div>
    );
};

export const RecycleBin = () => (
    <Explorer
        path="Recycle Bin"
        items={[
            { id: "sql", label: "legacy_scripts.sql", icon: "document" },
            { id: "vb", label: "old_erp_forms.frm", icon: "document" },
        ]}
    />
);

export const Help = () => (
    <div className="flex min-h-0 flex-1 flex-col">
        <Well>
            <div className="flex flex-col gap-2 p-3 text-[12px] leading-relaxed max-sm:text-[15px]">
                <div className="flex items-center gap-2">
                    <Icon name="help" size={32} />
                    <h1 className="text-[15px] font-bold">Welcome!</h1>
                </div>
                <p>This portfolio works like a 90s desktop:</p>
                <ul className="list-disc pl-5">
                    <li>
                        Double-click desktop icons to open them (tap on mobile).
                    </li>
                    <li>
                        Drag windows by their title bar and resize them from the
                        edges.
                    </li>
                    <li>
                        Use the buttons in the top-right corner to minimize,
                        maximize or close.
                    </li>
                    <li>
                        Open <b>Start ▸ Programs ▸ Projects</b> to browse my
                        work.
                    </li>
                </ul>
            </div>
        </Well>
    </div>
);

export const ShutDown = ({ windowId }: AppProps) => {
    const { close } = useWindowManager();

    return (
        <div className="flex flex-1 flex-col gap-4 p-3">
            <div className="flex items-center gap-3">
                <Icon name="shutdown" size={32} />
                <p>
                    Thanks for stopping by! Do you want to restart the
                    portfolio?
                </p>
            </div>
            <div className="flex justify-center gap-2">
                <Button autoFocus onClick={restart}>
                    Restart
                </Button>
                <Button onClick={() => close(windowId)}>Cancel</Button>
            </div>
        </div>
    );
};
