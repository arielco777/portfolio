import { useSyncExternalStore } from "react";
import type { AppDef } from "../apps/types";

/*
 * Hash-based deep links:
 *   #/about                 → opens the About Me window
 *   #/projects/erp-cloud    → opens that project
 *   #/quick-view            → plain one-page résumé (outside the desktop)
 */
export const QUICK_VIEW_HASH = "#/quick-view";

/** The app id (or "quick-view") a hash points to: its last path segment. */
export const routeFromHash = (hash: string): string | null =>
    hash.replace(/^#\/?/, "").split("/").filter(Boolean).at(-1) ?? null;

export const hashForApp = (app: AppDef) => (app.category === "project" ? `#/projects/${app.id}` : `#/${app.id}`);

const subscribe = (cb: () => void) => {
    window.addEventListener("hashchange", cb);
    return () => window.removeEventListener("hashchange", cb);
};

export const useHash = () => useSyncExternalStore(subscribe, () => window.location.hash);
