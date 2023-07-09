/**
 * @fileoverview gRPC-Web generated client stub for media
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: media_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as media_pb from './media_pb';


export class MediaServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorupload_media = new grpcWeb.MethodDescriptor(
    '/media.MediaService/upload_media',
    grpcWeb.MethodType.UNARY,
    media_pb.UploadMediaRequest,
    media_pb.UploadMediaResponse,
    (request: media_pb.UploadMediaRequest) => {
      return request.serializeBinary();
    },
    media_pb.UploadMediaResponse.deserializeBinary
  );

  upload_media(
    request: media_pb.UploadMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<media_pb.UploadMediaResponse>;

  upload_media(
    request: media_pb.UploadMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: media_pb.UploadMediaResponse) => void): grpcWeb.ClientReadableStream<media_pb.UploadMediaResponse>;

  upload_media(
    request: media_pb.UploadMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: media_pb.UploadMediaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/media.MediaService/upload_media',
        request,
        metadata || {},
        this.methodDescriptorupload_media,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/media.MediaService/upload_media',
    request,
    metadata || {},
    this.methodDescriptorupload_media);
  }

}
