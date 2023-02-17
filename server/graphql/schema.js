//graphql schema
const schema = `

    type Astronaut  {
        id: ID!
        name: String!
        isInSpace: Boolean!
    }

    type Query {
        astronauts: [Astronaut!]
    }


    type Mutation {
        addAstronaut(name: String!): Astronaut!
        updateAstronaut(id: ID!, name: String!, isInSpace: Boolean!): Astronaut!
        deleteAstronaut(id: ID!):  Astronaut!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`



export default schema;