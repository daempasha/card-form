import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ watch, className, cvc, ...cardFrontProps }) => {
    return (
        <div className={` flex absolute bottom-4 lg:top-auto lg:bottom-1/3 xl:bottom-1/4 2xl:bottom-1/3  lg:-right-32 2xl:left-auto 2xl:-right-28 left-1/3 top-2 shadow-md text-white flex-col bg-gray-200 rounded-lg w-[200px] h-[100px] md:w-[400px] md:h-[200px] lg:w-[300px] lg:h-[150px] 2xl:w-[400px] 2xl:h-[200px]  ${className}`
        }>
            <div className="block h-6 md:h-12 lg:h-8 2xl:h-12 mt-5 mb-2 lg:mt-5 lg:mb-5 w-full bg-gray-700" />

            <div className="text-right tracking-widest font-mono bg-gray-400 mx-5 py-0 md:py-1 px-2 rounded-md">
                {watch("cvc") || "000"}
            </div>

        </div >
    )
}

export default CardBack;