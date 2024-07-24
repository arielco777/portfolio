import { useState } from "react";
import Professional from "../components/projects/Professional";
import Personal from "../components/projects/Personal";
import Hero from "../components/hero/Hero";
import StackCard from "@/components/StackCard";

interface ItemListProp {
    title: string;
    items: string[];
}

const itemList: ItemListProp[] = [
    {
        title: "Front",
        items: [
            "HTML, CSS",
            "TypeScript, JavaScript",
            "React.JS, Next.JS",
            "Tailwind",
        ],
    },
    {
        title: "Back",
        items: [
            "Java SpringBoot, J2EE",
            "Node, Express",
            "Python FastAPI, Flask",
            "AWS",
        ],
    },
    {
        title: "Databases",
        items: ["SQL, MySQL", "NoSQL, MongoDB"],
    },
    {
        title: "Software",
        items: ["Git, GitHub", "Docker", "Postman", "Linux"],
    },
    {
        title: "Other",
        items: ["C# Unity", "C++ Unreal", "Learning Go"],
    },
];

const Home = () => {
    const [projectView, setProjectView] = useState<"personal" | "work">("work");

    return (
        <div className="relative flex w-screen flex-col items-center" id="top">
            <Hero />
            <section id="technologies" className="w-full px-4 py-10">
                <h2 className="pb-5 text-center text-4xl">Technologies</h2>
                <div className="flex w-full flex-col gap-3 lg:min-h-[20vh] lg:flex-row lg:justify-center lg:gap-10">
                    {itemList.map((item) => (
                        <StackCard title={item.title} items={item.items} />
                    ))}
                </div>
            </section>
            <div id="work" className="py-6"></div>
            <div className="invisible py-3"></div>
            <div className="flex w-full items-end justify-center gap-2 px-4 md:px-0">
                <button
                    className={`w-full whitespace-nowrap rounded-t-md p-2 text-center lg:w-max ${
                        projectView == "work"
                            ? "bg-blue-400 text-xl"
                            : "over:bg-neutral-300 bg-neutral-400"
                    } transition-all`}
                    onClick={() => setProjectView("work")}
                >
                    Professional Work
                </button>
                <button
                    className={`w-full whitespace-nowrap rounded-t-md p-2 text-center lg:w-max ${
                        projectView == "personal"
                            ? "bg-blue-400 text-xl"
                            : "bg-neutral-400 hover:bg-neutral-300"
                    } transition-all`}
                    onClick={() => setProjectView("personal")}
                >
                    Personal Projects
                </button>
            </div>
            {projectView == "work" ? <Professional /> : <Personal />}
        </div>
    );
};

export default Home;
