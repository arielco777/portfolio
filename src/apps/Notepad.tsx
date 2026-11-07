import { useState } from "react";
import { MenuBar } from "./shared";

/** Notepad with an editable text area. Edits live only as long as the window is open. */
export const NotepadView = ({ initialText = "" }: { initialText?: string }) => {
    const [text, setText] = useState(initialText);

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <MenuBar items={["File", "Edit", "Search", "Help"]} />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                spellCheck={false}
                className="min-h-0 flex-1 resize-none bg-white p-1 font-mono text-[13px] max-sm:text-[14px] leading-snug outline-none bevel-sunken"
            />
        </div>
    );
};

const Notepad = () => <NotepadView />;

export default Notepad;
