'use client'
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BsCart, BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "@/varient";
import UserNavigation from "./UserNavigation";



const Navbar = ({ setUser, user }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const [cartItems, setCartItems] = useState()
    const [userNavigate, setUserNavigate] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    // console.log(user);

    // console.log(user.data.profile_img);
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cart")))

    }, [])

    const handleSearch = () => {
        setSearchOpen(!searchOpen)
        console.log(searchOpen);

    }



    return (
        <>
            <header
                className={`w-full h-[60px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 shadow-sm ${show} py-2`}
            >
                <Wrapper className="h-[70px] flex justify-between items-center">
                    <Link href="/">
                        <img src="/hindu.png" className="md:w-[150px] w-24" />
                    </Link>
                    {/* menu for desktop  */}
                    <Menu
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        categories={categories}
                    />
                    {/* menu for mobile  */}
                    <AnimatePresence>
                        {mobileMenu && (
                            <motion.div
                                variants={fadeIn('left', 0.1, 0.5)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black"
                            >
                                <MenuMobile
                                    showCatMenu={showCatMenu}
                                    setShowCatMenu={setShowCatMenu}
                                    setMobileMenu={setMobileMenu}
                                    categories={categories}
                                    mobileMenu={mobileMenu}
                                />
                            </motion.div>

                        )}
                    </AnimatePresence>

                    {/* icons  */}
                    <div className="flex items-center gap-2 text-black">

                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
                            onClick={handleSearch}
                        >
                            <BsSearch className="text-[15px] md:text-[20px]" />
                        </div>

                        <Link href="/cart">
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                                <BsCart className="text-[15px] md:text-[20px]" />
                                {cartItems && Object.keys(cartItems)?.length > 0 &&
                                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                        {Object.keys(cartItems)?.length}
                                    </div>
                                }
                            </div>
                        </Link>

                        {/* Icon end */}

                        {!user ? <div className="group w-8 md:w-12 h-8 md:h-12 rounded-full flex flex-col justify-center items-center hover:bg-black/[0.05] cursor-pointer relative ">
                            <Link href={'/signIn'}>
                                <IoLogInOutline className="text-[19px] md:text-[24px]" />
                            </Link>
                        </div> :
                            <div className='relative'
                                onMouseEnter={() => setUserNavigate(true)}
                                onMouseLeave={() => setUserNavigate(false)}
                                onClick={() => setUserNavigate(!userNavigate)}
                            >
                                <button className='md:w-8 md:h-8 w-7 h-7 mt-1'>
                                    <img className='w-full h-full rounded-full object-cover' src={user?.data?.data?.profile_img} alt='profile' />
                                </button>
                                {
                                    userNavigate ?
                                        <UserNavigation user={user} setUser={setUser} /> :
                                        ""
                                }
                            </div>
                        }

                        {/* Mobile icon start */}
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                            {mobileMenu ? (
                                <VscChromeClose
                                    className="text-[16px]"
                                    onClick={() => setMobileMenu(false)}
                                />
                            ) : (
                                <BiMenuAltRight
                                    className="text-[20px]"
                                    onClick={() => setMobileMenu(true)}
                                />
                            )}
                        </div>
                        {/* Mobile icon end */}
                    </div>
                </Wrapper>
            </header>

            {/* search start  */}
            {searchOpen && <div className="w-full flex justify-around items-center z-30  bg-white h-20 absolute">
                <div class='w-[80vw] border border-gray-200 rounded-md'>
                    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                        <div class="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input
                            class="peer w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.." />
                    </div>
                </div>
                <div className="flex justify-center w-[10vw]">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
                        onClick={handleSearch}
                    >
                        <VscChromeClose className="text-[15px] md:text-[20px]" />
                    </div>
                </div>
            </div>}
            {/* search end */}
        </>
    );
};

export default Navbar;
