const KEY = "portfolio.booted";

/** Whether the boot sequence already played in this browser tab session. */
export function hasBooted(): boolean {
    try {
        return sessionStorage.getItem(KEY) === "1";
    } catch {
        return false;
    }
}

export function markBooted() {
    try {
        sessionStorage.setItem(KEY, "1");
    } catch {
        /* storage unavailable: boot will just play again next load */
    }
}

/** Restart the "computer": clear the flag and reload so the boot sequence plays again. */
export function restart() {
    try {
        sessionStorage.removeItem(KEY);
    } catch {
        /* ignore */
    }
    window.location.hash = "";
    window.location.reload();
}

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
