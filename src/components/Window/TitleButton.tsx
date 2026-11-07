import type { ReactNode } from "react";

type Kind = "minimize" | "maximize" | "restore" | "close";

const GLYPHS: Record<Kind, ReactNode> = {
    minimize: <path d="M1 7h6v2H1z" />,
    maximize: <path d="M0 0h9v9H0zM1 2v6h7V2z" fillRule="evenodd" />,
    restore: <path d="M2 0h7v6H7V5H6V2H2zM3 1v1h5v3h0V1zM0 3h7v6H0zM1 5v3h5V5z" fillRule="evenodd" />,
    close: <path d="M0 0h2l2.5 2.5L7 0h2v1L5.5 4.5 9 8v1H7L4.5 6.5 2 9H0V8l3.5-3.5L0 1z" />,
};

type Props = {
    kind: Kind;
    label: string;
    onClick: () => void;
    className?: string;
};

/** A small bevelled caption button (minimize / maximize / close). */
const TitleButton = ({ kind, label, onClick, className }: Props) => (
    <button
        type="button"
        aria-label={label}
        title={label}
        // Stop the title bar from starting a drag (pointer capture would swallow the click).
        onPointerDown={(e) => e.stopPropagation()}
        onDoubleClick={(e) => e.stopPropagation()}
        onClick={onClick}
        className={`flex h-[14px] w-4 items-center justify-center bg-classic-grey bevel-raised active:bevel-pressed active:pt-px active:pl-px ${className ?? ""}`}
    >
        <svg width="9" height="9" viewBox="0 0 9 9" shapeRendering="crispEdges" fill="#000">
            {GLYPHS[kind]}
        </svg>
    </button>
);

export default TitleButton;
