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