import React, { useContext } from 'react'
import Link from 'next/link'

// icons 
import { CiCreditCard1, CiUser, CiLogout } from "react-icons/ci";
import { removeFromSession } from '@/common/SessionFunc';

const UserNavigation = ({ setUserAuth }) => {

    const handleSignOut = () => {
        removeFromSession("user")
        setUserAuth({ token: null })
    }

    return (
        <div
            className='absolute right-0 z-50'
        >

            <div className='bg-bgblack absolute right-0 border border-grey/55 w-60 duration-200 rounded-md'>
                <Link href={`/myaccount`} className='flex link items-center gap-2 pl-8 py-3 transition-all duration-200 hover:bg-dark-grey' >
                    <CiUser className='font-bold text-xl text-white' />
                    <h2 className='font-normal text-lg'>My Account</h2>
                </Link>

                <Link href={`/myorders`} className='flex link items-center gap-2 pl-8 py-3 transition-all duration-200 hover:bg-dark-grey' >
                    <CiCreditCard1 className='font-bold text-xl text-white' />
                    <h2 className='font-normal text-lg'>Orders</h2>
                </Link>



                <span className='absolute border-t border-grey/55 w-full  cursor-pointer
                 hover:bg-dark-grey'
                ></span>
                <button
                    onClick={handleSignOut}
                    className=' flex link gap-2  justify-center items-center  py-2 transition-all duration-200 hover:bg-dark-grey w-full'>
                    <CiLogout className='font-bold text-xl -ml-2 text-white' />
                    <h2 className='text-white py-2 text-lg'>Signout</h2>
                </button>

            </div>

        </div>
    )
}

export default UserNavigation