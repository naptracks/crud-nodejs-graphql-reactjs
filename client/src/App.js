import {useState} from "react"
import List from "./components/ListOfAstronauts.js"
import {useMutation} from "@apollo/client";
import { ADD_ASTRONAUT } from "./graphql/mutations.js";
import Form from "./components/Form.js";


function App() {

  const [addAstronaut] = useMutation(ADD_ASTRONAUT)
  const [state, setState] = useState({name: ""})


  const handleChange = (e) => {
    setState({
      name: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addAstronaut({variables: {
      name: state.name
    }})
  }


  return (
    <main>
      <h1>Eleven Labs: CRUD full-stack application - Nodejs, Graphql, Reactjs </h1>
      <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={state.name}
      label={"Add an astronaut"}
      />
      <List/>
    </main>
  );
}

export default App;
