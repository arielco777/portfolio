import { useEffect, useState } from "react";
import "./hero.css";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
    const [opacity, setOpacity] = useState(1);
    const [transform, setTransform] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 600;
        const newOpacity = Math.max(1.3 - scrollY / maxScroll, 0);
        const newTransform = Math.min(scrollY / 2, maxScroll);
        setOpacity(newOpacity);
        setTransform(newTransform);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            className="flex w-full flex-col items-center overflow-y-hidden bg-black px-10 pb-20 pt-10 text-white lg:flex-row lg:justify-around lg:px-96 lg:py-40"
            style={{ opacity: window.innerWidth > 720 ? opacity : 1 }}
        >
            <div
                className="flex flex-col justify-center transition-none lg:flex-row"
                style={{ transform: `translateY(${transform}px)` }}
            >
                <div className="top-0 flex flex-col items-center gap-2 text-left lg:items-start">
                    <h1 className="text-center text-7xl lg:text-start lg:text-7xl">
                        <span className="">Welcome</span>
                    </h1>
                    <p className="text-center lg:w-1/2 lg:text-start lg:text-2xl">
                        My name is Ariel Martin Cohen. I am a{" "}
                        <span className="text-blue-400">
                            full stack web developer
                        </span>{" "}
                        based in Montreal, QC.
                    </p>
                    <div className="my-5 flex justify-center gap-3 pt-4 lg:justify-start">
                        <Link
                            to="#work"
                            className="rounded rounded-b-xl bg-blue-500 px-3 py-2 text-xl transition hover:bg-blue-400"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="rounded rounded-b-xl border-2 border-blue-500 px-3 py-2 text-xl transition hover:border-blue-400 hover:bg-gray-700"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
                <img
                    className="flex rounded-full lg:h-80 lg:w-80"
                    src="selfie.png"
                />
            </div>
        </section>
    );
};

export default Hero;
