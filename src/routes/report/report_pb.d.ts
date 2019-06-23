// package: 
// file: report.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Message extends jspb.Message { 
    clearReportinfoList(): void;
    getReportinfoList(): Array<ReportInformation>;
    setReportinfoList(value: Array<ReportInformation>): void;
    addReportinfo(value?: ReportInformation, index?: number): ReportInformation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        reportinfoList: Array<ReportInformation.AsObject>,
    }
}

export class ReportInformation extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearStatusList(): void;
    getStatusList(): Array<ReportStatus>;
    setStatusList(value: Array<ReportStatus>): void;
    addStatus(value?: ReportStatus, index?: number): ReportStatus;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportInformation.AsObject;
    static toObject(includeInstance: boolean, msg: ReportInformation): ReportInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportInformation;
    static deserializeBinaryFromReader(message: ReportInformation, reader: jspb.BinaryReader): ReportInformation;
}

export namespace ReportInformation {
    export type AsObject = {
        id: number,
        name: string,
        statusList: Array<ReportStatus.AsObject>,
    }
}

export class ReportStatus extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportStatus.AsObject;
    static toObject(includeInstance: boolean, msg: ReportStatus): ReportStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportStatus;
    static deserializeBinaryFromReader(message: ReportStatus, reader: jspb.BinaryReader): ReportStatus;
}

export namespace ReportStatus {
    export type AsObject = {
    }

    export enum Status {
    PASS = 0,
    FAIL = 1,
    ERROR = 2,
    SKIP = 3,
    PENDING = 4,
    }

}

export class Status extends jspb.Message { 
    getStatus(): string;
    setStatus(value: string): void;

    getCode(): number;
    setCode(value: number): void;

    getErrormessage(): string;
    setErrormessage(value: string): void;

    clearReportinfoList(): void;
    getReportinfoList(): Array<ReportInformation>;
    setReportinfoList(value: Array<ReportInformation>): void;
    addReportinfo(value?: ReportInformation, index?: number): ReportInformation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: string,
        code: number,
        errormessage: string,
        reportinfoList: Array<ReportInformation.AsObject>,
    }
}
