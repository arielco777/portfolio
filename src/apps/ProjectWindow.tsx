import type { AppProps } from "./types";
import { MenuBar, StatusBar, Well } from "./shared";

/** Generic window for a project entry; content comes from `app.project` (see projects.ts). */
const ProjectWindow = ({ app }: AppProps) => {
    const project = app.project;

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <MenuBar items={["File", "Help"]} />
            <Well>
                <div className="flex flex-col gap-3 p-3 text-[12px] max-sm:text-[15px]">
                    <h1 className="text-[16px] font-bold">{app.title}</h1>
                    <p className="leading-relaxed">{project?.summary}</p>
                    {project && project.stack.length > 0 && (
                        <div>
                            <h2 className="mb-1 font-bold">Tech stack</h2>
                            <ul className="flex flex-wrap gap-1">
                                {project.stack.map((s) => (
                                    <li key={s} className="bg-classic-grey px-2 py-0.5 bevel-raised">
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Well>
            <StatusBar>{project?.status ?? "Ready"}</StatusBar>
        </div>
    );
};

export default ProjectWindow;
