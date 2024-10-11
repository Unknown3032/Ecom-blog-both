import React from 'react'
import ProductCard from './ProductCard'

// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from '../swiper/SwiperButtonNext ';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



const productSlides = [
    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },
]

const ProductSlider = () => {
    return (
        <div>
            <Swiper
                className="mySwiper"
                // install Swiper modules
                modules={[Navigation, Scrollbar, Autoplay]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={200}


            >
                {productSlides?.map((slide, i) => {
                    return <SwiperSlide key={i}>
                        <div >
                            <ProductCard css={'lg:w-[20vw] md:w-[30vw] w-[48vw] '} csstext={'lg:max-w-[19vw] md:max-w-[29vw] max-w-[47vw]'} product={slide} />
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>



        </div>
    )
}

export default ProductSlider