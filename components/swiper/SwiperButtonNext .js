import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children, setControlSlide }) => {
    const swiper = useSwiper();
    return <button
        onMouseEnter={() => setControlSlide(true)}
        onMouseLeave={() => setControlSlide(false)}
        className='absolute z-30 right-2 bottom-5 text-4xl opacity-70 text-white bg-dark-grey rounded-full hover:opacity-100'
        onClick={() => swiper.slideNext()}>{children}</button>;
};

export const SwiperButtonPrev = ({ children, setControlSlide }) => {
    const swiper = useSwiper();
    return <button
        onMouseEnter={() => setControlSlide(true)}
        onMouseLeave={() => setControlSlide(false)}
        className='absolute z-30 left-2 bottom-5 text-4xl opacity-70 text-white bg-dark-grey rounded-full hover:opacity-100' onClick={() => swiper.slidePrev()}>{children}</button>;
};

