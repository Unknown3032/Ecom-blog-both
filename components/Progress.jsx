import { motion } from 'framer-motion'
import React from 'react'

const Progress = ({ curIndex, length }) => {
    console.log(curIndex);


    return (
        <>
            <div className="flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50">

                <div
                    style={{
                        width: (((curIndex + 1) / length) * 100).toString() + '%'
                    }}
                    className='h-[1px] rounded-full bg-dark-grey bg-opacity-50'
                >
                </div>
            </div>

            <span
                key={curIndex}
                style={{
                    overflow: "hidden",
                    display: "inline-block"
                }}
            >
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                    }}

                    className="flex items-center text-4xl font-medium"
                >
                    0{curIndex + 1}
                </motion.div>
            </span >

        </>
    )
}

export default Progress