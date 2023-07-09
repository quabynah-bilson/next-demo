import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class SubscriptionRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): SubscriptionRequest;

  getDeviceId(): string;
  setDeviceId(value: string): SubscriptionRequest;

  getDays(): number;
  setDays(value: number): SubscriptionRequest;

  getCreditCard(): SubscriptionWithCreditCard | undefined;
  setCreditCard(value?: SubscriptionWithCreditCard): SubscriptionRequest;
  hasCreditCard(): boolean;
  clearCreditCard(): SubscriptionRequest;

  getMobileMoney(): SubscriptionWithMobileMoney | undefined;
  setMobileMoney(value?: SubscriptionWithMobileMoney): SubscriptionRequest;
  hasMobileMoney(): boolean;
  clearMobileMoney(): SubscriptionRequest;

  getRecurring(): boolean;
  setRecurring(value: boolean): SubscriptionRequest;

  getSubscriptionPaymentMethodCase(): SubscriptionRequest.SubscriptionPaymentMethodCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionRequest): SubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: SubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionRequest;
  static deserializeBinaryFromReader(message: SubscriptionRequest, reader: jspb.BinaryReader): SubscriptionRequest;
}

export namespace SubscriptionRequest {
  export type AsObject = {
    phoneNumber: string,
    deviceId: string,
    days: number,
    creditCard?: SubscriptionWithCreditCard.AsObject,
    mobileMoney?: SubscriptionWithMobileMoney.AsObject,
    recurring: boolean,
  }

  export enum SubscriptionPaymentMethodCase { 
    SUBSCRIPTION_PAYMENT_METHOD_NOT_SET = 0,
    CREDIT_CARD = 4,
    MOBILE_MONEY = 5,
  }
}

export class SubscriptionWithCreditCard extends jspb.Message {
  getCardNumber(): string;
  setCardNumber(value: string): SubscriptionWithCreditCard;

  getCardExpiryMonth(): string;
  setCardExpiryMonth(value: string): SubscriptionWithCreditCard;

  getCardExpiryYear(): string;
  setCardExpiryYear(value: string): SubscriptionWithCreditCard;

  getCardCvv(): string;
  setCardCvv(value: string): SubscriptionWithCreditCard;

  getCardHolderName(): string;
  setCardHolderName(value: string): SubscriptionWithCreditCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionWithCreditCard.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionWithCreditCard): SubscriptionWithCreditCard.AsObject;
  static serializeBinaryToWriter(message: SubscriptionWithCreditCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionWithCreditCard;
  static deserializeBinaryFromReader(message: SubscriptionWithCreditCard, reader: jspb.BinaryReader): SubscriptionWithCreditCard;
}

export namespace SubscriptionWithCreditCard {
  export type AsObject = {
    cardNumber: string,
    cardExpiryMonth: string,
    cardExpiryYear: string,
    cardCvv: string,
    cardHolderName: string,
  }
}

export class SubscriptionWithMobileMoney extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): SubscriptionWithMobileMoney;

  getNetwork(): SubscriptionNetworkCode;
  setNetwork(value: SubscriptionNetworkCode): SubscriptionWithMobileMoney;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionWithMobileMoney.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionWithMobileMoney): SubscriptionWithMobileMoney.AsObject;
  static serializeBinaryToWriter(message: SubscriptionWithMobileMoney, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionWithMobileMoney;
  static deserializeBinaryFromReader(message: SubscriptionWithMobileMoney, reader: jspb.BinaryReader): SubscriptionWithMobileMoney;
}

export namespace SubscriptionWithMobileMoney {
  export type AsObject = {
    phoneNumber: string,
    network: SubscriptionNetworkCode,
  }
}

export class Subscription extends jspb.Message {
  getId(): string;
  setId(value: string): Subscription;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Subscription;

  getDeviceId(): string;
  setDeviceId(value: string): Subscription;

  getDays(): number;
  setDays(value: number): Subscription;

  getStatus(): SubscriptionStatus;
  setStatus(value: SubscriptionStatus): Subscription;

  getExpiryDate(): common_pb.Timestamp | undefined;
  setExpiryDate(value?: common_pb.Timestamp): Subscription;
  hasExpiryDate(): boolean;
  clearExpiryDate(): Subscription;

  getRecurring(): boolean;
  setRecurring(value: boolean): Subscription;

  getAccountName(): string;
  setAccountName(value: string): Subscription;

  getAccountNumber(): string;
  setAccountNumber(value: string): Subscription;

  getCreatedAt(): common_pb.Timestamp | undefined;
  setCreatedAt(value?: common_pb.Timestamp): Subscription;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Subscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    id: string,
    phoneNumber: string,
    deviceId: string,
    days: number,
    status: SubscriptionStatus,
    expiryDate?: common_pb.Timestamp.AsObject,
    recurring: boolean,
    accountName: string,
    accountNumber: string,
    createdAt?: common_pb.Timestamp.AsObject,
  }
}

export class SubscriptionList extends jspb.Message {
  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): SubscriptionList;
  clearSubscriptionsList(): SubscriptionList;
  addSubscriptions(value?: Subscription, index?: number): Subscription;

  getIncomeFromSubscriptions(): number;
  setIncomeFromSubscriptions(value: number): SubscriptionList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionList.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionList): SubscriptionList.AsObject;
  static serializeBinaryToWriter(message: SubscriptionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionList;
  static deserializeBinaryFromReader(message: SubscriptionList, reader: jspb.BinaryReader): SubscriptionList;
}

export namespace SubscriptionList {
  export type AsObject = {
    subscriptionsList: Array<Subscription.AsObject>,
    incomeFromSubscriptions: number,
  }
}

export class SubscriptionPackage extends jspb.Message {
  getName(): string;
  setName(value: string): SubscriptionPackage;

  getDays(): number;
  setDays(value: number): SubscriptionPackage;

  getPrice(): number;
  setPrice(value: number): SubscriptionPackage;

  getDialCode(): string;
  setDialCode(value: string): SubscriptionPackage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPackage.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPackage): SubscriptionPackage.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPackage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPackage;
  static deserializeBinaryFromReader(message: SubscriptionPackage, reader: jspb.BinaryReader): SubscriptionPackage;
}

export namespace SubscriptionPackage {
  export type AsObject = {
    name: string,
    days: number,
    price: number,
    dialCode: string,
  }
}

export class SubscriptionPackageList extends jspb.Message {
  getPackagesList(): Array<SubscriptionPackage>;
  setPackagesList(value: Array<SubscriptionPackage>): SubscriptionPackageList;
  clearPackagesList(): SubscriptionPackageList;
  addPackages(value?: SubscriptionPackage, index?: number): SubscriptionPackage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionPackageList.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionPackageList): SubscriptionPackageList.AsObject;
  static serializeBinaryToWriter(message: SubscriptionPackageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionPackageList;
  static deserializeBinaryFromReader(message: SubscriptionPackageList, reader: jspb.BinaryReader): SubscriptionPackageList;
}

export namespace SubscriptionPackageList {
  export type AsObject = {
    packagesList: Array<SubscriptionPackage.AsObject>,
  }
}

export class SubscribedPackageResponse extends jspb.Message {
  getPackage(): SubscriptionPackage | undefined;
  setPackage(value?: SubscriptionPackage): SubscribedPackageResponse;
  hasPackage(): boolean;
  clearPackage(): SubscribedPackageResponse;

  getRidersSubscribed(): number;
  setRidersSubscribed(value: number): SubscribedPackageResponse;

  getTotalSubscriptions(): number;
  setTotalSubscriptions(value: number): SubscribedPackageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribedPackageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribedPackageResponse): SubscribedPackageResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribedPackageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribedPackageResponse;
  static deserializeBinaryFromReader(message: SubscribedPackageResponse, reader: jspb.BinaryReader): SubscribedPackageResponse;
}

export namespace SubscribedPackageResponse {
  export type AsObject = {
    pb_package?: SubscriptionPackage.AsObject,
    ridersSubscribed: number,
    totalSubscriptions: number,
  }
}

export class RiderSubscriptionPackageList extends jspb.Message {
  getTotalSubscriptionsList(): Array<SubscribedPackageResponse>;
  setTotalSubscriptionsList(value: Array<SubscribedPackageResponse>): RiderSubscriptionPackageList;
  clearTotalSubscriptionsList(): RiderSubscriptionPackageList;
  addTotalSubscriptions(value?: SubscribedPackageResponse, index?: number): SubscribedPackageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiderSubscriptionPackageList.AsObject;
  static toObject(includeInstance: boolean, msg: RiderSubscriptionPackageList): RiderSubscriptionPackageList.AsObject;
  static serializeBinaryToWriter(message: RiderSubscriptionPackageList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiderSubscriptionPackageList;
  static deserializeBinaryFromReader(message: RiderSubscriptionPackageList, reader: jspb.BinaryReader): RiderSubscriptionPackageList;
}

export namespace RiderSubscriptionPackageList {
  export type AsObject = {
    totalSubscriptionsList: Array<SubscribedPackageResponse.AsObject>,
  }
}

export class GetSubscriptionsRequest extends jspb.Message {
  getDateFilter(): common_pb.DateFilter;
  setDateFilter(value: common_pb.DateFilter): GetSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionsRequest): GetSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionsRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionsRequest, reader: jspb.BinaryReader): GetSubscriptionsRequest;
}

export namespace GetSubscriptionsRequest {
  export type AsObject = {
    dateFilter: common_pb.DateFilter,
  }
}

export enum SubscriptionNetworkCode { 
  MTN = 0,
  VODAFONE = 1,
  AIRTELTIGO = 2,
}
export enum SubscriptionStatus { 
  ACTIVE = 0,
  EXPIRED = 1,
  CANCELLED = 2,
}
