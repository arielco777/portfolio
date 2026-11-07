import { useEffect, type RefObject } from "react";

/** Calls `onOutside` on a pointer-down outside every element in `refs`, or on Escape. */
export function useClickOutside(
    refs: RefObject<HTMLElement | null>[],
    onOutside: () => void,
    enabled = true,
) {
    useEffect(() => {
        if (!enabled) return;
        const onPointer = (e: PointerEvent) => {
            const target = e.target as Node;
            if (refs.every((r) => !r.current?.contains(target))) onOutside();
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOutside();
        };
        document.addEventListener("pointerdown", onPointer);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onPointer);
            document.removeEventListener("keydown", onKey);
        };
    }, [refs, onOutside, enabled]);
}
