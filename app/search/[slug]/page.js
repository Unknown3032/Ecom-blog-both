'use client'
import React, { useEffect, useState } from 'react'

import { Spinner } from '@nextui-org/react';
import Link from 'next/link';
import ProductCard from '@/components/ProductSlider/ProductCard';
import axios from 'axios';

const SearchPage = ({ params }) => {
    const { slug } = params;
    const [curProducts, setCurProudcts] = useState([]);

    //for spinner 
    const [loder, setLoder] = useState(true)

    // get products 
    const getNewProducts = async () => {
        setLoder(true)
        let keys = {
            "key": "new"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            if (!curProducts.length) {
                setCurProudcts(products)
                setLoder(false)
            }
        }).catch(({ response }) => {

        })
    }


    useEffect(() => {
        getNewProducts()
    }, [])

    return (
        <div className='home min-h-screen'>
            {/* title  */}
            <div className='py-4 px-5'>
                <h1 className='md:text-4xl'>Search For {slug}</h1>
                <h2 className='font-normal md:text-2xl'>Products Available: 8</h2>
            </div>

            <div className='min-h-[50vh] h-full w-full py-3'>
                {/* products  */}
                {loder ?
                    <div className='w-full h-full flex justify-center items-center'>
                        <Spinner size="lg" color="default" />
                    </div>

                    : curProducts?.length ? <div className='grid md:grid-cols-4 grid-cols-2 place-items-center h-auto w-full '>
                        {curProducts && Object.keys(curProducts)?.map((k, i) => {
                            let slide = curProducts[k]?.product_info;
                            let id = curProducts[k]?._id;

                            return <div key={i} className='py-2 '>
                                <ProductCard _id={id} product={slide} css={'lg:w-[22vw] md:w-[21vw] w-[42vw]  opacity-90 '} csstext={'lg:w-[22vw]  md:w-[21vw] w-[42vw] '} />
                            </div>

                        })}
                    </div>
                        :
                        <div className='flex md:flex-row w-full flex-col h-full'>
                            {/* added products side */}
                            <div className=' border-dark-grey/55 flex flex-col h-full justify-center items-center w-full'>
                                <h1 className='text-2xl'>Something went wrong.</h1>
                                <p className='text-medium text-center'>we fix as sson as posible</p>
                                <button className='font-crimson px-9 py-2 rounded-full bg-white mt-4 hover:opacity-80 transition-all
                        duration-300 text-black/90 font-bold'>
                                    <Link href={`/`}>
                                        Shop Now
                                    </Link>
                                </button>
                            </div>
                        </div>}

            </div>
        </div>
    )
}

export default SearchPage