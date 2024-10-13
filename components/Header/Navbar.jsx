'use client'
import React, { useState, useEffect } from "react";

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
import Wrapper from "../Wrapper";



const Navbar = ({ setUser, user }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);
    const [cartItems, setCartItems] = useState()
    const [userNavigate, setUserNavigate] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [background, setBackground] = useState("bg-transparent ")
    const [searchHeight, setSearchHeight] = useState(80)
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

        setSearchHeight(80 + window.scrollY)
    };

    const controlNavbarBg = () => {
        if (window.scrollY > 50) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setBackground("bg-bgblack ");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setBackground("bg-transparent ");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        window.addEventListener("scroll", controlNavbarBg);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
            window.removeEventListener("scroll", controlNavbarBg);
        };
    }, [lastScrollY]);

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cart")))

    }, [])

    const handleSearch = () => {
        setSearchOpen(!searchOpen)
        // console.log(searchOpen);
    }



    return (
        <>

            <header
                className={`w-full h-[60px] md:h-[70px] ${!mobileMenu ? background : "bg-bgblack"} flex items-center  justify-between z-40 top-0  duration-300 shadow-sm ${show} py-2 transition-all sticky  duration-300 hover:bg-black `}
            >
                <Wrapper className="h-[70px] flex justify-between items-center">
                    <Link href="/">
                        <img src="/hindu.png" className="md:w-[120px] w-24" />
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
                                className="flex flex-col md:hidden  font-bold absolute top-[58px] left-0 w-full h-[calc(100vh-50px)] bg-black border-t text-white"
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
                    <div className="flex items-center gap-2 text-[#eeeeee]">

                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer relative"
                            onClick={handleSearch}
                        >
                            <BsSearch className="text-[15px] md:text-[20px]" />
                        </div>

                        <Link href="/cart">
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer relative">
                                <BsCart className="text-[15px] md:text-[20px]" />
                                {cartItems && Object.keys(cartItems)?.length > 0 &&
                                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                        {Object.keys(cartItems)?.length}
                                    </div>
                                }
                            </div>
                        </Link>

                        {/* Icon end */}

                        {!user ? <div className="group w-8 md:w-12 h-8 md:h-12 rounded-full flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer relative ">
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
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center transition-all duration-200 hover:bg-white/20 cursor-pointer relative -mr-2">
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
                {/* search start  */}
                {searchOpen && <div className={`w-full flex justify-around items-center z-50 md:mt-[152.5px] mt-[140.5px] bg-white h-20 absolute`}>
                    <div className='w-[80vw] border border-gray-200 rounded-md'>
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                className="peer w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search something.." />
                        </div>
                    </div>
                    <div className="flex justify-center w-[10vw]">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center transition duration-300 hover:bg-white/20 cursor-pointer relative"
                            onClick={handleSearch}
                        >
                            <VscChromeClose className="text-[15px] md:text-[20px]" />
                        </div>
                    </div>
                </div>}
                {/* search end */}
                <hr className=' absolute h-[0.01vh] w-full text-white/20 bg-white/20 md:mt-[70px] mt-[60px]' />
            </header>

        </>
    );
};

export default Navbar;