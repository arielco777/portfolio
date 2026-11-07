import cvPdf from "../assets/Ariel Cohen_CV.pdf";
import profilePhoto from "../assets/Porfile Pic.jpg";
import { useLang, type L10n, type Lang } from "../i18n/lang";
import { STRINGS } from "../i18n/strings";

/**
 * Single source of truth for personal / résumé content (from Ariel Cohen_CV.pdf), in English and French.
 * About Me, Resume.txt, Contact and the Quick View page all read from here via useProfile().
 * Empty strings are hidden, so fill in what you want to show.
 */

/** Same in every language. */
const COMMON = {
    name: "Ariel Martin Cohen",
    /** Short name used for the "Ariel OS" branding (boot screens, start menu). */
    shortName: "Ariel",
    location: "Ottawa, ON",
    photo: profilePhoto,
    contact: {
        email: "ariel.m.cohen@proton.me",
        linkedin: "https://linkedin.com/in/ariel-martin-cohen",
        github: "https://github.com/arielco777",
    },
    /** CV download (bundled from src/assets). Set to "" to hide the download button. */
    resumePdf: cvPdf as string,
    resumePdfName: "Ariel-Cohen-CV.pdf",
    /** Set to true once resumePdf has a French version. */
    resumePdfIsFrench: false,
};

const STACKS = {
    newforma: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Figma",
        "C#",
        ".NET",
        "REST APIs",
        "AWS (SQS, SES, S3, Lambda, DynamoDB, Cognito, CodePipeline, CodeArtifact)",
        "Microsoft SQL Server",
        "Claude Code",
        "Kiro",
        "MCP",
    ],
    hadaly: ["React", "Next.js", "TypeScript", "Tailwind", "Python FastAPI", "AWS", "Vercel", "Jest", "Playwright"],
};

const TEXT: L10n<{
    title: string;
    summary: string;
    experience: { role: string; company: string; place: string; period: string; points: string[]; stack: string[] }[];
    education: { program: string; school: string; place: string; period: string; details: string }[];
    skills: { group: string; items: string[] }[];
    languages: string[];
}> = {
    en: {
        title: "Software Engineer",
        summary:
            "Full-stack software developer passionate about building modern, user-focused applications. " +
            "I enjoy working across the stack, from crafting intuitive interfaces with React and TypeScript " +
            "to developing back-end services with C# and AWS. I have experience modernizing legacy systems, " +
            "building cloud-first applications, and creating AI-powered tools that improve development workflows. " +
            "I value clean, maintainable code, thoughtful design, and continuously exploring new technologies " +
            "to build better software.",
        experience: [
            {
                role: "Software Engineer",
                company: "Newforma, EleVia Software",
                place: "Remote",
                period: "2024 - Present",
                points: [
                    "Established the front-end foundation for a new cloud-first ERP application, building a reusable UI " +
                        "component library with 30+ production components adopted across the engineering team, reducing " +
                        "development time from weeks to minutes or hours.",
                    "Led front-end architecture and development for the modernization of legacy enterprise software, " +
                        "replacing WinForms applications with a scalable React and TypeScript application.",
                    "Developed and deployed back-end services using C#/.NET and AWS, integrating cloud services to support " +
                        "application workflows, communication, and infrastructure.",
                    "Built proprietary AI agents and automation workflows to support spec-driven development, transforming " +
                        "engineering specifications into structured implementation plans, code, and automated tests.",
                    "Contributed to product direction and delivery, translating business requirements into epics and user " +
                        "stories in collaboration with the software architect and product.",
                    "Presented product demonstrations to stakeholders and management, showcasing new capabilities and " +
                        "communicating development progress.",
                ],
                stack: STACKS.newforma,
            },
            {
                role: "Full-Stack Developer for AI Startup",
                company: "Logiciels Hadaly Inc. @NextAi",
                place: "Montreal, QC",
                period: "2023 - 2024",
                points: [
                    "Led front-end architecture and development for two web applications (including mobile-responsive " +
                        "versions) using React, Next.js, and TypeScript, building scalable foundations from scratch.",
                    "Collaborated with back-end engineers to integrate AWS RDS and deploy FastAPI services, ensuring " +
                        "efficient data flow and performance.",
                    "Championed Agile practices, improving team productivity and accelerating delivery timelines.",
                    "Introduced unit testing (Jest, Playwright), increasing code quality and reducing bug turnaround time.",
                    "Delivered product demos to prospective clients, supporting business development and early product adoption.",
                ],
                stack: STACKS.hadaly,
            },
        ],
        education: [
            {
                program: "DEC: Computer Sciences - Video Game Programmer",
                school: "LaSalle College",
                place: "Montreal, QC",
                period: "2021 - 2023",
                details:
                    "Development of video games in Unity and Unreal Engine. Agile, C# .NET, C++, Unity, Unreal Blueprints, Java, SQL.",
            },
            {
                program: "AEC: Computer Sciences - Full-Stack Java Developer",
                school: "MCIT",
                place: "Montreal, QC",
                period: "2020",
                details:
                    "Full-stack development with Java and Oracle SQL. Java, Spring Boot, J2EE, Hibernate, SQL, HTML, CSS, JavaScript.",
            },
        ],
        skills: [
            { group: "Front-end", items: ["JavaScript", "TypeScript", "React", "Vite", "Tailwind", "HTML", "CSS"] },
            { group: "Back-end", items: ["C#", ".NET", "Python FastAPI", "AWS", "SQL", "NoSQL", "MSSQL", "REST APIs"] },
            { group: "AI", items: ["Claude Code", "Kiro (AWS)", "Spec-driven development"] },
            { group: "Tools", items: ["Git", "GitHub", "Jira", "Confluence", "VS / VS Code", "Docker", "Linux", "Windows"] },
        ],
        languages: ["English", "French", "Spanish"],
    },
    fr: {
        title: "Développeur logiciel",
        summary:
            "Développeur logiciel full-stack passionné par la création d'applications modernes centrées sur l'utilisateur. " +
            "J'aime travailler sur l'ensemble de la pile, de la conception d'interfaces intuitives avec React et TypeScript " +
            "au développement de services back-end avec C# et AWS. J'ai de l'expérience dans la modernisation de systèmes " +
            "hérités, la création d'applications infonuagiques et le développement d'outils propulsés par l'IA qui " +
            "améliorent les processus de développement. J'accorde de l'importance à un code propre et maintenable, à une " +
            "conception réfléchie et à l'exploration continue de nouvelles technologies pour créer de meilleurs logiciels.",
        experience: [
            {
                role: "Développeur logiciel",
                company: "Newforma, EleVia Software",
                place: "À distance",
                period: "2024 - aujourd'hui",
                points: [
                    "Mise en place des fondations front-end d'une nouvelle application ERP infonuagique, dont une bibliothèque " +
                        "de plus de 30 composants d'interface réutilisables adoptée par toute l'équipe de développement, " +
                        "réduisant le temps de développement de plusieurs semaines à quelques minutes ou heures.",
                    "Direction de l'architecture et du développement front-end pour la modernisation d'un logiciel d'entreprise " +
                        "hérité, en remplaçant des applications WinForms par une application React et TypeScript évolutive.",
                    "Développement et déploiement de services back-end en C#/.NET et AWS, avec l'intégration de services " +
                        "infonuagiques pour les flux de travail, les communications et l'infrastructure de l'application.",
                    "Création d'agents d'IA et de flux d'automatisation exclusifs pour le développement piloté par les " +
                        "spécifications, transformant les spécifications techniques en plans de mise en œuvre structurés, en " +
                        "code et en tests automatisés.",
                    "Contribution à l'orientation et à la livraison du produit, en traduisant les besoins d'affaires en épopées " +
                        "et en récits utilisateur avec l'architecte logiciel et l'équipe produit.",
                    "Présentation de démonstrations du produit aux parties prenantes et à la direction, pour faire valoir les " +
                        "nouvelles fonctionnalités et communiquer l'avancement du développement.",
                ],
                stack: STACKS.newforma,
            },
            {
                role: "Développeur full-stack, jeune pousse en IA",
                company: "Logiciels Hadaly Inc. @NextAi",
                place: "Montréal, QC",
                period: "2023 - 2024",
                points: [
                    "Direction de l'architecture et du développement front-end de deux applications Web (y compris leurs " +
                        "versions adaptées aux mobiles) avec React, Next.js et TypeScript, en bâtissant des bases évolutives " +
                        "à partir de zéro.",
                    "Collaboration avec les développeurs back-end pour intégrer AWS RDS et déployer des services FastAPI, en " +
                        "assurant un flux de données efficace et de bonnes performances.",
                    "Promotion des pratiques Agile, améliorant la productivité de l'équipe et accélérant les livraisons.",
                    "Mise en place de tests unitaires (Jest, Playwright), améliorant la qualité du code et réduisant le temps " +
                        "de correction des bogues.",
                    "Démonstrations du produit à des clients potentiels, en soutien au développement des affaires et à " +
                        "l'adoption du produit.",
                ],
                stack: STACKS.hadaly,
            },
        ],
        education: [
            {
                program: "DEC : Techniques de l'informatique - Programmation de jeux vidéo",
                school: "Collège LaSalle",
                place: "Montréal, QC",
                period: "2021 - 2023",
                details:
                    "Développement de jeux vidéo avec Unity et Unreal Engine. Agile, C# .NET, C++, Unity, Unreal Blueprints, Java, SQL.",
            },
            {
                program: "AEC : Informatique - Développeur Java full-stack",
                school: "MCIT",
                place: "Montréal, QC",
                period: "2020",
                details:
                    "Développement full-stack avec Java et Oracle SQL. Java, Spring Boot, J2EE, Hibernate, SQL, HTML, CSS, JavaScript.",
            },
        ],
        skills: [
            { group: "Front-end", items: ["JavaScript", "TypeScript", "React", "Vite", "Tailwind", "HTML", "CSS"] },
            { group: "Back-end", items: ["C#", ".NET", "Python FastAPI", "AWS", "SQL", "NoSQL", "MSSQL", "API REST"] },
            { group: "IA", items: ["Claude Code", "Kiro (AWS)", "Développement piloté par les spécifications"] },
            { group: "Outils", items: ["Git", "GitHub", "Jira", "Confluence", "VS / VS Code", "Docker", "Linux", "Windows"] },
        ],
        languages: ["Anglais", "Français", "Espagnol"],
    },
};

export type Profile = typeof COMMON & (typeof TEXT)["en"];

export const getProfile = (lang: Lang): Profile => ({ ...COMMON, ...TEXT[lang] });

export const useProfile = (): Profile => getProfile(useLang());

/** Strip the protocol for display: "https://github.com/x" → "github.com/x". */
const pretty = (url: string) => url.replace(/^https?:\/\//, "");

export const contactLinks = (lang: Lang) =>
    [
        COMMON.contact.email && {
            label: lang === "fr" ? "Courriel" : "Email",
            value: COMMON.contact.email,
            href: `mailto:${COMMON.contact.email}`,
        },
        COMMON.contact.linkedin && {
            label: "LinkedIn",
            value: pretty(COMMON.contact.linkedin),
            href: COMMON.contact.linkedin,
        },
        COMMON.contact.github && {
            label: "GitHub",
            value: pretty(COMMON.contact.github),
            href: COMMON.contact.github,
        },
    ].filter((l): l is { label: string; value: string; href: string } => !!l);

const join = (...parts: string[]) => parts.filter(Boolean).join(", ");

/** Wrap text to `width` columns with an indent, for the Notepad résumé. */
const wrap = (text: string, indent: string, width = 76) => {
    const lines: string[] = [];
    let current = "";
    for (const word of text.split(" ")) {
        if (current && (indent + current + " " + word).length > width) {
            lines.push(current);
            current = word;
        } else current = current ? `${current} ${word}` : word;
    }
    if (current) lines.push(current);
    return lines.map((l, i) => (i === 0 ? indent : indent.replace(/./g, " ")) + l);
};

/** Plain-text résumé for the Notepad window. */
export function resumeText(lang: Lang): string {
    const p = getProfile(lang);
    const h = STRINGS[lang].resume;
    const line = (s: string) => `${s}\n${"-".repeat(s.length)}`;
    return [
        `${p.name.toUpperCase()} - ${p.title.toUpperCase()}`,
        p.location,
        ...contactLinks(lang).map((l) => `${l.label}: ${l.value}`),
        "",
        line(h.summary),
        ...wrap(p.summary, ""),
        "",
        line(h.experience),
        ...p.experience.flatMap((e) => [
            `${e.role} (${e.period})`,
            join(e.company, e.place),
            ...e.points.flatMap((pt) => wrap(pt, "  - ")),
            ...wrap(`${h.tech}: ${e.stack.join(", ")}`, "  "),
            "",
        ]),
        line(h.education),
        ...p.education.flatMap((e) => [`${e.program} (${e.period})`, join(e.school, e.place), ...wrap(e.details, "  "), ""]),
        line(h.skills),
        ...p.skills.flatMap((s) => wrap(s.items.join(", "), `${s.group}: `)),
        "",
        line(h.languages),
        p.languages.join(", "),
        "",
    ].join("\n");
}
