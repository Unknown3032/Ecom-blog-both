import { Accordion, AccordionItem } from "@nextui-org/react";

// icons
import { GoPlus } from "react-icons/go";
import RadioUi from "./RadioUi";

export default function AccordionUiFilter({ onClose, title, mobileFilter, content, selectedSort, sortedByTheme, setSelectedSort, selectedCat, setSelectedCat, sortedBy }) {
    const defaultContent = "Lorem ipsum dolor sit amet.";

    const itemClasses = {
        title: "text-medium text-white text-left border-dark-grey ",
    };

    return (
        <Accordion
            className=" gap-1 font-semibold text-medium w-full text-left home"
            itemClasses={itemClasses}
        >
            <AccordionItem
                aria-label={title}
                indicator={<GoPlus />}
                title={title}
                className="text-medium text-white/80"
                itemClasses={itemClasses}
                key="theme"
            >
                <div className="">
                    <ul className='text-sm text-white/70 -ml-2 flex flex-col '>
                        {content?.map((content, i) => {
                            return <div
                                key={i}>
                                <RadioUi mobileFilter={mobileFilter} onClose={onClose} title={title} sortedBy={sortedBy} sortedByTheme={sortedByTheme} content={content} selectedCat={selectedCat} setSelectedCat={setSelectedCat} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
                            </div>
                        })}
                    </ul>
                </div>

            </AccordionItem>

        </Accordion>
    );
}