import { useEffect, useState } from "react";
import { PROFILE } from "../../content/profile";

export type StartupChoice = "normal" | "quick" | "quick-view";

const OPTIONS: { choice: StartupChoice; label: string }[] = [
    { choice: "normal", label: "Normal (full boot sequence)" },
    { choice: "quick", label: "Quick boot (straight to the desktop)" },
    { choice: "quick-view", label: "Quick View (plain one-page résumé)" },
];

const COUNTDOWN_S = 5;

type Props = { onChoose: (choice: StartupChoice) => void };

/** Text-mode startup menu: arrows / number keys / click, auto-selects Normal after a countdown. */
const StartupMenu = ({ onChoose }: Props) => {
    const [selected, setSelected] = useState(0);
    const [remaining, setRemaining] = useState(COUNTDOWN_S);
    const [touched, setTouched] = useState(false);

    // Countdown stops as soon as the visitor interacts.
    useEffect(() => {
        if (touched) return;
        const id = window.setInterval(() => setRemaining((r) => r - 1), 1000);
        return () => window.clearInterval(id);
    }, [touched]);

    useEffect(() => {
        if (!touched && remaining <= 0) onChoose(OPTIONS[selected].choice);
    }, [remaining, touched, selected, onChoose]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const n = Number(e.key);
            if (n >= 1 && n <= OPTIONS.length) {
                onChoose(OPTIONS[n - 1].choice);
            } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                setTouched(true);
                const d = e.key === "ArrowDown" ? 1 : -1;
                setSelected((s) => (s + d + OPTIONS.length) % OPTIONS.length);
            } else if (e.key === "Enter") {
                onChoose(OPTIONS[selected].choice);
            } else if (e.key === "Escape") {
                onChoose("quick");
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, onChoose]);

    return (
        <div className="flex h-full items-center justify-center bg-black p-4 font-mono text-[15px] leading-relaxed text-neutral-300 select-none sm:text-[17px]">
            <div className="w-full max-w-2xl">
                <h1 className="text-center text-white">{PROFILE.shortName} OS Startup Menu</h1>
                <p className="mb-6 text-center text-neutral-500">{"=".repeat(28)}</p>
                <ol className="flex flex-col gap-1">
                    {OPTIONS.map((o, i) => (
                        <li key={o.choice}>
                            <button
                                type="button"
                                onPointerEnter={() => {
                                    setTouched(true);
                                    setSelected(i);
                                }}
                                onClick={() => onChoose(o.choice)}
                                className={`w-full px-2 text-left ${
                                    selected === i ? "bg-neutral-300 text-black" : ""
                                }`}
                            >
                                {i + 1}. {o.label}
                            </button>
                        </li>
                    ))}
                </ol>
                <p className="mt-8 flex flex-wrap justify-between gap-x-6 px-2">
                    <span>
                        Enter a choice: <span className="text-white">{selected + 1}</span>
                        <span className="animate-pulse">_</span>
                    </span>
                    {!touched && <span>Time remaining: {Math.max(0, remaining)}</span>}
                </p>
                <p className="mt-6 px-2 text-neutral-500">↑/↓ or 1-3 to choose, Enter to start, Esc for Quick boot</p>
            </div>
        </div>
    );
};

export default StartupMenu;
