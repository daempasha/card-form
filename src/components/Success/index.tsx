import IconComplete from "@images/icon-complete.svg"

const Success = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <img className="mb-5" src={IconComplete} />
            <p className="text-2xl uppercase text-purple-900  tracking-wider font-mono">Thank you!</p>
            <p className="text-gray-500 font-semibold mt-2 ">We've added your card details.</p>
        </div>
    )
}

export default Success;