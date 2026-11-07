import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useUiScale } from "../../state/uiScale";
import { prefersReducedMotion } from "./bootState";
import PostScreen from "./PostScreen";
import Splash from "./Splash";
import StartupMenu, { type StartupChoice } from "./StartupMenu";
import { QUICK_VIEW_HASH } from "../../state/route";

type Phase = "menu" | "post" | "splash";

type Props = { onDone: () => void };

/**
 * Boot: startup menu → POST text → splash → desktop.
 * Click / any key skips the current step, Escape skips straight to the desktop.
 * Phones get a short splash only; reduced-motion users go from the menu straight to the desktop.
 */
const BootSequence = ({ onDone }: Props) => {
    const isMobile = useIsMobile();
    const scale = useUiScale();
    // Phones skip the startup menu and only get the short splash.
    const [phase, setPhase] = useState<Phase>(() => (isMobile ? "splash" : "menu"));

    const choose = (choice: StartupChoice) => {
        if (choice === "normal" && !prefersReducedMotion()) setPhase("post");
        else {
            onDone();
            if (choice === "quick-view") window.location.hash = QUICK_VIEW_HASH;
        }
    };

    const next = () => {
        if (phase === "post") setPhase("splash");
        else onDone();
    };

    useEffect(() => {
        if (phase === "menu") return;
        const onKey = (e: KeyboardEvent) => (e.key === "Escape" ? onDone() : next());
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    });

    return (
        <div
            className="fixed inset-0 max-sm:max-h-(--app-h)"
            style={{ zoom: scale }}
            onClick={phase === "menu" ? undefined : next}
        >
            {phase === "menu" && <StartupMenu onChoose={choose} />}
            {phase === "post" && <PostScreen onDone={next} />}
            {phase === "splash" && <Splash durationMs={isMobile ? 900 : 2200} onDone={next} />}
        </div>
    );
};

export default BootSequence;
