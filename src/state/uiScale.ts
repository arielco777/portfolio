import { useSyncExternalStore } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

/*
 * Desktop UI scale (CSS `zoom` on the desktop shell and boot screens).
 * "auto" picks a scale from the screen width; a number is a user override.
 * Persisted per browser; phones always use 1.
 */
export type ScaleSetting = "auto" | number;

export const SCALE_MIN = 1;
export const SCALE_MAX = 3;
export const SCALE_STEP = 0.25;

const KEY = "portfolio.uiScale";
const listeners = new Set<() => void>();

const load = (): ScaleSetting => {
    try {
        const raw = localStorage.getItem(KEY);
        const n = raw ? Number(raw) : NaN;
        return Number.isFinite(n) && n >= SCALE_MIN && n <= SCALE_MAX ? n : "auto";
    } catch {
        return "auto";
    }
};

let setting: ScaleSetting = load();

/** 1920px wide → 100%, 2560 → 125%, 3840 (4K) → 200%. */
export const autoScale = () =>
    Math.min(SCALE_MAX, Math.max(SCALE_MIN, Math.floor((window.innerWidth / 1920) * 4) / 4));

const resolve = (s: ScaleSetting) => (s === "auto" ? autoScale() : s);

export function setScaleSetting(next: ScaleSetting) {
    setting = next;
    try {
        if (next === "auto") localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, String(next));
    } catch {
        /* not persisted; still applies for this visit */
    }
    listeners.forEach((l) => l());
}

const subscribe = (cb: () => void) => {
    listeners.add(cb);
    window.addEventListener("resize", cb); // "auto" depends on the window width
    return () => {
        listeners.delete(cb);
        window.removeEventListener("resize", cb);
    };
};

export const useScaleSetting = () => useSyncExternalStore(subscribe, () => setting);

/** The zoom factor to apply right now (1 on phones). */
export function useUiScale(): number {
    const isMobile = useIsMobile();
    const value = useSyncExternalStore(subscribe, () => resolve(setting));
    return isMobile ? 1 : value;
}

/** Non-hook read, for event handlers outside React render. */
export const currentUiScale = (mobile: boolean) => (mobile ? 1 : resolve(setting));
