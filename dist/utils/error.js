"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
class ServiceError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
        this.name = 'ServiceError';
    }
}
exports.ServiceError = ServiceError;
function serviceError(code, message) {
    return {
        name: 'ServiceError',
        code,
        message
    };
}
exports.serviceError = serviceError;
