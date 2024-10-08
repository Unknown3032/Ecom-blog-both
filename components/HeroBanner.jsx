"use client"


// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './swiper/SwiperButtonNext '



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



// icons 
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeIn } from '@/varient';



const images = [
    "/slide2.webp",
    "/slide3.webp",
]

const slideData = [
    {
        img: "/slide2.webp",
        title: 'Slide 1',
        desc: 'This is the first slide.',
        subTitle: "Modern Sadhu"
    },
    {
        img: "/slide3.webp",
        title: 'Slide 2',
        desc: 'This is the first slide.',
        subTitle: "Modern Sadhu"
    }
    ,
    {
        img: "/slide1.webp",
        title: 'Slide 3',
        desc: 'This is the first slide.',
        subTitle: "Modern Sadhu"
    }
]

const initialData = slideData[0]


export default function HeroBanner() {
    const imageRef = useRef();
    const [data, setData] = useState(slideData.slice(1));
    const [transitionData, setTransitionData] = useState(initialData);
    const [currentSlideData, setCurrentSlideData] = useState({
        data: initialData,
        index: 0
    })

    const { scrollYProgress } = useScroll({
        delay: 0.5,
        target: imageRef,
        offset: ["0 1", "1.33"]
    })


    return (
        <>
            <div className='relative min-h-screen md:min-h-[102vh] select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <motion.div
                    variants={fadeIn(0.1, 0.5)}
                    initial={{
                        opacity: 0,
                    }}
                    animate='show'
                    exit='hidden'
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        amount: "all"
                    }}
                    ref={imageRef}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
                        effect='fade'
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {/* {isNext ? "hello" : ""} */}
                        {/* <SwiperButtonNext >
                            <MdKeyboardArrowRight className='hidden md:flex' />
                        </SwiperButtonNext>

                        <SwiperButtonPrev >
                            <MdKeyboardArrowLeft className='hidden md:flex' />
                        </SwiperButtonPrev> */}

                        <SwiperSlide>
                            <img className='hidden md:flex min-h-screen  md:min-h-[102vh] object-cover brightness-90 grayscale-5' src="/slide2.webp" alt="" srcSet="" />
                            <img className='md:hidden min-h-screen object-cover brightness-90' src="/MOBILESLIDE1.webp" alt="" srcSet="" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className='hidden md:flex min-h-screen md:min-h-[102vh] object-cover brightness-90' src="/slide3.webp" alt="" srcSet="" />
                            <img className='md:hidden min-h-screen object-cover brightness-90' src="/MOBILESLIDE2.webp" alt="" srcSet="" />
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </>


    )
}