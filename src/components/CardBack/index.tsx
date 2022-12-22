import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ className, cvc, ...cardFrontProps }) => {
    return (
        <div className={`shadow-md text-white flex-col bg-gray-200 rounded-lg w-[400px] h-[200px] ${className}`
        }>
            <div className="block h-12 my-5 w-full bg-gray-700" />

            <div className="text-right tracking-widest font-mono bg-gray-400 mx-5 py-1 px-2 rounded-md">
                {cvc || "000"}
            </div>
            {/* <div className="flex items-center gap-3">
                <div className="bg-white rounded-full w-10 h-10" />
                <div className="border-2 border-white rounded-full w-5 h-5" />
            </div>
            <div className="text-3xl font-serif">{addSpace(padString(number, 16, "0"), 4)}</div>
            <div className="flex flex-grow items-end justify-between">
                <div className="font-serif">{name}</div>
                <div className="font-serif">{`${expiryMonth}/${expiryYear}`}</div>

            </div> */}
        </div >
    )
}

export default CardBack;