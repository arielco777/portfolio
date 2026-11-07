import { useEffect } from "react";
import { useProfile } from "../../content/profile";
import { useStrings } from "../../i18n/strings";
import Icon from "../Icon";

type Props = { durationMs: number; onDone: () => void };

/** "Ariel OS" splash with a scrolling colour bar along the bottom. */
const Splash = ({ durationMs, onDone }: Props) => {
    const profile = useProfile();
    const t = useStrings();
    useEffect(() => {
        const id = window.setTimeout(onDone, durationMs);
        return () => window.clearTimeout(id);
    }, [durationMs, onDone]);

    return (
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-linear-to-b from-[#7fb2e5] via-[#a9cdf0] to-[#e6f0fa] select-none">
            {/* Soft clouds */}
            <div className="absolute -left-20 top-16 h-24 w-96 rounded-full bg-white/50 blur-2xl" />
            <div className="absolute -right-10 top-1/2 h-28 w-[28rem] rounded-full bg-white/40 blur-2xl" />

            <div className="relative flex items-center gap-4 sm:gap-6">
                <Icon name="computer" size={96} className="drop-shadow-[3px_3px_0_rgb(0_0_0/0.25)] max-sm:size-16" />
                <div className="flex flex-col leading-none">
                    <span className="text-[14px] tracking-[0.3em] text-[#00306b] uppercase sm:text-[18px]">
                        {profile.shortName} OS
                    </span>
                    <span className="font-serif text-[56px] font-bold text-[#00306b] italic drop-shadow-[2px_2px_0_#fff] sm:text-[84px]">
                        Portfolio<span className="text-[#d23c1e]">98</span>
                    </span>
                    <span className="self-end text-[13px] text-[#00306b] sm:text-[16px]">{t.boot.edition(profile.title)}</span>
                </div>
            </div>

            <div className="absolute bottom-0 h-3 w-full animate-[boot-bar_1.2s_linear_infinite] bg-[linear-gradient(90deg,#00306b,#1084d0,#7fdcff,#1084d0,#00306b)] bg-size-[50%_100%]" />
        </div>
    );
};

export default Splash;
