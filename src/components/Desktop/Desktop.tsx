import { useState } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useWindowManager } from "../../state/windowManager";
import IconTile from "../IconTile";
import Window from "../Window/Window";

/** The teal desktop: icons in a column plus the layer that hosts every open window. */
const Desktop = () => {
    const { apps, windows, activeId, getApp, open } = useWindowManager();
    const [selected, setSelected] = useState<string | null>(null);

    const isMobile = useIsMobile();
    const icons = apps.filter((a) => a.desktop && !(isMobile && a.hideOnMobile));

    return (
        <div className="relative min-h-0 flex-1 overflow-hidden bg-classic-bg" onPointerDown={() => setSelected(null)}>
            <div className="flex h-full flex-col flex-wrap content-start gap-3 p-2 max-sm:gap-x-2 max-sm:gap-y-4 max-sm:p-3">
                {icons.map((a) => (
                        <IconTile
                            key={a.id}
                            variant="desktop"
                            icon={a.icon}
                            label={a.title}
                            selected={selected === a.id}
                            onSelect={() => setSelected(a.id)}
                            onOpen={() => open(a.id)}
                        />
                    ))}
            </div>

            {windows.map((w) => {
                const app = getApp(w.appId);
                return app ? <Window key={w.id} win={w} app={app} active={w.id === activeId} /> : null;
            })}
        </div>
    );
};

export default Desktop;
