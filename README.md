# Setup

1. Update the AppDynamics related configuration in the `index.js` file
2. Execute the following commands:

```sh
yarn       # Install all packages
yarn start # Run the backend (fastify + Apollo Server + AppDynamics)
```

# Execute a sample request

To issue a sample request, execute the following:

```sh
./fetch-viewer.sh
```

There is `fetch-viewer-without-operation-name.sh` which executes the same request, but without the `operationName` being set.

# Resources

- [fastify](https://www.fastify.io/docs/latest/Lifecycle/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/integrations/plugins-event-reference/#requestdidstart)
