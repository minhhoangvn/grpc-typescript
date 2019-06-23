// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('grpc');
var report_pb = require('./report_pb.js');
function serialize_Message(arg) {
    if (!(arg instanceof report_pb.Message)) {
        throw new Error('Expected argument of type Message');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_Message(buffer_arg) {
    return report_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_Status(arg) {
    if (!(arg instanceof report_pb.Status)) {
        throw new Error('Expected argument of type Status');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_Status(buffer_arg) {
    return report_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}
var ReportService = exports.ReportService = {
    crate: {
        path: '/Report/crate',
        requestStream: false,
        responseStream: false,
        requestType: report_pb.Message,
        responseType: report_pb.Status,
        requestSerialize: serialize_Message,
        requestDeserialize: deserialize_Message,
        responseSerialize: serialize_Status,
        responseDeserialize: deserialize_Status,
    },
    get: {
        path: '/Report/get',
        requestStream: false,
        responseStream: false,
        requestType: report_pb.Message,
        responseType: report_pb.Status,
        requestSerialize: serialize_Message,
        requestDeserialize: deserialize_Message,
        responseSerialize: serialize_Status,
        responseDeserialize: deserialize_Status,
    },
    edit: {
        path: '/Report/edit',
        requestStream: false,
        responseStream: false,
        requestType: report_pb.Message,
        responseType: report_pb.Status,
        requestSerialize: serialize_Message,
        requestDeserialize: deserialize_Message,
        responseSerialize: serialize_Status,
        responseDeserialize: deserialize_Status,
    },
    delete: {
        path: '/Report/delete',
        requestStream: false,
        responseStream: false,
        requestType: report_pb.Message,
        responseType: report_pb.Status,
        requestSerialize: serialize_Message,
        requestDeserialize: deserialize_Message,
        responseSerialize: serialize_Status,
        responseDeserialize: deserialize_Status,
    },
};
exports.ReportClient = grpc.makeGenericClientConstructor(ReportService);
