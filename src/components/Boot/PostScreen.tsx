import { useEffect, useState } from "react";
import { PROFILE } from "../../content/profile";

/** Lines printed one by one. `[label, result]` pairs get dot leaders. */
const LINES: (string | [string, string])[] = [
    `${PROFILE.shortName}BIOS v4.98  (C) 2023-${new Date().getFullYear()} ${PROFILE.shortName} Systems, ${PROFILE.location}`,
    "",
    ["Main Processor", "Software Engineer, 3 yrs experience"],
    ["Memory Test", "MEMORY"],
    "",
    ["Detecting Front-End", "React, TypeScript, Tailwind ... OK"],
    ["Detecting Back-End", "C# / .NET ... OK"],
    ["Detecting Cloud", "AWS ... OK"],
    ["Detecting Origin", "Video Game Programming ... OK"],
    ["Loading legacy ERP drivers", "SKIPPED (rewritten from scratch)"],
    "",
    `Starting ${PROFILE.shortName} OS...`,
];

const LINE_MS = 180;
const MEMORY_MS = 900;
const MEMORY_KB = 65536;

const pad = (label: string) => `${label} `.padEnd(30, ".") + " ";

type Props = { onDone: () => void };

const PostScreen = ({ onDone }: Props) => {
    const [shown, setShown] = useState(0);
    const [memory, setMemory] = useState(0);

    // Reveal lines one at a time, then hand over to the splash screen.
    useEffect(() => {
        const id = window.setInterval(() => setShown((n) => n + 1), LINE_MS);
        return () => window.clearInterval(id);
    }, []);

    useEffect(() => {
        if (shown < LINES.length + 3) return;
        onDone();
    }, [shown, onDone]);

    // Count the memory test up.
    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const step = (t: number) => {
            const p = Math.min(1, (t - start) / MEMORY_MS);
            setMemory(Math.round(p * MEMORY_KB));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div className="flex h-full flex-col bg-black p-4 font-mono text-[13px] leading-snug text-neutral-300 sm:p-8 sm:text-[15px]">
            <pre className="flex-1 whitespace-pre-wrap">
                {LINES.slice(0, shown).map((line, i) => {
                    if (typeof line === "string") return <div key={i}>{line || " "}</div>;
                    const [label, result] = line;
                    const value = result === "MEMORY" ? `${memory}K ${memory === MEMORY_KB ? "OK" : ""}` : result;
                    return (
                        <div key={i}>
                            {pad(label)}
                            <span className={result.startsWith("SKIPPED") ? "text-yellow-300" : "text-white"}>{value}</span>
                        </div>
                    );
                })}
                {shown <= LINES.length && <span className="animate-pulse">_</span>}
            </pre>
            <p className="text-neutral-500">Click or press any key to continue, ESC to skip to the desktop</p>
        </div>
    );
};

export default PostScreen;
