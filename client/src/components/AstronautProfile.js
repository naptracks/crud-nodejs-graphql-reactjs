import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_ASTRONAUT, UPDATE_ASTRONAUT } from "../graphql/mutations";

const AstronautProfile = ({astronaut}) => {

    //Mutations
    const [updateAstronaut] = useMutation(UPDATE_ASTRONAUT)
    const [deleteAstronaut] = useMutation(DELETE_ASTRONAUT)

    //States
    const [state, setState] = useState({name: "", isInSpace: false})
    const [edit, setEdit] = useState(false)

    //store data to state
    useEffect(() => {
        setState({name: astronaut.name, isInSpace: astronaut.isInSpace})
    }, [astronaut])

    //update isInSpace
    const handleClick = () => {
        setState(!state.isInSpace)
        updateAstronaut({variables : {
            id: astronaut.id,
            name: state.name,
            isInSpace: !state.isInSpace
        }})
    }
    // update name
    const handleSubmit = (e) => {
        e.preventDefault()
        updateAstronaut({variables: {
            id: astronaut.id,
            name: state.name,
            isInSpace: astronaut.isInSpace
        }})
        setEdit(false)
    }

    const handleChange = (e) => {
        setState({
          name: e.target.value
        })
      }

    const form = (
        <form onSubmit={(e) =>  handleSubmit(e)}>
            <input type={"text"} name="name" onChange={(e) => handleChange(e)} value={state.name}/>
            <button type="submit">Update</button>
        </form>
    )

    return (
        <div className="card">
            {/* update name */}
            <div>
                {
                   edit ? 
                   form : 
                   <div> <p>{state.name}</p> <button onClick={() => setEdit(!edit)}>Edit</button> </div>
                }
            </div>
            
            {/* update isInSpace */}
            <p>{astronaut.isInSpace ? `${state.name} is in space` : `${state.name} is  on earth`}</p>
            <button onClick={() => handleClick()}>{state.isInSpace ? "Come back on earth" : "Go to space"}</button>

            {/* delete astronaut*/}
            <button onClick={() => deleteAstronaut({variables: {id: astronaut.id}})}>Delete</button>
        </div>
    )
}

export default AstronautProfile;