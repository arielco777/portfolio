import { useState, type ReactNode } from "react";
import type { IconName } from "../components/Icon";
import IconTile from "../components/IconTile";
import { useWindowManager } from "../state/windowManager";

/** Decorative "File Edit View Help" menu bar. */
export const MenuBar = ({ items = ["File", "Edit", "View", "Help"] }: { items?: string[] }) => (
    <div className="flex shrink-0 select-none gap-0.5 pb-0.5">
        {items.map((item) => (
            <span key={item} className="px-1.5 py-px">
                <u>{item[0]}</u>
                {item.slice(1)}
            </span>
        ))}
    </div>
);

/** White sunken content well that scrolls. */
export const Well = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <div className={`min-h-0 flex-1 overflow-auto bg-white p-[2px] bevel-sunken ${className}`}>
        <div className="h-full">{children}</div>
    </div>
);

export const StatusBar = ({ children }: { children: ReactNode }) => (
    <div className="mt-0.5 flex shrink-0 gap-0.5">
        <div className="flex-1 truncate px-1 py-px bevel-thin">{children}</div>
        <div className="w-24 px-1 py-px bevel-thin max-sm:hidden" />
    </div>
);

export const Button = ({
    children,
    onClick,
    autoFocus,
    type = "button",
}: {
    children: ReactNode;
    onClick?: () => void;
    autoFocus?: boolean;
    type?: "button" | "submit";
}) => (
    <button
        type={type}
        autoFocus={autoFocus}
        onClick={onClick}
        className="min-w-[75px] bg-classic-grey px-3 py-1 bevel-raised outline-offset-[-5px] focus-visible:outline-1 focus-visible:outline-dotted active:bevel-pressed"
    >
        {children}
    </button>
);

export type ExplorerItem = { id: string; label: string; icon: IconName; appId?: string };

/** An Explorer-style folder window: address bar, icon grid, status bar. */
export const Explorer = ({ path, items, emptyText }: { path: string; items: ExplorerItem[]; emptyText?: string }) => {
    const { open } = useWindowManager();
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <MenuBar />
            <div className="mb-0.5 flex shrink-0 items-center gap-1 border-t border-t-classic-dark pt-0.5 shadow-[inset_0_1px_#fff]">
                <span className="pl-1 text-classic-darker">Address</span>
                <div className="flex-1 truncate bg-white px-1 py-0.5 bevel-sunken">{path}</div>
            </div>
            <Well>
                <div className="flex min-h-full flex-wrap content-start gap-2 p-2" onPointerDown={() => setSelected(null)}>
                    {items.length === 0 && <p className="p-2 text-classic-dark">{emptyText ?? "This folder is empty."}</p>}
                    {items.map((item) => (
                        <IconTile
                            key={item.id}
                            variant="explorer"
                            icon={item.icon}
                            label={item.label}
                            selected={selected === item.id}
                            onSelect={() => setSelected(item.id)}
                            onOpen={item.appId ? () => open(item.appId!) : undefined}
                        />
                    ))}
                </div>
            </Well>
            <StatusBar>
                {items.length} object{items.length === 1 ? "" : "s"}
            </StatusBar>
        </div>
    );
};
