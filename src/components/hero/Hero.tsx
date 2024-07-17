import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
    const [opacity, setOpacity] = useState(1);
    const [transform, setTransform] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScroll = 300; // Adjust this value as needed
        const newOpacity = Math.max(1.3 - scrollY / maxScroll, 0);
        const newTransform = Math.min(scrollY / 2, 150); // Adjust this value as needed
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
            className="hero-section flex w-full flex-col items-center bg-black px-10 pb-20 pt-10 text-white lg:flex-row lg:justify-around lg:px-96 lg:py-40"
            style={{ opacity }}
        >
            <div
                className="flex flex-col gap-2 text-left"
                style={{ transform: `translateY(${transform}px)` }}
            >
                <h1 className="text-center text-3xl lg:text-start lg:text-7xl">
                    <span className="">Welcome.</span>
                </h1>
                <p className="text-center lg:w-1/2 lg:text-start lg:text-2xl">
                    My name is Ariel Martin Cohen. I am a{" "}
                    <span className="text-blue-400">
                        full stack web developer
                    </span>{" "}
                    based in Montreal, QC.
                </p>
                <div className="my-5 flex justify-center gap-3 pt-4 lg:justify-start">
                    <a
                        href="#work"
                        className="rounded rounded-b-xl bg-blue-500 px-3 py-2 text-xl transition hover:bg-blue-400"
                    >
                        View Projects
                    </a>
                    <Link
                        to="/contact"
                        className="rounded rounded-b-xl border-2 border-blue-500 px-3 py-2 text-xl transition hover:border-blue-400 hover:bg-gray-700"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
            <img
                className="flex w-40 rounded-full grayscale lg:w-80"
                src="selfie.png"
            />
        </section>
    );
};

export default Hero;
