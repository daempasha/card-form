function App() {

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">

      <div className="block h-1/4 lg:h-full lg:w-1/4 bg-blue-500">

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
