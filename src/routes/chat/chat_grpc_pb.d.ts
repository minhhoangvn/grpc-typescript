// package: 
// file: chat.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    join: IChatService_Ijoin;
    send: IChatService_Isend;
}

interface IChatService_Ijoin extends grpc.MethodDefinition<chat_pb.Message, chat_pb.Message> {
    path: string; // "/.Chat/join"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}
interface IChatService_Isend extends grpc.MethodDefinition<chat_pb.Message, chat_pb.Message> {
    path: string; // "/.Chat/send"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}

export const ChatService: IChatService;

export interface IChatServer {
    join: grpc.handleBidiStreamingCall<chat_pb.Message, chat_pb.Message>;
    send: grpc.handleUnaryCall<chat_pb.Message, chat_pb.Message>;
}

export interface IChatClient {
    join(): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    join(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    join(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    send(request: chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    send(request: chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    send(request: chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
}

export class ChatClient extends grpc.Client implements IChatClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public join(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    public join(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    public send(request: chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    public send(request: chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    public send(request: chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
}
