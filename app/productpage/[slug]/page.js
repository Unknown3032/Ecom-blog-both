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
import AccordionUi from '@/components/AccordionUi';


const accorddianData = [
    { title: 'Size', content: ['it comes in two size'] },
    { title: 'Materials and washing directions', content: ["Don't use iron scruber", "Made with primium ceramic"] },
    // { title: 'Description', content: ['it comes in two size'] },
]


const ProductPage = () => {
    return (
        <>
            <div className='home relative h-[70vh] lg:min-h-screen select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <Swiper
                    slidesPerView={1}
                    freeMode={true}
                    spaceBetween={0}
                    modules={[FreeMode]}
                    className="mySwiper w-full h-screen"
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='h-[70vh] lg:h-full cursor-pointer '>
                            <img className='h-[70vh] lg:h-full object-cover lg:w-auto w-[100vw]' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[70vh] lg:h-full cursor-pointer '>
                            <img className='h-[70vh] lg:h-full object-cover lg:w-auto w-[100vw]' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[70vh] lg:h-full cursor-pointer '>
                            <img className='h-[70vh] lg:h-full object-cover lg:w-auto w-[100vw]' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[70vh] lg:h-full cursor-pointer '>
                            <img className='h-[70vh] lg:h-full object-cover lg:w-auto w-[100vw]' src={'/cat-mug-1.jpg'} alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            <div className='lg:absolute lg:noScrollbar select-none lg:overflow-auto lg:bg-grey bg-bgblack lg:top-40 right-8 flex lg:h-[70vh] lg:w-[30vw] z-10 lg:rounded-xl lg:border border-dark-grey/40'>
                <div className='flex flex-col  p-8 w-full'>
                    {/* title and tags detailes  */}
                    <div className='-mt-2'>
                        <div className='mb-2'>
                            <h1 className='lg:text-black text-white font-semibold'>Zoro Mugs White</h1>

                            <div className=' -mt-1 flex w-full justify-between'>
                                <p className='text-white lg:text-black text-xl font-medium'>Anime</p>
                                <p className='text-white lg:text-black text-xl font-medium'>₹ 299</p>
                            </div>

                            <p className='lg:text-dark-grey text-white/80 text-lg '>Zoro subtitle</p>
                        </div>

                        {/* tag  */}
                        <span
                            className=" select-none cursor-pointer text-center text-white lg:text-black
                            text-[10px] font-bold px-2.5 py-0.5 rounded border lg:border-dark-grey/55 border-white/50">
                            Mug
                        </span>
                    </div>

                    <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' />

                    {/* colors and sizes */}
                    <div>
                        {/* color tilte  */}
                        <div className='flex justify-between mb-1'>
                            <p className='text-medium lg:text-black text-white'>4 colors</p>
                            <p className='text-small lg:text-dark-grey text-white/80'>Anime</p>
                        </div>

                        {/* varients  */}
                        <div>
                            <div className='border rounded-md lg:border-dark-grey/55 border-white/50 p-1 flex flex-wrap gap-2'>
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
                            <h2 className='lg:text-black text-white mt-2 text-lg'>Size Guide</h2>
                            <div className='h-8 flex justify-center mb-4 mt-3'>
                                <div>
                                    <span className='text-small text-white lg:text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-white lg:text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-white lg:text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                    <span className='text-small text-white lg:text-black transition-all duration-200 py-2 px-3 rounded-lg
                                 cursor-pointer  hover:bg-dark-grey/40'>
                                        xs
                                    </span>
                                </div>

                            </div>
                            <button className='text-black bg-white lg:bg-bgblack lg:text-white w-full py-2 rounded-full text-xl'>Select Size</button>
                        </div>
                    </div>

                    <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' />

                    {/* bullet points  */}
                    <div className='ml-3'>
                        <ul className='list-disc text-sm font-crimson font-semibold text-white lg:text-black'>
                            <li>Oversized mug</li>
                            <li>Raw hem finish</li>
                            <li>Waffle knit fabric</li>
                            <li>Short sleeve</li>
                            <li>Vintage wash effect</li>
                        </ul>
                    </div>

                    <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' />


                    {/* features */}
                    <div className='-ml-2 pb-10 -mt-2'>
                        <AccordionUi data={accorddianData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage