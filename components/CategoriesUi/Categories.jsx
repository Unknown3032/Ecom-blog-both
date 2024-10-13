import React from 'react'
import CategoryCard from './CategoryCard'
import { motion } from 'framer-motion'
import { FadeInWhenVisible } from '@/common/InViewAnimation'
import { fadeIn } from '@/varient'



const categories = [
    { id: 1, name: 'T-Shirts', url: '', img: '/productos-remera-ojos-negra-2.jpg', title: 'T-shirt', desc: 'Wear Class' },
    { id: 2, name: 'Mugs', url: '', img: '/productos-hoodie-de-gira-blanco-2.jpg', title: 'Hoddie', desc: 'Winter Arc' },
    { id: 3, name: "Posters", url: '', img: '/collection-accesorios-bottom.jpg', title: 'Cap', desc: 'Cool Caps' },
]

const mugCategories = [
    { id: 1, name: 'One Piece', url: '', img: '/cat-mug-1.jpg', title: 'One Piece', desc: 'Dream Comes True' },
    { id: 2, name: 'Aot', url: '', img: '/cat-mug-2.jpg', title: 'Aot', desc: 'Nothing is permanent' },
    { id: 3, name: "Naruto", url: '', img: '/cat-mug-3.jpg', title: 'Naruto', desc: 'Never give Up' },
]

const posterCategories = [
    { id: 1, name: 'Sanatan', url: '', img: '/frame-cat-1.jpg', title: 'Sanatan', desc: 'Peace of Mind ' },
    { id: 2, name: 'Anime', url: '', img: '/frame-cat-2.jpg', title: 'Anime', desc: 'Leave The Anime World' },
    { id: 3, name: "Motivational", url: '', img: '/frame-cat-3.jpg', title: 'Motivational', desc: 'Remember Why You Start' },
]

const Categories = ({ cat }) => {
    return (
        <div
            className='my-8 flex'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4  place-items-center '>
                {cat == 'fashion' ? categories?.map((data, i) => {

                    return <FadeInWhenVisible >
                        <CategoryCard key={i} data={data} />
                    </FadeInWhenVisible>
                })
                    :
                    cat == 'mug' ? mugCategories?.map((data, i) => {
                        return <FadeInWhenVisible >
                            <CategoryCard key={i} data={data} />
                        </FadeInWhenVisible>
                    }) :
                        posterCategories?.map((data, i) => {
                            return <FadeInWhenVisible >
                                <CategoryCard key={i} data={data} />
                            </FadeInWhenVisible>
                        })
                }
            </div>
        </div>
    )
}

export default Categories