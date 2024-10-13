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

const ProductSlider = ({ section }) => {

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
                {section == "new arrival" ? productSlides?.map((slide, i) => {
                    return <SwiperSlide key={i}>
                        <div >
                            <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[45vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                        </div>
                    </SwiperSlide>
                }) :
                    section == "best seller" ? bestProductSlides?.map((slide, i) => {
                        return <SwiperSlide key={i}>
                            <div >
                                <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[45vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                            </div>
                        </SwiperSlide>
                    }) :
                        section == "Mugs" ? mugsSlides?.map((slide, i) => {
                            return <SwiperSlide key={i}>
                                <div >
                                    <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[45vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                                </div>
                            </SwiperSlide>
                        }) :
                            frameSlides?.map((slide, i) => {
                                return <SwiperSlide key={i}>
                                    <div >
                                        <ProductCard css={'lg:w-[17.8vw] md:w-[29vw] w-[45vw] '} csstext={'lg:max-w-[18vw] lg:w-[17.8vw] md:w-[29vw] w-[42vw]'} product={slide} />
                                    </div>
                                </SwiperSlide>
                            })
                }

            </Swiper>


        </div >
    )
}

export default ProductSlider