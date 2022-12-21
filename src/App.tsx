import CardBack from "./components/CardBack"
import CardFront from "./components/CardFront"

function App() {

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">

      <div className="relative h-1/4 lg:h-full lg:w-1/2 bg-blue-500">
        <CardFront className="invisible lg:visible absolute -right-24 bottom-1/2 my-5" />
        <CardBack className="invisible lg:visible absolute  -right-32 top-1/2 my-5 " />
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
