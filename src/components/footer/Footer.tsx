import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const resumeLink = "Ariel Cohen_CV.pdf";

const Footer = () => {
    return (
        <section className="flex w-full flex-col justify-center bg-black py-10 text-white lg:flex-row lg:justify-around">
            <div>
                <h3 className="px-3 py-3 text-center text-2xl">
                    Let's work together!
                </h3>
                <div>
                    <div className="mt-4 flex w-full justify-center gap-10 lg:justify-around">
                        <div className="group relative flex h-6 w-6 items-center justify-center rounded hover:text-neutral-400">
                            <div className="invisible absolute -top-8 rounded-md bg-neutral-100 px-1 text-black group-hover:visible">
                                Github
                            </div>
                            <a
                                className="-mt-1"
                                href="https://github.com/arielco777"
                                target="_blank"
                            >
                                <GitHubIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="group relative flex h-6 w-6 items-center justify-center rounded hover:text-neutral-400">
                            <div className="invisible absolute -top-8 w-max rounded-md bg-neutral-100 px-1 text-black group-hover:visible">
                                Linkedin
                            </div>
                            <a
                                className="-mt-1"
                                href="https://www.linkedin.com/in/ariel-martin-cohen/"
                                target="_blank"
                            >
                                <LinkedInIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="group relative flex h-6 w-6 items-center justify-center rounded hover:text-neutral-400">
                            <div className="invisible absolute -top-8 w-max rounded-md bg-neutral-100 px-1 text-black group-hover:visible">
                                Resume
                            </div>
                            <a
                                className="-mt-1"
                                href={resumeLink}
                                target="_blank"
                            >
                                <PictureAsPdfIcon fontSize="large" />
                            </a>
                        </div>

                        <div className="group relative flex h-6 w-6 items-center justify-center rounded hover:text-neutral-400">
                            <div className="invisible absolute -top-8 w-max rounded-md bg-neutral-100 px-1 text-black group-hover:visible">
                                Contact Me
                            </div>
                            <Link className="-mt-1" to="/contact">
                                <Email fontSize="large" />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-center text-sm">
                    Built by{" "}
                    <span className="font-bold text-blue-400">Ariel Cohen</span>
                </p>
            </div>
        </section>
    );
};

export default Footer;
