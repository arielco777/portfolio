import type { ProjectInfo } from "../apps/types";

/**
 * Projects shown in Start ▸ Programs ▸ Projects and in the Projects folder.
 * Add an entry here and it shows up everywhere automatically.
 */
export const PROJECTS: ({ id: string; title: string } & ProjectInfo)[] = [
    {
        id: "erp-cloud",
        title: "Cloud ERP Modernization",
        summary:
            "At Newforma (EleVia Software): a from-scratch rewrite of legacy on-premise ERP products as a cloud-first " +
            "application, replacing WinForms apps with React + TypeScript and C# / .NET services on AWS. " +
            "I laid the front-end foundation, including a reusable library of 30+ production UI components " +
            "that cut feature development from weeks to hours, and built AI agents for spec-driven development.",
        stack: ["React", "TypeScript", "Tailwind CSS", "C# / .NET", "REST APIs", "AWS", "SQL Server", "DynamoDB"],
        status: "2024 - Present",
    },
    {
        id: "project-2",
        title: "Project 2",
        summary: "Description coming soon.",
        stack: [],
        status: "Placeholder",
    },
    {
        id: "project-3",
        title: "Project 3",
        summary: "Description coming soon.",
        stack: [],
        status: "Placeholder",
    },
];
