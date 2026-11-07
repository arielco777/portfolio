import { useState } from "react";
import type { AppCategory, AppDef } from "../../apps/types";
import { PROJECT_KINDS } from "../../content/projects";
import { useLang } from "../../i18n/lang";
import { useStrings } from "../../i18n/strings";
import { useWindowManager } from "../../state/windowManager";
import Icon, { type IconName } from "../Icon";

type MenuEntry =
    | {
          kind: "item";
          label: string;
          icon: IconName;
          onSelect?: () => void;
          disabled?: boolean;
          children?: MenuEntry[];
      }
    | { kind: "separator" };

const Arrow = () => (
    <svg
        width="4"
        height="7"
        viewBox="0 0 4 7"
        className="fill-current"
        aria-hidden="true"
    >
        <path d="M0 0l4 3.5L0 7z" />
    </svg>
);

type ListProps = { entries: MenuEntry[]; large?: boolean; onPick: () => void };

const MenuList = ({ entries, large = false, onPick }: ListProps) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <ul role="menu" className="flex min-w-36 flex-col">
            {entries.map((entry, i) => {
                if (entry.kind === "separator") {
                    return (
                        <li
                            key={`sep-${i}`}
                            role="separator"
                            className="mx-0.5 my-1 border-t border-b border-t-classic-dark border-b-white"
                        />
                    );
                }
                const highlighted = openIdx === i && !entry.disabled;
                return (
                    <li
                        key={entry.label}
                        className="relative"
                        onPointerEnter={() => setOpenIdx(i)}
                    >
                        <button
                            type="button"
                            role="menuitem"
                            aria-haspopup={entry.children ? "menu" : undefined}
                            aria-expanded={
                                entry.children ? openIdx === i : undefined
                            }
                            disabled={entry.disabled}
                            onClick={() => {
                                if (entry.children)
                                    setOpenIdx(openIdx === i ? null : i);
                                else {
                                    entry.onSelect?.();
                                    onPick();
                                }
                            }}
                            className={`flex w-full items-center gap-2 pr-2 text-left ${
                                large
                                    ? "h-8 pl-1 text-[12px] max-sm:h-11 max-sm:text-[15px]"
                                    : "h-5.5 pl-1 max-sm:h-11 max-sm:text-[15px]"
                            } ${highlighted ? "bg-classic-blue text-white" : ""} ${
                                entry.disabled ? "text-classic-dark" : ""
                            }`}
                        >
                            <Icon
                                name={entry.icon}
                                size={large ? 24 : 16}
                                className={entry.disabled ? "opacity-50" : ""}
                            />
                            <span className="flex-1 whitespace-nowrap pr-3">
                                {entry.label}
                            </span>
                            {entry.children && <Arrow />}
                        </button>
                        {entry.children && openIdx === i && (
                            <div className="absolute left-full top-0 -ml-1 bg-classic-grey p-0.75 bevel-raised max-sm:static max-sm:mt-0.5 max-sm:mb-2 max-sm:ml-4 max-sm:mr-2 max-sm:border max-sm:border-black max-sm:p-0.5 max-sm:shadow-[inset_-1px_-1px_#808080,inset_1px_1px_#fff,4px_4px_0_rgb(0_0_0/0.55)]">
                                <MenuList
                                    entries={entry.children}
                                    onPick={onPick}
                                />
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

type Props = { onClose: () => void };

const StartMenu = ({ onClose }: Props) => {
    const { apps, open } = useWindowManager();
    const lang = useLang();
    const t = useStrings().start;
    const folders = useStrings().folders;

    const item = (a: AppDef): MenuEntry => ({
        kind: "item",
        label: a.title[lang],
        icon: a.icon,
        onSelect: () => open(a.id),
    });
    const appsIn = (category: AppCategory): MenuEntry[] => apps.filter((a) => a.category === category).map(item);

    const entries: MenuEntry[] = [
        {
            kind: "item",
            label: t.programs,
            icon: "folder",
            children: [
                {
                    kind: "item",
                    label: t.projects,
                    icon: "folder",
                    children: PROJECT_KINDS.map(
                        (kind): MenuEntry => ({
                            kind: "item",
                            label: folders[kind],
                            icon: "folder",
                            children: apps.filter((a) => a.project?.kind === kind).map(item),
                        }),
                    ),
                },
                { kind: "item", label: t.accessories, icon: "folder", children: appsIn("accessory") },
            ],
        },
        { kind: "item", label: t.documents, icon: "document", children: appsIn("document") },
        {
            kind: "item",
            label: t.settings,
            icon: "settings",
            children: [
                { kind: "item", label: t.displayProperties, icon: "settings", onSelect: () => open("display") },
                { kind: "item", label: t.regionalSettings, icon: "web", onSelect: () => open("regional") },
                { kind: "item", label: t.controlPanel, icon: "settings", disabled: true },
                { kind: "item", label: t.taskbar, icon: "settings", disabled: true },
            ],
        },
        { kind: "item", label: t.find, icon: "find", disabled: true },
        { kind: "item", label: t.help, icon: "help", onSelect: () => open("help") },
        { kind: "item", label: t.run, icon: "run", disabled: true },
        { kind: "separator" },
        { kind: "item", label: t.shutDown, icon: "shutdown", onSelect: () => open("shutdown") },
    ];

    return (
        <div className="flex bg-classic-grey p-0.75 bevel-raised max-sm:w-[calc(100vw-4px)]">
            {/* Side banner */}
            <div className="flex w-5.25 items-end justify-center bg-linear-to-t from-title-from to-title-to pb-1">
                <span className="rotate-180 whitespace-nowrap text-[18px] text-white [writing-mode:vertical-rl]">
                    <b>Ariel</b>
                    <span className="font-light text-classic-grey">
                        Portfolio
                    </span>
                </span>
            </div>
            <div className="flex-1 py-0.5">
                <MenuList entries={entries} large onPick={onClose} />
            </div>
        </div>
    );
};

export default StartMenu;
