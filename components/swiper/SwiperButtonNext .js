import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute z-30 right-0 lg:top-80 md:top-52 text-4xl' onClick={() => swiper.slideNext()}>{children}</button>;
};

export const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button className='absolute z-30 left-0 lg:top-80 md:top-52 text-4xl' onClick={() => swiper.slidePrev()}>{children}</button>;
};

