import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

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

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <BsChevronDown size={14} />
                                {/* dropdown */}
                                {showCatMenu && (
                                    <div className="w-56 bg-white rounded shadow-md absolute top-5 
                                    left-1/2 transform -translate-x-1/2 z-10
                                    overflow-hidden mt-2">
                                        {categories?.length === 0 ? (
                                            <p>Loading...</p>
                                        ) : (
                                            <ul className="text-sm divide-y">
                                                {subMenuData.map((catItem) => (
                                                    <Link href={`/category/${catItem.name}`} key={`${item.id}-${catItem.id}`}>
                                                        <li
                                                            onClick={() => setShowCatMenu(false)}
                                                            className="px-4 py-2 hover:bg-gray-10
                                                        transition duration-150 ease-in-out"
                                                        >
                                                            {`${item.name}: ${catItem.name.toUpperCase()} `}
                                                        </li>
                                                    </Link>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}


                                {showCatMenu && (
                                    <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {categories?.map(
                                            ({ attributes: c, id }) => {
                                                return (
                                                    <Link
                                                        key={id}
                                                        href={`/category/${c.slug}`}
                                                        onClick={() =>
                                                            setShowCatMenu(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;