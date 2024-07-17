const Personal = () => {
    return (
        <>
            <section className="relative flex w-full flex-col-reverse items-center justify-center gap-5 bg-neutral-200 pb-6 lg:flex-row lg:px-40 lg:py-10">
                <div className="mt-4 h-max pb-6 text-center lg:w-1/3 lg:p-20 lg:text-xl">
                    <p>
                        A showcase of my animation knowledge with Framer Motion
                        and a mix of JS and CSS using a shopping website
                    </p>
                    <p className="mt-4 text-blue-600 hover:underline">
                        <a
                            href="https://shopping-animation.vercel.app/"
                            target="_blank"
                        >
                            Shopping Animation
                        </a>
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center lg:w-1/2">
                    <h3 className="mb-10 text-center text-4xl text-blue-600 hover:underline">
                        <a
                            href="https://shopping-animation.vercel.app/"
                            target="_blank"
                        >
                            Shopping Animation
                        </a>
                    </h3>
                    <div className="">
                        <a
                            href="https://shopping-animation.vercel.app/"
                            target="_blank"
                        >
                            <img src="shopping.png" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="relative flex w-full flex-col-reverse items-center justify-center gap-5 pb-6 lg:flex-row lg:px-40 lg:py-10">
                <div className="mt-10 flex flex-col items-center lg:w-1/2">
                    <h3 className="mb-10 w-max text-center text-4xl text-blue-600 hover:underline">
                        <a
                            href="https://excel-front-lovat.vercel.app/"
                            target="_blank"
                        >
                            Excelsior
                        </a>
                    </h3>
                    <div className="">
                        <a
                            href="https://excel-front-lovat.vercel.app/"
                            target="_blank"
                        >
                            <img src="Excel.png" />
                        </a>
                    </div>
                </div>
                <div className="mt-4 h-max pb-6 text-center lg:w-1/3 lg:p-20 lg:text-xl">
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
                    <p className="mt-4 text-blue-600 hover:underline">
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
