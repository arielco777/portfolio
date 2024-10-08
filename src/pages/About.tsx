const About = () => {
    return (
        <div className="flex flex-grow">
            <div className="w-0 lg:w-1/4"></div>
            <section className="flex w-full flex-col justify-center bg-gray-200 px-10 py-10 lg:px-40 lg:py-0">
                <h1 className="my-4 text-7xl">About me</h1>
                <div className="flex flex-col gap-4 lg:gap-2">
                    <p>
                        My name is{" "}
                        <span className="font-bold">Ariel Martin Cohen</span>.
                    </p>
                    <p></p>
                    <p>
                        I am a full-stack developer proffecient with React as
                        front and Java, Python, and Express in the back-end. I
                        have studies as a full stack web developer and a video
                        game developer but focus more on web development.
                    </p>
                    <p>
                        I have many personal projects and apps that I use on the
                        daily that I will deploy for showcasing.
                    </p>
                    <p>
                        I am an avid traveler having lived in Australia for 2
                        years and in England for 1 year. Also love playing and
                        building video games on the side. Cooking and learning
                        all sorts of skills, from coding to crochet.
                    </p>
                </div>
            </section>
            <div className="w-0 lg:w-1/4"></div>
        </div>
    );
};

export default About;
