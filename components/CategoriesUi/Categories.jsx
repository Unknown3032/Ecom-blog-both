import React from 'react'
import CategoryCard from './CategoryCard'
import { motion } from 'framer-motion'
import { FadeInWhenVisible } from '@/common/InViewAnimation'
import { fadeIn } from '@/varient'





const Categories = ({ cat, slides }) => {
    return (
        <div
            className='my-8 flex'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4  place-items-center '>
                {slides && Object.keys(slides)?.map((itrator, i) => {
                    let data = slides[itrator]?.img_info

                    return <FadeInWhenVisible key={i} >
                        <CategoryCard data={data} />
                    </FadeInWhenVisible>
                })
                }
            </div>

        </div>
    )
}

export default Categories