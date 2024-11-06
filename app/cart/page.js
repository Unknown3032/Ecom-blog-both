import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
    return (
        <div className='bg-bgblack w-full home'>
            <div className='flex md:flex-row flex-col'>
                {/* added products side */}
                <div className='md:w-[27vw] w-full border-dark-grey/55 min-h-[60vh] md:min-h-[93vh] md:border-r border-b flex flex-col justify-center items-center '>
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

                {/* recommended products side  */}
                <div className='min-h-[50vh]'></div>
                {/* recommended products side end */}
            </div>
        </div>
    )
}

export default Cart