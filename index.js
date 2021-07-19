const app = require("./app");

require("appdynamics").profile({
  applicationName: "applicationName",
  accountName: "accountName",
  accountAccessKey: "accountAccessKey",
  tierName: "tierName",
  nodeName: "nodeName",
  reuseNodePrefix: true,
  controllerHostName: "controllerHostName",
  controllerPort: 443,
  controllerSslEnabled: true,
  enableGraphQL: true,
  alwaysAddEumMetadataInHttpHeaders: true,
  logging: {
    logfiles: [
      { filename: "appd_trace_%N.log", level: "TRACE" },
      {
        filename: "appd_protobuf_%N.log",
        level: "TRACE",
        channel: "protobuf",
      },
    ],
  },
});

(async function () {
  await app.listen(5000, "0.0.0.0");
})();
