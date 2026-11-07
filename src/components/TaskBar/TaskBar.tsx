import { useRef, useState } from "react";
import StartMenuImg from "../../assets/start-menu.png";
import StartMenuClickedImg from "../../assets/start-menu-clicked.png";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useWindowManager } from "../../state/windowManager";
import { QUICK_VIEW_HASH } from "../../state/route";
import Icon from "../Icon";
import Clock from "./Clock";
import StartMenu from "./StartMenu";

const Divider = () => (
    <div className="mx-0.5 flex h-full shrink-0">
        <div className="w-px bg-classic-dark" />
        <div className="w-px bg-white" />
    </div>
);

const TaskBar = () => {
    const { windows, activeId, getApp, focus, minimize, open } =
        useWindowManager();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [pressing, setPressing] = useState(false);

    useClickOutside([menuRef, buttonRef], () => setOpenMenu(false), openMenu);

    const pressed = pressing || openMenu;

    return (
        <div className="relative z-100000 flex h-7 max-sm:h-11 w-full shrink-0 items-center gap-0.5 border-t border-white bg-classic-grey px-0.5 py-0.5 shadow-[inset_0_1px_#dfdfdf]">
            {openMenu && (
                <div
                    ref={menuRef}
                    className="absolute bottom-full left-0.5 mb-px"
                >
                    <StartMenu onClose={() => setOpenMenu(false)} />
                </div>
            )}

            <button
                ref={buttonRef}
                type="button"
                aria-label="Start"
                aria-expanded={openMenu}
                onClick={() => setOpenMenu((prev) => !prev)}
                onPointerDown={() => setPressing(true)}
                onPointerUp={() => setPressing(false)}
                onPointerLeave={() => setPressing(false)}
                onPointerCancel={() => setPressing(false)}
                className="flex h-full shrink-0 items-center justify-center"
            >
                <img
                    src={pressed ? StartMenuClickedImg : StartMenuImg}
                    width={50}
                    height={20}
                    alt=""
                    draggable={false}
                    className={`border max-sm:h-8 max-sm:w-20 [image-rendering:pixelated] ${pressed ? "border-black" : "border-neutral-300"}`}
                />
            </button>

            <Divider />

            {/* Quick Launch */}
            <div className="flex h-full shrink-0 items-center gap-0.5">
                <a
                    href={QUICK_VIEW_HASH}
                    title="Quick View résumé"
                    className="flex h-full items-center gap-1 px-1 hover:bevel-raised active:bevel-pressed max-sm:px-2"
                >
                    <Icon name="document" size={16} />
                    <span className="sm:hidden">Résumé</span>
                </a>
                <button
                    type="button"
                    title="Projects"
                    onClick={() => open("projects")}
                    className="flex h-full items-center px-1 hover:bevel-raised active:bevel-pressed max-sm:px-2"
                >
                    <Icon name="folder" size={16} />
                </button>
            </div>

            <Divider />

            {/* Open windows */}
            <div className="flex h-full min-w-0 flex-1 gap-0.5 max-sm:hidden">
                {windows.map((w) => {
                    const app = getApp(w.appId);
                    if (!app) return null;
                    const active = w.id === activeId;
                    return (
                        <button
                            key={w.id}
                            type="button"
                            title={app.title}
                            onClick={() =>
                                active ? minimize(w.id) : focus(w.id)
                            }
                            className={`flex h-full w-40 min-w-0 items-center gap-1 px-1 text-left ${
                                active
                                    ? "bg-checker bevel-pressed font-bold"
                                    : "bg-classic-grey bevel-raised"
                            }`}
                        >
                            <Icon name={app.icon} size={16} />
                            <span className="truncate">{app.title}</span>
                        </button>
                    );
                })}
            </div>
            <div className="flex-1 sm:hidden" />

            <Divider />

            {/* System tray */}
            <div className="flex h-full shrink-0 items-center gap-1.5 pr-2.5 pl-1 bevel-thin">
                <button
                    type="button"
                    title="Display size"
                    aria-label="Display size"
                    onClick={() => open("display")}
                    className="flex items-center max-sm:hidden"
                >
                    <Icon name="find" size={16} />
                </button>
                <Clock />
            </div>
        </div>
    );
};

export default TaskBar;
