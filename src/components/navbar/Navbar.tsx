import Item from "./Item";

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
    return (
        <nav className="fixed z-50 flex w-screen justify-center bg-black py-5 text-white">
            <ul className="flex justify-between gap-5 lg:w-1/3">
                {listItems.map((item) => (
                    <div key={item.to}>
                        <Item label={item.label} to={item.to} />
                    </div>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
