import { useEffect, useState } from "react";
import { useLang } from "../../i18n/lang";

/** System tray clock; re-renders once per minute, aligned to the minute boundary. */
const Clock = () => {
    const [now, setNow] = useState(() => new Date());
    // "2:05 PM" in English, "14 h 05" in Canadian French.
    const locale = useLang() === "fr" ? "fr-CA" : "en-US";

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
            title={now.toLocaleDateString(locale, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        >
            {now.toLocaleTimeString(locale, { hour: "numeric", minute: "2-digit" })}
        </time>
    );
};

export default Clock;
