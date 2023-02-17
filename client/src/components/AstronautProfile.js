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
            <input type={"text"} placeholder="Add a name..." name="name" onChange={(e) => handleChange(e)} value={state.name}/>
            <button className="update-button" type="submit">Update</button>
        </form>
        )

    return (
        <div className="profile center column">
            <h1>Astronaut</h1>
            <h2>{state.name}</h2> 
            {
                edit ? 
                form : 
                <div> 
                    {/* update name */}
                    <button className="edit-button" onClick={() => setEdit(!edit)}>Edit</button> 
                    {/* delete astronaut*/}
                    <button className="delete-button" onClick={() => deleteAstronaut({variables: {id: astronaut.id}})}>Delete</button>
                </div>
            }
            {/* update isInSpace */}
            <p>{astronaut.isInSpace ? `${state.name} is in space` : `${state.name} is  on earth`}</p>
            <button className="isInSpace-button" onClick={() => handleClick()}>{state.isInSpace ? "Come back on earth" : "Go to space"}</button>
        </div>
    )
}

export default AstronautProfile;