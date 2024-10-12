import React from 'react'
import CategoryCard from './CategoryCard'


const categories = [
    { id: 1, name: 'T-Shirts', url: '', img: '/productos-remera-ojos-negra-2.jpg', title: 'T-shirt', desc: 'Wear Class' },
    { id: 2, name: 'Mugs', url: '', img: '/productos-hoodie-de-gira-blanco-2.jpg', title: 'Hoddie', desc: 'Winter Arc' },
    { id: 3, name: "Posters", url: '', img: '/collection-accesorios-bottom.jpg', title: 'Cap', desc: 'Cool Caps' },
]

const Categories = () => {
    return (
        <div className='my-8 flex'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4  place-items-center '>
                {categories?.map((data, i) => {
                    return <CategoryCard key={i} data={data} />
                })}
            </div>
        </div>
    )
}

export default Categories