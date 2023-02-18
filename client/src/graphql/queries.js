import { gql } from "@apollo/client";

export const GET_ALL_ASTRONAUTS = gql`
  query Astronauts {
    astronauts {
      id
      name
      isInSpace
    }
  }
`;
