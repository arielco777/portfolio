import cvPdf from "../assets/Ariel Cohen_CV.pdf";
import profilePhoto from "../assets/Porfile Pic.jpg";

/**
 * Single source of truth for personal / résumé content (from Ariel Cohen_CV.pdf).
 * About Me, Resume.txt, Contact and the Quick View page all read from here.
 * Empty strings are hidden, so fill in what you want to show.
 */
export const PROFILE = {
    name: "Ariel Martin Cohen",
    /** Short name used for the "Ariel OS" branding (boot screens, start menu). */
    shortName: "Ariel",
    title: "Software Engineer",
    location: "Ottawa, ON",
    photo: profilePhoto,
    summary:
        "Full-stack software developer passionate about building modern, user-focused applications. " +
        "I enjoy working across the stack, from crafting intuitive interfaces with React and TypeScript " +
        "to developing back-end services with C# and AWS. I have experience modernizing legacy systems, " +
        "building cloud-first applications, and creating AI-powered tools that improve development workflows. " +
        "I value clean, maintainable code, thoughtful design, and continuously exploring new technologies " +
        "to build better software.",
    contact: {
        email: "ariel.m.cohen@proton.me",
        linkedin: "https://linkedin.com/in/ariel-martin-cohen",
        github: "https://github.com/arielco777",
    },
    /** CV download (bundled from src/assets). Set to "" to hide the download button. */
    resumePdf: cvPdf,
    resumePdfName: "Ariel-Cohen-CV.pdf",
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
            stack: [
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
            stack: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Python FastAPI",
                "AWS",
                "Vercel",
                "Jest",
                "Playwright",
            ],
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
        {
            group: "Front-end",
            items: [
                "JavaScript",
                "TypeScript",
                "React",
                "Vite",
                "Tailwind",
                "HTML",
                "CSS",
            ],
        },
        {
            group: "Back-end",
            items: [
                "C#",
                ".NET",
                "Python FastAPI",
                "AWS",
                "SQL",
                "NoSQL",
                "MSSQL",
                "REST APIs",
            ],
        },
        {
            group: "AI",
            items: ["Claude Code", "Kiro (AWS)", "Spec-driven development"],
        },
        {
            group: "Tools",
            items: [
                "Git",
                "GitHub",
                "Jira",
                "Confluence",
                "VS / VS Code",
                "Docker",
                "Linux",
                "Windows",
            ],
        },
    ],
    languages: ["English", "French", "Spanish"],
};

/** Strip the protocol for display: "https://github.com/x" → "github.com/x". */
const pretty = (url: string) => url.replace(/^https?:\/\//, "");

export const contactLinks = () =>
    [
        PROFILE.contact.email && {
            label: "Email",
            value: PROFILE.contact.email,
            href: `mailto:${PROFILE.contact.email}`,
        },
        PROFILE.contact.linkedin && {
            label: "LinkedIn",
            value: pretty(PROFILE.contact.linkedin),
            href: PROFILE.contact.linkedin,
        },
        PROFILE.contact.github && {
            label: "GitHub",
            value: pretty(PROFILE.contact.github),
            href: PROFILE.contact.github,
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
    return lines.map(
        (l, i) => (i === 0 ? indent : indent.replace(/./g, " ")) + l,
    );
};

/** Plain-text résumé for the Notepad window. */
export function resumeText(): string {
    const p = PROFILE;
    const line = (s: string) => `${s}\n${"-".repeat(s.length)}`;
    return [
        `${p.name.toUpperCase()} - ${p.title.toUpperCase()}`,
        p.location,
        ...contactLinks().map((l) => `${l.label}: ${l.value}`),
        "",
        line("SUMMARY"),
        ...wrap(p.summary, ""),
        "",
        line("EXPERIENCE"),
        ...p.experience.flatMap((e) => [
            `${e.role} (${e.period})`,
            join(e.company, e.place),
            ...e.points.flatMap((pt) => wrap(pt, "  - ")),
            ...wrap(`Tech: ${e.stack.join(", ")}`, "  "),
            "",
        ]),
        line("EDUCATION"),
        ...p.education.flatMap((e) => [
            `${e.program} (${e.period})`,
            join(e.school, e.place),
            ...wrap(e.details, "  "),
            "",
        ]),
        line("SKILLS"),
        ...p.skills.flatMap((s) => wrap(s.items.join(", "), `${s.group}: `)),
        "",
        line("LANGUAGES"),
        p.languages.join(", "),
        "",
    ].join("\n");
}
