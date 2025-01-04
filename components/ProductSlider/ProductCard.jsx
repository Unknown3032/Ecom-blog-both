'use client'
import React, { useState } from 'react'

// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from '../swiper/SwiperButtonNext ';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


//icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FadeInWhenVisible } from '@/common/InViewAnimation';
import Link from 'next/link';



const ProductCard = ({ product, css, csstext, _id }) => {

    const [controlSlide, setControlSlide] = useState(false)



    return (
        <FadeInWhenVisible>
            <div className='flex select-none'>
                <div className='flex flex-col gap-2 w-full '>

                    {/* images start  */}
                    <div className={` rounded-2xl aspect-2/3 ${css} `}>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Scrollbar, Autoplay]}
                            // autoplay={{
                            //     delay: 10000,
                            //     disableOnInteraction: true,
                            // }}
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}

                        >

                            {controlSlide && (
                                <>
                                    <SwiperButtonNext setControlSlide={setControlSlide} controlSlide={controlSlide} >
                                        <IoIosArrowRoundForward />
                                    </SwiperButtonNext>
                                    <SwiperButtonPrev setControlSlide={setControlSlide} controlSlide={controlSlide}>
                                        <IoIosArrowRoundBack />
                                    </SwiperButtonPrev>
                                </>
                            )
                            }


                            {product?.images?.map((img, i) => {

                                return <SwiperSlide key={i}>
                                    <div className=' overflow-hidden inline-block rounded-2xl aspect-2/3'>
                                        <Link href={`/productpage/${_id}`}>
                                            <img
                                                onMouseEnter={() => { product?.images.length > 1 ? setControlSlide(true) : setControlSlide(false) }}
                                                onMouseLeave={() => setControlSlide(false)}
                                                className={`object-cover rounded-2xl aspect-2/3 cursor-pointer hover:scale-105 transition-transform duration-500 `}
                                                alt={product?.title}
                                                src={img}
                                            />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                    {/* images end  */}

                    {/* text start  */}
                    <Link href={`/productpage/${_id}`}>
                        <div className={`${csstext} -mt-2`}>
                            <h2 className='md:text-lg text-sm'>{product?.title}</h2>
                            <p className='text-sm text-grey/80'>{Object.keys(product?.colors[0])[0]}. {product?.colors.length} colors</p>
                            <p className='-mt-1 text-lg'> &#8377;{product?.price}</p>
                        </div>
                    </Link>
                    {/* text end  */}

                </div>

            </div >
        </FadeInWhenVisible>
    )
}

export default ProductCard