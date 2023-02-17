import { useQuery} from "@apollo/client";
import { Fragment } from "react";
import { GET_ALL_ASTRONAUTS } from "../graphql/queries";
import AstronautProfile from "./AstronautProfile";

const ListOfAstronauts = () => {
    const {loading, error, data}  = useQuery(GET_ALL_ASTRONAUTS)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    const {astronauts} = data 


    return (
        <div className="wrap center">
            
                {
                    astronauts.map((astronaut, key) => (
                        <Fragment key={key}><AstronautProfile astronaut={astronaut}/></Fragment>
                    ))
                }
            
        </div>
    )
}

export default ListOfAstronauts;