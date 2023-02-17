import { gql } from "@apollo/client"

export const GET_ALL_ASTRONAUTS = gql`
query Astronauts {
  astronauts {
    id
    name
    isInSpace
  }
}
`

export const ASTRONAUT_BY_ID = gql`
    query AstronautById($id: Int!) {
        astronaut(id: $id) {
            id
            name
        }
    }
`

