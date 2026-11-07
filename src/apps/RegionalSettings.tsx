import { LANGS, setLang, useLang } from "../i18n/lang";
import { STRINGS, useStrings } from "../i18n/strings";
import { useWindowManager } from "../state/windowManager";
import Icon from "../components/Icon";
import { Button } from "./shared";
import type { AppProps } from "./types";

/** Win98-style "Regional Settings": pick English or French. Applies immediately. */
const RegionalSettings = ({ windowId }: AppProps) => {
    const { close } = useWindowManager();
    const lang = useLang();
    const t = useStrings();

    return (
        <div className="flex flex-1 flex-col gap-3 p-2">
            <fieldset className="flex flex-col gap-2 border border-classic-dark p-3 shadow-[1px_1px_#fff]">
                <legend className="px-1">{t.regional.title}</legend>
                <div className="flex items-center gap-3">
                    <Icon name="web" size={32} />
                    <p>{t.regional.intro}</p>
                </div>
                {LANGS.map((l) => (
                    <label key={l} className="flex items-center gap-2 max-sm:py-1">
                        <input type="radio" name="portfolio-lang" checked={lang === l} onChange={() => setLang(l)} />
                        {STRINGS[l].langName}
                    </label>
                ))}
            </fieldset>
            <div className="mt-auto flex justify-end">
                <Button autoFocus onClick={() => close(windowId)}>
                    {t.regional.ok}
                </Button>
            </div>
        </div>
    );
};

export default RegionalSettings;
