import { BASE_CARD, RESPONSIVE_CARD } from "@/styles";
import { RESPONSIVE_CARD_BACK } from "./styles";
import { CardBackProps } from "./types";

const CardBack: React.FC<CardBackProps> = ({ watch, className, cvc, ...cardFrontProps }) => {
    return (
        <div className={`${RESPONSIVE_CARD} ${RESPONSIVE_CARD_BACK} ${BASE_CARD}bg-gray-200   ${className}`
        }>
            <div className="block h-6 md:h-12 lg:h-8 2xl:h-12 mt-5 mb-2 lg:mt-5 lg:mb-5 w-full bg-gray-700" />

            <div className="text-right tracking-widest font-mono bg-gray-400 mx-5 py-0 md:py-1 px-2 rounded-md">
                {watch("cvc") || "000"}
            </div>

        </div >
    )
}

export default CardBack;