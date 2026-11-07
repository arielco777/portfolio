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
import type { L10n } from "../i18n/lang";

export type ProjectEntry = { id: string; title: L10n } & ProjectInfo;

/**
 * Projects shown in Start ▸ Programs ▸ Projects and in the Projects folder,
 * split into Professional and Personal by `kind`. Add an entry here and it shows up everywhere.
 * Text fields have an English and a French version. Screenshots live in src/assets/projects.
 */
export const PROJECTS: ProjectEntry[] = [
    // ── Professional ──────────────────────────────────────────────
    {
        id: "erp-cloud",
        kind: "professional",
        title: { en: "Cloud ERP Modernization", fr: "Modernisation d'un ERP infonuagique" },
        org: "Newforma, EleVia Software",
        summary: {
            en:
                "A from-scratch rewrite of legacy on-premise ERP products as a cloud-first application, " +
                "replacing WinForms apps with React + TypeScript and C# / .NET services on AWS. " +
                "I laid the front-end foundation, including a reusable library of 30+ production UI components " +
                "that cut feature development from weeks to hours, and built AI agents for spec-driven development.",
            fr:
                "La réécriture complète de produits ERP hérités, installés sur place, en une application infonuagique, " +
                "remplaçant des applications WinForms par React + TypeScript et des services C# / .NET sur AWS. " +
                "J'ai posé les fondations front-end, dont une bibliothèque de plus de 30 composants d'interface " +
                "réutilisables qui a réduit le développement de fonctionnalités de plusieurs semaines à quelques heures, " +
                "et j'ai créé des agents d'IA pour le développement piloté par les spécifications.",
        },
        stack: ["React", "TypeScript", "Tailwind CSS", "C# / .NET", "REST APIs", "AWS", "SQL Server", "DynamoDB"],
        status: { en: "2024 - Present", fr: "2024 - aujourd'hui" },
    },
    {
        id: "hadaly",
        kind: "professional",
        title: { en: "Hadaly", fr: "Hadaly" },
        org: "Logiciels Hadaly Inc. @NextAi",
        summary: {
            en:
                "Hadaly's main product is an automated risk-detection app that performs due-diligence reports for " +
                "M&As. It includes a file system for the data room, team and task management, and dashboards. " +
                "Screenshots show the version as of March 2024.",
            fr:
                "Le produit principal d'Hadaly est une application de détection automatisée des risques qui produit des " +
                "rapports de vérification diligente pour les fusions et acquisitions. Elle comprend un système de " +
                "fichiers pour la salle de données, la gestion des équipes et des tâches, et des tableaux de bord. " +
                "Les captures d'écran montrent la version de mars 2024.",
        },
        stack: ["React", "Next.js", "TypeScript", "Tailwind", "Python FastAPI", "AWS"],
        status: { en: "2023 - 2024", fr: "2023 - 2024" },
        images: [hadaly1, hadaly2, hadaly3],
        links: [{ label: { en: "hadaly.ca", fr: "hadaly.ca" }, href: "https://www.hadaly.ca" }],
    },
    {
        id: "tradeen",
        kind: "professional",
        title: { en: "TradeeN", fr: "TradeeN" },
        summary: {
            en:
                "An easy-to-use trading app with no-code strategy creation for entries and exits. It includes a " +
                "drag-and-drop strategy builder, a chatbot to answer questions, a save system, and an interface " +
                "designed for beginners. Screenshots show the version as of September 2023.",
            fr:
                "Une application de négociation facile à utiliser qui permet de créer des stratégies d'entrée et de " +
                "sortie sans code. Elle comprend un générateur de stratégies par glisser-déposer, un agent conversationnel " +
                "pour répondre aux questions, un système de sauvegarde et une interface pensée pour les débutants. " +
                "Les captures d'écran montrent la version de septembre 2023.",
        },
        stack: ["React", "TypeScript", "Tailwind"],
        status: { en: "2023", fr: "2023" },
        images: [tradeen1, tradeen2, tradeen3],
    },

    // ── Personal ──────────────────────────────────────────────────
    {
        id: "excelsior",
        kind: "personal",
        title: { en: "Excelsior", fr: "Excelsior" },
        summary: {
            en:
                "A simple app that takes a dataset in CSV or XLSX and formats it into groups, sorts them, and/or " +
                "adds extra parameters. I worked mostly on the back end rather than the front end... so don't judge " +
                "it by its looks. :)",
            fr:
                "Une application simple qui prend un jeu de données CSV ou XLSX et le regroupe, le trie ou y ajoute " +
                "des paramètres. J'ai surtout travaillé sur le back-end plutôt que sur le front-end... alors ne la " +
                "jugez pas sur son apparence. :)",
        },
        stack: ["React", "Express", "Node.js"],
        images: [excel],
        links: [
            {
                label: { en: "Front-end repo", fr: "Dépôt front-end" },
                href: "https://github.com/arielco777/excel-front",
            },
            {
                label: { en: "Back-end repo", fr: "Dépôt back-end" },
                href: "https://github.com/arielco777/excel-back",
            },
        ],
    },
    {
        id: "shopping-animation",
        kind: "personal",
        title: { en: "Shopping Animation", fr: "Animations de magasinage" },
        summary: {
            en:
                "A showcase of my animation knowledge on a shopping website, using Framer Motion and a mix of " +
                "JavaScript and CSS.",
            fr:
                "Une démonstration de mes connaissances en animation sur un site de magasinage, avec Framer Motion et " +
                "un mélange de JavaScript et de CSS.",
        },
        stack: ["React", "Framer Motion", "CSS"],
        images: [shopping],
        links: [
            {
                label: { en: "GitHub repo", fr: "Dépôt GitHub" },
                href: "https://github.com/arielco777/shopping",
            },
        ],
    },
    {
        id: "planner",
        kind: "personal",
        title: { en: "Personal Planner", fr: "Agenda personnel" },
        summary: {
            en:
                "My personal weekly planner, built with React and Node. I made it to try out new things like a " +
                "calendar with events and a dashboard, but most importantly to keep myself focused on what I " +
                "need to do every day.",
            fr:
                "Mon agenda hebdomadaire personnel, conçu avec React et Node. Je l'ai créé pour essayer de nouvelles " +
                "choses, comme un calendrier avec des événements et un tableau de bord, mais surtout pour rester " +
                "concentré sur ce que j'ai à faire chaque jour.",
        },
        stack: ["React", "Node.js"],
        images: [planner],
    },
];

export const PROJECT_KINDS = ["professional", "personal"] as const;
