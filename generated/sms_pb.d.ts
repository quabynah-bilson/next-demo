import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class VerifyOtpRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): VerifyOtpRequest;

  getOtp(): string;
  setOtp(value: string): VerifyOtpRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyOtpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyOtpRequest): VerifyOtpRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyOtpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyOtpRequest;
  static deserializeBinaryFromReader(message: VerifyOtpRequest, reader: jspb.BinaryReader): VerifyOtpRequest;
}

export namespace VerifyOtpRequest {
  export type AsObject = {
    phoneNumber: string,
    otp: string,
  }
}

export class OtpModel extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): OtpModel;

  getOtp(): string;
  setOtp(value: string): OtpModel;

  getCreatedAt(): common_pb.Timestamp | undefined;
  setCreatedAt(value?: common_pb.Timestamp): OtpModel;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OtpModel;

  getExpiresAt(): common_pb.Timestamp | undefined;
  setExpiresAt(value?: common_pb.Timestamp): OtpModel;
  hasExpiresAt(): boolean;
  clearExpiresAt(): OtpModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OtpModel.AsObject;
  static toObject(includeInstance: boolean, msg: OtpModel): OtpModel.AsObject;
  static serializeBinaryToWriter(message: OtpModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OtpModel;
  static deserializeBinaryFromReader(message: OtpModel, reader: jspb.BinaryReader): OtpModel;
}

export namespace OtpModel {
  export type AsObject = {
    phoneNumber: string,
    otp: string,
    createdAt?: common_pb.Timestamp.AsObject,
    expiresAt?: common_pb.Timestamp.AsObject,
  }
}

