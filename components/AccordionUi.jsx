import { Accordion, AccordionItem } from "@nextui-org/react";

// icons
import { GoPlus } from "react-icons/go";

export default function AccordionUi({ title, content }) {
    const defaultContent = "Lorem ipsum dolor sit amet.";

    const itemClasses = {
        title: "text-sm lg:text-black text-white -mb-5",
    };

    return (
        <Accordion
            className="text-dark-grey text-sm gap-1 font-semibold "
            itemClasses={itemClasses}
        >

            <AccordionItem

                aria-label={title}
                indicator={<GoPlus />}
                title={title}
                className="text-sm lg:text-dark-grey text-white/80 "
                itemClasses={itemClasses}
            >
                <div className="lg:-mt-3 ml-3">
                    <ul className='list-disc text-sm font-crimson font-semibold text-white lg:text-black'>
                        {content?.map((content, ci) => {
                            return <li key={ci}>{content}</li>
                        })}
                    </ul>
                </div>
            </AccordionItem>

        </Accordion>
    );
}