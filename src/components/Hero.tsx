import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="flex flex-col-reverse items-center bg-black pb-20 pt-10 text-white lg:flex-row lg:justify-around lg:px-72 lg:py-40">
            <div className="flex flex-col gap-4 px-3">
                <h1 className="text-center text-3xl lg:text-start lg:text-7xl">
                    <span className="">Say hello to your future</span>
                    <br />
                    <span className="text-blue-300">web developer.</span>
                </h1>
                <p className="px-5 lg:w-1/2 lg:text-2xl">
                    My name is Ariel Martin Cohen. I am a full stack web
                    developer with 1 year experience awaiting my next
                    opportunity.
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
                className="mb-5 w-40 rounded-full grayscale lg:w-80"
                src="selfie.png"
            />
        </section>
    );
};

export default Hero;
