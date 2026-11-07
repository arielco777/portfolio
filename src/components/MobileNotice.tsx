import { useState } from "react";
import { Button } from "../apps/shared";
import { useIsMobile } from "../hooks/useIsMobile";
import Icon from "./Icon";

/** Win98-style message box shown on every page load on phones: desktop tip + taskbar refresh hint. */
const MobileNotice = () => {
    const isMobile = useIsMobile();
    const [open, setOpen] = useState(true);

    if (!isMobile || !open) return null;

    const dismiss = () => setOpen(false);

    return (
        <div className="absolute inset-0 z-[200000] flex items-center justify-center bg-black/30 p-4">
            <div
                role="alertdialog"
                aria-labelledby="mobile-notice-title"
                className="w-full max-w-sm bg-classic-grey p-[3px] bevel-raised"
            >
                <div
                    id="mobile-notice-title"
                    className="flex h-8 items-center bg-linear-to-r from-title-from to-title-to px-2 font-bold text-white"
                >
                    Tip
                </div>
                <div className="flex items-start gap-3 p-4">
                    <Icon name="computer" size={32} />
                    <div className="flex flex-col gap-2">
                        <p>
                            For the full experience, use the desktop version.
                            There you can drag, resize and stack windows like
                            it's 1998.
                        </p>
                        <p>
                            <b>Don't see the taskbar</b> at the bottom of the
                            screen? Refresh the page.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <Button autoFocus onClick={dismiss}>
                        OK
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MobileNotice;
