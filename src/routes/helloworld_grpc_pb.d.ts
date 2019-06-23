// package: helloworld
// file: helloworld.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as helloworld_pb from "./helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse> {
    path: string; // "/helloworld.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
