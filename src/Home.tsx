import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import Professional from "./components/projects/Professional";
import Personal from "./components/projects/Personal";
import { Email } from "@mui/icons-material";

const resumeLink = "Ariel_Cohen-Resume.pdf";

const Home = () => {
    const [projectView, setProjectView] = useState<"personal" | "work">("work");

    return (
        <div className="flex flex-col items-center">
            <section className="py-10 lg:py-32 w-full flex flex-col lg:flex-row lg:justify-around justify-center lg:px-52 bg-black text-white">
                <h1 className="text-4xl lg:text-7xl flex flex-col my-auto lg:text-start text-center">
                    <span className="">Hello, I am </span>{" "}
                    <span className="">
                        <span className="text-blue-600 font-bold">
                            Ariel Cohen
                        </span>
                        ,
                    </span>
                    <span className="">Full-Stack Developer</span>
                </h1>
                <img
                    className="w-40 mx-auto lg:mx-0 mt-10 lg:w-80 rounded-full grayscale h-auto"
                    src="selfie.png"
                />
            </section>
            <section
                className="lg:p-10 py-5 px-3 text-2xl lg:w-1/2 text-center"
                id="about"
            >
                <div>
                    <p>
                        I am a full-stack developer based in Montreal, QC,
                        Canada.
                        <br /> I have experience with <b>React</b> as front and{" "}
                        <b>Java Spring</b>, <b>Node Express</b>, and{" "}
                        <b> Python Flask</b> as back.
                    </p>
                    <p className="mt-5">
                        I also enjoy building video games in <b>Unity</b> but
                        that is for another portfolio.
                    </p>
                    <p className="text-neutral-400">(work in progress)</p>
                </div>
            </section>
            <section id="technologies" className="py-10 w-full px-4 border-t">
                <h2 className="text-center text-2xl pb-5">Web Technologies</h2>
                <div className="flex lg:flex-row flex-col lg:justify-center w-full gap-3 lg:gap-10 lg:min-h-[20vh] ">
                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Front
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>HTML, CSS, JS</li>
                            <li>React, Next</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Back
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>Java, Spring</li>
                            <li>Node, Express</li>
                            <li>Python Flask</li>
                        </ul>
                    </div>

                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Databases
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>SQL, MySQL</li>
                            <li>NoSQL, MongoDB</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Softwares
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>Git, Github</li>
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                    {/* <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Dev Tools
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>Git</li>
                            <li>VSCode</li>
                            <li>GitHub</li>
                        </ul>
                    </div> */}
                </div>
            </section>
            <div className="flex items-end w-full justify-center gap-2">
                <button
                    className={`text-center rounded-t-md lg:w-max w-full whitespace-nowrap p-2 ${
                        projectView == "work"
                            ? " bg-blue-400 text-xl"
                            : " bg-neutral-400 over:bg-neutral-300"
                    } transition-all`}
                    onClick={() => setProjectView("work")}
                >
                    Professional Work
                </button>
                <button
                    className={`text-center  rounded-t-md lg:w-max w-full whitespace-nowrap p-2 ${
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
            <section className="py-10 w-full flex flex-col lg:flex-row lg:justify-around justify-center bg-black text-white">
                <div>
                    <h3 className="text-2xl px-3 py-3 text-center ">
                        Let's work together!
                    </h3>
                    <div>
                        <div className="flex w-full lg:justify-around justify-center gap-10 mt-4">
                            <div className="group relative hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded ">
                                <div className="absolute -top-8 bg-neutral-100 text-black rounded-md px-1 invisible group-hover:visible">
                                    Github
                                </div>
                                <a
                                    className="-mt-1"
                                    href="https://github.com/arielco777"
                                    target="_blank"
                                >
                                    <GitHubIcon fontSize="large" />
                                </a>
                            </div>
                            <div className="group relative hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <div className="absolute -top-8 bg-neutral-100 text-black rounded-md px-1 invisible group-hover:visible w-max">
                                    Linkedin
                                </div>
                                <a
                                    className="-mt-1"
                                    href="https://www.linkedin.com/in/ariel-martin-cohen/"
                                    target="_blank"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </div>
                            <div className="group relative hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <div className="absolute -top-8 bg-neutral-100 text-black rounded-md px-1 invisible group-hover:visible w-max">
                                    Resume
                                </div>
                                <a
                                    className="-mt-1"
                                    href={resumeLink}
                                    target="_blank"
                                >
                                    <PictureAsPdfIcon fontSize="large" />
                                </a>
                            </div>

                            <div className="group relative hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <div className="absolute -top-8 bg-neutral-100 text-black rounded-md px-1 invisible group-hover:visible w-max">
                                    Email
                                </div>
                                <a
                                    className="-mt-1"
                                    href="https://www.linkedin.com/in/ariel-martin-cohen/"
                                    target="_blank"
                                >
                                    <Email fontSize="large" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm mt-4">
                        Built by{" "}
                        <span className="text-blue-400 font-bold">
                            Ariel Cohen
                        </span>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
