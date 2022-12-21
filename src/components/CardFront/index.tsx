import { addSpace, padString } from "./helper";
import { CardFrontProps } from "./types";



const CardFront: React.FC<CardFrontProps> = ({ className = "", name = "John Doe", number = "", expiryMonth = "00", expiryYear = "00", ...cardFrontProps }) => {
    return (
        <div className={`shadow-md right-0 p-5 text-white flex flex-col bg-indigo-500 rounded-lg w-[400px] h-[200px] ${className}`
        }>
            <div className="flex items-center gap-3">
                <div className="bg-white rounded-full w-10 h-10" />
                <div className="border-2 border-white rounded-full w-5 h-5" />
            </div>
            <div className="flex text-3xl flex-grow items-center font-serif">{addSpace(padString(number, 16, "0"), 4)}</div>
            <div className="flex justify-between">
                <div className="font-serif">{name}</div>
                <div className="font-serif">{`${expiryMonth}/${expiryYear}`}</div>

            </div>
        </div >
    )
}

export default CardFront;