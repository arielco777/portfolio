import { useIsMobile } from "../hooks/useIsMobile";
import Icon, { type IconName } from "./Icon";

type Props = {
    icon: IconName;
    label: string;
    selected: boolean;
    onSelect: () => void;
    onOpen?: () => void;
    /** "desktop" = white label on teal, "explorer" = black label on white. */
    variant: "desktop" | "explorer";
};

/** A selectable icon + label. Click selects, double-click / Enter opens (single tap on mobile). */
const IconTile = ({
    icon,
    label,
    selected,
    onSelect,
    onOpen,
    variant,
}: Props) => {
    const isMobile = useIsMobile();

    return (
        <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => (isMobile && onOpen ? onOpen() : onSelect())}
            onDoubleClick={onOpen}
            onKeyDown={(e) => e.key === "Enter" && onOpen?.()}
            onFocus={onSelect}
            className="group flex w-18.75 max-sm:w-24 flex-col items-center gap-1 p-0.5 outline-none"
        >
            <Icon
                name={icon}
                size={isMobile ? 48 : 32}
                className={
                    selected
                        ? "brightness-50 sepia saturate-[10] hue-rotate-190"
                        : ""
                }
            />
            <span
                className={`px-0.5 text-center max-w-17.5 max-sm:max-w-24 max-sm:text-[14px] leading-tight wrap-break-word select-none ${
                    selected
                        ? "bg-classic-blue  text-white outline-1 outline-dotted outline-yellow-200"
                        : variant === "desktop"
                          ? "text-white"
                          : "text-black"
                }`}
            >
                {label}
            </span>
        </button>
    );
};

export default IconTile;
