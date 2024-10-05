import Progress from "./Progress"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";




const SliderButton = ({ children, handleClick }) => {
    return (
        <button className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black" onClick={handleClick}>
            {children}
        </button>
    )
}


const SlideControles = ({ currentSlideData, data, transitionData, initialData, handleData, handleTransitionData, handleCurrentSlideData, slideData }) => {

    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initialData,
            ...prevData.slice(0, prevData.length - 1)
        ]);

        handleCurrentSlideData({
            data: transitionData ? transitionData : slideData[0],
            index: slideData.findIndex((ele) => ele.img === data[data.length - 1].img)

        })

        handleTransitionData(data[data.length - 1])
    }

    const handleNext = () => {
        handleData((prevData) => prevData.slice(1))

        handleCurrentSlideData({
            data: transitionData ? transitionData : initialData,
            index: slideData.findIndex((ele) => ele.img === data[0].img)
        });

        handleTransitionData(data[0]);

        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initialData
            ])
        }, 500);
    }

    return (
        <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5" >

            <SliderButton handleClick={handlePrev}>
                <IoIosArrowBack className="text-xl" />
            </SliderButton>

            <SliderButton handleClick={handleNext}>
                <IoIosArrowForward className="text-xl" />
            </SliderButton>

            <Progress curIndex={currentSlideData.index} length={slideData.length} />

        </div>
    )
}

export default SlideControles