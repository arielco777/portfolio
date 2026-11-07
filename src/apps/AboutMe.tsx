import { useProfile } from "../content/profile";
import { useLang, type L10n } from "../i18n/lang";
import { Well } from "./shared";

const BIO: L10n<string[]> = {
    en: [
        "I'm a full-stack software developer who loves building modern, user-focused applications, from intuitive " +
            "interfaces in React and TypeScript to back-end services in C# / .NET on AWS.",
        "Since 2024 I've been a Software Engineer at Newforma (EleVia Software), modernizing legacy enterprise ERP " +
            "software: replacing WinForms applications with a cloud-first React + TypeScript app, building a 30+ " +
            "component UI library the whole team uses, and creating AI agents that turn specs into implementation " +
            "plans, code and tests.",
        "Before that, I led front-end development for two web apps at an AI startup in Montreal (Logiciels Hadaly " +
            "@NextAi) with React, Next.js and TypeScript.",
        "I studied video game programming at LaSalle College (Unity, Unreal, C#, C++), which is probably why this " +
            "portfolio looks like the first OS I used at home. I speak English, French and Spanish.",
    ],
    fr: [
        "Je suis un développeur logiciel full-stack passionné par la création d'applications modernes centrées sur " +
            "l'utilisateur, des interfaces intuitives en React et TypeScript jusqu'aux services back-end en C# / .NET " +
            "sur AWS.",
        "Depuis 2024, je suis développeur logiciel chez Newforma (EleVia Software), où je modernise des logiciels ERP " +
            "d'entreprise hérités : je remplace des applications WinForms par une application infonuagique React + " +
            "TypeScript, j'ai bâti une bibliothèque de plus de 30 composants d'interface utilisée par toute l'équipe " +
            "et je crée des agents d'IA qui transforment les spécifications en plans de mise en œuvre, en code et en tests.",
        "Auparavant, j'ai dirigé le développement front-end de deux applications Web dans une jeune pousse en IA à " +
            "Montréal (Logiciels Hadaly @NextAi) avec React, Next.js et TypeScript.",
        "J'ai étudié la programmation de jeux vidéo au Collège LaSalle (Unity, Unreal, C#, C++), ce qui explique sans " +
            "doute pourquoi ce portfolio ressemble au premier système d'exploitation que j'ai utilisé à la maison. Je " +
            "parle anglais, français et espagnol.",
    ],
};

const AboutMe = () => {
    const lang = useLang();
    const profile = useProfile();

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <Well>
                <div className="flex flex-col gap-3 p-3 text-[12px] leading-relaxed max-sm:text-[15px]">
                    <div className="flex items-center gap-3">
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            width={60}
                            height={60}
                            className="size-15 shrink-0 object-cover bevel-sunken p-0.5"
                        />
                        <div>
                            <h1 className="text-[16px] font-bold">{profile.name}</h1>
                            <p>
                                {profile.title} · {profile.location}
                            </p>
                        </div>
                    </div>
                    {BIO[lang].map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </Well>
        </div>
    );
};

export default AboutMe;
