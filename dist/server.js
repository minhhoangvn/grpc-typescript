"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = require("grpc");
const health_1 = require("./services/health");
const hello_1 = require("./services/hello");
const utils_1 = require("./utils");
let port = 50051;
if (process.env.NODE_APP_INSTANCE) {
    port = port + Number(process.env.NODE_APP_INSTANCE);
}
const server = new grpc_1.Server();
server.addService(health_1.HealthService, new health_1.Health());
server.addService(hello_1.GreeterService, new hello_1.Hello(health_1.healthStatus));
server.bind(`0.0.0.0:${port}`, grpc_1.ServerCredentials.createInsecure());
server.start();
utils_1.logger.info(`gRPC:Server`, new Date().toDateString());
