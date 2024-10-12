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
                        text="Latest Products"
                    />
                    {/* heading  end */}

                    <ProductSlider />
                </div>

                {/*First Category */}
                <div className='mt-4'>
                    <Categories />
                </div>

                {/* First Category  end */}
                {/*First Category */}
                <div className='mt-4'>
                </div>
                {/* First Category  end */}



            </Wrapper>

        </div>
    )
}

export default Home