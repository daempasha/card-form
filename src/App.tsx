import { useForm } from "react-hook-form";
import { useAppStore } from "./store";
import CardContainer from "@components/CardContainer"
import Success from "@components/Success";
import Form from "@components/Form";

function App() {
  const state = useAppStore(state => state.state)
  const formProps = useForm();

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <CardContainer watch={formProps.watch} />

      {state === "form" ?
        <Form {...formProps} />
        : <Success />}
    </div>
  )
}

export default App
