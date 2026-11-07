import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import type { AppDef } from "../../apps/types";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useStrings } from "../../i18n/strings";
import { useLang } from "../../i18n/lang";
import { useUiScale } from "../../state/uiScale";
import {
    useWindowManager,
    type Rect,
    type WinState,
} from "../../state/windowManager";
import Icon from "../Icon";
import TitleButton from "./TitleButton";

type Mode = "move" | "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

type Interaction = {
    mode: Mode;
    /** UI zoom at drag start: pointer deltas are screen px, window rects are zoomed CSS px. */
    scale: number;
    startX: number;
    startY: number;
    rect: Rect;
    bounds: { w: number; h: number };
};

const DEFAULT_MIN = { w: 240, h: 160 };

const HANDLES: { mode: Mode; className: string }[] = [
    { mode: "n", className: "top-0 left-2 right-2 h-1 cursor-ns-resize" },
    { mode: "s", className: "bottom-0 left-2 right-2 h-1 cursor-ns-resize" },
    { mode: "e", className: "right-0 top-2 bottom-2 w-1 cursor-ew-resize" },
    { mode: "w", className: "left-0 top-2 bottom-2 w-1 cursor-ew-resize" },
    { mode: "nw", className: "top-0 left-0 size-2 cursor-nwse-resize" },
    { mode: "se", className: "bottom-0 right-0 size-3 cursor-nwse-resize" },
    { mode: "ne", className: "top-0 right-0 size-2 cursor-nesw-resize" },
    { mode: "sw", className: "bottom-0 left-0 size-2 cursor-nesw-resize" },
];

const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), Math.max(min, max));

function computeRect(
    s: Interaction,
    dx: number,
    dy: number,
    min: { w: number; h: number },
): Rect {
    let { x, y, w, h } = s.rect;
    if (s.mode === "move") {
        // Keep at least part of the title bar reachable.
        x = clamp(x + dx, 60 - w, s.bounds.w - 60);
        y = clamp(y + dy, 0, s.bounds.h - 20);
        return { x, y, w, h };
    }
    if (s.mode.includes("e"))
        w = clamp(s.rect.w + dx, min.w, s.bounds.w - s.rect.x);
    if (s.mode.includes("s"))
        h = clamp(s.rect.h + dy, min.h, s.bounds.h - s.rect.y);
    if (s.mode.includes("w")) {
        x = clamp(s.rect.x + dx, 0, s.rect.x + s.rect.w - min.w);
        w = s.rect.w + (s.rect.x - x);
    }
    if (s.mode.includes("n")) {
        y = clamp(s.rect.y + dy, 0, s.rect.y + s.rect.h - min.h);
        h = s.rect.h + (s.rect.y - y);
    }
    return { x, y, w, h };
}

type Props = { win: WinState; app: AppDef; active: boolean };

const Window = ({ win, app, active }: Props) => {
    const { focus, close, minimize, toggleMaximize, setRect } =
        useWindowManager();
    const isMobile = useIsMobile();
    const scale = useUiScale();
    const lang = useLang();
    const t = useStrings();
    const title = app.title[lang];
    const frameRef = useRef<HTMLDivElement>(null);
    const interaction = useRef<Interaction | null>(null);

    // Phones: every window is full screen; the newest one sits on top of the others.
    const maximized = win.maximized || isMobile;
    const canMaximize = app.maximizable !== false;
    const canInteract = !maximized;
    const canResize = canInteract && app.resizable !== false;
    const min = app.minSize ?? DEFAULT_MIN;

    const start = (e: ReactPointerEvent<HTMLElement>, mode: Mode) => {
        if (e.button !== 0 || !canInteract || (mode !== "move" && !canResize))
            return;
        const parent = frameRef.current?.parentElement;
        if (!parent) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        const box = parent.getBoundingClientRect();
        interaction.current = {
            mode,
            scale,
            startX: e.clientX,
            startY: e.clientY,
            rect: win.rect,
            bounds: { w: box.width / scale, h: box.height / scale },
        };
    };

    const move = (e: ReactPointerEvent<HTMLElement>) => {
        const s = interaction.current;
        if (!s) return;
        setRect(
            win.id,
            computeRect(s, (e.clientX - s.startX) / s.scale, (e.clientY - s.startY) / s.scale, min),
        );
    };

    const end = (e: ReactPointerEvent<HTMLElement>) => {
        if (!interaction.current) return;
        interaction.current = null;
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const AppComponent = app.component;

    return (
        <div
            ref={frameRef}
            role="dialog"
            aria-label={title}
            onPointerDownCapture={() => focus(win.id)}
            className={`absolute flex flex-col bg-classic-grey bevel-raised p-0.75 ${win.minimized ? "hidden" : ""}`}
            style={
                maximized
                    ? { inset: 0, zIndex: win.z }
                    : {
                          left: win.rect.x,
                          top: win.rect.y,
                          width: win.rect.w,
                          height: win.rect.h,
                          zIndex: win.z,
                      }
            }
        >
            {/* Title bar */}
            {isMobile ? (
                <div className="flex h-10 shrink-0 select-none items-center gap-2 bg-linear-to-r from-title-from to-title-to px-1 text-white">
                    <button
                        type="button"
                        onClick={() => close(win.id)}
                        className="flex h-8 items-center gap-1 bg-classic-grey px-2 text-black bevel-raised active:bevel-pressed"
                    >
                        <svg
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            aria-hidden="true"
                        >
                            <path d="M6 0L0 5l6 5z" />
                        </svg>
                        {t.window.back}
                    </button>
                    <Icon name={app.icon} size={20} />
                    <span className="flex-1 truncate text-[15px] font-bold">
                        {title}
                    </span>
                    <button
                        type="button"
                        aria-label={t.window.close}
                        onClick={() => close(win.id)}
                        className="flex size-8 items-center justify-center bg-classic-grey bevel-raised active:bevel-pressed"
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 9 9"
                            shapeRendering="crispEdges"
                            aria-hidden="true"
                        >
                            <path d="M0 0h2l2.5 2.5L7 0h2v1L5.5 4.5 9 8v1H7L4.5 6.5 2 9H0V8l3.5-3.5L0 1z" />
                        </svg>
                    </button>
                </div>
            ) : (
                <div
                    onPointerDown={(e) => start(e, "move")}
                    onPointerMove={move}
                    onPointerUp={end}
                    onPointerCancel={end}
                    onDoubleClick={() => canMaximize && toggleMaximize(win.id)}
                    className={`flex h-4.5 shrink-0 select-none items-center gap-1 pl-0.5 pr-0.5 touch-none bg-linear-to-r ${
                        active
                            ? "from-title-from to-title-to text-white"
                            : "from-title-inactive-from to-title-inactive-to text-classic-grey"
                    }`}
                >
                    <Icon name={app.icon} size={16} />
                    <span className="flex-1 truncate font-bold">
                        {title}
                    </span>
                    <TitleButton
                        kind="minimize"
                        label={t.window.minimize}
                        onClick={() => minimize(win.id)}
                    />
                    {canMaximize && (
                        <TitleButton
                            kind={maximized ? "restore" : "maximize"}
                            label={maximized ? t.window.restore : t.window.maximize}
                            onClick={() => toggleMaximize(win.id)}
                        />
                    )}
                    <TitleButton
                        kind="close"
                        label={t.window.close}
                        className="ml-0.5"
                        onClick={() => close(win.id)}
                    />
                </div>
            )}

            {/* Content */}
            <div className="mt-0.5 flex min-h-0 flex-1 flex-col">
                {AppComponent && <AppComponent windowId={win.id} app={app} />}
            </div>

            {canResize &&
                HANDLES.map((h) => (
                    <div
                        key={h.mode}
                        onPointerDown={(e) => start(e, h.mode)}
                        onPointerMove={move}
                        onPointerUp={end}
                        onPointerCancel={end}
                        className={`absolute touch-none ${h.className}`}
                    />
                ))}
        </div>
    );
};

export default Window;
