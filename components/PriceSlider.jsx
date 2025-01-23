import { Slider } from "@heroui/react";
import { useState } from "react";

export default function PriceSlider({ setValue, value, priceFilter }) {

    return (
        <Slider
            classNames={{
                base: "max-w-md",
                color: "foreground",
                // filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
                labelWrapper: "mb-2",
                label: "font-medium text-white text-medium",
                value: "font-medium text-default-300 text-small",
                filler: "bg-foreground-600",
                size: "md",
                thumb: [
                    "bg-default ",
                    "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                    "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                ],
                step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
            }}
            value={value}
            onChange={setValue}
            // getValue={priceFilter(value)}
            // defaultValue={[0, 800]}
            disableThumbScale={true}
            formatOptions={{ style: "currency", currency: "INR" }}
            label="Price Range"
            maxValue={10000}
            minValue={0}
            showOutline={true}
            // getValue={priceFilter(value)}
            showSteps={true}
            showTooltip={true}
            step={100}
            tooltipProps={{
                offset: 10,
                placement: "bottom",
                classNames: {
                    base: [
                        // arrow color
                        "before:bg-foreground-400",
                    ],
                    content: [
                        "py-2 shadow-xl",
                        "text-white bg-foreground-400",
                    ],
                },
            }}
            tooltipValueFormatOptions={{ style: "currency", currency: "INR", maximumFractionDigits: 0 }}
        />
    );
}
