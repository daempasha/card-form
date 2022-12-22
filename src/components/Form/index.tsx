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
                <Input placeholder="e.g. John Doe" value={name} onChange={(event) => setName(event.target.value)} maxLength={16} />
            </div>

            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Card number</p>
                <Input value={number} type="tel" inputMode="numeric" onChange={(event) => setNumber(event.target.value)} maxLength={16} />
            </div>
            <div className="my-5">
                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Expiry</p>
                <Input value={expiryMonth} type="text" name="month" onChange={(event) => setExpiryMonth(event.target.value)} placeholder="MM" maxLength={2} size={2} />
                <span className="mx-2" >/</span>
                <Input value={expiryYear} type="text" name="year" onChange={(event) => setExpiryYear(event.target.value)} placeholder="YY" maxLength={2} size={2} />

            </div>
            <div className="my-5">

                <p className="uppercase text-xs tracking-widest mb-2 text-indigo-900 font-bold">Cvc</p>
                <Input value={cvc} type="tel" inputMode="numeric" onChange={(event) => setCvc(event.target.value)} maxLength={3} />
            </div>

            <Button>Confirm</Button>
        </form>
    )
}

export default Form;