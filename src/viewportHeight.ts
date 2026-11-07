/**
 * Keeps `--app-h` on <html> equal to the height the user can actually see.
 *
 * `100dvh` alone isn't reliable on iOS: some WebKit-based browsers (e.g. Brave)
 * report a too-tall viewport on the very first load (before their toolbars settle)
 * and don't always fire a resize afterwards, which pushes the taskbar off-screen.
 * So we measure `visualViewport`, re-measure on every hint we can get, and poll
 * briefly after load. The shell also pins itself to the bottom edge with CSS
 * (`fixed inset-0` + `max-height: var(--app-h)`), so whichever is smaller wins.
 *
 * Debug: add `?vh-debug` to the URL to show the raw numbers on screen.
 */
export function trackViewportHeight() {
    const root = document.documentElement;
    const vv = window.visualViewport;
    const debug = new URLSearchParams(window.location.search).has("vh-debug") ? createDebugPanel() : null;
    let last = -1;

    const update = (reason: string) => {
        // While pinch-zoomed the visual viewport is a zoomed sub-area: use the layout viewport instead.
        const h = Math.round(vv && vv.scale <= 1.01 ? Math.min(vv.height, window.innerHeight) : window.innerHeight);
        if (h !== last) {
            last = h;
            root.style.setProperty("--app-h", `${h}px`);
        }
        debug?.(reason, h);
    };

    update("init");

    vv?.addEventListener("resize", () => update("vv.resize"));
    vv?.addEventListener("scroll", () => update("vv.scroll"));
    window.addEventListener("resize", () => update("resize"));
    window.addEventListener("orientationchange", () => update("orientation"));
    window.addEventListener("pageshow", () => update("pageshow"));
    document.addEventListener("visibilitychange", () => update("visibility"));
    // The first touch often makes iOS toolbars settle.
    window.addEventListener("touchstart", () => update("touch"), { passive: true });
    window.addEventListener("touchend", () => window.setTimeout(() => update("touchend"), 300), { passive: true });

    // Poll for a few seconds after load in case the browser never fires an event.
    const started = performance.now();
    const poll = () => {
        update("poll");
        if (performance.now() - started < 4000) window.setTimeout(poll, 150);
    };
    window.addEventListener("load", poll);
}

function createDebugPanel() {
    const el = document.createElement("pre");
    el.style.cssText =
        "position:fixed;top:4px;right:4px;z-index:2147483647;margin:0;padding:6px;" +
        "background:rgba(0,0,0,.8);color:#0f0;font:11px/1.3 monospace;pointer-events:none;white-space:pre";
    document.addEventListener("DOMContentLoaded", () => document.body.appendChild(el));
    if (document.body) document.body.appendChild(el);

    return (reason: string, h: number) => {
        const vv = window.visualViewport;
        el.textContent = [
            `reason       ${reason}`,
            `--app-h      ${h}`,
            `innerHeight  ${window.innerHeight}`,
            `vv.height    ${vv ? Math.round(vv.height) : "n/a"}`,
            `vv.offsetTop ${vv ? Math.round(vv.offsetTop) : "n/a"}`,
            `clientHeight ${document.documentElement.clientHeight}`,
            `screen.h     ${window.screen.height}`,
        ].join("\n");
    };
}
