import { useEffect } from "react";
import { hashForApp, routeFromHash } from "./route";
import { useWindowManager } from "./windowManager";

/**
 * Keeps the URL hash in sync with the focused window (so it can be shared),
 * and opens the matching window when the hash is changed by a link or the user.
 */
const HashSync = () => {
    const { windows, activeId, getApp, open } = useWindowManager();
    const activeAppId = windows.find((w) => w.id === activeId)?.appId;

    useEffect(() => {
        const app = activeAppId ? getApp(activeAppId) : undefined;
        const target = app ? hashForApp(app) : "";
        if (window.location.hash !== target) {
            history.replaceState(null, "", target || window.location.pathname + window.location.search);
        }
    }, [activeAppId, getApp]);

    useEffect(() => {
        const onHash = () => {
            const id = routeFromHash(window.location.hash);
            if (id && getApp(id)) open(id);
        };
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, [getApp, open]);

    return null;
};

export default HashSync;
