import { RadioGroup, Radio } from "@heroui/react";
import { useState } from "react";

export default function RadioUi({ onClose, mobileFilter, content, selectedSort, setSelectedSort, selectedCat, setSelectedCat, title, sortedBy, sortedByTheme }) {


    return (
        title?.toLowerCase() == 'collection' ? < div
            className="flex gap-10 -mt-5 h-auto py-2 w-full home" >
            <div

                className="inline-flex items-center w-full" >
                <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="on"
                    data-ripple-dark="true"
                >
                    <input
                        name="ripple"
                        type="radio"
                        className={`peer h-3 w-3 cursor-pointer appearance-none rounded-full border border-slate-300 border-slate-400 transition-all ${selectedCat == content ? "bg-dark-grey" : ""} `}
                        id="on"
                    />
                </label>
                <label

                    className="cursor-pointer text-medium "
                    htmlFor="on"
                    onClick={() => {
                        if (mobileFilter) {
                            onClose()
                        }
                        setSelectedCat(content)
                        sortedByTheme(selectedSort, content)
                    }}
                >
                    {content}
                </label>
            </ div>
        </div > :
            < div className="flex gap-10 -mt-5 h-auto py-2 w-full" >
                < div className="inline-flex items-center w-full" >
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="on"
                        data-ripple-dark="true"
                    >
                        <input
                            name="ripple"
                            type="radio"
                            className={`peer h-3 w-3 cursor-pointer appearance-none rounded-full border border-slate-300 border-slate-400 transition-all ${selectedSort == content ? "bg-dark-grey" : ""} `}
                            id="on"
                        />
                    </label>
                    <label
                        className="cursor-pointer text-medium "
                        htmlFor="on"
                        onClick={() => {
                            setSelectedSort(content);
                            if (mobileFilter) {
                                onClose()
                            }
                            if (content != selectedSort) {
                                sortedBy(content);
                                setSelectedCat('')
                            }
                        }}
                    >
                        {content}
                    </label>
                </ div>
            </ div>
    );
}
