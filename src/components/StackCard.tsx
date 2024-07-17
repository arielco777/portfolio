import React from "react";

interface StackCardProp {
    title: string;
    items: string[];
}

const StackCard: React.FC<StackCardProp> = ({ title, items }) => {
    return (
        <div className="flex min-w-40 flex-col rounded-lg border transition hover:scale-105">
            <h3 className="rounded-t-lg bg-neutral-600 py-1 text-center text-xl font-bold text-white">
                {title}
            </h3>
            <ul className="flex h-full flex-col justify-around gap-1 p-3 text-center">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default StackCard;
