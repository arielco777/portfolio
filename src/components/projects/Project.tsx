import React, { ReactElement } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface ProjectType {
    where?: "pro" | "pers";
    title: string;
    paragraph: ReactElement<HTMLParagraphElement>;
    images: string[];
    link?: string;
    linkTitle?: string;
    flip?: boolean;
}

const Project: React.FC<ProjectType> = ({
    title,
    paragraph,
    images,
    link,
    linkTitle,
    flip,
}) => {
    return (
        <section
            className={`relative flex w-full flex-col items-center justify-center pb-6 ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} lg:px-10 lg:pb-10 lg:pt-10`}
        >
            <div className="mt-10 flex flex-col items-center gap-7 md:gap-0 lg:w-1/2">
                <h3 className="text-center text-4xl text-blue-600 hover:underline md:mb-10">
                    <a href={link ? link : "#"} target="_blank">
                        {linkTitle ? linkTitle : title}
                    </a>
                </h3>
                <div className="">
                    {images.length > 1 ? (
                        <>
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 5000,
                                    }),
                                ]}
                            >
                                <CarouselContent>
                                    {images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <a
                                                className="bg-white"
                                                href={image}
                                                target="_blank"
                                            >
                                                <img
                                                    className="bg-white"
                                                    src={image}
                                                    alt={`Slide ${title}-${index}`}
                                                />
                                            </a>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="invisible lg:visible" />
                                <CarouselNext className="invisible lg:visible" />
                            </Carousel>
                        </>
                    ) : (
                        <a href={link ? link : "#"} target="_blank">
                            <img src={images[0]} />
                        </a>
                    )}
                </div>
            </div>
            <div className="mt-10 h-max text-center lg:mt-0 lg:w-1/3 lg:p-20 lg:text-xl">
                {paragraph}
                <a
                    href={link ? link : "#"}
                    target="_blank"
                    className="mt-4 text-blue-600 hover:underline"
                >
                    {title}
                </a>
            </div>
        </section>
    );
};

export default Project;
