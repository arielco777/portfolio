import React from "react";
import { Link } from "react-router-dom";

interface ItemProp {
    label: string;
    to: string;
    link: boolean;
}

const Item: React.FC<ItemProp> = ({ label, link = true, to }) => {
    return (
        <li className="group">
            {link ? <Link to={to}>{label}</Link> : <a href={to}>{label}</a>}
            <div className="w-0 border-b border-blue-400 transition-all duration-75 group-hover:w-full"></div>
        </li>
    );
};

export default Item;
