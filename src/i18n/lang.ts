import { useSyncExternalStore } from "react";

export type Lang = "en" | "fr";
export const LANGS: Lang[] = ["en", "fr"];

/** A value with one version per language. */
export type L10n<T = string> = Record<Lang, T>;

export const loc = <T>(value: L10n<T>, lang: Lang): T => value[lang];

const KEY = "portfolio.lang";
const listeners = new Set<() => void>();

const isLang = (v: unknown): v is Lang => v === "en" || v === "fr";

/** `?lang=fr` in the URL > saved choice > browser language > English. */
function detect(): Lang {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (isLang(param)) return param;
    try {
        const saved = localStorage.getItem(KEY);
        if (isLang(saved)) return saved;
    } catch {
        /* storage unavailable */
    }
    const browser = (navigator.languages?.[0] ?? navigator.language ?? "en").toLowerCase();
    return browser.startsWith("fr") ? "fr" : "en";
}

let current: Lang = detect();
document.documentElement.lang = current === "fr" ? "fr-CA" : "en";

export function setLang(next: Lang) {
    if (next === current) return;
    current = next;
    document.documentElement.lang = next === "fr" ? "fr-CA" : "en";
    try {
        localStorage.setItem(KEY, next);
    } catch {
        /* not persisted; still applies for this visit */
    }
    listeners.forEach((l) => l());
}

export const toggleLang = () => setLang(current === "en" ? "fr" : "en");

const subscribe = (cb: () => void) => {
    listeners.add(cb);
    return () => listeners.delete(cb);
};

export const useLang = () => useSyncExternalStore(subscribe, () => current);
