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
import { useStrings } from "../i18n/strings";
import { Button } from "./shared";
import type { AppProps } from "./types";

const pct = (n: number) => `${Math.round(n * 100)}%`;

/** Win98-style "Display Properties" with a UI scale slider (desktop only). */
const DisplayProperties = ({ windowId }: AppProps) => {
    const t = useStrings();
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
        return <p className="p-4">{t.display.mobileOnly}</p>;
    }

    return (
        <div className="flex flex-1 flex-col gap-3 p-2">
            <fieldset className="flex flex-col gap-3 border border-classic-dark p-3 shadow-[1px_1px_#fff]">
                <legend className="px-1">{t.display.screenArea}</legend>

                <div className="flex items-center gap-3">
                    <Icon name="computer" size={32} />
                    <p>{t.display.intro}</p>
                </div>

                <div className="flex items-center gap-2">
                    <span>{t.display.less}</span>
                    <input
                        type="range"
                        min={SCALE_MIN}
                        max={SCALE_MAX}
                        step={SCALE_STEP}
                        value={shown}
                        ref={sliderRef}
                        onChange={(e) => setDraft(Number(e.target.value))}
                        aria-label={t.display.scaleLabel}
                        className="flex-1 accent-classic-blue"
                    />
                    <span>{t.display.more}</span>
                </div>
                <p className="text-center">
                    <b>{pct(shown)}</b>
                    {draft !== null && draft !== scale ? ` ${t.display.release}` : isAuto && ` ${t.display.auto}`}
                </p>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isAuto}
                        onChange={(e) => setScaleSetting(e.target.checked ? "auto" : scale)}
                    />
                    {t.display.autoLabel(pct(autoScale()))}
                </label>
            </fieldset>

            <div className="mt-auto flex justify-end gap-2">
                <Button onClick={() => setScaleSetting("auto")}>{t.display.reset}</Button>
                <Button autoFocus onClick={() => close(windowId)}>
                    {t.display.ok}
                </Button>
            </div>
        </div>
    );
};

export default DisplayProperties;
