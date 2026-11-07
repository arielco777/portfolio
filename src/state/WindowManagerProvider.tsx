import { useReducer, type ReactNode } from "react";
import type { AppDef } from "../apps/types";
import { currentUiScale } from "./uiScale";
import {
    getActiveId,
    initialWMState,
    MOBILE_QUERY,
    TASKBAR_HEIGHT,
    WindowManagerContext,
    wmReducer,
    type WindowManagerApi,
    type WMState,
} from "./windowManager";

type Props = {
    apps: AppDef[];
    /** App ids to open when the page loads. */
    startupApps?: string[];
    children: ReactNode;
};

const viewport = () => {
    const mobile = window.matchMedia(MOBILE_QUERY).matches;
    const scale = currentUiScale(mobile);
    return {
        bounds: { w: window.innerWidth / scale, h: window.innerHeight / scale - TASKBAR_HEIGHT },
        mobile,
    };
};

const WindowManagerProvider = ({ apps, startupApps = [], children }: Props) => {
    const [state, dispatch] = useReducer(wmReducer, null, (): WMState =>
        startupApps.reduce((s, id) => {
            const app = apps.find((a) => a.id === id);
            return app ? wmReducer(s, { type: "open", app, ...viewport() }) : s;
        }, initialWMState),
    );

    const getApp = (id: string) => apps.find((a) => a.id === id);

    const api: WindowManagerApi = {
        apps,
        getApp,
        windows: state.windows,
        activeId: getActiveId(state.windows),
        open: (appId) => {
            const app = getApp(appId);
            if (!app) return;
            if (app.href) window.location.hash = app.href;
            else dispatch({ type: "open", app, ...viewport() });
        },
        close: (id) => dispatch({ type: "close", id }),
        focus: (id) => dispatch({ type: "focus", id }),
        minimize: (id) => dispatch({ type: "minimize", id }),
        toggleMaximize: (id) => dispatch({ type: "toggleMaximize", id }),
        setRect: (id, rect) => dispatch({ type: "setRect", id, rect }),
    };

    return <WindowManagerContext value={api}>{children}</WindowManagerContext>;
};

export default WindowManagerProvider;
