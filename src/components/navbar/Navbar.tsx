import { useEffect, useState } from "react";
import Item from "./Item";
import { MenuIcon } from "lucide-react";
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const listItems = [
    {
        label: "Home",
        to: "/#top",
    },
    {
        label: "Projects",
        to: "/#work",
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "Contact",
        to: "/contact",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
        if (!location.pathname.includes("#")) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <nav className="fixed z-50 flex w-screen justify-center bg-black text-white lg:py-5">
            <ul className="hidden justify-between gap-5 lg:flex lg:w-1/3">
                {listItems.map((item) => (
                    <div key={item.to}>
                        <Item label={item.label} to={item.to} />
                    </div>
                ))}
            </ul>
            <button
                className="absolute right-4 top-4 rounded-full bg-black p-1 lg:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? <Close /> : <MenuIcon />}
            </button>
            <ul
                className={`${isOpen ? "h-screen" : "-mt-5 h-0"} flex w-full flex-col items-center justify-evenly divide-y overflow-hidden bg-black text-4xl transition-all duration-300 lg:hidden`}
            >
                {listItems.map((item) => (
                    <div
                        key={item.to}
                        className="flex h-max w-1/2 flex-grow items-center justify-center"
                    >
                        <Item label={item.label} to={item.to} />
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
