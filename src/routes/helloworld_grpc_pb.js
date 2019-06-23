// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var helloworld_pb = require('./helloworld_pb.js');

function serialize_helloworld_HelloRequest(arg) {
  if (!(arg instanceof helloworld_pb.HelloRequest)) {
    throw new Error('Expected argument of type helloworld.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRequest(buffer_arg) {
  return helloworld_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloResponse(arg) {
  if (!(arg instanceof helloworld_pb.HelloResponse)) {
    throw new Error('Expected argument of type helloworld.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloResponse(buffer_arg) {
  return helloworld_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.HelloRequest,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloResponse,
    responseDeserialize: deserialize_helloworld_HelloResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
