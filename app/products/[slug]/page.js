'use client'

import DrawerFilter from '@/components/ProductPage/DrawerFilter'
import Filter from '@/components/ProductPage/Filter'
import ProductCard from '@/components/ProductSlider/ProductCard'
import Wrapper from '@/components/Wrapper'
import axios from 'axios'



import { motion } from 'framer-motion'


import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'






const filterData = [
    { name: 'Sort By:', subFilter: ['featured', 'Best Selling', 'Price:Low-High', 'Price:High-Low'], key: 1 },
    { name: 'Collection', subFilter: ['Anime', 'Spritual', 'Gym', 'Casual'], key: 2 },
]


const Products = ({ params }) => {
    const { slug } = params;
    const [mobileFilter, setMobileFilter] = useState(false);
    const [curProducts, setCurProudcts] = useState([]);
    const [banner, setBanner] = useState('');

    const searchParams = useSearchParams();
    const search = searchParams.get('search');

    const [selectedCat, setSelectedCat] = useState("");
    const [selectedSort, setSelectedSort] = useState("featured");
    const [value, setValue] = useState([0, 5000]);


    // get banner 
    const getBanner = async () => {

        let cat = {
            "category": `${search?.toLowerCase()}-${slug?.toLowerCase()}`
        };

        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getBanner", cat).then(({ data }) => {
            let banner = data?.data?.imgs[0]?.img_info?.url;
            // console.log(banner);
            if (banner) {
                setBanner(banner)
            } else {
                setBanner('')
            }

        }).catch(({ response }) => {
            setCurProudcts(null)
        })
    }

    // get products 
    const getProducts = async () => {
        let cat;
        let subCat;
        let min = value[0];
        let max = value[1];

        let key = `${search}-${slug?.toLowerCase()}`;
        if (search?.toLowerCase() != 'best' && search?.toLowerCase() != 'new') {
            cat = `${slug?.toLowerCase()}`;
            subCat = `${search?.toLowerCase()}`;
            key = null
            // console.log(subCat);
        }
        let keys = {
            "key": key,
            "cat": cat ? cat : null,
            "subCat": subCat ? subCat : null,
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            let priceFilter = []
            // console.log(products);
            if (products?.length) {
                if (max) {
                    products?.filter((item) => {
                        if (item?.product_info?.price <= max && item?.product_info?.price >= min) {
                            priceFilter.push(item);
                        }
                    }
                    );
                    setCurProudcts(priceFilter);
                }

                else {
                    setCurProudcts(products)
                }
            } else {
                setCurProudcts(null)
            }

        }).catch(({ response }) => {
            setCurProudcts(null)
        })
    }

    const sortedProduct = async (sort) => {
        let cat;
        let subCat;
        let min = value[0];
        let max = value[1];

        let key = `${search}-${slug?.toLowerCase()}`;
        if (search?.toLowerCase() != 'best' && search?.toLowerCase() != 'new') {
            cat = `${slug?.toLowerCase()}`;
            subCat = `${search?.toLowerCase()}`;
            key = null
        }
        let keys = {
            "key": key,
            "cat": cat ? cat : null,
            "subCat": subCat ? subCat : null,
            "sortedAs": sort,
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/getProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            let priceFilter = []
            // console.log(products);
            if (products?.length) {
                if (max) {
                    products?.filter((item) => {
                        if (item?.product_info?.price <= max && item?.product_info?.price >= min) {
                            priceFilter.push(item);
                        }
                    }
                    );
                    setCurProudcts(priceFilter);
                }

                else {
                    setCurProudcts(products)
                    console.log(priceFilter);
                }
            } else {
                setCurProudcts(null)
            }

        }).catch(({ response }) => {
            setCurProudcts(null)
        })
    }

    const sortedProductTheme = async (sort, theme) => {
        let cat;
        let subCat;
        let min = value[0];
        let max = value[1];

        let key = `${search}-${slug?.toLowerCase()}`;
        if (search?.toLowerCase() != 'best' && search?.toLowerCase() != 'new') {
            cat = `${slug?.toLowerCase()}`;
            subCat = `${search?.toLowerCase()}`;
            key = null
        }
        let keys = {
            "key": key,
            "cat": cat ? cat : null,
            "subCat": subCat ? subCat : null,
            "sortedAs": sort,
            "theme": theme?.toLowerCase(),
        };
        await axios.post(process.env.NEXT_PUBLIC_URL + "api/filterProduct", keys).then(({ data }) => {
            let products = data?.data?.product;
            let priceFilter = []
            // console.log(products);
            if (products?.length) {
                if (max) {
                    products?.filter((item) => {
                        if (item?.product_info?.price <= max && item?.product_info?.price >= min) {
                            priceFilter.push(item);
                        }
                    }
                    );
                    setCurProudcts(priceFilter)
                }
                else {
                    setCurProudcts(products)
                }

            } else {
                setCurProudcts(null)
            }

        }).catch(({ response }) => {
            setCurProudcts(null)
        })
    }

    // fiter sorted 
    const sortedBy = async (curContent) => {
        setCurProudcts(null)
        if (curContent == 'featured') {
            await getProducts()
        }

        if (curContent == 'Best Selling') {
            await sortedProduct('best')
        }

        if (curContent == 'Price:Low-High') {
            await sortedProduct('low-high')
        }

        if (curContent == 'Price:High-Low') {
            await sortedProduct('high-low')
        }
    }

    // filter by category 
    const sortedByTheme = async (curContent, theme) => {
        setCurProudcts(null)

        if (curContent == 'featured') {
            await sortedProductTheme('featured', theme?.toLowerCase())
        }

        if (curContent == 'Best Selling') {
            await sortedProductTheme('best', theme?.toLowerCase())
        }

        if (curContent == 'Price:Low-High') {
            await sortedProductTheme('low-high', theme?.toLowerCase())
        }

        if (curContent == 'Price:High-Low') {
            await sortedProductTheme('high-low', theme?.toLowerCase())
        }
    }

    // price filter 
    const priceFilter = async (value) => {

        setCurProudcts(null)
        if (selectedSort == 'featured') {
            if (selectedCat?.length) {
                await sortedProductTheme('featured', selectedCat)
            } else {
                await getBanner()
            }
        }

        if (selectedSort == 'Best Selling') {
            if (selectedCat?.length) {
                await sortedProductTheme('best', selectedCat)
            } else {
                await sortedBy('best')
            }

        }

        if (selectedSort == 'Price:Low-High') {
            if (selectedCat?.length) {
                await sortedProductTheme('low-high', selectedCat)
            } else {
                await sortedBy('low-high')
            }

        }

        if (selectedSort == 'Price:High-Low') {
            if (selectedCat?.length) {
                await sortedProductTheme('high-low', selectedCat)
            } else {
                await sortedBy('high-low')
            }
        }
    }



    useEffect(() => {
        getProducts();
        getBanner();
    }, [search, value])

    useEffect(() => {
        priceFilter(value)
    }, [search, value])




    return (
        <div className='w-full relative home'>
            <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8
                }}
                className='relative bg-dark-grey h-[45vh] md:h-[55vh] select-none overflow-hidden md:-mt-[80px] -mt-[60px] text-white antialiased top-0 bg-white/20 '>
                <img className=' bg-dark-grey h-full w-full select-none object-cover  brightness-90 grayscale-5' src={!banner ? '/clothesTheme-1 (3).webp' : banner} alt={''} />

            </motion.div>

            <Wrapper>
                <div className='flex mt-5 lg:gap-8 '>
                    {/* large screen filter */}
                    <div className='lg:w-[28vw] hidden  lg:flex '>
                        <Filter value={value} setValue={setValue} priceFilter={priceFilter} mobileFilter={mobileFilter} sortedBy={sortedBy} setSelectedSort={setSelectedSort} setSelectedCat={setSelectedCat} selectedCat={selectedCat} sortedByTheme={sortedByTheme} slug={slug} selectedSort={selectedSort} filterData={filterData} itemNumber={curProducts?.length} search={search} />
                    </div>

                    {/* small screen filter */}
                    <div className='lg:hidden absolute  z-10 text-white w-full '>
                        <div className=''>
                            <div className='fixed  bottom-10'>
                                <div
                                    onClick={() => { setMobileFilter(!mobileFilter) }}
                                >
                                    <DrawerFilter value={value} setValue={setValue} priceFilter={priceFilter} mobileFilter={mobileFilter} setSelectedSort={setSelectedSort} selectedSort={selectedSort} selectedCat={selectedCat} setSelectedCat={setSelectedCat} sortedBy={sortedBy} sortedByTheme={sortedByTheme} filterData={filterData} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* products  */}
                    <div className='grid md:grid-cols-3 grid-cols-2 place-items-center h-auto w-full '>
                        {curProducts && Object.keys(curProducts)?.map((k, i) => {
                            let slide = curProducts[k]?.product_info;
                            let id = curProducts[k]?._id;

                            return <div key={i} className='py-2 '>
                                <ProductCard _id={id} product={slide} css={'lg:w-[22vw] md:w-[28.5vw] w-[42vw]  opacity-90 '} csstext={'lg:w-[20vw]  md:w-[29vw] w-[42vw] '} />
                            </div>

                        })}


                    </div>
                </div>
            </Wrapper >
        </div >
    )
}


export default Products