import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"
import MainBgDesktop from "./bg-main-desktop.png"
import MainBgMobile from "./bg-main-mobile.png"

function App() {

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="relative h-1/4 lg:h-full lg:w-1/2 bg-blue-500">
        <img className="invisible lg:visible absolute left-0 top-0 h-full w-full" src={MainBgDesktop} />
        <img className="visible lg:invisible absolute left-0 top-0 h-full w-full" src={MainBgMobile} />

        <CardFront className="invisible lg:visible absolute -right-24 bottom-1/2 my-5" />
        <CardBack className="invisible lg:visible absolute  -right-32 top-1/2 my-5 " />
        <CardFront className="z-10 visible lg:invisible absolute left-5 -bottom-32" />
        <CardBack className="visible lg:invisible absolute right-10 top-5 -bottom-18 " />
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center">

        <p>Cardholder name</p>
        <p>Card number</p>
        <p>Exp date CVC</p>
        <button>Confirm</button>

      </div>
    </div>
  )
}

export default App
