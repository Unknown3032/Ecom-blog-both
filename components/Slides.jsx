import React from 'react'
import SlideCard from './SlideCard'

const Slides = ({ data }) => {
    return (
        <div className='flex w-full gap-6'>
            {
                data?.map((slide, index) => {
                    return <SlideCard key={index} data={slide} />
                })
            }
        </div>
    )
}

export default Slides