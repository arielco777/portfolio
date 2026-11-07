import AboutMe from "./AboutMe";
import Notepad from "./Notepad";
import ProjectWindow from "./ProjectWindow";
import { PROJECTS } from "../content/projects";
import Resume from "./Resume";
import PdfViewer from "./PdfViewer";
import { QUICK_VIEW_HASH } from "../state/route";
import DisplayProperties from "./DisplayProperties";
import RegionalSettings from "./RegionalSettings";
import { Contact, Help, MyComputer, ProjectsFolder, RecycleBin, ShutDown } from "./SystemApps";
import type { AppDef } from "./types";

/** Every app that can open in a window. Order = desktop icon order. */
export const APPS: AppDef[] = [
    { id: "computer", title: { en: "My Computer", fr: "Poste de travail" }, icon: "computer", component: MyComputer, category: "system", desktop: true },
    { id: "recycle", title: { en: "Recycle Bin", fr: "Corbeille" }, icon: "recycle", component: RecycleBin, category: "system", desktop: true },
    { id: "projects", title: { en: "Projects", fr: "Projets" }, icon: "folder", component: ProjectsFolder, category: "system", desktop: true },
    { id: "about", title: { en: "About Me", fr: "À propos de moi" }, icon: "user", component: AboutMe, category: "document", desktop: true, defaultSize: { w: 440, h: 360 } },
    { id: "resume", title: { en: "Resume.txt - Notepad", fr: "CV.txt - Bloc-notes" }, icon: "notepad", component: Resume, category: "document", desktop: true, defaultSize: { w: 560, h: 420 } },
    { id: "cv", title: { en: "Ariel Cohen_CV.pdf", fr: "Ariel Cohen_CV.pdf" }, icon: "pdf", component: PdfViewer, category: "document", desktop: true, defaultSize: { w: 720, h: 640 } },
    { id: "quick-view", title: { en: "Quick View", fr: "Aperçu rapide" }, icon: "web", href: QUICK_VIEW_HASH, category: "document", desktop: true },
    { id: "contact", title: { en: "Contact", fr: "Contact" }, icon: "contact", component: Contact, category: "document", desktop: true, defaultSize: { w: 380, h: 260 } },
    { id: "notepad", title: { en: "Untitled - Notepad", fr: "Sans titre - Bloc-notes" }, icon: "notepad", component: Notepad, category: "accessory", singleton: false },
    { id: "help", title: { en: "Help", fr: "Aide" }, icon: "help", component: Help, category: "system", defaultSize: { w: 400, h: 300 } },
    {
        id: "display",
        title: { en: "Display Properties", fr: "Propriétés d'affichage" },
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
        id: "regional",
        title: { en: "Regional Settings", fr: "Paramètres régionaux" },
        icon: "web",
        component: RegionalSettings,
        category: "system",
        defaultSize: { w: 320, h: 200 },
        resizable: false,
        maximizable: false,
    },
    {
        id: "shutdown",
        title: { en: "Shut Down", fr: "Arrêter" },
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
            defaultSize: { w: 640, h: 580 },
        }),
    ),
];
