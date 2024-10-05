import { motion } from 'framer-motion'
import React from 'react'

const SlideCard = ({ data }) => {


    return (
        <motion.div
            className='relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 '
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.4,
                }
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100
            }}
        >

            <motion.img layoutId={data.img}
                alt='transition img'
                src={data.img}
                className=' absolute h-full w-full rounded-2xl object-cover brightness-75 '
            />

            <motion.div className='absolute z-10 flex h-full items-end p-4'>

                <motion.dv>

                    <motion.div
                        layout
                        className='mb-2 h-[2px] w-3 rounded-full bg-white'
                    >
                    </motion.div>

                    <motion.p layoutId={data.desc} className='text-sm text-[#D5D5D6]' > {data.desc}</motion.p>

                    <motion.h1 layoutId={data.title} className='text-xl leading-6 text-white'>{data.title}</motion.h1>
                </motion.dv>

            </motion.div>

        </motion.div>
    )
}

export default SlideCard