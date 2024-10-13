"use client"

import React, { useRef } from 'react'
import HeroBanner from './HeroBanner'
import { fadeIn } from '@/varient';
import { useScroll, motion, useTransform } from 'framer-motion';
import Wrapper from '../Wrapper'
import { VelocityScroll } from '../ui/scroll-based-velocity';
import GradualSpacing from '../ui/gradual-spacing';
import ProductSlider from '../ProductSlider/ProductSlider';
import Categories from '../CategoriesUi/Categories';




const Home = () => {
    const autoTextRef = useRef(null)

    const { scrollYProgress } = useScroll({
        delay: 0.5,
        target: autoTextRef,
        offset: ["0 1", "1.33 1"]
    })

    const scalProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

    return (
        <div className=''>
            <div>
                <HeroBanner />
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

                    <ProductSlider section={"new arrival"} />
                </div>

                {/*First Category */}
                <div className='mt-4'>
                    <Categories cat={'fashion'} />
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
                    <ProductSlider section={"best seller"} />
                </div>


                {/*Mug Category */}
                <div className='mt-4'>
                    <Categories cat={'mug'} />
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
                    <ProductSlider section={"Mugs"} />
                </div>

                {/*Frame Category */}
                <div className='mt-4'>
                    <Categories cat={'poster'} />
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
                    <ProductSlider section={"Frame"} />
                </div>

                <div className='my-6'>

                </div>

            </Wrapper>

        </div>
    )
}

export default Home