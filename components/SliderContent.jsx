import { motion } from 'framer-motion'
import React from 'react'
import OtherInfo from './OtherInfo'
import { IoMdBookmark } from "react-icons/io";

const SliderContent = ({ transitionData, currentSlideData }) => {
    return (
        <>
            <motion.span
                layout className=' mb-2 h-1 w-5 rounded-full bg-white '
            />

            <OtherInfo
                data={transitionData ? transitionData : currentSlideData.data}
            />

            <motion.div layout className='mt-5 flex items-center gap-3 '>
                <button className='flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs transition duration-300 ease-in-out hover:opacity-80 '>
                    <IoMdBookmark />
                </button>

                <button className='w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 ease-in-out hover:text-black'>
                    DISCOVER CATEGORY
                </button>
            </motion.div>

        </>
    )
}

export default SliderContent