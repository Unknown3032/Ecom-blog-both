import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper';

// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from '../swiper/SwiperButtonNext ';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { AnimatePresence, motion } from 'framer-motion';




const featured = [
    { name: "New Arrivals", img: "", url: "" },
    { name: "Best Seller", img: "", url: "" },
    { name: "Better In Black", img: "", url: "" },
    { name: "Basics", img: "", url: "" },
]

const Products = [
    { name: "All Products", img: "", url: "" },
    { name: "Fit T-Shirt", img: "", url: "" },
    { name: "Full Slive", img: "", url: "" },
    { name: "Hoodies", img: "", url: "" },
    { name: "Over Sized T-shirt", img: "", url: "" },
]

const accessfeatured = [
    { name: "New Arrivals", img: "", url: "" },
    { name: "Best Seller", img: "", url: "" },
    { name: "Anime", img: "", url: "" },
    { name: "Sanatan", img: "", url: "" },
    { name: "Motivational", img: "", url: "" },
    { name: "Gym", img: "", url: "" },
]

const accessProducts = [
    { name: "All Products", img: "", url: "" },
    { name: "Frames", img: "", url: "" },
    { name: "Mugs", img: "", url: "" },
    { name: "Rings", img: "", url: "" },
    { name: "Best Key Chains", img: "", url: "" },
]

const MegamenuMoblie = ({ mobileMenu, setMobileMenu }) => {

    const [sliderHr, setSliderHr] = useState('Clothes')

    useEffect(() => {
        document.getElementsByClassName('home')[0].style = 'opacity:50%';
        document.body.style.overflow = "hidden";

        return () => {
            document.getElementsByClassName('home')[0].style = 'opacity:100%';
            document.body.style.overflow = "scroll";
        }
    }, [mobileMenu])
    return (
        <AnimatePresence>
            {mobileMenu &&
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                    onMouseLeave={() => { setMobileMenu(false) }}
                    onKeyDown={() => { setMobileMenu(false) }}
                    className='absolute md:hidden top-[18vh] text-white h-screen bg-black w-full rounded-t-3xl '>
                    <Wrapper>
                        <div className='mt-5  grid grid-rows-2 h-[75vh] w-full gap-3'>
                            {/* toggele */}
                            <div className='h-[5vh] flex justify-evenly gap-4 '>
                                <div onClick={() => { setSliderHr("Clothes") }}>
                                    <h2>Clothes</h2>
                                </div>

                                <div onClick={() => { setSliderHr("Accessories") }}>
                                    <h2>Accessories</h2>
                                </div>

                                <hr className=' absolute h-[0.01vh] w-full text-white/20 mt-9 ' />

                                <hr className={` absolute ${sliderHr == "Clothes" ? "left-0" : "right-0"} h-[0.1vh] ${sliderHr == "Clothes" ? "right-48" : "left-48"} text-white mt-9 duration-300 `} />


                            </div>

                            <div className='  flex flex-col justify-evenly gap-2 h-[71vh]  -mt-[33.7vh] '>
                                {/* content */}
                                <div className=' h-full mt-4 flex gap-10 justify-evenly'>
                                    {/* Featured  */}
                                    <div>
                                        <h2 className='px-2'>Featured</h2>
                                        <ul className='font-crimson mt-2'>
                                            {sliderHr == "Clothes" ?
                                                featured?.map((item, i) => {
                                                    return <li key={i} className='text-white/90 font-semibold hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300 text-lg pt-1'>{item?.name}</li>
                                                }) :
                                                accessfeatured?.map((item, i) => {
                                                    return <li key={i} className='text-white/90 font-semibold hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300 text-lg pt-1'>{item?.name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>

                                    {/* Products  */}
                                    <div>
                                        <h2 className='px-2'>Products</h2>
                                        <ul className='font-crimson mt-2'>
                                            {sliderHr == "Clothes" ?
                                                Products?.map((item, i) => {
                                                    return <li key={i} className='text-white/90 font-semibold hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300 text-lg pt-1'>{item?.name}</li>
                                                }) :
                                                accessProducts?.map((item, i) => {
                                                    return <li key={i} className='text-white/90 font-semibold hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300 text-lg pt-1'>{item?.name}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                {/* Images */}
                                <motion.div
                                    initial={{ opacity: 0.5, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0.5, scale: 0.7 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className=' w-full inline-block overflow-hidden h-full -mt-16'>
                                    {sliderHr == "Clothes" ?
                                        <img src={'/slide-2.jpg'} className='object-cover h-[40vh] cursor-pointer hover:scale-110 transition-transform duration-500 w-full' alt="" /> :
                                        <img src={'/cat-mug-1.jpg'} className='object-cover h-[40vh] cursor-pointer hover:scale-110 transition-transform duration-500 w-full' alt="" />
                                    }
                                </motion.div>
                            </div>
                        </div>
                    </Wrapper>
                </motion.div>}
        </AnimatePresence>
    )
}

export default MegamenuMoblie