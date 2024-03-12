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
                        I am a full-stack developer based in Montreal, QC,
                        Canada.
                        <br /> I have experience with <b>React</b> as front and{" "}
                        <b>Java</b>, <b>Node</b>, and <b> Python</b> as back.
                    </p>
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
                            <li>Tailwind, BootStrap</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Back
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>Java, Spring</li>
                            <li>Python</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div className="border rounded-lg min-w-40 flex flex-col">
                        <h3 className="text-center font-bold py-1 text-xl bg-neutral-600 text-white rounded-t-lg">
                            Databases
                        </h3>
                        <ul className="h-full flex flex-col gap-1 text-center p-3 justify-around">
                            <li>MySQL</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
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
            <section className="flex flex-col-reverse lg:flex-row justify-around w-full lg:px-40 gap-10 bg-neutral-200 lg:py-10 pb-6 items-center">
                <div className="lg:w-1/3 h-max lg:text-xl py-6 lg:p-20 mt-4 text-center">
                    <p>
                        An easy to use trading app with a no-code strategy
                        creation for Entries and Exits. Includes a drag and drop
                        system for strategy creation, a chat bot to ask
                        questions, a save system, and an easy to use interface
                        for beginners.
                    </p>
                    <p className="text-blue-600 hover:underline mt-4">
                        <a href="https://www.tradeen.ai/" target="_blank">
                            tradeen.Ai
                        </a>
                    </p>
                </div>
                <div className="lg:w-1/2 mt-10">
                    <h3 className="text-center text-4xl mb-10 hover:underline text-blue-600">
                        <a href="https://www.tradeen.ai/" target="_blank">
                            tradeeN.ai
                        </a>
                    </h3>
                    <div className="">
                        <Carousel
                            plugins={[
                                Autoplay({
                                    delay: 5000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                <CarouselItem className="border">
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
                                <CarouselItem className="border">
                                    <a href="tradeen_2.png" target="_blank">
                                        <img
                                            src="tradeen_2.png"
                                            alt="Slide 2"
                                        />
                                    </a>
                                </CarouselItem>
                                <CarouselItem className="border">
                                    <a href="tradeen_3.png" target="_blank">
                                        <img
                                            src="tradeen_3.png"
                                            alt="Slide 3"
                                        />
                                    </a>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="lg:visible invisible " />
                            <CarouselNext className="lg:visible invisible" />
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="w-full lg:flex justify-around items-center lg:px-40 gap- py-6 lg:py-10 ">
                <div className="lg:w-1/2 lg:mt-10">
                    <h3 className="text-center text-4xl mb-10 hover:underline text-blue-600">
                        <a href="http://www.hadaly.ca" target="_blank">
                            Hadaly.ca
                        </a>
                    </h3>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem className="border">
                                <a href="hadaly_1.png" target="_blank">
                                    <img src="hadaly_1.png" alt="Slide 1" />
                                </a>
                            </CarouselItem>
                            <CarouselItem className="border">
                                <a href="hadaly_2.png" target="_blank">
                                    <img
                                        src="hadaly_2.png"
                                        alt="Slide 2"
                                        className="h-auto"
                                    />
                                </a>
                            </CarouselItem>
                            <CarouselItem className="border">
                                <a href="hadaly_3.png" target="_blank">
                                    <img
                                        src="hadaly_3.png"
                                        alt="Slide 3"
                                        className="h-auto"
                                    />
                                </a>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="lg:visible invisible text-white hover:text-neutral-400" />
                        <CarouselNext className="lg:visible invisible text-white hover:text-neutral-400" />
                    </Carousel>
                </div>
                <div className="lg:w-1/3 h-max  rounded-lg lg:text-xl p-10 lg:p-20 mt-4 text-center">
                    <p>
                        <b>Hadaly</b> is an automated risk detection app to
                        perfom due-diligence report for M&A's. It includes a
                        file system for the data room, team and task management,
                        and dashboards.
                    </p>
                    <p className="pt-3 text-blue-600 hover:underline w-max mx-auto">
                        <a href="https://www.hadaly.ca" target="_blank">
                            Hadaly.ca
                        </a>
                    </p>
                </div>
            </section>
            <section className="py-10 w-full flex flex-col lg:flex-row lg:justify-around justify-center bg-black text-white">
                <div>
                    <h3 className="text-2xl px-3 py-3 text-center ">
                        Let's work together!
                    </h3>
                    <div>
                        <div className="flex w-full lg:justify-around justify-center gap-10 mt-4">
                            <div className="hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="https://github.com/arielco777"
                                    target="_blank"
                                >
                                    <GitHubIcon fontSize="large" />
                                </a>
                            </div>
                            <div className="hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="CV_Ariel-Cohen.pdf"
                                    target="_blank"
                                >
                                    <PictureAsPdfIcon fontSize="large" />
                                </a>
                            </div>
                            <div className="hover:text-neutral-400 w-6 h-6 flex justify-center items-center rounded">
                                <a
                                    className="-mt-1"
                                    href="https://www.linkedin.com/in/ariel-martin-cohen/"
                                    target="_blank"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-4">
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
