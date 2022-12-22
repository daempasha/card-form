import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ watch, className, cvc, ...cardFrontProps }) => {
    return (
        <div className={`shadow-md text-white flex-col bg-gray-200 rounded-lg w-[400px] h-[200px] ${className}`
        }>
            <div className="block h-12 my-5 w-full bg-gray-700" />

            <div className="text-right tracking-widest font-mono bg-gray-400 mx-5 py-1 px-2 rounded-md">
                {watch("cvc") || "000"}
            </div>

        </div >
    )
}

export default CardBack;