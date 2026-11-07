import AboutMe from "./AboutMe";
import Notepad from "./Notepad";
import ProjectWindow from "./ProjectWindow";
import { PROJECTS } from "../content/projects";
import Resume from "./Resume";
import PdfViewer from "./PdfViewer";
import { QUICK_VIEW_HASH } from "../state/route";
import DisplayProperties from "./DisplayProperties";
import { Contact, Help, MyComputer, ProjectsFolder, RecycleBin, ShutDown } from "./SystemApps";
import type { AppDef } from "./types";

/** Every app that can open in a window. Order = desktop icon order. */
export const APPS: AppDef[] = [
    { id: "computer", title: "My Computer", icon: "computer", component: MyComputer, category: "system", desktop: true },
    { id: "recycle", title: "Recycle Bin", icon: "recycle", component: RecycleBin, category: "system", desktop: true },
    { id: "projects", title: "Projects", icon: "folder", component: ProjectsFolder, category: "system", desktop: true },
    { id: "about", title: "About Me", icon: "user", component: AboutMe, category: "document", desktop: true, defaultSize: { w: 440, h: 360 } },
    { id: "resume", title: "Resume.txt - Notepad", icon: "notepad", component: Resume, category: "document", desktop: true, defaultSize: { w: 560, h: 420 } },
    { id: "cv", title: "Ariel Cohen_CV.pdf", icon: "pdf", component: PdfViewer, category: "document", desktop: true, defaultSize: { w: 720, h: 640 } },
    { id: "quick-view", title: "Quick View", icon: "web", href: QUICK_VIEW_HASH, category: "document", desktop: true },
    { id: "contact", title: "Contact", icon: "contact", component: Contact, category: "document", desktop: true, defaultSize: { w: 380, h: 260 } },
    { id: "notepad", title: "Untitled - Notepad", icon: "notepad", component: Notepad, category: "accessory", singleton: false },
    { id: "help", title: "Help", icon: "help", component: Help, category: "system", defaultSize: { w: 400, h: 300 } },
    {
        id: "display",
        title: "Display Properties",
        icon: "settings",
        component: DisplayProperties,
        category: "system",
        desktop: true,
        hideOnMobile: true,
        defaultSize: { w: 380, h: 300 },
        resizable: false,
        maximizable: false,
    },
    {
        id: "shutdown",
        title: "Shut Down",
        icon: "shutdown",
        component: ShutDown,
        category: "system",
        defaultSize: { w: 320, h: 140 },
        resizable: false,
        maximizable: false,
    },
    ...PROJECTS.map(
        ({ id, title, ...project }): AppDef => ({
            id,
            title,
            icon: "program",
            component: ProjectWindow,
            category: "project",
            project,
            defaultSize: { w: 520, h: 380 },
        }),
    ),
];
