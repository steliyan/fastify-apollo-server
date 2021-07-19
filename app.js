const fastify = require("fastify");
const cors = require("fastify-cors");

const app = fastify();

app.get("/", (_, res) => res.status(200).send({ ok: true }));

app.register(cors, {
  exposedHeaders:
    "ADRUM_0,ADRUM_1,ADRUM_2,ADRUM_3,ADRUM_4,ADRUM_5,ADRUM_6,ADRUM_7,ADRUM_8,ADRUM_9,ADRUM_10,ADRUM_11,ADRUM_12,ADRUM_13,ADRUM_14,ADRUM_15,ADRUM_16,ADRUM_17,ADRUM_18",
});

app.register(require("./graphql"));

module.exports = app;
