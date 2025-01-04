'use client'

import ProductSlider from '@/components/ProductSlider/ProductSlider'
import HeroBanner from '@/components/Home/HeroBanner'
import GradualSpacing from '@/components/ui/gradual-spacing'
import React, { useEffect, useState } from 'react'
import Wrapper from '@/components/Wrapper'
import Categories from '@/components/CategoriesUi/Categories'
import axios from 'axios'


// const slideData = [
//     {
//         img: "/clothesTheme-1 (1).webp",
//         title: 'New Arrivals',
//         desc: "It's The Standard",
//     }
// ]

// const slideDataAccessories = [
//     {
//         img: "/mug-5-b.jpg",
//         title: 'New Arrivals',
//         desc: "It's The Standard",
//     }
// ]

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



// categories end 

const ProductsPage = ({ params }) => {

    let { slug } = params;
    const [slideDataClothes, setSlideDataClothes] = useState({})
    const [slideDataAccessories, setSlideDataAccessories] = useState({})
    const [mugData, setMugData] = useState({})
    const [posterData, setPosterData] = useState({})
    const [clothesData, setClothesData] = useState({})
    const [clothesSubCat, setClothesSubCat] = useState({})

    const [newClothesProduct, setNewClothesProduct] = useState({})
    const [newAccessoriesProduct, setNewAccessoriesProduct] = useState({})
    const [clothesBestProduct, setClothesBestProduct] = useState({})
    const [bestAccessoriesProduct, setBestAccessoriesProduct] = useState({})





    // get banners 
    const getBannersClothes = async () => {
        let cat = {
            "category": "clothes"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getBanner", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setSlideDataClothes(images);
            // console.log(slideData);

            // console.log(images);
        }).catch(({ response }) => {

        })
    }

    const getBannersAccessories = async () => {
        let cat = {
            "category": "accessories"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getBanner", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setSlideDataAccessories(images);
            // console.log(slideData);

            // console.log(images);
        }).catch(({ response }) => {

        })
    }

    // get categories
    const getCategoriesClothes = async () => {
        let cat = {
            "category": "clothes"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setClothesData(images);

        }).catch(({ response }) => {

        })
    }

    const getCategoriesClothesSubCat = async () => {
        let cat = {
            "category": "clothes-subCat"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setClothesSubCat(images);

        }).catch(({ response }) => {

        })
    }

    const getCategoriesAccessories = async () => {
        let cat = {
            "category": "accessories"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setMugData(images);

        }).catch(({ response }) => {

        })
    }

    const getCategoriesAccessoriesFrames = async () => {
        let cat = {
            "category": "accessories-frame"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getCategories", cat).then(({ data }) => {
            let images = data?.data?.imgs;
            setPosterData(images);

        }).catch(({ response }) => {

        })
    }


    // get products 
    const getNewClosthes = async () => {
        let keys = {
            "key": "new-clothes"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            if (!newClothesProduct.length) {
                setNewClothesProduct(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getNewAccessories = async () => {
        let keys = {
            "key": "new-accessories"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!newAccessoriesProduct.length) {
                setNewAccessoriesProduct(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getBestClothes = async () => {
        let keys = {
            "key": "best-clothes"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!clothesBestProduct.length) {
                setClothesBestProduct(products)
            }
        }).catch(({ response }) => {

        })
    }

    const getBestAccesories = async () => {
        let keys = {
            "key": "best-accessories"
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product
            if (!bestAccessoriesProduct.length) {
                setBestAccessoriesProduct(products)
            }
        }).catch(({ response }) => {

        })
    }


    useEffect(() => {
        if (!slideDataClothes?.length) {
            getBannersClothes()
        }

        if (!slideDataAccessories?.length) {
            getBannersAccessories()
        }
        // console.log(!slideData?.length);

        if (!clothesData?.length) {
            getCategoriesClothes()
        }

        if (!mugData?.length) {
            getCategoriesAccessories()

        }

        if (!posterData?.length) {
            getCategoriesAccessoriesFrames()
        }
        if (!clothesSubCat?.length) {
            getCategoriesClothesSubCat()
        }

        if (!newClothesProduct?.length) {
            getNewClosthes()
        }

        if (!newAccessoriesProduct?.length) {
            getNewAccessories()
        }

        if (!clothesBestProduct?.length) {
            getBestClothes()
        }

        if (!bestAccessoriesProduct?.length) {
            getBestAccesories()
        }

    }, [])


    return (
        <div className='home'>
            <HeroBanner slideData={slug == 'clothes' ? slideDataClothes : slideDataAccessories} loop={false} />
            <Wrapper>

                {/* all product section start  */}
                <div className='mt-4'>
                    {/* heading  */}
                    <GradualSpacing
                        className=" select-none font-display text-left text-3xl font-bold -tracking-widest  text-white dark:text-white md:text-4xl md:leading-[5rem]"
                        text="New Arrival"
                    />
                    {/* heading  end */}

                    <ProductSlider slides={slug == 'clothes' ? newClothesProduct : newAccessoriesProduct} />
                </div>

                {/*First Category */}
                <div className='mt-4'>
                    <Categories slides={slug == 'clothes' ? clothesData : mugData} />
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
                    <ProductSlider slides={slug == 'clothes' ? clothesBestProduct : bestAccessoriesProduct} />
                </div>

                {/*Theme Category */}
                <div className='mt-4'>
                    <Categories slides={slug == 'clothes' ? clothesSubCat : posterData} />
                </div>
                {/* Theme Category  end */}

            </Wrapper>
        </div>
    )
}

export default ProductsPage