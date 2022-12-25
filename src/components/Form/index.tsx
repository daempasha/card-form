import { FieldValues, UseFormReturn } from "react-hook-form";
import Button from "@components/Button";
import { useAppStore } from "@/store";
import { isValidCardNumber, validateExpiryMonth, validateExpiryYear, validateMonthYear } from "./helper";
import { ErrorMessage } from "./ErrorMessage";

interface FormProps extends UseFormReturn<FieldValues, any> {

}

const Form: React.FC<FormProps> = ({ handleSubmit, setValue, formState: { errors }, register, getValues }) => {
    const { state, setState } = useAppStore();


    const onSubmit = (values: FieldValues) => setState("submitted");

    const fillForm = () => {
        const formFieldsToFill = [{ "field": "name", "value": "Jason Bourne" }, { "field": "number", "value": "4111111111111111" }, { "field": "expiryMonth", "value": "12" }, { "field": "expiryYear", "value": "24" }, { "field": "cvc", "value": "333" }]
        formFieldsToFill.forEach((formField => setValue(formField.field, formField.value)))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full items-center justify-center">
            <div className="my-5">
                <div className="my-5">
                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Cardholder name</p>
                    <input {...register("name", {
                        pattern: {
                            value: /^[ a-zA-Z]+$/,
                            message: "Only alphabetical characters are permitted"
                        },
                        required: true
                    })} onChange={event => setValue("name", event.target.value.replace(/[^A-Za-z \\.]+/g, ""))} className={`md:w-[400px] border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${errors.name && "border-red-300"}`} placeholder="e.g. John Doe" />
                    {errors?.name?.message && <ErrorMessage children={`${errors.name.message}`} />}
                    {errors.name && errors.name.type === "required" && <ErrorMessage children="Name field cannot be empty" />}

                </div>


                <div className="my-5">

                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Card Number</p>
                    <input {...register("number", {
                        validate: isValidCardNumber,
                        pattern: /[0-9]*/,
                        maxLength: 16,
                        minLength: 16,
                        required: true

                    }
                    )} type="text" inputMode="numeric" maxLength={16} onChange={event => setValue("number", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`md:w-[400px] border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${errors.number && "border-red-300"}`} placeholder="e.g. 1234 5678 0000 0000" />
                    {errors?.number?.type === "validate" && <ErrorMessage children="Card number is not valid" />}
                    {errors.number && (errors.number.type === "maxLength" || errors.number.type === "minLength") && <ErrorMessage children="Card number must be 16 digits long" />}
                    {errors.number && errors.number.type === "required" && <ErrorMessage children="Card number cannot be empty" />}

                </div>

                <div className="my-5 flex flex-col md:flex-row gap-5">
                    <div>
                        <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Exp. Date (MM/YY)</p>
                        <input {...register("expiryMonth", {
                            maxLength: 2,
                            minLength: 2,
                            required: true,
                            validate: validateExpiryMonth
                        })} maxLength={2} onChange={event => setValue("expiryMonth", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-14 border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${errors.expiryMonth && "border-red-300"}`} placeholder="MM" />
                        {errors?.expiryMonth?.message && <ErrorMessage children={`${errors.expiryMonth.message}`} />}
                        <span className="mx-1" />
                        <input {...register("expiryYear", {
                            maxLength: 2,
                            minLength: 2,
                            required: true,
                            validate: validateExpiryYear
                        })} maxLength={2} onChange={event => setValue("expiryYear", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-14 border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${errors.expiryYear && "border-red-300"}`} placeholder="YY" />
                    </div>

                    <div className="flex-grow">
                        <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">CVC</p>
                        <input {...register("cvc", {
                            maxLength: 3,
                            minLength: 3,
                            required: true
                        })} maxLength={3} onChange={event => setValue("cvc", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-full border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400 ${errors.cvc && "border-red-300"}`} placeholder="e.g 000" />

                    </div>

                    <input {...register("monthYear", {
                        validate: () => validateMonthYear(getValues("expiryMonth"), getValues("expiryYear"))
                    })} hidden />

                </div>
                {errors.expiryMonth && (errors.expiryMonth.type === "maxLength" || errors.expiryMonth.type === "minLength") && <ErrorMessage children="Expiry month must be 2 digits long" />}
                {errors.expiryMonth && errors.expiryMonth.type === "required" && <ErrorMessage children="Expiry month cannot be empty" />}
                {errors.expiryMonth && errors.expiryMonth.type === "validate" && <ErrorMessage children="Expiry month cannot be higher than 12" />}
                {errors.expiryYear && (errors.expiryYear.type === "maxLength" || errors.expiryYear.type === "minLength") && <ErrorMessage children="Expiry year must be 2 digits long" />}
                {errors.expiryYear && errors.expiryYear.type === "required" && <ErrorMessage children="Expiry year cannot be empty" />}
                {errors.cvc && (errors.cvc.type === "maxLength" || errors.cvc.type === "minLength") && <ErrorMessage children="CVC must be 3 digits long" />}
                {errors.cvc && errors.cvc.type === "required" && <ErrorMessage children="CVC cannot be empty" />}
                {errors.monthYear && errors.monthYear.type === "validate" && <ErrorMessage children="Expiry date cannot be in the past" />}


                <b                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>utton onClick={fillForm} className="text-indigo-600 underline underline-offset-4" type="button">Fill form</button>

        </div>
        </form >
    )
}

export default Form;