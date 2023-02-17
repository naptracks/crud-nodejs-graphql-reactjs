//graphql schema
const schema = `

    type Astronaut  {
        id: Int!
        name: String!
        isInSpace: Boolean!
    }

    type Query {
        astronauts: [Astronaut!]
        astronaut(id: Int!): Astronaut!
    }


    type Mutation {
        addAstronaut(name: String!): Astronaut!
        updateAstronaut(id: Int!, name: String!, isInSpace: Boolean!): Astronaut!
        deleteAstronaut(id: Int!):  Astronaut!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`



export default schema;