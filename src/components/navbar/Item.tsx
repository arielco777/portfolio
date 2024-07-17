import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

interface ItemProp {
    label: string;
    to: string;
}

const bottomDiv = (
    <div className="w-0 border-b border-blue-400 transition-all duration-75 group-hover:w-full"></div>
);

const Item: React.FC<ItemProp> = ({ label, to }) => {
    return (
        <li className="group select-none hover:cursor-pointer">
            <Link to={to}>
                {label}
                {bottomDiv}
            </Link>
        </li>
    );
};

export default Item;
