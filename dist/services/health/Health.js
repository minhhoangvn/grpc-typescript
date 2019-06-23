"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("grpc"));
const health_grpc_pb_1 = require("../../routes/health_grpc_pb");
exports.HealthService = health_grpc_pb_1.HealthService;
const health_pb_1 = require("../../routes/health_pb");
const utils_1 = require("../../utils");
const ServingStatus = health_pb_1.HealthCheckResponse.ServingStatus;
exports.ServingStatus = ServingStatus;
const healthStatus = new Map(Object.entries({}));
exports.healthStatus = healthStatus;
class Health {
    check(call, callback) {
        const service = call.request.getService();
        console.log(healthStatus);
        if (!healthStatus.has(service)) {
            return callback(new utils_1.ServiceError(grpc.status.NOT_FOUND, 'NotFoundService'), null);
        }
        const res = new health_pb_1.HealthCheckResponse();
        res.setStatus(healthStatus.get(service));
        callback(null, res);
    }
}
exports.Health = Health;
