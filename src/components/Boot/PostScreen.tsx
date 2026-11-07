import { useEffect, useState } from "react";
import { useProfile, type Profile } from "../../content/profile";
import { useStrings, type Strings } from "../../i18n/strings";

const MEMORY = "MEMORY";

/** Lines printed one by one. `[label, result]` pairs get dot leaders. */
const lines = (t: Strings["boot"], p: Profile): (string | [string, string])[] => [
    t.bios(p.shortName, new Date().getFullYear(), p.location),
    "",
    [t.cpu, t.cpuValue],
    [t.memory, MEMORY],
    "",
    [t.frontEnd, "React, TypeScript, Tailwind ... OK"],
    [t.backEnd, "C# / .NET ... OK"],
    [t.cloud, "AWS ... OK"],
    [t.origin, t.originValue],
    [t.legacy, t.legacyValue],
    "",
    t.starting(p.shortName),
];

const LINE_MS = 180;
const MEMORY_MS = 900;
const MEMORY_KB = 65536;

const pad = (label: string) => `${label} `.padEnd(36, ".") + " ";

type Props = { onDone: () => void };

const PostScreen = ({ onDone }: Props) => {
    const t = useStrings().boot;
    const allLines = lines(t, useProfile());
    const total = allLines.length;
    const [shown, setShown] = useState(0);
    const [memory, setMemory] = useState(0);

    // Reveal lines one at a time, then hand over to the splash screen.
    useEffect(() => {
        const id = window.setInterval(() => setShown((n) => n + 1), LINE_MS);
        return () => window.clearInterval(id);
    }, []);

    useEffect(() => {
        if (shown < total + 3) return;
        onDone();
    }, [shown, total, onDone]);

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
                {allLines.slice(0, shown).map((line, i) => {
                    if (typeof line === "string") return <div key={i}>{line || " "}</div>;
                    const [label, result] = line;
                    const value = result === MEMORY ? `${memory}K ${memory === MEMORY_KB ? "OK" : ""}` : result;
                    return (
                        <div key={i}>
                            {pad(label)}
                            <span className={result === t.legacyValue ? "text-yellow-300" : "text-white"}>{value}</span>
                        </div>
                    );
                })}
                {shown <= total && <span className="animate-pulse">_</span>}
            </pre>
            <p className="text-neutral-500">{t.skip}</p>
        </div>
    );
};

export default PostScreen;
