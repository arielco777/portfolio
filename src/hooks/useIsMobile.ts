import { useSyncExternalStore } from "react";
import { MOBILE_QUERY } from "../state/windowManager";

const subscribe = (cb: () => void) => {
    const mql = window.matchMedia(MOBILE_QUERY);
    mql.addEventListener("change", cb);
    return () => mql.removeEventListener("change", cb);
};

const getSnapshot = () => window.matchMedia(MOBILE_QUERY).matches;

export const useIsMobile = () => useSyncExternalStore(subscribe, getSnapshot);
