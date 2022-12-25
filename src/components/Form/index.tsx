import { FieldValues, UseFormReturn } from "react-hook-form";
import Button from "@components/Button";
import { useAppStore } from "@/store";
import { isValidCardNumber, validateExpiryMonth, validateExpiryYear, validateMonthYear } from "./helper";
import { ErrorMessage } from "./ErrorMessage";
import FormLabel from "./FormLabel";
import FormItem from "./FormItem";
import LinkButton from "@components/LinkButton";
import { DEFAULT_FORM_DATA } from "./data";
import Input from "@components/Input";

const Form: React.FC<UseFormReturn<FieldValues, any>> = ({ handleSubmit, setValue, formState: { errors }, register, getValues }) => {
    const { state, setState } = useAppStore();


    const onSubmit = () => setState("submitted");

    const fillForm = () => {
        DEFAULT_FORM_DATA.forEach((formField => setValue(formField.field, formField.value)))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full items-center justify-center">
            <div className="my-5">
                <FormItem className="my-5">
                    <FormLabel children="Cardholder name" />
                    <Input className="md:w-[400px] " validation={{
                        pattern: {
                            value: /^[ a-zA-Z]+$/,
                            message: "Only alphabetical characters are permitted"
                        },
                        required: true
                    }} placeholder="e.g. John Doe" onChange={event => setValue("name", event.target.value.replace(/[^A-Za-z \\.]+/g, ""))} register={register} label="name" isError={errors && errors.name ? true : false} />

                    {errors?.name?.message && <ErrorMessage children={`${errors.name.message}`} />}
                    {errors.name && errors.name.type === "required" && <ErrorMessage children="Name field cannot be empty" />}

                </FormItem>


                <FormItem className="my-5">

                    <FormLabel children="Card number" />
                    <Input className="md:w-[400px]" register={register} placeholder="e.g. 1234 5678 0000 0000" onChange={event => setValue("number", event.target.value.replace(/[^0-9\\.]+/g, ""))} maxLength={16} type="text" inputMode="numeric" validation={{
                        validate: isValidCardNumber,
                        pattern: /[0-9]*/,
                        maxLength: 16,
                        minLength: 16,
                        required: true

                    }} label="number" isError={errors && errors.number ? true : false} />
                    {errors?.number?.type === "validate" && <ErrorMessage children="Card number is not valid" />}
                    {errors.number && (errors.number.type === "maxLength" || errors.number.type === "minLength") && <ErrorMessage children="Card number must be 16 digits long" />}
                    {errors.number && errors.number.type === "required" && <ErrorMessage children="Card number cannot be empty" />}
                </FormItem>


                <div className="flex flex-col md:flex-row gap-5">
                    <FormItem>
                        <FormLabel children="Exp. Date (MM/YY)" />
                        <Input validation={{
                            maxLength: 2,
                            minLength: 2,
                            required: true,
                            validate: validateExpiryMonth
                        }} placeholder="MM" className="w-14" register={register} label="expiryMonth" maxLength={2} onChange={event => setValue("expiryMonth", event.target.value.replace(/[^0-9\\.]+/g, ""))} isError={errors && errors.expiryMonth ? true : false} />
                        {errors?.expiryMonth?.message && <ErrorMessage children={`${errors.expiryMonth.message}`} />}
                        <span className="mx-1" />
                        <Input validation={{
                            maxLength: 2,
                            minLength: 2,
                            required: true,
                            validate: validateExpiryYear
                        }} placeholder="YY" className="w-14" register={register} label="expiryYear" maxLength={2} onChange={event => setValue("expiryYear", event.target.value.replace(/[^0-9\\.]+/g, ""))} isError={errors && errors.expiryYear ? true : false} />
                    </FormItem>

                    <FormItem className="flex-grow">
                        <FormLabel children="CVC" />
                        <Input
                            register={register}
                            label="cvc"
                            maxLength={3}
                            onChange={event => setValue("cvc", event.target.value.replace(/[^0-9\\.]+/g, ""))}
                            className="w-full"
                            placeholder="e.g 000"
                            validation={{
                                maxLength: 3,
                                minLength: 3,
                                required: true
                            }}
                        />

                    </FormItem>

                    <Input register={register} label="monthYear" validation={{
                        validate: () => validateMonthYear(getValues("expiryMonth"), getValues("expiryYear"))
                    }} hidden />
                </div>
                {errors.expiryMonth && (errors.expiryMonth.type === "maxLength" || errors.expiryMonth.type === "minLength") && <ErrorMessage children="Expiry month must be 2 digits long" />}
                {errors.expiryMonth && errors.expiryMonth.type === "required" && <ErrorMessage children="Expiry month cannot be empty" />}
                {errors.expiryMonth && errors.expiryMonth.type === "validate" && <ErrorMessage children="Expiry month cannot be higher than 12" />}
                {errors.expiryYear && (errors.expiryYear.type === "maxLength" || errors.expiryYear.type === "minLength") && <ErrorMessage children="Expiry year must be 2 digits long" />}
                {errors.expiryYear && errors.expiryYear.type === "required" && <ErrorMessage children="Expiry year cannot be empty" />}
                {errors.cvc && (errors.cvc.type === "maxLength" || errors.cvc.type === "minLength") && <ErrorMessage children="CVC must be 3 digits long" />}
                {errors.cvc && errors.cvc.type === "required" && <ErrorMessage children="CVC cannot be empty" />}
                {errors.monthYear && errors.monthYear.type === "validate" && <ErrorMessage children="Expiry date cannot be in the past" />}


                <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                <LinkButton onClick={fillForm}>Fill form</LinkButton>

            </div>
        </form >
    )
}

export default Form;