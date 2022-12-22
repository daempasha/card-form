import { useCardStore } from "../../store";
import Button from "../Button";
import Input from "../Input";

const Form = () => {
    const { number, cvc, name, expiryYear, expiryMonth, setNumber, setCvc, setName, setExpiryYear, setExpiryMonth } = useCardStore();


    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitForm}>
            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Cardholder name</p>
                <Input className="w-[400px]" placeholder="e.g. John Doe" value={name} onChange={(event) => setName(event.target.value)} maxLength={16} />
            </div>

            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Card number</p>
                <Input className="w-[400px]" placeholder="e.g. 1234 4567 8534 2934" value={number} type="tel" inputMode="numeric" onChange={(event) => setNumber(event.target.value)} maxLength={16} />
            </div>
            <div className="my-5 flex gap-5">
                <div>
                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Expiry Date (MM/YY)</p>

                    <Input value={expiryMonth} type="text" name="month" onChange={(event) => setExpiryMonth(event.target.value)} placeholder="MM" maxLength={2} size={2} />
                    <span className="mx-1" />
                    <Input value={expiryYear} type="text" name="year" onChange={(event) => setExpiryYear(event.target.value)} placeholder="YY" maxLength={2} size={2} />
                </div>

                <div className="flex-grow">
                    <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">CVC</p>
                    <Input className="w-full" placeholder="e.g. 123" value={cvc} type="tel" inputMode="numeric" onChange={(event) => setCvc(event.target.value)} maxLength={3} />
                </div>
            </div>
            <div className="my-5">


            </div>

            <Button>Confirm</Button>
        </form>
    )
}

export default Form;