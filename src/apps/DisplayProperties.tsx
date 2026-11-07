import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { useWindowManager } from "../state/windowManager";
import {
    autoScale,
    SCALE_MAX,
    SCALE_MIN,
    SCALE_STEP,
    setScaleSetting,
    useScaleSetting,
    useUiScale,
} from "../state/uiScale";
import Icon from "../components/Icon";
import { Button } from "./shared";
import type { AppProps } from "./types";

const pct = (n: number) => `${Math.round(n * 100)}%`;

/** Win98-style "Display Properties" with a UI scale slider (desktop only). */
const DisplayProperties = ({ windowId }: AppProps) => {
    const { close } = useWindowManager();
    const isMobile = useIsMobile();
    const setting = useScaleSetting();
    const scale = useUiScale();
    const isAuto = setting === "auto";
    // While the slider is dragged we only preview the number (React's onChange = native "input").
    // The zoom is applied on the native "change" event, which fires once the drag has fully ended.
    // Applying it any earlier (e.g. in pointerup) re-scales the page while the browser still
    // considers the thumb grabbed, so the next click anywhere snaps the slider back.
    const [draft, setDraft] = useState<number | null>(null);
    const shown = draft ?? scale;
    const sliderRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;
        let timer = 0;
        const onCommit = () => {
            const value = Number(el.value);
            el.blur();
            // Let the browser finish its own handling of the release before the page re-scales.
            timer = window.setTimeout(() => {
                setScaleSetting(value);
                setDraft(null);
            }, 0);
        };
        el.addEventListener("change", onCommit);
        return () => {
            el.removeEventListener("change", onCommit);
            window.clearTimeout(timer);
        };
    }, []);

    if (isMobile) {
        return <p className="p-4">Display scaling is only available on the desktop version.</p>;
    }

    return (
        <div className="flex flex-1 flex-col gap-3 p-2">
            <fieldset className="flex flex-col gap-3 border border-classic-dark p-3 shadow-[1px_1px_#fff]">
                <legend className="px-1">Screen area</legend>

                <div className="flex items-center gap-3">
                    <Icon name="computer" size={32} />
                    <p>Make everything bigger on high-resolution screens (text, icons and windows).</p>
                </div>

                <div className="flex items-center gap-2">
                    <span>Less</span>
                    <input
                        type="range"
                        min={SCALE_MIN}
                        max={SCALE_MAX}
                        step={SCALE_STEP}
                        value={shown}
                        ref={sliderRef}
                        onChange={(e) => setDraft(Number(e.target.value))}
                        aria-label="UI scale"
                        className="flex-1 accent-classic-blue"
                    />
                    <span>More</span>
                </div>
                <p className="text-center">
                    <b>{pct(shown)}</b>
                    {draft !== null && draft !== scale ? " (release to apply)" : isAuto && " (automatic)"}
                </p>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isAuto}
                        onChange={(e) => setScaleSetting(e.target.checked ? "auto" : scale)}
                    />
                    Automatic, based on screen width (currently {pct(autoScale())})
                </label>
            </fieldset>

            <div className="mt-auto flex justify-end gap-2">
                <Button onClick={() => setScaleSetting("auto")}>Reset</Button>
                <Button autoFocus onClick={() => close(windowId)}>
                    OK
                </Button>
            </div>
        </div>
    );
};

export default DisplayProperties;
