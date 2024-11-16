'use client'
import React, { useState, useEffect, useContext } from "react";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BsCart, BsSearch } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";

import { AnimatePresence, motion } from "framer-motion";



import { fadeIn } from "@/varient";
import UserNavigation from "./UserNavigation";
import Wrapper from "../Wrapper";
import MegaMenu from "./MegaMenu";
import MegamenuMoblie from "./MegamenuMoblie";
import Login from "../Authentication/Login";
import CustomBatch from "../CustomBatch";
import { UserContext } from "@/app/layout";



const Navbar = () => {
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
    const [megaMenu, setMegaMenu] = useState([false, 'Clothes'])

    let { setUserAuth, userAuth: { token, profile_img }, activeUserAuth, userAuth } = useContext(UserContext)

    const [activeLogin, setActiveLogin] = useState(false)
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
    }, [userAuth])

    const handleSearch = () => {
        setSearchOpen(!searchOpen)
        // console.log(searchOpen);
    }



    return (
        <>

            <header
                className={`w-full h-[60px] md:h-[70px] ${mobileMenu || searchOpen ? "bg-bgblack" : background} flex items-center  justify-between z-40 top-0  duration-300 shadow-sm ${show} py-2 transition-all sticky  duration-300 hover:bg-black `}
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
                        setMegaMenu={setMegaMenu}
                        megaMenu={megaMenu}
                    />


                    {/* icons  */}
                    <div className="flex items-center gap-2 text-[#eeeeee]">

                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer relative"
                            onClick={handleSearch}
                        >
                            <BsSearch className="text-[15px] md:text-[20px]" />
                        </div>

                        <Link href="/cart">
                            {/* <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-white/20 cursor-pointer relative"> */}
                            {/* <IoBagOutline className="text-[15px] md:text-[20px]" /> */}
                            <CustomBatch icon={IoBagOutline} notifiactionCount={33} />
                            {/* </div> */}
                        </Link>

                        {/* Icon end */}
                        {!token ? <div className="group w-8 md:w-12 h-8 md:h-12 rounded-full flex flex-col justify-center items-center hover:bg-white/20 cursor-pointer relative ">
                            {/* <Link href={'/signIn'}> */}
                            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
                            {/* </Link> */}
                        </div> :
                            <>
                                <div className='relative '
                                    onMouseEnter={() => setUserNavigate(true)}
                                    onMouseLeave={() => setUserNavigate(false)}
                                    onClick={() => setUserNavigate(!userNavigate)}
                                >
                                    <button className='w-12 h-12 mt-1 bg-white/20 rounded-full'>
                                        <img className='w-full h-full rounded-full object-cover' src={profile_img} alt='profile' />
                                    </button>
                                    {
                                        userNavigate ?
                                            <UserNavigation setUserAuth={setUserAuth} /> :
                                            ""
                                    }
                                </div>
                            </>
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
                {searchOpen && <div className={`w-full text-white flex justify-around items-center z-50 md:mt-[152px] mt-[140.5px] bg-bgblack h-20 absolute`}>
                    <div className='w-[80vw] border border-gray-200 rounded-md'>
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-bgblack overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                className="peer w-full outline-none text-sm text-gray-700 pr-2 bg-bgblack"
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
                {megaMenu[0] && <MegaMenu megaMenu={megaMenu} setMegaMenu={setMegaMenu} />}

                {mobileMenu && <MegamenuMoblie setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />}
            </header>

            {/* login modal  */}


        </>
    );
};

export default Navbar;
