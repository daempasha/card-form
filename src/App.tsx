import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import MainBgDesktop from "./bg-main-desktop.png"
import MainBgMobile from "./bg-main-mobile.png"
import { useCardStore } from "./store"
import Form from "./components/Form"

function App() {
  const { number, cvc, name, expiryYear, expiryMonth } = useCardStore();

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

        <CardFront {...cardFrontProps} className="transition-all hidden lg:flex absolute -right-24 bottom-1/2 my-5" />
        <CardBack {...cardBackProps} className="hidden lg:flex absolute -right-32 top-1/2 my-5 " />
        <CardFront {...cardFrontProps} className="z-10 flex lg:hidden absolute left-5 -bottom-32" />
        <CardBack {...cardBackProps} className="flex lg:hidden absolute right-10 top-5 -bottom-18 " />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center">

        <Form />

      </div>
    </div>
  )
}

export default App
