import { resumeText } from "../content/profile";
import { NotepadView } from "./Notepad";

const Resume = () => <NotepadView initialText={resumeText()} />;

export default Resume;
