import { useEffect, useState } from "react";

/** System tray clock; re-renders once per minute, aligned to the minute boundary. */
const Clock = () => {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        let interval: number | undefined;
        const tick = () => setNow(new Date());
        const timeout = window.setTimeout(
            () => {
                tick();
                interval = window.setInterval(tick, 60_000);
            },
            60_000 - (Date.now() % 60_000),
        );
        return () => {
            window.clearTimeout(timeout);
            window.clearInterval(interval);
        };
    }, []);

    return (
        <time
            dateTime={now.toISOString()}
            title={now.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        >
            {now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
        </time>
    );
};

export default Clock;
