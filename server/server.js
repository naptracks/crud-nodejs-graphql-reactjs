import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import resolvers from "./graphql/resolvers.js";
import schema from "./graphql/schema.js";
import cors from "cors"


const app = express();
const port = 4000;

app.use('*', cors({ origin: 'http://localhost:3000' }))

app.use("/graphql", graphqlHTTP({
    schema: buildSchema(schema),
    rootValue: resolvers,
    graphiql: true

}))


app.listen(port, () => `Server running on port ${port}`)