import { addSpace, padString } from "./helper";
import { CardFrontProps } from "./types";


const CardFront: React.FC<CardFrontProps> = ({ watch, className = "", ...cardFrontProps }) => {
    return (
        <div className={` flex-col p-5 bg-cardFront bg-cover overflow-hidden flex z-10 lg:top-1/4 xl:top-1/3 2xl:top-1/3  transition-all absolute -bottom-10 lg:-right-28 xl:-right-16 lg:bottom-1/2 md:top-1/2 right-1/3 shadow-lg text-white bg-indigo-500 rounded-lg w-[200px] h-[100px] md:w-[400px] md:h-[200px] lg:w-[300px] lg:h-[150px]  2xl:w-[400px] 2xl:h-[200px]   ${className}`
        } {...cardFrontProps}>

            <div className="flex items-center gap-1 md:gap-3">
                <div className="bg-white rounded-full w-5 h-5 md:w-10 md:h-10" />
                <div className="border-2 border-white rounded-full w-2 h-2 md:w-5 md:h-5" />
            </div>
            <div className="flex text-sm md:text-3xl lg:text-2xl 2xl:text-3xl flex-grow items-center font-mono my-2">{addSpace(padString(watch("number", ""), 16, "0"), 4)}</div>
            <div className="flex gap-5 justify-between">
                <div className="overflow-hidden whitespace-nowrap text-xs md:text-base text-ellipsis font-serif">{(watch("name") || "John Doe").toLocaleUpperCase()}</div>
                <div className=" text-xs md:text-base font-serif">{`${watch("expiryMonth") || "00"}/${watch("expiryYear") || "00"}`}</div>
            </div>
        </div >
    )
}

export default CardFront;