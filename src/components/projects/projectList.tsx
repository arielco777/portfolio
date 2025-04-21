import { ProjectType } from "./Project";

export const projectList: ProjectType[] = [
    {
        where: "pro",
        title: "TradeeN",
        paragraph: (
            <p>
                An easy to use trading app with a no-code strategy creation for
                Entries and Exits. Includes a drag and drop system for strategy
                creation, a chat bot to ask questions, a save system, and an
                easy to use interface for beginners. This is a version as of September 2023.
            </p>
        ),
        images: ["tradeen_1.png", "tradeen_2.png", "tradeen_3.png"],
        link: "https://www.tradeen.ai/",
        linkTitle: "tradeen.ai",
        flip: true,
    },
    {
        where: "pro",
        title: "Hadaly",
        paragraph: (
            <p>
                <b>Hadaly</b>'s main product is an automated risk detection app
                to perfom due-diligence report for M&A's. It includes a file
                system for the data room, team and task management, and
                dashboards. This is a version as of March 2024.
            </p>
        ),
        images: ["hadaly_1.png", "hadaly_2.png", "hadaly_3.png"],
        link: "http://www.hadaly.ca",
        linkTitle: "Hadaly.ca",
        flip: false,
    },
    {
        where: "pers",
        title: "Personal Planner",
        paragraph: (
            <p>
                My personal weekly planner built with React and Node. This was
                made to test out new things like building a calendar with
                events, creating a dashboard, but most importantly to keep
                myself focus on what I need to do everyday to keep myself busy.
            </p>
        ),
        images: ["planner.png"],
        flip: false,
    },
    {
        where: "pers",
        title: "Shopping Animation",
        paragraph: (
            <p>
                A showcase of my animation knowledge with Framer Motion and a
                mix of JS and CSS using a shopping website.
            </p>
        ),
        images: ["shopping.png"],
        link: "https://shopping-animation.vercel.app/",
        linkTitle: "Shopping Animation",
        flip: true,
    },
    {
        where: "pers",
        title: "Excelsior",
        paragraph: (
            <p>
                A simple app that takes a dataset in csv or xlsx and formats
                into groups, sorts them, and/or add extra parameters. Built
                using React and Express. <br />I worked mostly on the back-end
                than front-end... So don't judge by its look. :)
                <br />
                <br /> P.S: I am using free servers so don't try with big
                datasets. Try{" "}
                <a
                    href="Crop_recommendation.csv"
                    className="underline hover:text-blue-700"
                >
                    this one
                </a>{" "}
                for testing.
            </p>
        ),
        images: ["Excel.png"],
        flip: false,
        link: "https://excel-front-lovat.vercel.app/",
        linkTitle: "Excelsior",
    },
];
