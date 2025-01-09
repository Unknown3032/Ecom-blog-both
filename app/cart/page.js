'use client'

import Link from 'next/link';
import React from 'react'
import { MdDelete } from "react-icons/md";
import { TiPlus, TiMinus } from "react-icons/ti";


const Cart = () => {
    return (
        <div className='bg-bgblack w-full home'>
            <div className='flex md:flex-row flex-col'>

                {/* added products side */}
                <div className=' select-none md:w-[27vw] w-full border-dark-grey/55 min-h-[60vh] md:min-h-[93vh] md:border-r border-b flex flex-col '>

                    {/* title  */}
                    <div className='w-full h-[5vh] flex justify-center items-center border-dark-grey/55 border-b'>
                        <h1 className='font-bold'>Your Bag</h1>
                    </div>

                    {/* cart item  */}
                    <div className='flex flex-col items-center mt-4 border-dark-grey/55 border-b pb-4'>
                        {/* item detailes  */}
                        <div className='w-[90%] border-dark-grey/55 border-b flex gap-2'>
                            {/* img  */}
                            <div className='w-[40%] rounded-md pb-2'>
                                <img className='aspect-2/3 rounded-lg object-cover h-[15vh]' src="/cat-mug-3.jpg" alt="" />
                            </div>

                            {/* detailes */}
                            <div>
                                <h2 className='font-semibold'>Cat Mug</h2>
                                <p className='text-medium text-white/85'>white | s</p>
                                <h2 className='font-serif font-semibold'>₹299</h2>
                            </div>
                        </div>

                        {/* buttons control  */}
                        <div className='w-[90%] flex justify-between mt-3 items-center'>
                            <div>
                                <div className='border-white border py-1 px-5 text-white rounded-full
                                 cursor-pointer hover:text-red/95 transition-all duration-300'>
                                    <MdDelete className=' text-2xl' />
                                </div>
                            </div>

                            <div>
                                <h2 className='font-serif font-semibold'>₹299</h2>
                            </div>

                            <div>
                                <div className='flex text-white text-2xl gap-2 border-white border py-1 px-4 rounded-full
                                 '>
                                    <button><TiMinus /></button>
                                    <p className=' text-small'>1</p>
                                    <button> <TiPlus /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-4 border-dark-grey/55 border-b pb-4'>
                        {/* item detailes  */}
                        <div className='w-[90%] border-dark-grey/55 border-b flex gap-2'>
                            {/* img  */}
                            <div className='w-[40%] rounded-md pb-2'>
                                <img className='aspect-2/3 rounded-lg object-cover h-[15vh]' src="/cat-mug-3.jpg" alt="" />
                            </div>

                            {/* detailes */}
                            <div>
                                <h2 className='font-semibold'>Cat Mug</h2>
                                <p className='text-medium text-white/85'>white | s</p>
                                <h2 className='font-serif font-semibold'>₹299</h2>
                            </div>
                        </div>

                        {/* buttons control  */}
                        <div className='w-[90%] flex justify-between mt-3 items-center'>
                            <div>
                                <div className='border-white border py-1 px-5 text-white rounded-full
                                 cursor-pointer hover:text-red/95 transition-all duration-300'>
                                    <MdDelete className=' text-2xl' />
                                </div>
                            </div>

                            <div>
                                <h2 className='font-serif font-semibold'>₹299</h2>
                            </div>

                            <div>
                                <div className='flex text-white text-2xl gap-2 border-white border py-1 px-4 rounded-full
                                 '>
                                    <button><TiMinus /></button>
                                    <p className=' text-small'>1</p>
                                    <button> <TiPlus /></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* total price with checkout */}
                    <div className='border-dark-grey/55 border-b border-t pt-2 pb-4 mt-16'>
                        <div className='border-dark-grey/55 border-b pb-2 text-center'>
                            <p className='text-sm'>You're $86 from Free Domestic Standard Shipping</p>
                        </div>

                        <div className='w-[90%] mx-auto mt-2'>
                            <div className='flex justify-between'>
                                <p className='text-medium font-semibold'>Total:</p>
                                <p className='text-medium font-semibold'>₹599</p>
                            </div>
                            <div>
                                <button className='font-crimson w-full px-9 py-2 rounded-full bg-[#365314] mt-4 hover:opacity-80 transition-all
                        duration-300 text-white/90 font-bold'>
                                    <Link href={'/productsPage/clothes'}>
                                        Checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* added products side end */}

                {/* recommended products side  */}
                <div className='min-h-[50vh]'></div>
                {/* recommended products side end */}
            </div>
        </div>
    )
}

export default Cart