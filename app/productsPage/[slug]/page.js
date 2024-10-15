'use client'

import ProductSlider from '@/components/ProductSlider/ProductSlider'
import HeroBanner from '@/components/Home/HeroBanner'
import GradualSpacing from '@/components/ui/gradual-spacing'
import React from 'react'
import Wrapper from '@/components/Wrapper'
import Categories from '@/components/CategoriesUi/Categories'


const slideData = [
    {
        img: "/clothesTheme-1 (1).webp",
        title: 'New Arrivals',
        desc: "It's The Standard",
    }
]

const slideDataAccessories = [
    {
        img: "/mug-5-b.jpg",
        title: 'New Arrivals',
        desc: "It's The Standard",
    }
]

// slides start 

const latestClothes = [

    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'Unisex T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-remera-de-gira-blanca-1.jpg', '/productos-remera-de-gira-blanca-2.jpg'], title: 'White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-de-gira-blanca-1.jpg' }, { black: '/productos-remera-de-gira-blanca-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-remera-ojos-negra-1.jpg', '/productos-remera-ojos-negra-2.jpg'], title: 'Black T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-ojos-negra-2.jpg' }, { black: '/productos-remera-ojos-negra-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-hoodie-de-gira-blanco-1.jpg', '/productos-hoodie-de-gira-blanco-2.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-blanco-1.jpg' }, { black: '/productos-hoodie-de-gira-blanco-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-buzo-flaakko-negro-1.jpg', '/productos-buzo-flaakko-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-buzo-flaakko-negro-1.jpg' }, { black: '/productos-buzo-flaakko-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 799 },

    { images: ['/productos-hoodie-de-gira-negro-1.jpg', '/productos-hoodie-de-gira-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-negro-1.jpg' }, { black: '/productos-hoodie-de-gira-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

]

const clothesBestSeller = [
    { images: ['/productos-hoodie-de-gira-blanco-1.jpg', '/productos-hoodie-de-gira-blanco-2.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-blanco-1.jpg' }, { black: '/productos-hoodie-de-gira-blanco-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-buzo-flaakko-negro-1.jpg', '/productos-buzo-flaakko-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-buzo-flaakko-negro-1.jpg' }, { black: '/productos-buzo-flaakko-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 799 },

    { images: ['/collection-remeras-top.jpg', '/collection-remeras-bottom.jpg'], title: 'Unisex T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-remeras-top.jpg' }, { black: '/collection-remeras-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-hoodie-de-gira-negro-1.jpg', '/productos-hoodie-de-gira-negro-2.jpg'], title: 'Full Slive T-shirt Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-hoodie-de-gira-negro-1.jpg' }, { black: '/productos-hoodie-de-gira-negro-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },
    { images: ['/collection-accesorios-bottom.jpg', '/collection-accesorios-top.jpg'], title: 'Ghost White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-accesorios-bottom.jpg' }, { black: 'collection-accesorios-top.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/collection-buzos-top.jpg', '/collection-buzos-bottom.jpg'], title: 'White Hoddie', desc: "It's a Ghost Outfit", colors: [{ white: '/collection-buzos-top.jpg' }, { black: '/collection-buzos-bottom.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 999 },

    { images: ['/productos-remera-de-gira-blanca-1.jpg', '/productos-remera-de-gira-blanca-2.jpg'], title: 'White T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-de-gira-blanca-1.jpg' }, { black: '/productos-remera-de-gira-blanca-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },

    { images: ['/productos-remera-ojos-negra-1.jpg', '/productos-remera-ojos-negra-2.jpg'], title: 'Black T-shirt', desc: "It's a Ghost Outfit", colors: [{ white: '/productos-remera-ojos-negra-2.jpg' }, { black: '/productos-remera-ojos-negra-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 599 },
]

const newarivalsAccessories = [
    { images: ['/frame-cat-1.jpg'], title: 'Lord Shiva Frame', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-1.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/mug-3-b.png', '/mug-3-a.png'], title: 'Itachi & Sasuke Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-3-b.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/frame-cat-3.jpg'], title: 'Motivational Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-3.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/mug-1.webp'], title: 'Toji Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-1.webp' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-2-b.png', '/mug-2-a.png'], title: 'Gojo Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-2-a.png' }, { black: '/mug-2-b.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/frame-cat-2.jpg'], title: 'One Pieace Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/frame-cat-2.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },
]

const bestSellerAccessories = [
    { images: ['/frame-4.jpg'], title: 'Sanatan Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-4-a.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/mug-5-a.jpg', '/mug-5-b.jpg'], title: 'Luffy Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-5-a.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-6.png'], title: 'Itachi mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-6.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/mug-4-b.png', '/mug-4-a.png'], title: 'Gojo Tree Mug', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-4-a.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 299 },

    { images: ['/frame-5.jpg', '/mug-5-b.jpg'], title: 'Ganesha Poster', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-5-a.jpg' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },

    { images: ['/frame-6.jpg'], title: 'Lion Motivation ', desc: "It's a Ghost Outfit", colors: [{ white: '/mug-6.png' }], sizes: ["xl", "xxl"], bulletPoints: [], price: 399 },
]

// slides end 

// categories start
const clothesCategory = [
    { id: 1, name: 'T-Shirts', url: '', img: '/productos-remera-ojos-negra-2.jpg', title: 'T-shirt', desc: 'Wear Class' },
    { id: 2, name: 'Mugs', url: '', img: '/productos-hoodie-de-gira-blanco-2.jpg', title: 'Hoddie', desc: 'Winter Arc' },
    { id: 3, name: "Posters", url: '', img: '/collection-accesorios-bottom.jpg', title: 'Cap', desc: 'Cool Caps' },
]

const clothesThemeCat = [
    { id: 1, name: 'T-Shirts', url: '', img: '/clothesTheme-1 (1).webp', title: 'Anime', desc: 'Wear Class' },
    { id: 2, name: 'Mugs', url: '', img: '/clothesTheme-1 (3).webp', title: 'Hinduism', desc: 'Wear Your Culture' },
    { id: 3, name: "Posters", url: '', img: '/clothesTheme-1 (2).webp', title: 'Gym', desc: 'Wear Motive' },
]

const accessoriesCategory = [
    { id: 1, name: 'One Piece', url: '', img: '/cat-mug-1.jpg', title: 'Mugs', desc: 'Coffe Mug' },
    { id: 2, name: 'Sanatan', url: '', img: '/frame-cat-1.jpg', title: 'Frames', desc: 'High Quality' },
    { id: 3, name: "Motivational", url: '', img: '/frame-cat-3.jpg', title: 'Keychains', desc: 'Set Of 4' },
]

const accessoriesThemeCategory = [
    { id: 1, name: 'Sanatan', url: '', img: '/frame-cat-1.jpg', title: 'Sanatan', desc: 'Peace of Mind ' },
    { id: 1, name: 'One Piece', url: '', img: '/cat-mug-1.jpg', title: 'Anime', desc: 'Dream Comes True' },
    { id: 3, name: "Motivational", url: '', img: '/frame-cat-3.jpg', title: 'Motivational', desc: 'Remember Why You Start' },
]

// categories end 

const ProductsPage = ({ params }) => {

    let { slug } = params;

    return (
        <div className='home'>
            <HeroBanner slideData={slug == 'clothes' ? slideData : slideDataAccessories} loop={false} />
            <Wrapper>

                {/* all product section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="New Arrival"
                    />
                    {/* heading  end */}

                    <ProductSlider slides={slug == 'clothes' ? latestClothes : newarivalsAccessories} />
                </div>

                {/*First Category */}
                <div className='mt-4'>
                    <Categories slides={slug == 'clothes' ? clothesCategory : accessoriesCategory} />
                </div>
                {/* First Category  end */}

                {/* Best seller section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="Best Seller"
                    />
                    {/* heading  end */}
                    <ProductSlider slides={slug == 'clothes' ? clothesBestSeller : bestSellerAccessories} />
                </div>

                {/*Theme Category */}
                <div className='mt-4'>
                    <Categories slides={slug == 'clothes' ? clothesThemeCat : accessoriesThemeCategory} />
                </div>
                {/* Theme Category  end */}

            </Wrapper>
        </div>
    )
}

export default ProductsPage