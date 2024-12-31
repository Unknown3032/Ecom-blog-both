"use client"

import React, { useEffect, useRef, useState } from 'react'
import HeroBanner from './HeroBanner'
import { useScroll, motion, useTransform } from 'framer-motion';
import Wrapper from '../Wrapper'
import { VelocityScroll } from '../ui/scroll-based-velocity';
import GradualSpacing from '../ui/gradual-spacing';
import ProductSlider from '../ProductSlider/ProductSlider';
import Categories from '../CategoriesUi/Categories';
import axios from 'axios';




// const slideData1 = [
//     {
//         url: "/slide-1.jpg",
//         title: 'New Arrivals',
//         desc: "It's The Standard",
//     },
//     {
//         url: "/slide6.webp",
//         title: 'Best Seller',
//         desc: "It's The Standard",
//     }
// ]

const productSlides = [
    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'Unisex T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-remera-de-gira-blanca-1.jpg', '/productos-remera-de-gira-blanca-2.jpg'], title: 'White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-de-gira-blanca-1.jpg' }, { black: '/productos-remera-de-gira-blanca-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-remera-ojos-negra-1.jpg', '/productos-remera-ojos-negra-2.jpg'], title: 'Black T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-ojos-negra-2.jpg' }, { black: '/productos-remera-ojos-negra-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-hoodie-de-gira-blanco-1.jpg', '/productos-hoodie-de-gira-blanco-2.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-blanco-1.jpg' }, { black: '/productos-hoodie-de-gira-blanco-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-buzo-flaakko-negro-1.jpg', '/productos-buzo-flaakko-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-buzo-flaakko-negro-1.jpg' }, { black: '/productos-buzo-flaakko-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 799 },

    { images: ['/productos-hoodie-de-gira-negro-1.jpg', '/productos-hoodie-de-gira-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-negro-1.jpg' }, { black: '/productos-hoodie-de-gira-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },
]

const bestProductSlides = [

    { images: ['/productos-hoodie-de-gira-blanco-1.jpg', '/productos-hoodie-de-gira-blanco-2.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-blanco-1.jpg' }, { black: '/productos-hoodie-de-gira-blanco-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-buzo-flaakko-negro-1.jpg', '/productos-buzo-flaakko-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-buzo-flaakko-negro-1.jpg' }, { black: '/productos-buzo-flaakko-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 799 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'Unisex T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-hoodie-de-gira-negro-1.jpg', '/productos-hoodie-de-gira-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-negro-1.jpg' }, { black: '/productos-hoodie-de-gira-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },
    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-remera-de-gira-blanca-1.jpg', '/productos-remera-de-gira-blanca-2.jpg'], title: 'White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-de-gira-blanca-1.jpg' }, { black: '/productos-remera-de-gira-blanca-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-remera-ojos-negra-1.jpg', '/productos-remera-ojos-negra-2.jpg'], title: 'Black T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-ojos-negra-2.jpg' }, { black: '/productos-remera-ojos-negra-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },
]

const mugsSlides = [

    { images: ['/mug-1.webp'], title: 'Toji Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-1.webp' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-2-b.png', '/mug-2-a.png'], title: 'Gojo Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-2-a.png' }, { black: '/mug-2-b.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-3-b.png', '/mug-3-a.png'], title: 'Itachi & Sasuke Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-3-b.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-4-b.png', '/mug-4-a.png'], title: 'Gojo Tree Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-4-a.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-5-a.jpg', '/mug-5-b.jpg'], title: 'Luffy Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-5-a.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-6.png'], title: 'Itachi mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-6.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

]

const frameSlides = [

    { images: ['/frame-cat-1.jpg'], title: 'Lord Shiva Frame', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-cat-2.jpg'], title: 'One Pieace Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-cat-3.jpg'], title: 'Motivational Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-3.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-4.jpg'], title: 'Sanatan Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-4-a.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-5.jpg', '/mug-5-b.jpg'], title: 'Ganesha Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-5-a.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-6.jpg'], title: 'Lion Motivation ', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-6.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

]


const Home = () => {
    const autoTextRef = useRef(null)
    const [slideData, setSlideData] = useState({})
    const [mugData, setMugData] = useState({})
    const [posterData, setPosterData] = useState({})
    const [clothesData, setClothesData] = useState({})


    const { scrollYProgress } = useScroll({
        delay: 0.5,
        target: autoTextRef,
        offset: ["0 1", "1.33 1"]
    })





    // get banners 
    const getBanners = async () => {
        let cat = {
            "category": "home"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getBanner", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setSlideData(images);

        }).catch(({ response }) => {

        })
    }


    // get categories
    const getCategoriesClothes = async () => {
        let cat = {
            "category": "clothes"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setClothesData(images);

        }).catch(({ response }) => {

        })
    }

    const getCategoriesAccessories = async () => {
        let cat = {
            "category": "accessories"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setMugData(images);

        }).catch(({ response }) => {

        })
    }
    const getCategoriesAccessoriesFrames = async () => {
        let cat = {
            "category": "accessories-frame"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setPosterData(images);

        }).catch(({ response }) => {

        })
    }


    useEffect(() => {
        if (!slideData?.length) {
            getBanners()
        }

        if (!clothesData?.length) {
            getCategoriesClothes()
        }

        if (!mugData?.length) {
            getCategoriesAccessories()

        }

        if (!posterData?.length) {
            getCategoriesAccessoriesFrames()
        }
        // console.log(!slideData?.length);

    }, [])




    const scalProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    return (
        <div className=''>

            <div>
                <HeroBanner slideData={slideData} loop={true} />
            </div>

            <Wrapper>
                {/* text for showing our motive  */}
                <motion.div
                    ref={autoTextRef}
                    style={{
                        scale: scalProgress,
                        opacity: opacityProgress,
                    }}
                    className='mt-4'>
                    <VelocityScroll
                        text="Wear Your Culture In Modern Way"
                        default_velocity={2}
                        className=" select-none font-display text-center text-3xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-8xl md:leading-[5rem]"
                    />
                </motion.div>
                {/* text for showing our motive ends  */}

                {/* all product section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="New Arrival"
                    />
                    {/* heading  end */}

                    <ProductSlider slides={productSlides} />
                </div>

                {/*First Category */}
                <div className='mt-4'>
                    <Categories slides={clothesData} cat={'fashion'} />
                </div>
                {/* First Category  end */}

                {/* Best product section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="Best Sellers"
                    />
                    {/* heading  end */}
                    <ProductSlider slides={bestProductSlides} />
                </div>


                {/*Mug Category */}
                <div className='mt-4'>
                    <Categories slides={mugData} cat={'mug'} />
                </div>
                {/* Mug Category  end */}

                {/* Mugs section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="New Mugs"
                    />
                    {/* heading  end */}
                    <ProductSlider slides={mugsSlides} />
                </div>

                {/*Frame Category */}
                <div className='mt-4'>
                    <Categories slides={posterData} cat={'poster'} />
                </div>
                {/* frame Category  end */}

                {/* Frame section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="New Frames"
                    />
                    {/* heading  end */}
                    <ProductSlider slides={frameSlides} />
                </div>

                <div className='my-6'>

                </div>

            </Wrapper>


        </div>
    )
}

export default Home