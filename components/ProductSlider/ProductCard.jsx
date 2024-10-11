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

const ProductCard = ({ product, css, csstext }) => {

    const [controlSlide, setControlSlide] = useState(false)



    return (
        <div className='flex'>
            <div className='flex flex-col gap-2 w-full '>

                {/* images start  */}
                <div className={` rounded-2xl aspect-2/3 ${css} `}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Scrollbar, Autoplay]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}

                    >
                        {controlSlide && (
                            <>
                                <SwiperButtonNext setControlSlide={setControlSlide} >
                                    <IoIosArrowRoundForward />
                                </SwiperButtonNext>

                                <SwiperButtonPrev setControlSlide={setControlSlide}>
                                    <IoIosArrowRoundBack />
                                </SwiperButtonPrev>
                            </>
                        )
                        }


                        {product?.images?.map((img, i) => {
                            return <SwiperSlide>
                                <img onMouseEnter={() => setControlSlide(true)}
                                    onMouseLeave={() => setControlSlide(false)} className={`object-cover rounded-2xl aspect-2/3 `} src={img} alt={product?.title} />
                            </SwiperSlide>
                        })}

                    </Swiper>
                </div>
                {/* images end  */}

                {/* text start  */}
                <div className={`${csstext}`}>
                    <h2>{product?.title}</h2>
                    <p className='text-xl text-grey/80'>{Object.keys(product?.colors[0])[0]}. {product?.colors.length} colors</p>
                    <p className='-mt-1'> &#8377;{product?.price}</p>
                </div>
                {/* text end  */}

            </div>

        </div>
    )
}

export default ProductCard