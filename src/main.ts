import { ApolloServer } from "apollo-server";
import "dotenv/config";
import { resolvers, typeDefs, sources } from "./graphgl";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => sources(),
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return token;
  },
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
