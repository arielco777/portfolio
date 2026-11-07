import { createContext, useContext } from "react";
import type { AppDef } from "../apps/types";

export const TASKBAR_HEIGHT = 28;
export const MOBILE_QUERY = "(max-width: 639px)";

export type Rect = { x: number; y: number; w: number; h: number };

export type WinState = {
    id: string;
    appId: string;
    rect: Rect;
    z: number;
    minimized: boolean;
    maximized: boolean;
};

export type WMState = {
    windows: WinState[];
    nextZ: number;
    nextId: number;
};

export type WMAction =
    | { type: "open"; app: AppDef; bounds: { w: number; h: number }; mobile: boolean }
    | { type: "close"; id: string }
    | { type: "focus"; id: string }
    | { type: "minimize"; id: string }
    | { type: "toggleMaximize"; id: string }
    | { type: "setRect"; id: string; rect: Rect };

export const initialWMState: WMState = { windows: [], nextZ: 10, nextId: 1 };

const DEFAULT_SIZE = { w: 480, h: 340 };

const update = (state: WMState, id: string, patch: Partial<WinState>): WMState => ({
    ...state,
    windows: state.windows.map((w) => (w.id === id ? { ...w, ...patch } : w)),
});

const topZ = (state: WMState) => Math.max(0, ...state.windows.map((w) => w.z));

export function wmReducer(state: WMState, action: WMAction): WMState {
    switch (action.type) {
        case "open": {
            const { app, bounds, mobile } = action;
            const existing = state.windows.find((w) => w.appId === app.id);
            if (existing && app.singleton !== false) {
                return {
                    ...update(state, existing.id, { minimized: false, z: state.nextZ }),
                    nextZ: state.nextZ + 1,
                };
            }
            const size = app.defaultSize ?? DEFAULT_SIZE;
            const w = Math.min(size.w, bounds.w - 16);
            const h = Math.min(size.h, bounds.h - 16);
            const offset = (state.windows.length % 6) * 24;
            const x = Math.max(0, Math.min(Math.round((bounds.w - w) / 2) - 60 + offset, bounds.w - w));
            const y = Math.max(0, Math.min(Math.round((bounds.h - h) / 3) + offset, bounds.h - h));
            const win: WinState = {
                id: `win-${state.nextId}`,
                appId: app.id,
                rect: { x, y, w, h },
                z: state.nextZ,
                minimized: false,
                maximized: mobile && app.maximizable !== false,
            };
            return {
                windows: [...state.windows, win],
                nextZ: state.nextZ + 1,
                nextId: state.nextId + 1,
            };
        }
        case "close":
            return { ...state, windows: state.windows.filter((w) => w.id !== action.id) };
        case "focus": {
            const win = state.windows.find((w) => w.id === action.id);
            if (!win) return state;
            if (!win.minimized && win.z === topZ(state)) return state;
            return { ...update(state, action.id, { minimized: false, z: state.nextZ }), nextZ: state.nextZ + 1 };
        }
        case "minimize":
            return update(state, action.id, { minimized: true });
        case "toggleMaximize": {
            const win = state.windows.find((w) => w.id === action.id);
            return win ? update(state, action.id, { maximized: !win.maximized }) : state;
        }
        case "setRect":
            return update(state, action.id, { rect: action.rect });
    }
}

/** The focused window: highest z among the visible ones. */
export function getActiveId(windows: WinState[]): string | null {
    let best: WinState | null = null;
    for (const w of windows) {
        if (!w.minimized && (!best || w.z > best.z)) best = w;
    }
    return best?.id ?? null;
}

export type WindowManagerApi = {
    apps: AppDef[];
    getApp: (id: string) => AppDef | undefined;
    windows: WinState[];
    activeId: string | null;
    open: (appId: string) => void;
    close: (id: string) => void;
    focus: (id: string) => void;
    minimize: (id: string) => void;
    toggleMaximize: (id: string) => void;
    setRect: (id: string, rect: Rect) => void;
};

export const WindowManagerContext = createContext<WindowManagerApi | null>(null);

export function useWindowManager(): WindowManagerApi {
    const ctx = useContext(WindowManagerContext);
    if (!ctx) throw new Error("useWindowManager must be used inside <WindowManagerProvider>");
    return ctx;
}
