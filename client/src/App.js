import { useState } from "react";
import List from "./components/ListOfAstronauts.js";
import { useMutation } from "@apollo/client";
import { ADD_ASTRONAUT } from "./graphql/mutations.js";

function App() {
  //State
  const [state, setState] = useState({ name: "", warning: false });

  //Mutation
  const [addAstronaut] = useMutation(ADD_ASTRONAUT);


  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  //add astronaut
  const handleSubmit = (e) => {
    e.preventDefault();
    //if name is empty -> warning
    if (state.name === "") {
      setState({ ...state, warning: true });
      return;
    }
    //to db
    addAstronaut({
      variables: {
        name: state.name,
      },
    });
    //reset
    setState({ name: "", warning: false });
  };

  const addAstronautForm = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type={"text"}
        name="name"
        placeholder="Add an anstronaut name..."
        onChange={(e) => handleChange(e)}
        value={state.name}
      />
      <button className="create-button" type="submit">
        Create
      </button>
    </form>
  );

  return (
    <main>
      <header>
        <h1>Eleven Labs: Astronauts List </h1>
        {addAstronautForm}
        {state.warning && <p>Provide a name to add an astronaut!</p>}
      </header>
      <List />
    </main>
  );
}

export default App;
