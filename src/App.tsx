import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import MainBgDesktop from "./bg-main-desktop.png"
import MainBgMobile from "./bg-main-mobile.png"
import { useCardStore } from "./store"

function App() {
  const { number, cvc, name, expiryYear, expiryMonth, setNumber, setCvc, setName, setExpiryYear, setExpiryMonth } = useCardStore();

  const cardFrontProps = {
    number,
    name,
    expiryMonth,
    expiryYear
  }

  const cardBackProps = {
    cvc
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="relative h-1/4 lg:h-full lg:w-1/2 bg-blue-500">
        <img className="invisible lg:visible absolute left-0 top-0 h-full w-full" src={MainBgDesktop} />
        <img className="visible lg:invisible absolute left-0 top-0 h-full w-full" src={MainBgMobile} />

        <CardFront {...cardFrontProps} className="invisible lg:visible absolute -right-24 bottom-1/2 my-5" />
        <CardBack {...cardBackProps} className="invisible lg:visible absolute  -right-32 top-1/2 my-5 " />
        <CardFront {...cardFrontProps} className="z-10 visible lg:invisible absolute left-5 -bottom-32" />
        <CardBack {...cardBackProps} className="visible lg:invisible absolute right-10 top-5 -bottom-18 " />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center">


        <p>Cardholder name</p>
        <input onChange={(event) => setName(event.target.value)} maxLength={16} />
        <p>Card number</p>
        <input type="tel" inputMode="numeric" onChange={(event) => setNumber(event.target.value)} maxLength={16} />
        <p>Expiry </p>
        <input type="text" name="month" onChange={(event) => setExpiryMonth(event.target.value)} placeholder="MM" maxLength={2} size={2} />
        <span>/</span>
        <input type="text" name="year" onChange={(event) => setExpiryYear(event.target.value)} placeholder="YY" maxLength={2} size={2} />
        <p>CVC</p>
        <input type="tel" inputMode="numeric" onChange={(event) => setCvc(event.target.value)} maxLength={3} />

        <button>Confirm</button>

      </div>
    </div>
  )
}

export default App
