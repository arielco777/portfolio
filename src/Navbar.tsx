import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="h-full">
            <ul className="w-12 h-full flex flex-col justify-around items-center rounded-r-3xl rounded-l-xl bg-purple-600">
                <li
                    className={`${
                        location.pathname == "/" ? "text-white" : ""
                    } group relative hover:scale-110 transition`}
                >
                    <Link to="/">
                        <HomeIcon
                            className="group-hover:scale-110"
                            fontSize={
                                location.pathname == "/" ? "large" : "medium"
                            }
                        />
                        <p className="absolute text-black left-10 top-0 invisible group-hover:visible w-max">
                            Home
                        </p>
                    </Link>
                </li>
                <li
                    className={`${
                        location.pathname == "/about" ? "text-white" : ""
                    } group relative hover:scale-110 transition`}
                >
                    <Link to="/about">
                        <PersonIcon
                            className="group-hover:scale-110"
                            fontSize={
                                location.pathname == "/about"
                                    ? "large"
                                    : "medium"
                            }
                        />
                        <p className="absolute left-10 top-0 invisible group-hover:visible w-max">
                            About me
                        </p>
                    </Link>
                </li>
                <li
                    className={`${
                        location.pathname == "/projects" ? "text-white" : ""
                    } group relative hover:scale-110 transition`}
                >
                    <Link to="/projects" className="">
                        <WorkIcon
                            fontSize={
                                location.pathname == "/projects"
                                    ? "large"
                                    : "medium"
                            }
                        />
                        <p className="absolute left-10 top-0 invisible group-hover:visible w-max">
                            Projects
                        </p>
                    </Link>
                </li>
                <li
                    className={`${
                        location.pathname == "/contact" ? "text-white" : ""
                    } group relative hover:scale-110 transition`}
                >
                    <Link to="/contact">
                        <LocalPhoneIcon
                            className="group-hover:scale-110"
                            fontSize={
                                location.pathname == "/contact"
                                    ? "large"
                                    : "medium"
                            }
                        />
                        <p className="absolute left-10 top-0 invisible group-hover:visible w-max">
                            Contact me
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
