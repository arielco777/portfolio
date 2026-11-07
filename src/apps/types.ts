import type { ComponentType } from "react";
import type { IconName } from "../components/Icon";

export type AppCategory = "project" | "accessory" | "document" | "system";

export type ProjectInfo = {
    summary: string;
    stack: string[];
    status?: string;
};

export type AppProps = {
    windowId: string;
    app: AppDef;
};

export type AppDef = {
    id: string;
    title: string;
    icon: IconName;
    /** Window contents. Omit for link-style entries that use `href` instead. */
    component?: ComponentType<AppProps>;
    /** Navigate to this URL/hash instead of opening a window (e.g. the Quick View page). */
    href?: string;
    category: AppCategory;
    defaultSize?: { w: number; h: number };
    minSize?: { w: number; h: number };
    /** Only one window of this app at a time (default true). */
    singleton?: boolean;
    resizable?: boolean;
    maximizable?: boolean;
    /** Show an icon for this app on the desktop. */
    desktop?: boolean;
    /** Hide the desktop icon on phones. */
    hideOnMobile?: boolean;
    /** Extra data for project windows. */
    project?: ProjectInfo;
};
