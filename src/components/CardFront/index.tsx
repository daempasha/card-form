import BgCardFront from "./bg-card-front.png"
import { addSpace, padString } from "./helper";
import { CardFrontProps } from "./types";


const CardFront: React.FC<CardFrontProps> = ({ watch, className = "", ...cardFrontProps }) => {
    return (
        <div className={` overflow-hidden shadow-lg text-white bg-indigo-500 rounded-lg w-[400px] h-[200px] ${className}`
        } {...cardFrontProps}>
            <img className="z-0 absolute top-0 left-0" src={BgCardFront} />

            <div className="w-full h-full z-10 relative flex flex-col p-5">

                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-full w-10 h-10" />
                    <div className="border-2 border-white rounded-full w-5 h-5" />
                </div>
                <div className="flex text-3xl flex-grow items-center font-mono">{addSpace(padString(watch("number", ""), 16, "0"), 4)}</div>
                <div className="flex gap-5 justify-between">
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis font-serif">{(watch("name") || "John Doe").toLocaleUpperCase()}</div>
                    <div className="font-serif">{`${watch("expiryMonth") || "00"}/${watch("expiryYear") || "00"}`}</div>

                </div>
            </div>
        </div >
    )
}

export default CardFront;