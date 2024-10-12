import React, { useContext } from 'react'
import Link from 'next/link'

// icons 
import { RiShieldUserLine } from "react-icons/ri";
import { IoCardSharp } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";

const UserNavigation = ({ user, setUser }) => {

    const handleSignOut = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <div
            className='absolute right-0 z-50'
        >

            <div className='bg-white absolute right-0 border border-grey w-60 duration-200'>
                <Link href={`/myaccount`} className='flex link items-center gap-2 pl-8 py-4' >
                    <RiShieldUserLine className='text-2xl' />
                    <p>My Account</p>
                </Link>

                <Link href={`/myorders`} className='flex link items-center gap-2 pl-8 py-4' >
                    <IoCardSharp className='text-2xl' />
                    <p>Orders</p>
                </Link>

                <Link href={`/createBlog`} className='flex link items-center gap-2 pl-8 py-4' >
                    <MdEditDocument className='text-2xl' />
                    <p>Write</p>
                </Link>

                {/* <Link href={`/`} className='flex link items-center gap-2 pl-8 py-4' >
                    <GoGear className='text-2xl' />
                    <p>Settings</p>
                </Link> */}

                <span className='absolute border-t border-grey w-full pl-8 py-4'></span>
                <button
                    onClick={handleSignOut}
                    className='text-left p-4 py-4 pl-8 w-full hover:bg-grey'>
                    <h1 className='font-bold text-xl mb-1'>Signout</h1>
                    <p className='text-dark-grey'>@{user?.data?.data.username}</p>
                </button>

            </div>

        </div>
    )
}

export default UserNavigation