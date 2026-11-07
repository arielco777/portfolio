import { LANGS, setLang, useLang } from "../i18n/lang";
import { STRINGS } from "../i18n/strings";

type Props = {
    /** Visible label before the choices (e.g. "Language:"). */
    label?: string;
    /** Unique radio-group name per place it's rendered. */
    name: string;
    className?: string;
};

/** Win98-style "( ) English  (•) Français" radio group. Switches immediately. */
const LanguageRadios = ({ label, name, className = "" }: Props) => {
    const lang = useLang();

    return (
        <fieldset className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
            {label && <legend className="float-left mr-1">{label}</legend>}
            {LANGS.map((l) => (
                <label key={l} className="flex items-center gap-1.5 max-sm:py-1">
                    <input
                        type="radio"
                        name={name}
                        checked={lang === l}
                        onChange={() => setLang(l)}
                        className="accent-classic-blue max-sm:size-4"
                    />
                    <span lang={l === "fr" ? "fr-CA" : "en"}>{STRINGS[l].langName}</span>
                </label>
            ))}
        </fieldset>
    );
};

export default LanguageRadios;
