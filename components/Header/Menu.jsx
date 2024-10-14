import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import MegaMenu from "./MegaMenu";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 3, name: "Clothes", subMenu: true },
    { id: 2, name: "Accessories", subMenu: true },
    { id: 4, name: "Blog", url: "/blog" },
];

const subMenuData = [
    { id: 1, name: "tshirt", doc_count: 11 },
    { id: 2, name: "mug", doc_count: 8 },
    { id: 3, name: "mouse-pad", doc_count: 64 },
    { id: 4, name: "keychain", doc_count: 107 },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories, setMegaMenu, megaMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-white">
            {data.map((item) => {
                if (item.subMenu) {
                    return (
                        <React.Fragment key={item.id}>
                            <li
                                onMouseEnter={() => setMegaMenu([true, item?.name])}
                                className="cursor-pointer hover:text-white/80 transition-all duration-300">
                                {item.name}
                            </li>
                        </React.Fragment>)
                }
                return (
                    <React.Fragment key={item.id}>
                        <li className="cursor-pointer hover:text-white/80 transition-all duration-300">
                            <Link href={'/'}>{item.name}</Link>
                        </li>
                    </React.Fragment>
                );
            })}

        </ul>
    );
};

export default Menu;