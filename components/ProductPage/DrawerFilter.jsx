import React, { useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
// icons
import { MdFilterAltOff } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";


import AccordionUiFilter from "../AccordionUiFilter";
import PriceSlider from "../PriceSlider";

export default function DrawerFilter({ filterData, priceFilter, mobileFilter, sortedBy, sortedByTheme, selectedCat, setSelectedCat, selectedSort, setSelectedSort, value, setValue }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [placement, setPlacement] = useState("bottom");

    const handleOpen = (placement) => {
        setPlacement(placement);
        onOpen();
    };

    return (
        <>
            <div className="flex flex-wrap gap-3 home">
                <Button className="capitalize" onPress={() => handleOpen(placement)}>
                    <HiOutlineAdjustmentsHorizontal className='' />
                </Button>
            </div>
            <Drawer
                classNames={{
                    base: " rounded-medium bg-black",
                }}
                isOpen={isOpen} placement={placement} onOpenChange={onOpenChange}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1 text-white py-4">

                            </DrawerHeader>
                            <DrawerBody>
                                {/* //filters for large screen */}
                                {filterData?.map((data, i) => {
                                    return <div key={i} className='w-full  border-dark-grey border-b'>
                                        <AccordionUiFilter mobileFilter={mobileFilter} onClose={onClose} sortedByTheme={sortedByTheme} sortedBy={sortedBy} selectedCat={selectedCat} setSelectedCat={setSelectedCat} selectedSort={selectedSort} setSelectedSort={setSelectedSort} title={data?.name} content={data?.subFilter} />
                                    </div>
                                })}
                                <div className=' border-dark-grey border-t mt-8 py-3'>
                                    <PriceSlider priceFilter={priceFilter} value={value} setValue={setValue} />
                                </div>

                                <div>
                                    <Button
                                        onPress={() => {
                                            setSelectedCat('')
                                            setSelectedSort('featured')
                                            setValue([0, 5000])
                                            priceFilter(value)
                                            onClose()
                                        }}
                                        className='text-white border-white w-full my-5 py-5 text-medium' startContent={<MdFilterAltOff />} variant="bordered">
                                        Clear Filter
                                    </Button>
                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button className="text-white" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}

