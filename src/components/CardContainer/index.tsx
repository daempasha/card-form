import { FieldValues, UseFormWatch } from "react-hook-form";
import CardBack from "../CardBack";
import CardFront from "../CardFront";

interface CardContainerProps {
    watch: UseFormWatch<FieldValues>
}

const CardContainer: React.FC<CardContainerProps> = ({ watch }) => {
    return <div className="relative w-full h-1/4 lg:w-1/4 lg:h-full bg-mainBgMobile md:bg-mainBgDesktop bg-no-repeat bg-cover">

        <CardFront watch={watch} />
        <CardBack watch={watch} />
    </div>
}

export default CardContainer;