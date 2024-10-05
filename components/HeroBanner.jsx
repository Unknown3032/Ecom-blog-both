"use client"


// import Swiper core and required modules
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCreative, EffectFade } from 'swiper/modules';
import { SwiperButtonNext, SwiperButtonPrev } from './swiper/SwiperButtonNext '
import { Righteous } from 'next/font/google'


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
import BackgroundImg from './BackgroundImg';
import SliderContent from './SliderContent';
import Slides from './Slides';
import SlideControles from './SlideControles';


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
        // <>
        //     <motion.div
        //         variants={fadeIn(0.1, 0.5)}
        //         initial={{
        //             opacity: 0,
        //         }}
        //         animate='show'
        //         exit='hidden'
        //         whileInView={{
        //             opacity: 1,
        //         }}
        //         viewport={{
        //             amount: "all"
        //         }}
        //         ref={imageRef}>
        //         <Swiper
        //             // install Swiper modules
        //             modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        //             effect='fade'
        //             autoplay={{
        //                 delay: 3500,
        //                 disableOnInteraction: false,
        //             }}
        //             loop={true}
        //             spaceBetween={0}
        //             slidesPerView={1}
        //             onSlideChange={() => console.log('slide change')}
        //             onSwiper={(swiper) => console.log(swiper)}
        //         >
        //             {/* {isNext ? "hello" : ""} */}
        //             <SwiperButtonNext >
        //                 <MdKeyboardArrowRight className='hidden md:flex' />
        //             </SwiperButtonNext>

        //             <SwiperButtonPrev >
        //                 <MdKeyboardArrowLeft className='hidden md:flex' />
        //             </SwiperButtonPrev>

        //             <SwiperSlide>
        //                 <img className='hidden md:flex' src="/slide2.webp" alt="" srcSet="" />
        //                 <img className='md:hidden' src="/MOBILESLIDE1.webp" alt="" srcSet="" />
        //             </SwiperSlide>

        //             <SwiperSlide>
        //                 <img className='hidden md:flex' src="/slide3.webp" alt="" srcSet="" />
        //                 <img className='md:hidden' src="/MOBILESLIDE2.webp" alt="" srcSet="" />
        //             </SwiperSlide>
        //         </Swiper>
        //     </motion.div>
        // </>

        <div className='relative min-h-screen select-none overflow-hidden text-white antialiased'>
            <AnimatePresence>
                <BackgroundImg transitionData={transitionData} currentSlideData={currentSlideData} />

                <div className='z-20 absolute h-full w-full'>
                    <div className='flex h-full w-full grid-cols-10 flex-col md:grid'>
                        {/* left  */}
                        <div className='col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10'>
                            <SliderContent transitionData={transitionData} currentSlideData={currentSlideData} />
                        </div>

                        {/* right  */}
                        <div className=' col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10'>
                            <Slides data={data} />
                            <SlideControles
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initialData={initialData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                slideData={slideData}
                            />
                        </div>

                    </div>

                </div>

            </AnimatePresence>
        </div>
    )
}