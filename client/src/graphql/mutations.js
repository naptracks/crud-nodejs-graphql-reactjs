import {gql} from "@apollo/client";

export const ADD_ASTRONAUT = gql`
    mutation AddAstronaut($name: String!) {
        addAstronaut(name: $name) {
            id
            name
            isInSpace
        }
    }
`

export const UPDATE_ASTRONAUT = gql`
  mutation UpdateAstronaut($id: ID!, $name: String!, $isInSpace: Boolean! ) {
        updateAstronaut(id: $id, name: $name, isInSpace: $isInSpace) {
            id
            name
            isInSpace
        }
    }
`

export const DELETE_ASTRONAUT = gql`
  mutation DeleteAstronaut($id: ID!) {
        deleteAstronaut(id: $id) {
            id
            name
            isInSpace
        }
    }
`