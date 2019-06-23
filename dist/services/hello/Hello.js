"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloworld_grpc_pb_1 = require("../../routes/helloworld_grpc_pb");
exports.GreeterService = helloworld_grpc_pb_1.GreeterService;
const health_pb_1 = require("../../routes/health_pb");
const helloworld_pb_1 = require("../../routes/helloworld_pb");
class Hello {
    constructor(healthStatus) {
        healthStatus.set('helloworld.Greeter', health_pb_1.HealthCheckResponse.ServingStatus.SERVING);
    }
    sayHello(call, callback) {
        const requestName = call.request.getName();
        const res = new helloworld_pb_1.HelloResponse();
        res.setMessage(`Reply from server and hello ${requestName}`);
        callback(null, res);
    }
}
exports.Hello = Hello;
