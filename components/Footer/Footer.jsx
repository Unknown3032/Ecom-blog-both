import React from 'react'
import { Input } from '@nextui-org/react'


const footer = () => {
    return (
        <div className='bg-bgblack border-dark-grey/60 border min-h-[50vh] w-full mt-8'>
            {/* content section  */}
            <div className=' flex w-full lg:flex-row flex-col-reverse  border-dark-grey border-b'>
                {/* detailes section  */}
                <div className='w-full h-full  border-dark-grey border-r py-5'>

                    {/* links section  */}
                    <div className='flex gap-8 w-full h-full border-dark-grey border-b  pl-5 pb-5'>

                        <div className=''>
                            <h2 className=''>Help</h2>
                            <ul className='text-white/80 font-gelasio mt-2 flex flex-col gap-1 text-sm'>
                                <li>Help Center</li>
                                <li>Track My Order</li>
                                <li>Returns & Exchanges</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className=''>More</h2>
                            <ul className='text-white/80 font-gelasio mt-2 flex flex-col gap-1 text-sm'>
                                <li>About us</li>
                                <li>Share The Look</li>
                                <li>Summer Shredding</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className=''>Address</h2>
                            <ul className='text-white/80 font-gelasio mt-2 flex flex-col gap-1 text-sm'>
                                <li>Rana Park SirusPur Delhi 110042</li>
                            </ul>
                        </div>
                    </div>
                    {/* links section end */}

                    {/* Rights section*/}
                    <div className='flex w-full md:flex-row flex-col justify-between md:pl-5 md:pr-5 h-full '>

                        <div className=' md:w-[50%] w-full py-5 h-full border-b border-dark-grey md:border-r flex flex-col justify-center items-center '>
                            <div>
                                <ul className='text-white/70 text-sm font-gelasio gap-2 flex flex-wrap text-center '>
                                    <li>.Privacy Policy</li>
                                    <li>.Terms of Service </li>
                                    <li>.Accessibility</li>
                                </ul>
                                <p className='text-white/70 text-sm font-gelasio'>Do not sell or share my personal information</p>
                                <p className='text-small  mt-5'>© 2024 •  Modern Sadhu • All Rights Reserved</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center pl-5 gap-1 px-3 w-full py-5 md:py-0 md:w-[50%]'>
                            <h2 className='text-medium font-normal text-left'>Premium Workout Clothes & Athleisure</h2>
                            <p className='text-sm text-white/80'>Experience the next level of comfort, style, and functionality with our premium athleisure collections designed for those who demand the best. Shop now!</p>
                        </div>

                    </div>
                    {/* Rights section end */}
                </div>

                {/* contact section  */}
                <div className='lg:w-[35vw] md:w-full border-dark-grey border-b'>
                    <div className='w-full flex justify-center items-center px-5'>
                        <div className="flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4 py-5">
                            <Input
                                label="Email"
                                variant="bordered"
                                type='email'
                                classNames={{
                                    label: "text-white/90",
                                    input: [
                                        "text-white/90",
                                        "placeholder:text-white/80",

                                    ],
                                    inputWrapper: [
                                        "shadow-xl",
                                        "border-grey",
                                        "group-data-[focus=true]:border-dark-grey",
                                    ],
                                }}

                            />
                            <Input
                                label="Phone"
                                variant="bordered"
                                type='Phone'
                                classNames={{
                                    label: "text-white/90",
                                    input: [
                                        "text-white/90",
                                        "placeholder:text-white/80",

                                    ],
                                    inputWrapper: [
                                        "shadow-xl",
                                        "border-grey",
                                        "group-data-[focus=true]:border-dark-grey",
                                    ],
                                }}
                            />

                            <button className=' font-gothic font-light rounded-full py-4 bg-white/60 text-white/90 hover:bg-dark-grey transition-all duration-200'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* content section end */}


            {/* logo section  */}
            <div></div>
            {/* logo section end */}
        </div>
    )
}

export default footer