import React from 'react'

const CategoryCard = ({ data }) => {
    return (
        <div className='flex justify-center items-center'>
            {/* image */}
            <div className='md:w-[30vw] w-[95vw] relative  aspect-cateRatio rounded-lg inline-block overflow-hidden'>
                <img src={data?.img} className='aspect-cateRatio rounded-lg object-cover cursor-pointer hover:scale-110 transition-transform duration-500 ' alt={data?.title} />
                {/* title & desc */}
                <div className='absolute z-20 bottom-5 left-3 cursor-pointer'>
                    <h1 className='md:text-4xl text-3xl font-bold text-white/80'>{data?.title}</h1>
                    <p className="text-xl  -mt-2 text-white/70 font-semibold ">{data?.desc}</p>
                </div>
            </div>

        </div>
    )
}

export default CategoryCard