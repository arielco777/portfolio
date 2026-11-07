import { resumeText } from "../content/profile";
import { useLang } from "../i18n/lang";
import { NotepadView } from "./Notepad";

/** Résumé as a .txt file in Notepad. Re-mounts on language change so the text follows it. */
const Resume = () => {
    const lang = useLang();
    return <NotepadView key={lang} initialText={resumeText(lang)} />;
};

export default Resume;
