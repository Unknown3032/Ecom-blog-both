import React from 'react'

import { motion } from 'framer-motion'

const BackgroundImg = ({ transitionData, currentSlideData }) => {
    console.log(currentSlideData);

    return (
        <>
            {
                transitionData && <motion.img
                    key={transitionData?.img}
                    layoutId={transitionData.img}
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.6 }
                    }}
                    src={transitionData.img}
                    className='absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50'
                >

                </motion.img>
            }
            <motion.img
                alt='CurrentImage'
                key={currentSlideData.data.img + "transition"}
                src={currentSlideData.data.img}
                className=' absolute left-0 top-0 h-full w-full object-cover brightness-50'
            >

            </motion.img>
        </>
    )
}

export default BackgroundImg