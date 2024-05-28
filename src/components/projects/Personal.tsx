const Personal = () => {
    return (
        <>
            <section className="relative flex flex-col-reverse lg:flex-row justify-center w-full lg:px-40 gap-5 bg-neutral-200 lg:py-10 pb-6 items-center">
                <div className="lg:w-1/3 h-max lg:text-xl pb-6 lg:p-20 mt-4 text-center">
                    <p>
                        A showcase of my animation knowledge with Framer Motion
                        and a mix of JS and CSS using a shopping website
                    </p>
                    <p className="text-blue-600 hover:underline mt-4">
                        <a
                            href="https://shopping-animation.vercel.app/"
                            target="_blank"
                        >
                            Shopping Animation
                        </a>
                    </p>
                </div>
                <div className="lg:w-1/2 mt-10 flex flex-col items-center">
                    <h3 className="text-center text-4xl mb-10 hover:underline text-blue-600">
                        <a
                            href="https://shopping-animation.vercel.app/"
                            target="_blank"
                        >
                            Shopping Animation
                        </a>
                    </h3>
                    <div className="">
                        <img src="shopping.png" />
                    </div>
                </div>
            </section>
            <section className="relative flex flex-col-reverse lg:flex-row justify-center w-full lg:px-40 gap-5 lg:py-10 pb-6 items-center">
                <div className="lg:w-1/2 mt-10 flex flex-col items-center">
                    <h3 className="text-center text-4xl mb-10 w-max hover:underline text-blue-600">
                        <a
                            href="https://excel-front-lovat.vercel.app/"
                            target="_blank"
                        >
                            Excelsior
                        </a>
                    </h3>
                    <div className="">
                        <img src="Excel.png" />
                    </div>
                </div>
                <div className="lg:w-1/3 h-max lg:text-xl pb-6 lg:p-20 mt-4 text-center">
                    <p>
                        A simple app that takes a dataset in csv or xlsx and
                        formats into groups, sorts them, and/or add extra
                        parameters. Built using React and Express. <br />I
                        worked mostly on the back-end than front-end... So don't
                        judge by its look. :)
                        <br />
                        <br /> P.S: I am using free servers so don't try with
                        big datasets. Try{" "}
                        <a
                            href="Crop_recommendation.csv"
                            className="underline hover:text-blue-700"
                        >
                            this one
                        </a>{" "}
                        for testing.
                    </p>
                    <p className="text-blue-600 hover:underline mt-4">
                        <a
                            href="https://excel-front-lovat.vercel.app/"
                            target="_blank"
                        >
                            Excelsior
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Personal;
