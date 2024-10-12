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

const ProductSlider = () => {
    return (
        <div className=' mt-3 select-none' >
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, Autoplay, FreeMode]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                loop={true}
                freeMode={true}
                slidesPerView={2}
                spaceBetween={10}

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
                {productSlides?.map((slide, i) => {
                    return <SwiperSlide key={i}>
                        <div >
                            <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[42vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>


        </div >
    )
}

export default ProductSlider