const { ApolloServer, gql } = require('apollo-server-express');
const app = require('express')();

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL
const typeDefs = gql`
`;

// Define resolvers map for API definitions in SDL
const resolvers = {
};


let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port }, () => {
    //console.log(`Listening at http://localhost:${port}${apolloServer.graphqlPath}`);
})