import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-grow">
            <div className="w-0 lg:w-1/4"></div>
            <section className="flex w-full flex-col justify-center bg-gray-200">
                <h1 className="my-4 text-center text-3xl">About me</h1>
                <div className="flex flex-col gap-4 px-10 lg:gap-2 lg:px-20">
                    <p>
                        My name is{" "}
                        <span className="text-blue-600">
                            Ariel Martin Cohen
                        </span>
                        .
                    </p>
                    <p>
                        I used to work in manufacturing from airplanes, to
                        kayaks, to all sorts of electrical products. Then moved
                        on to work in a warehouses and even during school
                    </p>
                    <p>
                        I studied airplane mechanics in 2011, full-stack Java
                        web development in 2020, and video game programming in
                        2021-2023
                    </p>
                    <p>
                        In 2014 I decided to go on a short 3 years trip outside
                        of Canada and visit the world, living in Australia and
                        the UK. I felt like I could be visiting and also learn
                        so many things when not in the comfort zone. My travels
                        taught me so much about indepence, becoming outspoken,
                        and engage in more social events. Coming back home made
                        me realize I could be doing much more with my interest
                        and so I decided to change my career path.
                    </p>
                    <p>
                        My first experience as a developer was during my
                        internship, which later turned into a 6 months contract,
                        with a startup as a front-end developer with Next.Js and
                        Tailwind.
                    </p>
                    <p>
                        With all the knowledge I have from my studies
                        full-stack, in video games understand more programming
                        concepts, and my years and years of team collaboration,
                        organization, and time constraint jobs from my other
                        ventures, I was able to learn React in a short amount of
                        time, but also deploy 2 applications for them.
                    </p>
                    <p>
                        As of March, I am unemployed and looking for my next
                        opportunity. I study and spend my time learning and
                        practicing to code because I have learned to love it. I
                        code lots of web apps to video game systems, like an
                        Enemy Ai that help each other out (video coming out
                        soon), and applications like an Excel formatter to group
                        and sort datasets and remove unnecessary information.
                    </p>
                    <p>
                        To learn more about me, click
                        <Link
                            className="rounded px-1 py-0.5 text-blue-600 underline hover:bg-gray-300"
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
