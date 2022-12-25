import CardBack from "@components/CardBack";
import CardFront from "@components/CardFront";
import { CardContainerProps } from "./types";



const CardContainer: React.FC<CardContainerProps> = ({ watch }) => {
    return <div className="relative w-full h-1/4 lg:w-1/4 lg:h-full bg-mainBgMobile md:bg-mainBgDesktop bg-no-repeat bg-cover">

        <CardFront watch={watch} />
        <CardBack watch={watch} />
    </div>
}

export default CardContainer;