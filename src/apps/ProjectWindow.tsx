import { useState } from "react";
import Icon from "../components/Icon";
import { Button, MenuBar, StatusBar, Well } from "./shared";
import type { AppProps } from "./types";

/** Screenshot viewer: sunken frame, image, and ◀ n / N ▶ controls. */
const Gallery = ({ images, title }: { images: string[]; title: string }) => {
    const [index, setIndex] = useState(0);
    const go = (d: number) =>
        setIndex((i) => (i + d + images.length) % images.length);

    return (
        <div className="flex flex-col gap-1">
            <a
                href={images[index]}
                target="_blank"
                rel="noreferrer"
                title="Open full size"
                className="block bg-black p-[2px] bevel-sunken"
            >
                <img
                    src={images[index]}
                    alt={`${title} screenshot ${index + 1} of ${images.length}`}
                    loading="lazy"
                    className="mx-auto max-h-[45vh] w-full object-contain"
                />
            </a>
            {images.length > 1 && (
                <div className="flex items-center justify-center gap-2">
                    <Button onClick={() => go(-1)}>◀ Prev</Button>
                    <span className="min-w-12 text-center">
                        {index + 1} / {images.length}
                    </span>
                    <Button onClick={() => go(1)}>Next ▶</Button>
                </div>
            )}
        </div>
    );
};

/** Generic window for a project entry; content comes from `app.project` (see content/projects.ts). */
const ProjectWindow = ({ app }: AppProps) => {
    const project = app.project;
    if (!project) return null;

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <MenuBar items={["File", "View", "Help"]} />
            <Well>
                <div className="flex flex-col gap-3 p-3 text-[12px] max-sm:text-[15px]">
                    <div>
                        <h1 className="text-[16px] font-bold">{app.title}</h1>
                        {project.org && (
                            <p className="text-classic-darker">{project.org}</p>
                        )}
                    </div>

                    {project.images && project.images.length > 0 && (
                        <Gallery images={project.images} title={app.title} />
                    )}

                    <p className="leading-relaxed">{project.summary}</p>

                    {project.stack.length > 0 && (
                        <div>
                            <h2 className="mb-1 font-bold">Tech stack</h2>
                            <ul className="flex flex-wrap gap-1">
                                {project.stack.map((s) => (
                                    <li
                                        key={s}
                                        className="bg-classic-grey px-2 py-0.5 bevel-raised"
                                    >
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.links && project.links.length > 0 && (
                        <div>
                            <h2 className="mb-1 font-bold">Links</h2>
                            <ul className="flex flex-wrap gap-2">
                                {project.links.map((l) => (
                                    <li key={l.href}>
                                        <a
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-1 bg-classic-grey px-2 py-1 bevel-raised active:bevel-pressed"
                                        >
                                            <Icon name="web" size={16} />
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Well>
            <StatusBar>
                {[
                    project.kind === "professional"
                        ? "Professional"
                        : "Personal",
                    project.status,
                ]
                    .filter(Boolean)
                    .join(" · ")}
            </StatusBar>
        </div>
    );
};

export default ProjectWindow;
