import BgCardFront from "./bg-card-front.png"
import { addSpace, padString } from "./helper";
import { CardFrontProps } from "./types";


const CardFront: React.FC<CardFrontProps> = ({ className = "", name, number = "", expiryMonth = "00", expiryYear = "00", ...cardFrontProps }) => {
    return (
        <div className={` overflow-hidden shadow-md right-0  text-white bg-indigo-500 rounded-lg w-[400px] h-[200px] ${className}`
        }>
            <img className="z-0 absolute top-0 left-0" src={BgCardFront} />

            <div className="z-10 relative flex flex-col h-full p-5">

                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-full w-10 h-10" />
                    <div className="border-2 border-white rounded-full w-5 h-5" />
                </div>
                <div className="flex text-3xl flex-grow items-center font-serif">{addSpace(padString(number, 16, "0"), 4)}</div>
                <div className="flex justify-between">
                    <div className="font-serif">{name || "John Doe"}</div>
                    <div className="font-serif">{`${expiryMonth || "00"}/${expiryYear || "00"}`}</div>

                </div>
            </div>
        </div >
    )
}

export default CardFront;