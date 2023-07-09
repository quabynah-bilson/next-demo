import * as jspb from 'google-protobuf'



export class UploadMediaRequest extends jspb.Message {
  getMedia(): Uint8Array | string;
  getMedia_asU8(): Uint8Array;
  getMedia_asB64(): string;
  setMedia(value: Uint8Array | string): UploadMediaRequest;

  getName(): string;
  setName(value: string): UploadMediaRequest;

  getOwner(): string;
  setOwner(value: string): UploadMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMediaRequest): UploadMediaRequest.AsObject;
  static serializeBinaryToWriter(message: UploadMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMediaRequest;
  static deserializeBinaryFromReader(message: UploadMediaRequest, reader: jspb.BinaryReader): UploadMediaRequest;
}

export namespace UploadMediaRequest {
  export type AsObject = {
    media: Uint8Array | string,
    name: string,
    owner: string,
  }
}

export class UploadMediaResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): UploadMediaResponse;

  getSize(): number;
  setSize(value: number): UploadMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadMediaResponse): UploadMediaResponse.AsObject;
  static serializeBinaryToWriter(message: UploadMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadMediaResponse;
  static deserializeBinaryFromReader(message: UploadMediaResponse, reader: jspb.BinaryReader): UploadMediaResponse;
}

export namespace UploadMediaResponse {
  export type AsObject = {
    url: string,
    size: number,
  }
}

