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
            <section className="relative flex w-full flex-col-reverse items-center justify-around gap-10 bg-neutral-200 px-5 pb-6 lg:flex-row lg:px-40 lg:pb-10">
                <div className="mt-4 h-max pb-6 text-center lg:w-1/2 lg:p-20 lg:text-xl">
                    <p className="px-10 lg:px-0">
                        An easy to use trading app with a no-code strategy
                        creation for Entries and Exits. Includes a drag and drop
                        system for strategy creation, a chat bot to ask
                        questions, a save system, and an easy to use interface
                        for beginners.
                    </p>
                    <p className="mt-4 text-blue-600 hover:underline">
                        <a href="https://www.tradeen.ai/" target="_blank">
                            tradeen.ai
                        </a>
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center lg:w-1/2">
                    <h3 className="mb-10 text-center text-4xl text-blue-600 hover:underline">
                        <a href="https://www.tradeen.ai/" target="_blank">
                            TradeeN
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
                            <CarouselPrevious className="invisible lg:visible" />
                            <CarouselNext className="invisible lg:visible" />
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="w-full items-center justify-around px-5 py-6 lg:flex lg:px-40 lg:pb-10 lg:pt-0">
                <div className="flex flex-col items-center lg:mt-10 lg:w-1/2">
                    <h3 className="mb-10 text-center text-4xl text-blue-600 hover:underline">
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
                <div className="mt-4 h-max rounded-lg p-10 text-center lg:w-1/3 lg:p-20 lg:text-xl">
                    <p>
                        <b>Hadaly</b>'s main product is an automated risk
                        detection app to perfom due-diligence report for M&A's.
                        It includes a file system for the data room, team and
                        task management, and dashboards. (All information shown
                        is for demo purposes)
                    </p>
                    <p className="mx-auto w-max pt-3 text-blue-600 hover:underline">
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
