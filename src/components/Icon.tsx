import type { ReactNode } from "react";

/*
 * Simple pixel-ish placeholder icons drawn on a 32x32 grid.
 * To use real artwork later, replace an entry with e.g. <image href={myPng} width="32" height="32" />.
 */
const ICONS = {
    computer: (
        <>
            <rect x="4" y="3" width="24" height="18" fill="#d4d0c8" stroke="#000" />
            <rect x="7" y="6" width="18" height="12" fill="#008080" stroke="#808080" />
            <rect x="12" y="21" width="8" height="3" fill="#808080" />
            <rect x="5" y="24" width="22" height="5" fill="#d4d0c8" stroke="#000" />
            <rect x="20" y="26" width="4" height="1" fill="#0a0" />
        </>
    ),
    folder: (
        <>
            <path d="M2 7h10l2 3h16v18H2z" fill="#e8b000" stroke="#000" />
            <path d="M2 12h28v16H2z" fill="#ffd94a" stroke="#000" />
            <path d="M3 13h26" stroke="#fff3a8" />
        </>
    ),
    notepad: (
        <>
            <rect x="6" y="3" width="20" height="26" fill="#fff" stroke="#000" />
            <rect x="6" y="3" width="20" height="5" fill="#000080" stroke="#000" />
            <path d="M9 12h14M9 15h14M9 18h14M9 21h10M9 24h12" stroke="#808080" />
        </>
    ),
    document: (
        <>
            <path d="M7 2h13l6 6v22H7z" fill="#fff" stroke="#000" />
            <path d="M20 2v6h6" fill="#d4d0c8" stroke="#000" />
            <path d="M10 12h12M10 15h12M10 18h12M10 21h12M10 24h8" stroke="#000080" />
        </>
    ),
    contact: (
        <>
            <rect x="3" y="8" width="26" height="17" fill="#fff" stroke="#000" />
            <path d="M3 8l13 10 13-10" fill="none" stroke="#000" />
            <path d="M3 25l10-8M29 25l-10-8" stroke="#808080" />
        </>
    ),
    key: (
        <>
            <circle cx="10" cy="12" r="7" fill="#ffd94a" stroke="#000" />
            <circle cx="9" cy="11" r="2" fill="#fff" stroke="#000" />
            <path d="M15 15l12 12M22 22l-3 3M25 25l-2 2" stroke="#000" strokeWidth="3" />
            <path d="M15 15l12 12" stroke="#ffd94a" strokeWidth="1" />
        </>
    ),
    pdf: (
        <>
            <path d="M7 2h13l6 6v22H7z" fill="#fff" stroke="#000" />
            <path d="M20 2v6h6" fill="#d4d0c8" stroke="#000" />
            <rect x="4" y="16" width="19" height="8" fill="#c8102e" stroke="#000" />
            <text x="13.5" y="22.5" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#fff" fontFamily="sans-serif">
                PDF
            </text>
            <path d="M10 10h8M10 13h12M10 27h12" stroke="#808080" />
        </>
    ),
    web: (
        <>
            <path d="M7 2h13l6 6v22H7z" fill="#fff" stroke="#000" />
            <path d="M20 2v6h6" fill="#d4d0c8" stroke="#000" />
            <circle cx="16" cy="18" r="7" fill="#1084d0" stroke="#000080" />
            <path d="M9 18h14M16 11v14M11 14h10M11 22h10" stroke="#bfe6ff" />
            <path d="M16 11c-3 3-3 11 0 14M16 11c3 3 3 11 0 14" fill="none" stroke="#bfe6ff" />
        </>
    ),
    recycle: (
        <>
            <path d="M7 9h18l-2 20H9z" fill="#d4d0c8" stroke="#000" />
            <rect x="5" y="6" width="22" height="3" fill="#808080" stroke="#000" />
            <path d="M12 12v14M16 12v14M20 12v14" stroke="#808080" />
        </>
    ),
    user: (
        <>
            <rect x="2" y="2" width="28" height="28" fill="#fff" stroke="#000" />
            <circle cx="16" cy="12" r="5" fill="#f2c08a" stroke="#000" />
            <path d="M6 29c0-7 4-10 10-10s10 3 10 10z" fill="#000080" stroke="#000" />
        </>
    ),
    program: (
        <>
            <rect x="3" y="5" width="26" height="22" fill="#d4d0c8" stroke="#000" />
            <rect x="4" y="6" width="24" height="4" fill="#000080" />
            <rect x="6" y="13" width="20" height="11" fill="#fff" stroke="#808080" />
            <path d="M8 16h8M8 19h12M8 22h6" stroke="#008080" />
        </>
    ),
    help: (
        <>
            <path d="M5 4h20v24H5z" fill="#008080" stroke="#000" />
            <path d="M8 4v24" stroke="#004040" />
            <path d="M25 4l2 2v24l-2-2" fill="#fff" stroke="#000" />
            <text x="16" y="21" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffd94a" fontFamily="serif">
                ?
            </text>
        </>
    ),
    settings: (
        <>
            <rect x="3" y="6" width="26" height="20" fill="#d4d0c8" stroke="#000" />
            <path d="M8 10v12M16 10v12M24 10v12" stroke="#808080" />
            <rect x="5" y="12" width="6" height="3" fill="#000080" />
            <rect x="13" y="17" width="6" height="3" fill="#000080" />
            <rect x="21" y="13" width="6" height="3" fill="#000080" />
        </>
    ),
    find: (
        <>
            <circle cx="13" cy="13" r="8" fill="#bfe6ff" stroke="#000" strokeWidth="2" />
            <path d="M19 19l8 8" stroke="#000" strokeWidth="4" />
        </>
    ),
    run: (
        <>
            <rect x="3" y="7" width="26" height="18" fill="#d4d0c8" stroke="#000" />
            <rect x="4" y="8" width="24" height="3" fill="#000080" />
            <path d="M9 18h11l-3-3M20 18l-3 3" stroke="#000" strokeWidth="2" fill="none" />
        </>
    ),
    shutdown: (
        <>
            <rect x="4" y="3" width="24" height="18" fill="#d4d0c8" stroke="#000" />
            <rect x="7" y="6" width="18" height="12" fill="#000" />
            <circle cx="20" cy="10" r="2.5" fill="#ffd94a" />
            <rect x="5" y="24" width="22" height="5" fill="#d4d0c8" stroke="#000" />
        </>
    ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

type Props = { name: IconName; size?: number; className?: string };

const Icon = ({ name, size = 32, className }: Props) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        shapeRendering="crispEdges"
        className={`shrink-0 ${className ?? ""}`}
        aria-hidden="true"
    >
        {ICONS[name]}
    </svg>
);

export default Icon;
