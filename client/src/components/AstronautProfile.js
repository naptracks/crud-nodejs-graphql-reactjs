import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ASTRONAUT } from "../graphql/mutations";

const AstronautProfile = ({astronaut}) => {

    const [updateAstronaut] = useMutation(UPDATE_ASTRONAUT)
    const [state, setState] = useState({name: "", isInSpace: false})

    useEffect(() => {
        setState({name: astronaut.name, isInSpace: astronaut.isInSpace})
    }, [astronaut])

    const handleClick = () => {
        setState(!state.isInSpace)
        updateAstronaut({variables : {
            id: astronaut.id,
            name: state.name,
            isInSpace: !state.isInSpace
        }})
    }

    return (
        <div className="card">
            <div>
                
                <p>{astronaut.name}</p>
                
            </div>
           
            <p>{astronaut.isInSpace ? `${astronaut.name} is in space` : `${astronaut.name} is  on earth`}</p>
            <button onClick={() => handleClick()}>{state.isInSpace ? "Come back on earth" : "Go to space"}</button>
        </div>
    )
}

export default AstronautProfile;