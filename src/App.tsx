import { useForm, FieldValues } from "react-hook-form";
import Button from "@components/Button"
import { useAppStore } from "./store";
import dayjs from "dayjs";
import CardContainer from "@components/CardContainer"
import Success from "@components/Success";

function App() {
  const { state, setState } = useAppStore();

  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm();


  const onSubmit = (values: FieldValues) => setState("submitted");


  const isValidCardNumber = (value: string): boolean => {
    let evenSum = 0;
    let oddSum = 0;

    for (var i = 0; i < value.length; i++) {
      const integerValue = parseInt(value[i])
      if (i % 2 === 0) {
        if (integerValue * 2 >= 10) {
          evenSum += ((integerValue * 2) - 9);
        } else {
          evenSum += integerValue * 2;
        }
      } else {
        oddSum += parseInt(value[i]);
      }
    }
    return (oddSum + evenSum) % 10 === 0;
  }

  const validateExpiryMonth = (value: string): boolean => {
    return parseInt(value) <= 12;
  }

  const validateExpiryYear = (value: string): boolean => {
    const year = dayjs().format("YY")

    return parseInt(value) >= parseInt(year);
  }

  const validateMonthYear = (): boolean => {
    const month = getValues("expiryMonth")
    const year = getValues("expiryYear")

    const expiryDate = dayjs(`${month} ${year}`, "MM YY")
    const currentDate = dayjs()

    return currentDate.isBefore(expiryDate);
  }


  const fillForm = () => {
    const formFieldsToFill = [{ "field": "name", "value": "Jason Bourne" }, { "field": "number", "value": "4111111111111111" }, { "field": "expiryMonth", "value": "12" }, { "field": "expiryYear", "value": "24" }, { "field": "cvc", "value": "333" }]
    formFieldsToFill.forEach((formField => setValue(formField.field, formField.value)))
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <CardContainer watch={watch} />

      {state === "form" ?
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
              {errors?.name?.message && <p className="text-sm text-red-600">{`${errors.name.message}`}</p>}
              {errors.name && errors.name.type === "required" && <p className="text-sm text-red-600">Name field cannot be empty</p>}

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
              {errors?.number?.type === "validate" && <p className="text-sm text-red-600">Card number is not valid</p>}
              {errors.number && (errors.number.type === "maxLength" || errors.number.type === "minLength") && <p className="text-sm text-red-600">Card number must be 16 digits long</p>}
              {errors.number && errors.number.type === "required" && <p className="text-sm text-red-600">Card number cannot be empty</p>}

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
                {errors?.expiryMonth?.message && <p className="text-sm text-red-600">{`${errors.expiryMonth.message}`}</p>}
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
                validate: validateMonthYear
              })} hidden />

            </div>
            {errors.expiryMonth && (errors.expiryMonth.type === "maxLength" || errors.expiryMonth.type === "minLength") && <p className="text-sm text-red-600">Expiry month must be 2 digits long</p>}
            {errors.expiryMonth && errors.expiryMonth.type === "required" && <p className="text-sm text-red-600">Expiry month cannot be empty</p>}
            {errors.expiryMonth && errors.expiryMonth.type === "validate" && <p className="text-sm text-red-600">Expiry month cannot be higher than 12</p>}

            {errors.expiryYear && (errors.expiryYear.type === "maxLength" || errors.expiryYear.type === "minLength") && <p className="text-sm text-red-600">Expiry year must be 2 digits long</p>}
            {errors.expiryYear && errors.expiryYear.type === "required" && <p className="text-sm text-red-600">Expiry year cannot be empty</p>}

            {errors.cvc && (errors.cvc.type === "maxLength" || errors.cvc.type === "minLength") && <p className="text-sm text-red-600">CVC must be 3 digits long</p>}
            {errors.cvc && errors.cvc.type === "required" && <p className="text-sm text-red-600">CVC cannot be empty</p>}


            {errors.monthYear && errors.monthYear.type === "validate" && <p className="text-sm text-red-600">Expiry date cannot be in the past</p>}

            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
            <button onClick={fillForm} className="text-indigo-600 underline underline-offset-4" type="button">Fill form</button>

          </div>
        </form>
        : <Success />}
    </div>
  )
}

export default App
