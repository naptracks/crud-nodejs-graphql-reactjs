import { useQuery} from "@apollo/client";
import { GET_ALL_ASTRONAUTS } from "../graphql/queries";
import AstronautProfile from "./AstronautProfile";

const ListOfAstronauts = () => {
    const {loading, error, data}  = useQuery(GET_ALL_ASTRONAUTS)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    const {astronauts} = data 


    return (
        <div className="center">
            <ul>
                {
                    astronauts.map((astronaut, key) => (
                        <li key={key}><AstronautProfile astronaut={astronaut}/></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListOfAstronauts;