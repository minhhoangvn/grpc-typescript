// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');

function serialize_Message(arg) {
  if (!(arg instanceof chat_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatService = exports.ChatService = {
  join: {
    path: '/Chat/join',
    requestStream: true,
    responseStream: true,
    requestType: chat_pb.Message,
    responseType: chat_pb.Message,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
  send: {
    path: '/Chat/send',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Message,
    responseType: chat_pb.Message,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
};

exports.ChatClient = grpc.makeGenericClientConstructor(ChatService);
// Service class to be used by the clients
