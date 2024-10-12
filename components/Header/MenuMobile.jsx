import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/varient";


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Shop", url: "/products" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Blog", url: "/blog" },
];

const subMenuData = [
    { id: 1, name: "tshirt", doc_count: 11 },
    { id: 2, name: "mug", doc_count: 8 },
    { id: 3, name: "mouse-pad", doc_count: 64 },
    { id: 4, name: "keychain", doc_count: 107 },
];

const MenuMobile = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
    mobileMenu
}) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute  left-0 w-full h-[calc(100vh-50px)] bg-bgblack border-t text-white">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                                {showCatMenu && (
                                    <div className="w-full bg-bgblack rounded shadow-md absolute top-10 
                                    left-1/2 transform -translate-x-1/2 z-10
                                    overflow-hidden mt-2">
                                        {categories?.length === 0 ? (
                                            <p>Loading...</p>
                                        ) : (
                                            <AnimatePresence>
                                                {showCatMenu && <motion.ul
                                                    variants={fadeIn('down', 0.1, 0.5)}
                                                    initial='hidden'
                                                    animate='show'
                                                    exit='hidden'
                                                    className="text-sm divide-y h-full">
                                                    {subMenuData.map((catItem) => (
                                                        <li
                                                            key={`${item.id}-${catItem.id}`}
                                                            onClick={() => setShowCatMenu(false)}
                                                            className="px-4 py-3 hover:bg-gray-10
                                                        transition duration-150 ease-in-out relative"
                                                        >
                                                            <Link
                                                                onClick={() => {
                                                                    setShowCatMenu(
                                                                        false
                                                                    );
                                                                    setMobileMenu(
                                                                        false
                                                                    );
                                                                }}
                                                                href={`/category/${catItem.name}`}>
                                                                {`${item.name}: ${catItem.name.toUpperCase()} `}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                )}

                                {showCatMenu && (
                                    <ul className="bg-bgblack -mx-5 mt-4 -mb-4">
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() => {
                                                            setShowCatMenu(
                                                                false
                                                            );
                                                            setMobileMenu(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        <li className="py-4 px-8 border-t flex justify-between">
                                                            {c.name}
                                                            <span className="opacity-50 text-sm">
                                                                {`(${c.products.data.length})`}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;