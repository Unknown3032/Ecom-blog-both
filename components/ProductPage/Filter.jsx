import React, { useState } from 'react'
import { Button } from "@heroui/react";


// icons
import { MdFilterAltOff } from "react-icons/md";


import AccordionUiFilter from '../AccordionUiFilter';
import PriceSlider from '../PriceSlider';


const Filter = ({ slug, priceFilter, filterData, search, itemNumber, sortedBy, sortedByTheme, selectedCat, mobileFilter, setSelectedCat, selectedSort, setSelectedSort, value, setValue }) => {


    return (
        <div className='text-white select-none w-full'>
            {/* title large screen  */}
            <div className='hidden lg:block'>
                <h2 className='font-normal'>{slug}</h2>
                <h1 className='text-3xl -mt-2'>{search}</h1>
                <p className='text-xl -mt-1 '>{itemNumber} Products</p>
            </div>


            {/* //filters for large screen */}
            {filterData?.map((data, i) => {
                return <div key={i} className=' -ml-3 w-full  border-dark-grey border-b'>
                    <AccordionUiFilter mobileFilter={mobileFilter} sortedBy={sortedBy} sortedByTheme={sortedByTheme} selectedCat={selectedCat} setSelectedCat={setSelectedCat} selectedSort={selectedSort} setSelectedSort={setSelectedSort} title={data?.name} content={data?.subFilter} />
                </div>
            })}

            <div className='-ml-5 border-dark-grey border-t mt-8 py-3'>
                <PriceSlider priceFilter={priceFilter} value={value} setValue={setValue} />
            </div>

            <div
                className='-ml-4'>
                <Button
                    onClick={() => {
                        setSelectedCat('')
                        setSelectedSort('featured')
                        setValue([0, 5000])
                        priceFilter(value)
                    }}
                    color="white" className='border-white w-full my-5 py-5 text-medium' startContent={<MdFilterAltOff />} variant="bordered">
                    Clear Filter
                </Button>
            </div>
        </div >
    )
}

export default Filter