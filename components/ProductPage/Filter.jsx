import React, { useState } from 'react'


// icons
import { GoPlus } from "react-icons/go";

import { motion, AnimatePresence } from 'framer-motion';


const Filter = ({ slug, filterData, search }) => {

    const [activeCat, setActiveCat] = useState("featured")
    const [currentCat, setcurrentCat] = useState('')
    const [catSatus, setCatSatus] = useState([false, 1])
    const [rotateClass, setRotateClass] = useState([false, 1])


    return (
        <div className='text-white select-none'>
            {/* title large screen  */}
            <div className='hidden lg:block'>
                <h2 className='font-normal'>{slug}</h2>
                <h1 className='text-3xl -mt-2'>{search}</h1>
                <p className='text-xl -mt-1 '>12 Products</p>
            </div>


            {/* //filters for large screen */}

            <div className='mt-10 relative hidden lg:block'>
                {filterData?.map((data, i) => {

                    return (
                        <div key={i} className='mt-3 relative transition-all duration-300 w-full'>
                            <motion.hr transition={{ duration: 0.5 }} className=' absolute h-[0.01vh] w-full text-white/20 bg-white/20 top-0 ' />


                            <motion.div transition={{ duration: 0.4 }} className='py-3 transition-transform duration-300'>
                                <div className='flex items-center justify-between cursor-pointer gap-2'
                                    onClick={() => { setCatSatus([!catSatus[0], data?.key]); setRotateClass([!rotateClass[0], data?.key]) }}
                                >
                                    <h2 className='font-normal text-xl'>{data?.name} {data?.key == 1 ? activeCat : ''}</h2>
                                    <GoPlus className={`text-2xl ${rotateClass[0] && rotateClass[1] == data?.key ? 'rotate-180' : ''}  text-white/80 transition-all duration-500`} />
                                </div>
                                <AnimatePresence>
                                    {catSatus[1] == data?.key && catSatus[0] && data?.subFilter.map((subData, i) => {
                                        return (
                                            <motion.div
                                                initial={{ opacity: 0.5, y: -50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: (0.2 * i) }}
                                                onClick={() => { setcurrentCat(subData); setActiveCat(subData) }}
                                                key={i} className='flex gap-2 items-center cursor-pointer mt-2'>
                                                <div className={`w-2 h-2 rounded-full border-white ${data?.key == 1 && activeCat == subData ? 'bg-white' : ''} ${data?.key != 1 && currentCat == subData ? 'bg-white' : ''}  border`}></div>
                                                <p className='text-xl text-white/80 hover:text-white/60 transition-all duration-300'>{subData}</p>
                                            </motion.div>
                                        )
                                    })
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    )
                })}

                <hr className=' absolute h-[0.01vh] w-full text-white/20 bg-white/20 bottom-0 ' />
            </div>

        </div>
    )
}

export default Filter