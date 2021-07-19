const { ApolloServer } = require("apollo-server-fastify");
const { readFileSync } = require("fs");
const { join } = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { appdynamicsPlugin } = require("./appdynamics");

const schema = makeExecutableSchema({
  typeDefs: readFileSync(join(__dirname, "..", "schema.gql")).toString(),
  resolvers: {
    Query: {
      viewer: () => ({
        id: "123",
        name: "ivan ivanov",
      }),
    },
  },
});

module.exports = async (app, opts, next) => {
  const server = new ApolloServer({
    schema,
    plugins: [appdynamicsPlugin],
  });

  await server.start();

  app.register(server.createHandler({ cors: false }));

  next();
};
