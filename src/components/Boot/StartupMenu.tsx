import { useEffect, useState } from "react";
import { useProfile } from "../../content/profile";
import { LANGS, setLang, toggleLang, useLang } from "../../i18n/lang";
import { STRINGS, useStrings } from "../../i18n/strings";

export type StartupChoice = "normal" | "quick" | "quick-view";

const CHOICES: StartupChoice[] = ["normal", "quick", "quick-view"];
const LABEL_KEY = { normal: "normal", quick: "quick", "quick-view": "quickView" } as const;

const COUNTDOWN_S = 5;

type Props = { onChoose: (choice: StartupChoice) => void };

/**
 * Text-mode startup menu: arrows / number keys / click, auto-selects Normal after a countdown.
 * L (or clicking a language) switches between English and French.
 */
const StartupMenu = ({ onChoose }: Props) => {
    const t = useStrings().boot;
    const lang = useLang();
    const { shortName } = useProfile();
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
        if (!touched && remaining <= 0) onChoose(CHOICES[selected]);
    }, [remaining, touched, selected, onChoose]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const n = Number(e.key);
            if (n >= 1 && n <= CHOICES.length) {
                onChoose(CHOICES[n - 1]);
            } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                setTouched(true);
                const d = e.key === "ArrowDown" ? 1 : -1;
                setSelected((s) => (s + d + CHOICES.length) % CHOICES.length);
            } else if (e.key === "Enter") {
                onChoose(CHOICES[selected]);
            } else if (e.key === "Escape") {
                onChoose("quick");
            } else if (e.key.toLowerCase() === "l") {
                setTouched(true);
                toggleLang();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected, onChoose]);

    const title = t.menuTitle(shortName);

    return (
        <div className="flex h-full items-center justify-center bg-black p-4 font-mono text-[15px] leading-relaxed text-neutral-300 select-none sm:text-[17px]">
            <div className="w-full max-w-2xl">
                <h1 className="text-center text-white">{title}</h1>
                <p className="mb-6 text-center text-neutral-500">{"=".repeat(title.length)}</p>
                <ol className="flex flex-col gap-1">
                    {CHOICES.map((choice, i) => (
                        <li key={choice}>
                            <button
                                type="button"
                                onPointerEnter={() => {
                                    setTouched(true);
                                    setSelected(i);
                                }}
                                onClick={() => onChoose(choice)}
                                className={`w-full px-2 text-left ${selected === i ? "bg-neutral-300 text-black" : ""}`}
                            >
                                {i + 1}. {t[LABEL_KEY[choice]]}
                            </button>
                        </li>
                    ))}
                </ol>

                <p className="mt-6 flex flex-wrap items-center gap-x-3 px-2">
                    <span>{t.language} (L) :</span>
                    {LANGS.map((l) => (
                        <button
                            key={l}
                            type="button"
                            onClick={() => {
                                setTouched(true);
                                setLang(l);
                            }}
                            className={lang === l ? "bg-neutral-300 px-1 text-black" : "px-1 hover:text-white"}
                        >
                            ({lang === l ? "•" : " "}) {STRINGS[l].langName}
                        </button>
                    ))}
                </p>

                <p className="mt-6 flex flex-wrap justify-between gap-x-6 px-2">
                    <span>
                        {t.choice} <span className="text-white">{selected + 1}</span>
                        <span className="animate-pulse">_</span>
                    </span>
                    {!touched && (
                        <span>
                            {t.remaining} {Math.max(0, remaining)}
                        </span>
                    )}
                </p>
                <p className="mt-6 px-2 text-neutral-500">{t.hint}</p>
            </div>
        </div>
    );
};

export default StartupMenu;
