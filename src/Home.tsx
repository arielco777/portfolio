import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <section className="py-10 lg:py-32 w-full flex flex-col lg:flex-row lg:justify-around justify-center bg-black text-white">
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
                        I am a full-stack developer in with experience with{" "}
                        <b>React</b> as front and <b>Python</b> as back. I
                        graduated as a full-stack in <b>Java</b> and in computer
                        science with knowledge in <b>C++</b> and <b>C#</b> added
                        to my stack.
                    </p>
                </div>
            </section>
            <section id="technologies" className="py-10 w-full px-4 border-t">
                <h2 className="text-center text-2xl pb-5">Web Technologies</h2>
                <div className="flex lg:flex-row flex-col lg:justify-center w-full gap-3 lg:gap-10 ">
                    <div className="border rounded-lg min-w-40 ">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Front
                        </h3>
                        <ul className="flex flex-col gap-1 text-center p-3 ">
                            <li>HTML, CSS, JS</li>
                            <li>React, Next</li>
                            <li>Tailwind, BootStrap</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Back
                        </h3>
                        <ul className="flex flex-col gap-1 text-center p-3 ">
                            <li>Java, Spring</li>
                            <li>Python</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Databases
                        </h3>
                        <ul className="flex flex-col gap-1 text-center p-3 ">
                            <li>MySQL</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Dev Tools
                        </h3>
                        <ul className="flex flex-col gap-1 text-center p-3 ">
                            <li>Git</li>
                            <li>VSCode</li>
                            <li>GitHub</li>
                            <li>Canva</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="lg:flex justify-around w-full px-2 lg:px-10 gap-10 bg-neutral-200 py-10 items-center">
                <div className="lg:w-1/3 h-max bg-neutral-700 text-white rounded-lg lg;text-xl p-10 text-center">
                    <p>
                        My journey has been a bit everywhere, but with every
                        project I did I had to learn a new technology. The
                        learning part is my favourite part because it helped me
                        realize incredible results at whatever work I did.{" "}
                        <br />
                        <br />
                        This project was the first application I did with the
                        startup during my internship. A no-code, fully visual,
                        financial startegy, trading app. The whole front was
                        made entirely by me.
                    </p>
                    <p className="pt-3 text-blue-300 hover:underline">
                        <a href="https://www.tradeen.ai/" target="_blank">
                            tradeen.Ai
                        </a>
                    </p>
                </div>
                <div className="lg:w-1/2 mt-10">
                    <h3 className="text-center text-4xl">tradeeN.ai</h3>
                    <div className="">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                <CarouselItem>
                                    <a
                                        className="bg-white"
                                        href="tradeen_1.png"
                                        target="_blank"
                                    >
                                        <img
                                            className="bg-white"
                                            src="tradeen_1.png"
                                            alt="Slide 1"
                                        />
                                    </a>
                                </CarouselItem>
                                <CarouselItem>
                                    <a href="tradeen_2.png" target="_blank">
                                        <img
                                            src="tradeen_2.png"
                                            alt="Slide 2"
                                        />
                                    </a>
                                </CarouselItem>
                                <CarouselItem>
                                    <a href="tradeen_3.png" target="_blank">
                                        <img
                                            src="tradeen_3.png"
                                            alt="Slide 3"
                                        />
                                    </a>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="lg:visible invisible" />
                            <CarouselNext className="lg:visible invisible" />
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="lg:flex justify-around w-full px-2 bg-blue-900 text-white lg:px-10 gap-10 py-5 lg:py-10 items-center">
                <div className="lg:w-1/2">
                    <h3 className="text-center text-4xl mb-4">Hadaly</h3>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <a href="hadaly_1.png" target="_blank">
                                    <img src="hadaly_1.png" alt="Slide 1" />
                                </a>
                            </CarouselItem>
                            <CarouselItem>
                                <a href="hadaly_2.png" target="_blank">
                                    <img
                                        src="hadaly_2.png"
                                        alt="Slide 2"
                                        className="h-auto"
                                    />
                                </a>
                            </CarouselItem>
                            <CarouselItem>
                                <a href="hadaly_3.png" target="_blank">
                                    <img
                                        src="hadaly_3.png"
                                        alt="Slide 3"
                                        className="h-auto"
                                    />
                                </a>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="lg:visible invisible" />
                        <CarouselNext className="lg:visible invisible" />
                    </Carousel>
                </div>
                <div className="lg:w-1/3 h-max bg-blue-950 text-white rounded-lg lg:text-xl p-10 mt-4 text-center">
                    <p>
                        I got hired afterwards as a full stack and worked on a
                        new app for the same startup. It's an app that
                        automatizes risk detection for due-diligence. I was
                        later made lead front-end since there was only one
                        developer.
                        <br />
                        <br />
                        The application includes a task management for teams, a
                        complete file system, risk dashboard with data that is
                        automatized, and a chat bot trained from the data room.
                        <br />
                        <span className="text-xs lg:text-sm">
                            (The information shown is fake for privacy reasons)
                        </span>
                        <p className="pt-3 text-blue-300 hover:underline">
                            <a href="https://www.hadaly.ca" target="_blank">
                                Hadaly.ca
                            </a>
                        </p>
                    </p>
                </div>
            </section>
            <section className="py-10 lg:py-20 w-full flex flex-col lg:flex-row lg:justify-around justify-center bg-black text-white">
                <div>
                    <h3 className="text-2xl px-3 py-1 text-center ">
                        Let's work together!
                    </h3>
                    <div>
                        <div className="flex w-full lg:justify-around justify-center gap-3 mt-4">
                            <div className="hover:bg-neutral-700 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="https://github.com/arielco777"
                                    target="_blank"
                                >
                                    <GitHubIcon fontSize="small" />
                                </a>
                            </div>
                            <div className="hover:bg-neutral-700 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="CV_Ariel-Cohen.pdf"
                                    target="_blank"
                                >
                                    <PictureAsPdfIcon fontSize="small" />
                                </a>
                            </div>
                            <div className="hover:bg-neutral-700 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="https://www.linkedin.com/in/ariel-martin-cohen/"
                                    target="_blank"
                                >
                                    <LinkedInIcon fontSize="small" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-4">
                        Made entirely by{" "}
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
