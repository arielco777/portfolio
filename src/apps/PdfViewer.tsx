import { PROFILE } from "../content/profile";
import { useIsMobile } from "../hooks/useIsMobile";
import Icon from "../components/Icon";
import { StatusBar } from "./shared";

const toolbarBtn = "flex items-center gap-1 px-2 py-0.5 hover:bevel-raised active:bevel-pressed max-sm:py-2";

/** Shows the real CV PDF in an embedded viewer (desktop), or open/download buttons (phones). */
const PdfViewer = () => {
    const isMobile = useIsMobile();
    const src = PROFILE.resumePdf;

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            {/* Toolbar */}
            <div className="mb-0.5 flex shrink-0 flex-wrap gap-1 border-b border-b-classic-dark pb-0.5 shadow-[0_1px_#fff]">
                <a href={src} target="_blank" rel="noreferrer" className={toolbarBtn}>
                    <Icon name="run" size={16} />
                    Open in new tab
                </a>
                <a href={src} download={PROFILE.resumePdfName} className={toolbarBtn}>
                    <Icon name="pdf" size={16} />
                    Download
                </a>
            </div>

            {isMobile ? (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white p-6 text-center bevel-sunken">
                    <Icon name="pdf" size={64} />
                    <p>Phone browsers can&apos;t show a PDF inside a page. Use the buttons above to open or download it.</p>
                </div>
            ) : (
                <div className="min-h-0 flex-1 bg-classic-dark p-[2px] bevel-sunken">
                    {/* Native browser PDF viewer */}
                    <iframe src={`${src}#view=FitH`} title={`${PROFILE.name} CV`} className="size-full bg-white" />
                </div>
            )}

            <StatusBar>{PROFILE.resumePdfName}</StatusBar>
        </div>
    );
};

export default PdfViewer;
