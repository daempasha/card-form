import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import MainBgDesktop from "./bg-main-desktop.png"
import MainBgMobile from "./bg-main-mobile.png"
import IconComplete from "./icon-complete.svg"
import { useForm, FieldValues } from "react-hook-form";
import Button from "./components/Button"
import { useEffect } from "react"
import { useAppStore } from "./store";

function App() {
  const { state, setState } = useAppStore();

  const { register, handleSubmit, watch, formState: { errors }, getValues, setValue } = useForm({

  });


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

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="relative h-1/4 lg:h-full lg:w-1/2 bg-blue-500">
        <img className="invisible lg:visible absolute left-0 top-0 h-full w-full" src={MainBgDesktop} />
        <img className="visible lg:invisible absolute left-0 top-0 h-full w-full" src={MainBgMobile} />

        <CardFront watch={watch} className="transition-all hidden lg:flex absolute -right-24 bottom-1/2 my-5" />
        <CardBack watch={watch} className="hidden lg:flex absolute -right-32 top-1/2 my-5 " />
        <CardFront watch={watch} className="z-10 flex lg:hidden absolute left-5 -bottom-32" />
        <CardBack watch={watch} className="flex lg:hidden absolute right-10 top-5 -bottom-18 " />
      </div>

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
              })} onChange={event => setValue("name", event.target.value.replace(/[^A-Za-z \\.]+/g, ""))} className={`w-[400px] border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="e.g. John Doe" />
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
              )} type="text" inputMode="numeric" maxLength={16} onChange={event => setValue("number", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-[400px] border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="e.g. 1234 5678 0000 0000" />
              {errors?.number?.type === "validate" && <p className="text-sm text-red-600">Card number is not valid</p>}
              {errors.number && (errors.number.type === "maxLength" || errors.number.type === "minLength") && <p className="text-sm text-red-600">Card number must be 16 digits long</p>}
              {errors.number && errors.number.type === "required" && <p className="text-sm text-red-600">Card number cannot be empty</p>}

            </div>

            <div className="my-5 flex gap-5">
              <div>
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Exp. Date (MM/YY)</p>
                <input {...register("expiryMonth", {
                  maxLength: 2,
                  minLength: 2,
                  required: true
                })} maxLength={2} onChange={event => setValue("expiryMonth", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-14 border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="MM" />
                {errors?.expiryMonth?.message && <p className="text-sm text-red-600">{`${errors.expiryMonth.message}`}</p>}
                <span className="mx-1" />
                <input {...register("expiryYear", {
                  maxLength: 2,
                  minLength: 2,
                  required: true
                })} maxLength={2} onChange={event => setValue("expiryYear", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-14 border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="YY" />
              </div>

              <div className="flex-grow">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">CVC</p>
                <input {...register("cvc", {
                  maxLength: 3,
                  minLength: 3,
                  required: true
                })} maxLength={3} onChange={event => setValue("cvc", event.target.value.replace(/[^0-9\\.]+/g, ""))} className={`w-full border-[1px] px-3 py-2 border-gray-300 rounded-md outline-none focus:ring-2 ring-indigo-400`} placeholder="e.g 000" />

              </div>

            </div>
            {errors.expiryMonth && (errors.expiryMonth.type === "maxLength" || errors.expiryMonth.type === "minLength") && <p className="text-sm text-red-600">Expiry month must be 2 digits long</p>}
            {errors.expiryMonth && errors.expiryMonth.type === "required" && <p className="text-sm text-red-600">Expiry month cannot be empty</p>}
            {errors.expiryYear && (errors.expiryYear.type === "maxLength" || errors.expiryYear.type === "minLength") && <p className="text-sm text-red-600">Expiry year must be 2 digits long</p>}
            {errors.expiryYear && errors.expiryYear.type === "required" && <p className="text-sm text-red-600">Expiry year cannot be empty</p>}
            {errors.cvc && (errors.cvc.type === "maxLength" || errors.cvc.type === "minLength") && <p className="text-sm text-red-600">CVC must be 3 digits long</p>}
            {errors.cvc && errors.cvc.type === "required" && <p className="text-sm text-red-600">CVC cannot be empty</p>}

            <Button>Submit</Button>
          </div>
        </form>
        : <div className="flex flex-col w-full h-full items-center justify-center">
          <img className="mb-5" src={IconComplete} />
          <p className="text-2xl uppercase text-purple-900  tracking-wider font-mono">Thank you!</p>
          <p className="text-gray-500 font-semibold mt-2 ">We've added your card details.</p>
        </div>}
    </div>
  )
}

export default App