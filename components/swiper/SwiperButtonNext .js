import { useSwiper } from "swiper/react";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/varient';


export const SwiperButtonNext = ({ children, setControlSlide, controlSlide }) => {
    const swiper = useSwiper();
    return <AnimatePresence>
        {controlSlide && <motion.button
            variants={fadeIn('left', 0.1, 0.3)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
            onMouseEnter={() => setControlSlide(true)}
            onMouseLeave={() => setControlSlide(false)}
            className='absolute z-30 right-2 bottom-5 text-4xl opacity-70 text-white bg-dark-grey rounded-full hover:opacity-100'
            onClick={() => swiper.slideNext()}>{children}</motion.button>}
    </AnimatePresence>
};

export const SwiperButtonPrev = ({ children, setControlSlide, controlSlide }) => {
    const swiper = useSwiper();
    return <AnimatePresence>
        {controlSlide && <motion.button
            variants={fadeIn('right', 0.1, 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onMouseEnter={() => setControlSlide(true)}
            onMouseLeave={() => setControlSlide(false)}
            className='absolute z-30 left-2 bottom-5 text-4xl opacity-70 text-white bg-dark-grey rounded-full hover:opacity-100' onClick={() => swiper.slidePrev()}>{children}</motion.button>}
    </AnimatePresence>
}


