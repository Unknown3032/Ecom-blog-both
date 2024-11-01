'use client'

import Filter from '@/components/ProductPage/Filter'
import MobileFiter from '@/components/ProductPage/MobileFiter'
import ProductCard from '@/components/ProductSlider/ProductCard'
import Wrapper from '@/components/Wrapper'



import { motion } from 'framer-motion'


import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";





const filterData = [
    { name: 'Sort By:', subFilter: ['featured', 'Best Selling', 'Newest', 'Price:Low-High', 'Price:High-Low'], key: 1 },
    { name: 'Collection', subFilter: ['Anime', 'Spritual', 'Gym', 'Casual'], key: 2 },
]

const productSlides = [

    { images: ['/productos-hoodie-de-gira-blanco-1.jpg', '/productos-hoodie-de-gira-blanco-2.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-blanco-1.jpg' }, { black: '/productos-hoodie-de-gira-blanco-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-buzo-flaakko-negro-1.jpg', '/productos-buzo-flaakko-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-buzo-flaakko-negro-1.jpg' }, { black: '/productos-buzo-flaakko-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 799 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'Unisex T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-hoodie-de-gira-negro-1.jpg', '/productos-hoodie-de-gira-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-negro-1.jpg' }, { black: '/productos-hoodie-de-gira-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-remera-de-gira-blanca-1.jpg', '/productos-remera-de-gira-blanca-2.jpg'], title: 'White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-de-gira-blanca-1.jpg' }, { black: '/productos-remera-de-gira-blanca-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-remera-ojos-negra-1.jpg', '/productos-remera-ojos-negra-2.jpg'], title: 'Black T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-ojos-negra-2.jpg' }, { black: '/productos-remera-ojos-negra-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },
]

const Products = ({ params }) => {
    const { slug } = params;
    const [mobileFilter, setMobileFilter] = useState(false);

    const searchParams = useSearchParams()
    const search = searchParams.get('search')


    return (
        <div className='w-full relative home'>
            <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8
                }}
                className='relative bg-dark-grey h-[45vh] md:h-[45vh] select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <img className=' bg-dark-grey h-full w-full object-cover brightness-90 grayscale-5' src={'/clothesTheme-1 (3).webp'} alt={''} />

                <div className='absolute left-2 z-20 bottom-4'>
                    <h2 className=' text-sm font-semibold'>{slug}</h2>
                    <h1 className='md:text-3xl text-2xl -mt-1'>{search}</h1>
                    <p className='text-xl -mt-1 font-semibold'>12 Products</p>
                </div>
            </motion.div>

            <Wrapper>
                <div className='flex mt-5 lg:gap-8 '>
                    {/* large screen filter */}
                    <div className='lg:w-[25vw] hidden  lg:flex '>
                        <Filter slug={slug} filterData={filterData} search={search} />
                    </div>

                    {/* small screen filter */}
                    <div className='lg:hidden absolute  z-10 text-white w-full '>
                        <div className=''>
                            <div className='fixed  bottom-10'>
                                <div
                                    onClick={() => { setMobileFilter(!mobileFilter) }}
                                    className='bg-bgblack text-white border-[1px] border-dark-grey p-4 rounded-full text-2xl font-bold'>
                                    <HiOutlineAdjustmentsHorizontal className='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {mobileFilter &&
                        <div>
                            <div className='absolute z-10 top-0 right-0 left-0 bottom-0 bg-black opacity-30 lg:hidden'
                                onClick={() => { setMobileFilter(!mobileFilter) }}
                            >

                            </div>
                            <MobileFiter slug={slug} filterData={filterData} mobileFilter={mobileFilter} />
                        </div>}

                    {/* products  */}
                    <div className='grid md:grid-cols-3 grid-cols-2 place-items-center w-full '>
                        {productSlides?.map((slide, i) => {
                            return <div key={i} className='py-2 '>
                                <ProductCard product={slide} css={'lg:w-[22vw] md:w-[28.5vw] w-[42vw]  opacity-90 '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} />
                            </div>
                        })}
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default Products