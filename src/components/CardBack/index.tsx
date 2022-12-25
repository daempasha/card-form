import { BASE_CARD, RESPONSIVE_CARD } from "@/styles";
import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ watch, className, cvc, ...cardFrontProps }) => {
    return (
        <div className={`${RESPONSIVE_CARD} ${BASE_CARD} bottom-4 lg:top-auto lg:bottom-1/3 xl:bottom-1/4 2xl:bottom-1/3  lg:-right-32 2xl:left-auto 2xl:-right-28 left-1/3 top-2   bg-gray-200   ${className}`
        }>
            <div className="block h-6 md:h-12 lg:h-8 2xl:h-12 mt-5 mb-2 lg:mt-5 lg:mb-5 w-full bg-gray-700" />

            <div className="text-right tracking-widest font-mono bg-gray-400 mx-5 py-0 md:py-1 px-2 rounded-md">
                {watch("cvc") || "000"}
            </div>

        </div >
    )
}

export default CardBack;