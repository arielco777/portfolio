import { useState } from "react";
import Professional from "../components/projects/Professional";
import Personal from "../components/projects/Personal";
import Hero from "../components/hero/Hero";

const Home = () => {
    const [projectView, setProjectView] = useState<"personal" | "work">("work");

    return (
        <div className="relative flex w-screen flex-col items-center" id="top">
            <Hero />
            <section id="technologies" className="w-full px-4 py-10">
                <h2 className="pb-5 text-center text-2xl">Web Technologies</h2>
                <div className="flex w-full flex-col gap-3 lg:min-h-[20vh] lg:flex-row lg:justify-center lg:gap-10">
                    <div className="flex min-w-40 flex-col rounded-lg border">
                        <h3 className="rounded-t-lg bg-neutral-600 py-1 text-center text-xl font-bold text-white">
                            Front
                        </h3>
                        <ul className="flex h-full flex-col justify-around gap-1 p-3 text-center">
                            <li>HTML, CSS, JS</li>
                            <li>React, Next</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                    <div className="flex min-w-40 flex-col rounded-lg border">
                        <h3 className="rounded-t-lg bg-neutral-600 py-1 text-center text-xl font-bold text-white">
                            Back
                        </h3>
                        <ul className="flex h-full flex-col justify-around gap-1 p-3 text-center">
                            <li>Java, Spring</li>
                            <li>Node, Express</li>
                            <li>Python FastAPI, Flask</li>
                        </ul>
                    </div>

                    <div className="flex min-w-40 flex-col rounded-lg border">
                        <h3 className="rounded-t-lg bg-neutral-600 py-1 text-center text-xl font-bold text-white">
                            Databases
                        </h3>
                        <ul className="flex h-full flex-col justify-around gap-1 p-3 text-center">
                            <li>SQL, MySQL</li>
                            <li>NoSQL, MongoDB</li>
                        </ul>
                    </div>
                    <div className="flex min-w-40 flex-col rounded-lg border">
                        <h3 className="rounded-t-lg bg-neutral-600 py-1 text-center text-xl font-bold text-white">
                            Softwares
                        </h3>
                        <ul className="flex h-full flex-col justify-around gap-1 p-3 text-center">
                            <li>Git, Github</li>
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div id="work" className="invisible py-3"></div>
            <div className="flex w-full items-end justify-center gap-2 px-4 md:px-0">
                <button
                    className={`w-full whitespace-nowrap rounded-t-md p-2 text-center lg:w-max ${
                        projectView == "work"
                            ? "bg-blue-400 text-xl"
                            : "over:bg-neutral-300 bg-neutral-400"
                    } transition-all`}
                    onClick={() => setProjectView("work")}
                >
                    Professional Work
                </button>
                <button
                    className={`w-full whitespace-nowrap rounded-t-md p-2 text-center lg:w-max ${
                        projectView == "personal"
                            ? "bg-blue-400 text-xl"
                            : "bg-neutral-400 hover:bg-neutral-300"
                    } transition-all`}
                    onClick={() => setProjectView("personal")}
                >
                    Personal Projects
                </button>
            </div>
            {projectView == "work" ? <Professional /> : <Personal />}
        </div>
    );
};

export default Home;
