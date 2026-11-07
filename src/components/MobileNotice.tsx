import { useState } from "react";
import { Button } from "../apps/shared";
import { useIsMobile } from "../hooks/useIsMobile";
import Icon from "./Icon";
import LanguageRadios from "./LanguageRadios";
import { useStrings } from "../i18n/strings";

/** Win98-style message box shown on every page load on phones: desktop tip + taskbar refresh hint. */
const MobileNotice = () => {
    const isMobile = useIsMobile();
    const t = useStrings().mobileNotice;
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
                    {t.title}
                </div>
                <div className="flex items-start gap-3 p-4">
                    <Icon name="computer" size={32} />
                    <div className="flex flex-col gap-2">
                        <p>{t.desktop}</p>
                        <p>
                            <b>{t.taskbarStrong}</b>
                            {t.taskbarRest}
                        </p>
                        <fieldset className="mt-1 border border-classic-dark px-3 pb-2 shadow-[1px_1px_#fff]">
                            <legend className="px-1">{t.language}</legend>
                            <LanguageRadios name="mobile-notice-lang" />
                        </fieldset>
                    </div>
                </div>
                <div className="flex justify-center pb-4">
                    <Button autoFocus onClick={dismiss}>
                        {t.ok}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MobileNotice;
