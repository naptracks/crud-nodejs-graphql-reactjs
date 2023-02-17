import {useState} from "react"
import List from "./components/ListOfAstronauts.js"
import {useMutation} from "@apollo/client";
import { ADD_ASTRONAUT } from "./graphql/mutations.js";



function App() {

  const [addAstronaut] = useMutation(ADD_ASTRONAUT)
  const [state, setState] = useState({name: "", warning: false})



  const handleChange = (e) => {
    setState({
      name: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(state.name === "") {
      setState({...state, warning: true})
      return;
    }
    addAstronaut({variables: {
      name: state.name
    }})
    setState({name: "", warning: false})
  }

  const addAstronautForm = (
    <form onSubmit={(e) =>  handleSubmit(e)}>
        <input type={"text"} name="name" placeholder="Add an anstronaut name..." onChange={(e) => handleChange(e)} value={state.name}/>
        <button className="create-button" type="submit">Create</button>
    </form>
    )


  return (
    <main>
      <header>
        <h1>Eleven Labs: CRUD full-stack application - Nodejs, Graphql, Reactjs </h1>
        {addAstronautForm}
        {state.warning && <p>Provide a name to add an astronaut!</p> }
      </header>
      <List/>
    </main>
  );
}

export default App;
