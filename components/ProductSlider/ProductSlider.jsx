import React from 'react'
import ProductCard from './ProductCard'

// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, FreeMode } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from '../swiper/SwiperButtonNext ';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Link from 'next/link';





const ProductSlider = ({ slides }) => {

    return (
        <div className=' mt-3 select-none' >
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, Autoplay, FreeMode]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                loop={true}
                freeMode={true}
                slidesPerView={2}
                spaceBetween={40}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                className='mySwiper '
            >
                {slides?.map((slide, i) => {
                    return <SwiperSlide key={i}>
                        <div >
                            <Link href={`/productpage/${slide?.title}`}>
                                <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[45vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                            </Link>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>


        </div >
    )
}

export default ProductSlider