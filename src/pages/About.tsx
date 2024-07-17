import { HashLink as Link } from "react-router-hash-link";

const About = () => {
    return (
        <div className="flex flex-grow">
            <div className="w-0 lg:w-1/4"></div>
            <section className="flex w-full flex-col justify-center bg-gray-200 px-10 py-10 lg:px-40 lg:py-0">
                <h1 className="my-4 text-3xl">About me</h1>
                <div className="flex flex-col gap-4 leading-relaxed lg:gap-2">
                    <p>
                        My name is{" "}
                        <span className="font-bold">Ariel Martin Cohen</span>.
                    </p>
                    <p></p>
                    <p>
                        I worked as a front-end using Next.Js and Tailwind and
                        have studies as a full stack in Java.
                    </p>
                    <p>
                        During my work, I learned Python FastAPI and Flask,
                        Express.Js, AWS, and GCC and am able to fully build
                        applications from zero to fully fledges money makers.
                    </p>
                    <p>
                        Check out my{" "}
                        <Link
                            to="/#work"
                            className="rounded px-1 py-0.5 text-blue-600 hover:underline"
                        >
                            projects
                        </Link>{" "}
                        or learn more about me, click
                        <Link
                            className="rounded px-1 py-0.5 text-blue-600 hover:underline"
                            to="/contact"
                        >
                            here
                        </Link>
                        or at the top of the page, or look at the footer for
                        other links.
                    </p>
                </div>
            </section>
            <div className="w-0 lg:w-1/4"></div>
        </div>
    );
};

export default About;
