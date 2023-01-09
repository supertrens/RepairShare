import { readFile } from "fs/promises";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./resolvers.js";
import { seedData } from "./utils/seedData.js";

const typeDefs = await readFile(
  new URL("schema.graphql", import.meta.url),
  "utf-8"
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

seedData();

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
