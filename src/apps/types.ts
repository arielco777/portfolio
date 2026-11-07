import type { ComponentType } from "react";
import type { IconName } from "../components/Icon";
import type { L10n } from "../i18n/lang";

export type AppCategory = "project" | "accessory" | "document" | "system";

export type ProjectKind = "professional" | "personal";

export type ProjectInfo = {
    kind: ProjectKind;
    summary: L10n;
    stack: string[];
    /** Shown in the status bar, e.g. a date range. */
    status?: L10n;
    /** Where it was built, e.g. a company. */
    org?: string;
    /** Screenshot URLs (imported from src/assets/projects). */
    images?: string[];
    links?: { label: L10n; href: string }[];
};

export type AppProps = {
    windowId: string;
    app: AppDef;
};

export type AppDef = {
    id: string;
    title: L10n;
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
