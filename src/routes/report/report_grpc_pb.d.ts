// package: 
// file: report.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as report_pb from "./report_pb";

interface IReportService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    crate: IReportService_Icrate;
    get: IReportService_Iget;
    edit: IReportService_Iedit;
    delete: IReportService_Idelete;
}

interface IReportService_Icrate extends grpc.MethodDefinition<report_pb.Message, report_pb.Status> {
    path: string; // "/.Report/crate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<report_pb.Message>;
    requestDeserialize: grpc.deserialize<report_pb.Message>;
    responseSerialize: grpc.serialize<report_pb.Status>;
    responseDeserialize: grpc.deserialize<report_pb.Status>;
}
interface IReportService_Iget extends grpc.MethodDefinition<report_pb.Message, report_pb.Status> {
    path: string; // "/.Report/get"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<report_pb.Message>;
    requestDeserialize: grpc.deserialize<report_pb.Message>;
    responseSerialize: grpc.serialize<report_pb.Status>;
    responseDeserialize: grpc.deserialize<report_pb.Status>;
}
interface IReportService_Iedit extends grpc.MethodDefinition<report_pb.Message, report_pb.Status> {
    path: string; // "/.Report/edit"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<report_pb.Message>;
    requestDeserialize: grpc.deserialize<report_pb.Message>;
    responseSerialize: grpc.serialize<report_pb.Status>;
    responseDeserialize: grpc.deserialize<report_pb.Status>;
}
interface IReportService_Idelete extends grpc.MethodDefinition<report_pb.Message, report_pb.Status> {
    path: string; // "/.Report/delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<report_pb.Message>;
    requestDeserialize: grpc.deserialize<report_pb.Message>;
    responseSerialize: grpc.serialize<report_pb.Status>;
    responseDeserialize: grpc.deserialize<report_pb.Status>;
}

export const ReportService: IReportService;

export interface IReportServer {
    crate: grpc.handleUnaryCall<report_pb.Message, report_pb.Status>;
    get: grpc.handleUnaryCall<report_pb.Message, report_pb.Status>;
    edit: grpc.handleUnaryCall<report_pb.Message, report_pb.Status>;
    delete: grpc.handleUnaryCall<report_pb.Message, report_pb.Status>;
}

export interface IReportClient {
    crate(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    crate(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    crate(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    get(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    get(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    get(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    edit(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    edit(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    edit(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    delete(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    delete(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    delete(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
}

export class ReportClient extends grpc.Client implements IReportClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public crate(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public crate(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public crate(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public edit(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public edit(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public edit(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public delete(request: report_pb.Message, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public delete(request: report_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
    public delete(request: report_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.Status) => void): grpc.ClientUnaryCall;
}
