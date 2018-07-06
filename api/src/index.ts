import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => "Hello from graphql api server"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`API server ready at ${url}`);
});
