import { PROFILE } from "../content/profile";
import { Well } from "./shared";

const AboutMe = () => (
    <div className="flex min-h-0 flex-1 flex-col">
        <Well>
            <div className="flex flex-col gap-3 p-3 text-[12px] leading-relaxed max-sm:text-[15px]">
                <div className="flex items-center gap-3">
                    <img
                        src={PROFILE.photo}
                        alt={PROFILE.name}
                        width={60}
                        height={60}
                        className="size-15 shrink-0 object-cover bevel-sunken p-0.5"
                    />
                    <div>
                        <h1 className="text-[16px] font-bold">{PROFILE.name}</h1>
                        <p>
                            {PROFILE.title} · {PROFILE.location}
                        </p>
                    </div>
                </div>
                <p>
                    I&apos;m a full-stack software developer who loves building modern, user-focused applications,
                    from intuitive interfaces in React and TypeScript to back-end services in C# / .NET on AWS.
                </p>
                <p>
                    Since 2024 I&apos;ve been a Software Engineer at Newforma (EleVia Software), modernizing legacy
                    enterprise ERP software: replacing WinForms applications with a cloud-first React + TypeScript
                    app, building a 30+ component UI library the whole team uses, and creating AI agents that turn
                    specs into implementation plans, code and tests.
                </p>
                <p>
                    Before that, I led front-end development for two web apps at an AI startup in Montreal (Logiciels
                    Hadaly @NextAi) with React, Next.js and TypeScript.
                </p>
                <p>
                    I studied video game programming at LaSalle College (Unity, Unreal, C#, C++), which is probably
                    why this portfolio looks like the first OS I used at home. I speak{" "}
                    {PROFILE.languages.slice(0, -1).join(", ")} and {PROFILE.languages.at(-1)}.
                </p>
            </div>
        </Well>
    </div>
);

export default AboutMe;
