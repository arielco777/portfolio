import { useState } from "react";
import { APPS } from "./apps/registry";
import BootSequence from "./components/Boot/BootSequence";
import { hasBooted, markBooted, prefersReducedMotion } from "./components/Boot/bootState";
import Desktop from "./components/Desktop/Desktop";
import MobileNotice from "./components/MobileNotice";
import QuickView from "./components/QuickView/QuickView";
import TaskBar from "./components/TaskBar/TaskBar";
import HashSync from "./state/HashSync";
import { routeFromHash, useHash } from "./state/route";
import { MOBILE_QUERY } from "./state/windowManager";
import WindowManagerProvider from "./state/WindowManagerProvider";
import { useUiScale } from "./state/uiScale";

const isMobileNow = () => window.matchMedia(MOBILE_QUERY).matches;

/** Windows to open on load: the deep-linked window if any, else the Help window (desktop only). */
const startupApps = (route: string | null) => {
    if (route && APPS.some((a) => a.id === route && !a.href)) return [route];
    return isMobileNow() ? [] : ["help"];
};

/** Play the boot once per tab session, never for deep links (people came for that page). */
const shouldBoot = (route: string | null) =>
    !route && !hasBooted() && !(isMobileNow() && prefersReducedMotion());

const App = () => {
    const route = routeFromHash(useHash());
    const [booting, setBooting] = useState(() => shouldBoot(route));
    const scale = useUiScale();

    const quickView = route === "quick-view";

    if (booting && !quickView) {
        return (
            <BootSequence
                onDone={() => {
                    markBooted();
                    setBooting(false);
                }}
            />
        );
    }

    return (
        <WindowManagerProvider apps={APPS} startupApps={startupApps(route)}>
            <HashSync />
            {/* The desktop stays mounted under Quick View, so going back keeps your windows as they were. */}
            <div
                className={`fixed inset-0 flex flex-col overflow-hidden max-sm:max-h-(--app-h) ${quickView ? "print:hidden" : ""}`}
                style={{ zoom: scale }}
                aria-hidden={quickView || undefined}
                inert={quickView}
            >
                <Desktop />
                <TaskBar />
                <MobileNotice />
            </div>
            {quickView && <QuickView />}
        </WindowManagerProvider>
    );
};

export default App;
