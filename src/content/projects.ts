import type { ProjectInfo } from "../apps/types";
import excel from "../assets/projects/excel.png";
import hadaly1 from "../assets/projects/hadaly_1.png";
import hadaly2 from "../assets/projects/hadaly_2.png";
import hadaly3 from "../assets/projects/hadaly_3.png";
import planner from "../assets/projects/planner.png";
import shopping from "../assets/projects/shopping.png";
import tradeen1 from "../assets/projects/tradeen_1.png";
import tradeen2 from "../assets/projects/tradeen_2.png";
import tradeen3 from "../assets/projects/tradeen_3.png";

/**
 * Projects shown in Start ▸ Programs ▸ Projects and in the Projects folder,
 * split into Professional and Personal by `kind`. Add an entry here and it shows up everywhere.
 * Screenshots live in src/assets/projects.
 */
export const PROJECTS: ({ id: string; title: string } & ProjectInfo)[] = [
    // ── Professional ──────────────────────────────────────────────
    {
        id: "erp-cloud",
        kind: "professional",
        title: "Cloud ERP Modernization",
        org: "Newforma, EleVia Software",
        summary:
            "A from-scratch rewrite of legacy on-premise ERP products as a cloud-first application, " +
            "replacing WinForms apps with React + TypeScript and C# / .NET services on AWS. " +
            "I laid the front-end foundation, including a reusable library of 30+ production UI components " +
            "that cut feature development from weeks to hours, and built AI agents for spec-driven development.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "C# / .NET",
            "REST APIs",
            "AWS",
            "SQL Server",
            "DynamoDB",
        ],
        status: "2024 - Present",
    },
    {
        id: "hadaly",
        kind: "professional",
        title: "Hadaly",
        org: "Logiciels Hadaly Inc. @NextAi",
        summary:
            "Hadaly's main product is an automated risk-detection app that performs due-diligence reports for " +
            "M&As. It includes a file system for the data room, team and task management, and dashboards. " +
            "Screenshots show the version as of March 2024.",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Python FastAPI",
            "AWS",
        ],
        status: "2023 - 2024",
        images: [hadaly1, hadaly2, hadaly3],
        links: [{ label: "hadaly.ca", href: "https://www.hadaly.ca" }],
    },
    {
        id: "tradeen",
        kind: "professional",
        title: "TradeeN",
        summary:
            "An easy-to-use trading app with no-code strategy creation for entries and exits. It includes a " +
            "drag-and-drop strategy builder, a chatbot to answer questions, a save system, and an interface " +
            "designed for beginners. Screenshots show the version as of September 2023.",
        stack: ["React", "TypeScript", "Tailwind"],
        status: "2023",
        images: [tradeen1, tradeen2, tradeen3],
    },

    // ── Personal ──────────────────────────────────────────────────
    {
        id: "excelsior",
        kind: "personal",
        title: "Excelsior",
        summary:
            "A simple app that takes a dataset in CSV or XLSX and formats it into groups, sorts them, and/or " +
            "adds extra parameters. I worked mostly on the back end rather than the front end... so don't judge " +
            "it by its looks. :)",
        stack: ["React", "Express", "Node.js"],
        images: [excel],
        links: [
            {
                label: "Front-end repo",
                href: "https://github.com/arielco777/excel-front",
            },
            {
                label: "Back-end repo",
                href: "https://github.com/arielco777/excel-back",
            },
        ],
    },
    {
        id: "shopping-animation",
        kind: "personal",
        title: "Shopping Animation",
        summary:
            "A showcase of my animation knowledge on a shopping website, using Framer Motion and a mix of " +
            "JavaScript and CSS.",
        stack: ["React", "Framer Motion", "CSS"],
        images: [shopping],
        links: [
            {
                label: "GitHub repo",
                href: "https://github.com/arielco777/shopping",
            },
        ],
    },
    {
        id: "planner",
        kind: "personal",
        title: "Personal Planner",
        summary:
            "My personal weekly planner, built with React and Node. I made it to try out new things like a " +
            "calendar with events and a dashboard, but most importantly to keep myself focused on what I " +
            "need to do every day.",
        stack: ["React", "Node.js"],
        images: [planner],
    },
];

export const PROJECT_FOLDERS = [
    { kind: "professional", label: "Professional" },
    { kind: "personal", label: "Personal" },
] as const;
