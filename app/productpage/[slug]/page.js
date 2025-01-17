'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import AccordionUi from '@/components/AccordionUi';
import axios from 'axios';
import { UserContext } from '@/app/layout';
import { Spinner } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';


const ProductPage = ({ params }) => {

    let { slug: _id } = params;

    const [productData, setProductData] = useState({})
    const [size, setSize] = useState('');
    const [curColor, setCurColor] = useState('');

    //for spinner 
    const [loder, setLoder] = useState(false)


    let accorddianData = [{ title: 'Size', content: ['it comes in two size'] }]
    // get token 
    let { userAuth: { token }, userAuth } = useContext(UserContext)


    const getProductData = async () => {
        let id = {
            _id
        };

        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getSingleProduct", id).then(({ data }) => {
            let product = data?.data?.product?.product_info

            // console.log(product);

            if (!productData.length) {
                setProductData(product)
            }
        }).catch(({ response }) => {
            toast.error("something went wrong try again after some time");
        })
    }

    const addToBag = async (color, size, qty, product_id) => {
        let item = { product_id, qty, size, color }
        if (token) {
            if (!loder) {
                setLoder(true)
                await axios.post(process.env.NEXT_PUBLIC_URL + "/api/postCartItem", { item }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then((data) => {
                    let tempCartItem = data?.data;
                    toast.success(`${productData["title"]} is added to bag`);
                    // console.log(tempCartItem);
                }).catch((e) => {
                    console.log("something went wrong try again after some time");
                    toast.error("something went wrong try again after some time");
                })
                setLoder(false)
            }
        }
        else {
            toast.error("Please login first for add to bag");
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    return (
        productData && <div className='mb-10 pb-10'>
            <Toaster position="bottom-center" />
            <div className='home relative h-[70vh]  lg:h-screen select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <Swiper
                    slidesPerView={1}
                    freeMode={true}
                    spaceBetween={0}
                    modules={[FreeMode]}
                    loop={true}
                    className="mySwiper w-full h-screen"
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {productData["images"]?.map((image, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='h-[70vh] lg:h-full cursor-pointer '>
                                    <img className='h-[70vh] lg:h-full object-cover  w-[100vw]' src={image} alt="" />
                                </div>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>


            <div className='lg:absolute pb-10 lg:noScrollbar overflow-hidden select-none lg:overflow-auto lg:bg-grey bg-bgblack lg:top-32 right-8 flex lg:max-h-[68vh] lg:w-[30vw] z-10 lg:rounded-xl lg:border border-dark-grey/40'>
                <div className='flex flex-col  p-8 w-full'>
                    {/* title and tags detailes  */}
                    <div className='-mt-2'>
                        <div className='mb-2'>
                            <h1 className='lg:text-black text-white font-semibold'>{productData["title"]}</h1>

                            <div className=' -mt-1 flex w-full justify-between'>
                                <p className='text-white lg:text-black text-xl font-medium'>{productData["theme"]}</p>
                                <p className='text-white lg:text-black text-xl font-medium'>₹ {productData["price"]}</p>
                            </div>

                            <p className='lg:text-dark-grey text-white/80 text-lg '>{productData["subTheme"]}</p>
                        </div>

                        {/* tag  */}
                        <span
                            className=" select-none cursor-pointer text-center text-white lg:text-black
                            text-[10px] font-bold px-2.5 py-0.5 rounded border lg:border-dark-grey/55 border-white/50">
                            {productData["category"]}
                        </span>
                    </div>

                    <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' />

                    {/* colors and sizes */}
                    <div>
                        {/* color tilte  */}
                        <div className='flex justify-between mb-1'>
                            {productData["colors"] && <p className='text-medium lg:text-black text-white'>{productData["colors"]?.length} {productData["colors"].length > 1 ? "colors" : "color"}</p>}
                            <p className='text-small lg:text-dark-grey text-white/80'>{productData["theme"]?.toUpperCase()}</p>
                        </div>

                        {/* varients  */}
                        <div>
                            <div className='border rounded-md lg:border-dark-grey/55 border-white/50 p-1 flex flex-wrap gap-2'>

                                {productData["colors"]?.map((color, i) => {
                                    return Object.keys(color)?.map((key, i) => {
                                        let colorImg = color[key];
                                        if (!curColor) {
                                            setCurColor(key)
                                        }
                                        return (
                                            <div className='cursor-pointer' key={i}>
                                                <img className='h-20 object-cover aspect-2/3 rounded' src={colorImg} alt={key} />
                                            </div>
                                        )
                                    })

                                })}
                            </div>

                        </div>

                        {/* //size chart  */}
                        <div className='mb-2 w-full'>
                            <h2 className='lg:text-black text-white mt-2 text-lg'>Size Guide</h2>
                            <div className='h-8 flex justify-center mb-4 mt-3'>

                                {productData["sizes"]?.map((Size, i) => {
                                    return Object.keys(Size)?.map((s) => {
                                        return <span onClick={(() => setSize(s?.toUpperCase()))} key={i}
                                            className={`text-small text-white lg:text-black transition-all duration-200 py-2 px-3 rounded-lg cursor-pointer ${s?.toUpperCase() == size ? "bg-dark-grey/40" : ""}   hover:bg-dark-grey/40`}>
                                            {s?.toUpperCase()}
                                        </span>
                                    })
                                })}
                                <div>

                                </div>

                            </div>
                            <button
                                onClick={(() => { size ? addToBag(curColor, size, 1, _id) : "" })}
                                className='text-black bg-white lg:bg-bgblack lg:text-white w-full py-2 rounded-full text-xl'>  {!loder ? !size ? 'select size' : "add to bag" : <Spinner size="sm" color="default" />}</button>
                        </div>
                    </div>

                    <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' />

                    {/* bullet points  */}
                    {/* <div className='ml-3'>
                        <ul className='list-disc text-sm font-crimson font-semibold text-white lg:text-black'>
                            {productData["bulletPoints"]?.map((point, i) => {
                                return <li key={i}>{point}</li>
                            })}

                        </ul>
                    </div> */}

                    {/* <hr className=' lg:text-dark-grey/50 text-white/50 w-full my-3' /> */}


                    {/* features */}
                    <div className='-ml-2 -mt-2'>
                        <AccordionUi title={"Features"} content={productData["bulletPoints"]} />
                    </div>

                    {/* desc */}
                    <div className='-ml-2 pb-10 -mt-4'>
                        <AccordionUi title={"Description"} content={[productData["desc"]]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage