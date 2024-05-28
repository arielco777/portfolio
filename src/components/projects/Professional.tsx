import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const Professional = () => {
    return (
        <>
            <section className="relative flex flex-col-reverse lg:flex-row justify-around w-full lg:px-40 gap-10 bg-neutral-200 lg:py-10 pb-6 items-center">
                <div className="lg:w-1/3 h-max lg:text-xl pb-6 lg:p-20 mt-4 text-center">
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
                <div className="lg:w-1/2 mt-10 flex flex-col items-center">
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
                <div className="lg:w-1/2 lg:mt-10 flex flex-col items-center">
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
                        <CarouselPrevious />
                        <CarouselNext />
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
        </>
    );
};

export default Professional;
