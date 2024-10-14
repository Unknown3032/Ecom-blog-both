'use client'
import React, { useEffect } from 'react'
import Wrapper from '../Wrapper'
import { motion, AnimatePresence } from 'framer-motion'


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
    { name: "Key Chains", img: "", url: "" },
    { name: "Rings", img: "", url: "" },
]

const MegaMenu = ({ megaMenu, setMegaMenu }) => {

    useEffect(() => {
        document.getElementsByClassName('home')[0].style = 'opacity:50%';
        // document.body.style.overflow = "hidden";
        return () => {
            document.getElementsByClassName('home')[0].style = 'opacity:100%';
            // document.body.style.overflow = "scroll"
        }
    }, [megaMenu])



    return (

        <AnimatePresence>
            {megaMenu[0] && <motion.div
                initial={{ opacity: 0.5, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.5, scale: 0.7 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setMegaMenu([true, megaMenu[1]])}
                onMouseLeave={() => setMegaMenu([false, megaMenu[1]])}
                className='absolute top-[70px] w-full bg-bgblack h-[45vh] text-white'>
                <hr className=' md:absolute h-[0.01vh] w-full text-white/20 bg-white/20 top-0 hidden' />
                <Wrapper>
                    <div className='grid grid-cols-2 place-items-center mt-5 gap-3 h-[40vh]'>
                        <div className='w-full h-full flex gap-2 justify-evenly'>
                            {/* featured  */}
                            <div>
                                <h2 className='px-2'>featured</h2>
                                <ul className='font-crimson mt-2'>
                                    {megaMenu[1] == "Clothes" ? featured?.map((item, i) => {
                                        return <li key={i} className='text-white/90 hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300'>{item?.name}</li>
                                    }) :
                                        accessfeatured?.map((item, i) => {
                                            return <li key={i} className='text-white/90 hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300'>{item?.name}</li>
                                        })
                                    }
                                </ul>
                            </div>

                            {/* Products  */}
                            <div>
                                <h2 className='px-2'>Products</h2>
                                <ul className='font-crimson mt-2'>
                                    {megaMenu[1] == "Clothes" ? Products?.map((item, i) => {
                                        return <li key={i} className='text-white/90 hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300'>{item?.name}</li>
                                    }) :
                                        accessProducts?.map((item, i) => {
                                            return <li key={i} className='text-white/90 hover:bg-dark-grey cursor-pointer px-2 rounded-lg transition-all duration-300'>{item?.name}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* images  */}
                        <motion.div
                            initial={{ opacity: 0.5, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className=' w-full inline-block overflow-hidden'>
                            {megaMenu[1] == "Clothes" ?
                                <img src={'/slide-2.jpg'} className='object-cover h-[40vh] cursor-pointer hover:scale-110 transition-transform duration-500 w-full' alt="" /> :
                                <img src={'/cat-mug-1.jpg'} className='object-cover h-[40vh] cursor-pointer hover:scale-110 transition-transform duration-500 w-full' alt="" />
                            }
                        </motion.div>
                    </div>
                </Wrapper>
                <hr className=' absolute h-[0.01vh] w-full text-white/20 bg-white/20 bottom-0' />
            </motion.div>}
        </AnimatePresence>

    )
}

export default MegaMenu