import Item from "./Item";

const listItems = [
    {
        label: "Home",
        to: "/",
        link: true,
    },
    {
        label: "About",
        to: "/about",
        link: true,
    },
    {
        label: "Projects",
        to: "/#work",
        link: false,
    },
    {
        label: "Contact",
        to: "/contact",
        link: true,
    },
];

const Navbar = () => {
    return (
        <nav className="fixed z-50 flex w-screen justify-center bg-black py-5 text-white">
            <ul className="flex justify-between gap-5 lg:w-1/3">
                {listItems.map((item) => (
                    <Item
                        key={item.to}
                        label={item.label}
                        to={item.to}
                        link={item.link}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
