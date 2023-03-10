import { BASE_CARD, RESPONSIVE_CARD } from "@/styles";
import { addSpace, padString } from "./helper";
import { RESPONSIVE_CARD_FRONT } from "./styles";
import { CardFrontProps } from "./types";


const CardFront: React.FC<CardFrontProps> = ({ watch, className = "", ...cardFrontProps }) => {
    return (
        <div className={`${RESPONSIVE_CARD} ${RESPONSIVE_CARD_FRONT} ${BASE_CARD} bg-indigo-500  bg-cardFront bg-cover z-10 p-5 overflow-hidden   ${className}`
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