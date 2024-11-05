'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const ProductPage = () => {
    return (
        <>
            <div className='home relative min-h-screen  select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <Swiper
                    slidesPerView={2}
                    freeMode={true}
                    spaceBetween={0}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper w-full h-screen"
                >
                    <SwiperSlide>
                        <div className='h-full cursor-pointer '>
                            <img className='h-full object-cover' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full cursor-pointer '>
                            <img className='h-full object-cover' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full cursor-pointer '>
                            <img className='h-full object-cover' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-full cursor-pointer '>
                            <img className='h-full object-cover' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='absolute select-none bg-grey top-48 right-8 flex h-auto w-[30vw] z-10 rounded-xl border border-dark-grey/40'>
                <div className='flex flex-col  p-8 w-full'>
                    {/* title and tags detailes  */}
                    <div className='-mt-2'>
                        <div className='mb-2'>
                            <h1 className='text-black font-semibold'>Zoro Mugs White</h1>

                            <div className=' -mt-1 flex w-full justify-between'>
                                <p className='text-black text-xl font-medium'>Anime</p>
                                <p className='text-black text-xl font-medium'>₹ 299</p>
                            </div>

                            <p className='text-dark-grey text-lg '>Zoro subtitle</p>
                        </div>

                        {/* tag  */}
                        <span
                            className=" select-none cursor-pointer text-center text-black
                            text-[10px] font-bold px-2.5 py-0.5 rounded border border-dark-grey/55">
                            Mug
                        </span>
                    </div>

                    <hr className=' text-dark-grey/50 w-full my-3' />

                    {/* colors and sizes */}
                    <div>
                        {/* color tilte  */}
                        <div className='flex justify-between mb-1'>
                            <p className='text-medium text-black'>4 colors</p>
                            <p className='text-small text-dark-grey'>Anime</p>
                        </div>

                        {/* varients  */}
                        <div>
                            <div className='border rounded-md border-dark-grey/55 p-1 flex flex-wrap gap-2'>
                                <div className=''>
                                    <img className='h-20 object-cover aspect-2/3 rounded' src="/cat-mug-1.jpg" alt="" />
                                </div>
                                <div className=''>
                                    <img className='h-20 object-cover aspect-2/3 rounded' src="/cat-mug-1.jpg" alt="" />
                                </div>
                                <div className=''>
                                    <img className='h-20 object-cover aspect-2/3 rounded' src="/cat-mug-1.jpg" alt="" />
                                </div>
                            </div>

                        </div>

                        {/* //size chart  */}
                        <div className='mb-2 w-full'>
                            <h2 className='text-black mt-2 text-lg'>Size Guide</h2>
                            <div className='h-8 flex justify-center mb-4 mt-3'>
                                <div>
                                    <span className='text-small text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                </div>

                            </div>
                            <button className='bg-bgblack text-white w-full py-2 rounded-full text-xl'>Select Size</button>
                        </div>
                    </div>

                    <hr className=' text-dark-grey/50 w-full my-3' />

                    {/* bullet points  */}
                    <div>bullet</div>

                    {/* features */}
                    <div>features</div>
                </div>
            </div>
        </>
    )
}

export default ProductPage