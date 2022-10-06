// package: greet
// file: src/app/protos/greet.proto

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): ComplexRequestMsg | undefined;
  setMsg(value?: ComplexRequestMsg): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    id: number,
    name: string,
    messageid: string,
    msg?: ComplexRequestMsg.AsObject,
  }
}

export class ComplexRequestMsg extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): void;

  getGrades(): number;
  setGrades(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexRequestMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexRequestMsg): ComplexRequestMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexRequestMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexRequestMsg;
  static deserializeBinaryFromReader(message: ComplexRequestMsg, reader: jspb.BinaryReader): ComplexRequestMsg;
}

export namespace ComplexRequestMsg {
  export type AsObject = {
    displayname: string,
    grades: number,
  }
}

export class HelloReply extends jspb.Message {
  getReplayid(): number;
  setReplayid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  hasHelloreplymsg(): boolean;
  clearHelloreplymsg(): void;
  getHelloreplymsg(): ComplexReplyMsg | undefined;
  setHelloreplymsg(value?: ComplexReplyMsg): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloReply.AsObject;
  static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloReply;
  static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
  export type AsObject = {
    replayid: number,
    name: string,
    messageid: string,
    helloreplymsg?: ComplexReplyMsg.AsObject,
  }
}

export class ComplexReplyMsg extends jspb.Message {
  getComplexreplymsgid(): number;
  setComplexreplymsgid(value: number): void;

  getDisplaynamereply(): string;
  setDisplaynamereply(value: string): void;

  getGradesreply(): number;
  setGradesreply(value: number): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  getCorrelationid(): string;
  setCorrelationid(value: string): void;

  getSentat(): number;
  setSentat(value: number): void;

  getType(): string;
  setType(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexReplyMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ComplexReplyMsg): ComplexReplyMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplexReplyMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplexReplyMsg;
  static deserializeBinaryFromReader(message: ComplexReplyMsg, reader: jspb.BinaryReader): ComplexReplyMsg;
}

export namespace ComplexReplyMsg {
  export type AsObject = {
    complexreplymsgid: number,
    displaynamereply: string,
    gradesreply: number,
    origin: string,
    correlationid: string,
    sentat: number,
    type: string,
    version: number,
  }
}

