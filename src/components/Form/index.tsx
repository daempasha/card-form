import { useForm, FieldValues } from "react-hook-form";
import Button from "@components/Button";
import Input from "@components/Input";

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Cardholder name</p>
                <input {...register("name")} className={`w-[400px] border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="e.g. John Doe" />

                <Input label="name" register={register} className="" maxLength={16} />
            </div>

            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Card number</p>
                <Input label="number" register={register} className="w-[400px]" placeholder="e.g. 1234 4567 8534 2934" type="tel" inputMode="numeric" maxLength={16} />
            </div>
            <div className="my-5 flex gap-5">
                <div>
                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Expiry Date (MM/YY)</p>

                    <Input label="expiryMonth" register={register} placeholder="MM" maxLength={2} size={2} />
                    <span className="mx-1" />
                    <Input label="expiryYear" register={register} placeholder="YY" maxLength={2} size={2} />
                </div>

                <div className="flex-grow">
                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">CVC</p>
                    <Input label="cvc" register={register} className="w-full" placeholder="e.g. 123" type="tel" inputMode="numeric" maxLength={3} />
                </div>
            </div>
            <div className="my-5">


            </div>

            <Button>Confirm</Button>
        </form>
    )
}

export default Form;