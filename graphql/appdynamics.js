const appdynamics = require("appdynamics");

const appdynamicsPlugin = {
  requestDidStart(requestContext) {
    const { operationName } = requestContext.request;

    const transaction =
      operationName && appdynamics.startTransaction(operationName);

    return {
      willSendResponse() {
        transaction?.end();
      },
    };
  },
};

module.exports = {
  appdynamicsPlugin,
};
