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



const Home = () => {
    const autoTextRef = useRef(null)
    const [slideData, setSlideData] = useState({})
    const [mugData, setMugData] = useState({})
    const [posterData, setPosterData] = useState({})
    const [clothesData, setClothesData] = useState({})
    const [newProducts, setNewProducts] = useState({})
    const [bestSellerProduct, setBestSellerProduct] = useState({})
    const [newMug, setNewMug] = useState({})
    const [newPoster, setNewPoster] = useState({})


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


    // get products 
    const getNewProducts = async () => {
        let keys = {
            "key": "new"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            if (!newProducts.length) {
                setNewProducts(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getBestProducts = async () => {
        let keys = {
            "key": "best"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!bestSellerProduct.length) {
                setBestSellerProduct(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getNewMugs = async () => {
        let keys = {
            "key": "new-mug"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!newMug.length) {
                setNewMug(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getNewPosters = async () => {
        let keys = {
            "key": "new-poster"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!newPoster.length) {
                setNewPoster(products)
            }
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
        if (!newProducts?.length) {
            getNewProducts()
        }

        if (!bestSellerProduct?.length) {
            getBestProducts()
        }

        if (!newMug?.length) {
            getNewMugs()
        }

        if (!newPoster?.length) {
            getNewPosters()
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

                    <ProductSlider slides={newProducts} />
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
                    <ProductSlider slides={bestSellerProduct} />
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
                    <ProductSlider slides={newMug} />
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
                    <ProductSlider slides={newPoster} />
                </div>

                <div className='my-6'>

                </div>

            </Wrapper>


        </div>
    )
}

export default Home