import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class DoubleValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): DoubleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoubleValue.AsObject;
  static toObject(includeInstance: boolean, msg: DoubleValue): DoubleValue.AsObject;
  static serializeBinaryToWriter(message: DoubleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleValue;
  static deserializeBinaryFromReader(message: DoubleValue, reader: jspb.BinaryReader): DoubleValue;
}

export namespace DoubleValue {
  export type AsObject = {
    value: number,
  }
}

export class FloatValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): FloatValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatValue.AsObject;
  static toObject(includeInstance: boolean, msg: FloatValue): FloatValue.AsObject;
  static serializeBinaryToWriter(message: FloatValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatValue;
  static deserializeBinaryFromReader(message: FloatValue, reader: jspb.BinaryReader): FloatValue;
}

export namespace FloatValue {
  export type AsObject = {
    value: number,
  }
}

export class Int64Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): Int64Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Value.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Value): Int64Value.AsObject;
  static serializeBinaryToWriter(message: Int64Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Value;
  static deserializeBinaryFromReader(message: Int64Value, reader: jspb.BinaryReader): Int64Value;
}

export namespace Int64Value {
  export type AsObject = {
    value: number,
  }
}

export class UInt64Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): UInt64Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UInt64Value.AsObject;
  static toObject(includeInstance: boolean, msg: UInt64Value): UInt64Value.AsObject;
  static serializeBinaryToWriter(message: UInt64Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt64Value;
  static deserializeBinaryFromReader(message: UInt64Value, reader: jspb.BinaryReader): UInt64Value;
}

export namespace UInt64Value {
  export type AsObject = {
    value: number,
  }
}

export class Int32Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): Int32Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Value.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Value): Int32Value.AsObject;
  static serializeBinaryToWriter(message: Int32Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Value;
  static deserializeBinaryFromReader(message: Int32Value, reader: jspb.BinaryReader): Int32Value;
}

export namespace Int32Value {
  export type AsObject = {
    value: number,
  }
}

export class UInt32Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): UInt32Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UInt32Value.AsObject;
  static toObject(includeInstance: boolean, msg: UInt32Value): UInt32Value.AsObject;
  static serializeBinaryToWriter(message: UInt32Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt32Value;
  static deserializeBinaryFromReader(message: UInt32Value, reader: jspb.BinaryReader): UInt32Value;
}

export namespace UInt32Value {
  export type AsObject = {
    value: number,
  }
}

export class BoolValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): BoolValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolValue.AsObject;
  static toObject(includeInstance: boolean, msg: BoolValue): BoolValue.AsObject;
  static serializeBinaryToWriter(message: BoolValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolValue;
  static deserializeBinaryFromReader(message: BoolValue, reader: jspb.BinaryReader): BoolValue;
}

export namespace BoolValue {
  export type AsObject = {
    value: boolean,
  }
}

export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringValue): StringValue.AsObject;
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export namespace StringValue {
  export type AsObject = {
    value: string,
  }
}

export class BytesValue extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): BytesValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytesValue.AsObject;
  static toObject(includeInstance: boolean, msg: BytesValue): BytesValue.AsObject;
  static serializeBinaryToWriter(message: BytesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytesValue;
  static deserializeBinaryFromReader(message: BytesValue, reader: jspb.BinaryReader): BytesValue;
}

export namespace BytesValue {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class GeoPoint extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): GeoPoint;

  getLongitude(): number;
  setLongitude(value: number): GeoPoint;

  getAddress(): string;
  setAddress(value: string): GeoPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPoint.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPoint): GeoPoint.AsObject;
  static serializeBinaryToWriter(message: GeoPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPoint;
  static deserializeBinaryFromReader(message: GeoPoint, reader: jspb.BinaryReader): GeoPoint;
}

export namespace GeoPoint {
  export type AsObject = {
    latitude: number,
    longitude: number,
    address: string,
  }
}

export enum DateFilter { 
  TODAY = 0,
  YESTERDAY = 1,
  LAST_7_DAYS = 2,
  LAST_30_DAYS = 3,
  LAST_90_DAYS = 4,
  LAST_180_DAYS = 5,
  LAST_365_DAYS = 6,
  ALL_TIME = 7,
}
