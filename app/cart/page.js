'use client'

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Spinner } from '@nextui-org/react';
import { UserContext } from '../layout';

import toast, { Toaster } from 'react-hot-toast';
import ProductCard from '@/components/ProductSlider/ProductCard';


const Cart = () => {
    let { userAuth: { token }, userAuth } = useContext(UserContext)
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(0);
    const [curProducts, setCurProudcts] = useState([]);


    let p = [];

    //for spinner 
    const [loder, setLoder] = useState(false)
    const [loder2, setLoder2] = useState(true)
    let curProductId;

    // get products 
    const getNewProducts = async () => {
        setLoder2(true)
        let keys = {
            "key": "new"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            if (!curProducts.length) {
                setCurProudcts(products)
                setLoder2(false)
            }
        }).catch(({ response }) => {

        })
    }

    const getCartItems = async () => {
        token && await axios.post(process.env.NEXT_PUBLIC_URL + "/api/getCartItem", {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((data) => {
            let tempCartItem = data?.data?.data;
            setCartItems(tempCartItem)
        }).catch((e) => {
            toast.error("something went wrong try again after some time");
        })
    }

    const deleteCartItem = async (product_id) => {
        if (!loder) {
            setLoder(true)
            token && await axios.post(process.env.NEXT_PUBLIC_URL + "/api/deleteCartItem", { product_id }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((data) => {
                let tempCartItem = data?.data?.data;
                setCartItems(tempCartItem)
                setLoder(false)
            }).catch((e) => {
                toast.error("something went wrong try again after some time");
            })
        }
    }

    const quantity = async (color, size, qty, product_id) => {
        let item = { product_id, qty, size, color }
        if (token) {
            await axios.post(process.env.NEXT_PUBLIC_URL + "/api/postCartItem", { item }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((data) => {
                // window.location.reload()
                let tempCartItem = data?.data;
                getCartItems()
                // console.log(tempCartItem);
            }).catch((e) => {
                toast.error("something went wrong try again after some time");
            })
        }
        else {

        }
    }

    useEffect(() => {
        if (token) {
            getCartItems()
        }
        getNewProducts()
    }, [token])

    return (
        <div className='bg-bgblack w-full home'>
            {/* <Toaster position="bottom-center" /> */}
            <div className='flex md:flex-row flex-col'>

                {/* added products side */}
                <div className=' select-none md:w-[32vw] w-full border-dark-grey/55 min-h-[60vh] md:min-h-[93vh] md:border-r border-b flex flex-col '>

                    {/* title  */}
                    <div className='w-full h-[7vh] flex justify-center items-center border-dark-grey/55 border-b'>
                        <h1 className='font-bold'>Your Bag</h1>
                    </div>

                    {/* cart item  */}
                    {cartItems?.length ? cartItems?.map((item, i) => {
                        p.push(item?.price * item?.qty);
                        return (
                            < div key={i} className='flex flex-col items-center mt-4 border-dark-grey/55 border-b pb-4' >
                                {/* item detailes  */}
                                < div className='w-[90%] border-dark-grey/55 border-b flex gap-2' >
                                    {/* img  */}
                                    <div div className='w-[40%] rounded-md pb-2' >
                                        <img className='aspect-2/3 rounded-lg object-cover ' src={item?.img} alt="" />
                                    </div>

                                    {/* detailes */}
                                    <div className='flex flex-col items-start w-full'>
                                        <h2 className='font-semibold'>{item?.title} </h2>
                                        <p className='text-medium text-white/85'>{item?.color} | {item?.size} </p>
                                        <h2 className='font-serif font-semibold'>₹{item?.price}</h2>
                                    </div>
                                </div>

                                {/* buttons control  */}
                                <div className='w-[90%] flex justify-between mt-3 items-center'>
                                    <div>
                                        <div
                                            onClick={(() => { deleteCartItem(item?.product_id); curProductId = item?.product_id })}
                                            className='border-white border py-1 px-5 text-white rounded-full cursor-pointer hover:text-red/95 transition-all duration-300'>
                                            {!loder ? <MdDelete className=' text-2xl' /> : <Spinner size="sm" color="default" />}
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className='font-serif font-semibold'>₹{(item?.price * item?.qty)}</h2>
                                    </div>

                                    <div>
                                        <div className='flex text-white text-2xl gap-2 border-white border py-1 px-4 rounded-full'>
                                            <button disabled={item?.qty <= 1 && true} className={`${item?.qty <= 1 && 'opacity-50'}`}><TiMinus onClick={() => { item?.qty > 1 && quantity(item?.color, item?.size, -1, item?.product_id); }} /></button>
                                            <p className=' text-small'>{item?.qty}</p>
                                            <button> <TiPlus onClick={() => { quantity(item?.color, item?.size, 1, item?.product_id); }} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>)

                    })

                        :
                        <div className='flex md:flex-row flex-col'>
                            {/* added products side */}
                            <div className='md:w-[27vw] w-full border-dark-grey/55 min-h-[60vh] md:min-h-[93vh]  flex flex-col justify-center items-center '>
                                <h1 className='text-2xl'>Your Bag Is Empety</h1>
                                <p className='text-medium text-center'>Give your bag some love!</p>
                                <button className='font-crimson px-9 py-2 rounded-full bg-white mt-4 hover:opacity-80 transition-all
                        duration-300 text-black/90 font-bold'>
                                    <Link href={'/productsPage/clothes'}>
                                        Shop Now
                                    </Link>
                                </button>
                            </div>
                            {/* added products side end */}

                        </div>
                    }


                    {/* total price with checkout */}
                    {cartItems?.length && <div className='border-dark-grey/55 border-b border-t pt-2 pb-4 mt-16'>
                        <div className='border-dark-grey/55 border-b pb-2 text-center'>
                            <p className='text-sm'>You're $86 from Free Domestic Standard Shipping</p>
                        </div>

                        <div className='w-[90%] mx-auto mt-2'>
                            <div className='flex justify-between'>
                                <p className='text-medium font-semibold'>Total:</p>
                                <p className='text-medium font-semibold'>₹{p?.reduce((a, b) => a + b, 0)}</p>
                            </div>
                            <div>
                                <button className='font-crimson w-full px-9 py-2 rounded-full bg-[#228B22] mt-4 hover:opacity-80 transition-all duration-300 text-white/90 font-bold'>
                                    <Link className='w-full' href={'/productsPage/clothes'}>
                                        Checkout
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>}

                </div >
                {/* added products side end */}

                {/* recommended products side  */}
                <div className='min-h-[50vh] h-full w-full py-5'>
                    {/* products  */}
                    {loder2 ?
                        <div className='w-full h-full flex justify-center items-center'>
                            <Spinner size="lg" color="default" />
                        </div>

                        : curProducts?.length ? <div className='grid md:grid-cols-3 grid-cols-2 place-items-center h-auto w-full '>
                            {curProducts && Object.keys(curProducts)?.map((k, i) => {
                                let slide = curProducts[k]?.product_info;
                                let id = curProducts[k]?._id;

                                return <div key={i} className='py-2 '>
                                    <ProductCard _id={id} product={slide} css={'lg:w-[20vw] md:w-[20vw] w-[42vw]  opacity-90 '} csstext={'lg:w-[20vw]  md:w-[20vw] w-[42vw] '} />
                                </div>

                            })}
                        </div>
                            :
                            <div className='flex md:flex-row lg:w-[70vw] flex-col h-full'>
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
                {/* recommended products side end */}
            </div >
        </div >
    )
}

export default Cart