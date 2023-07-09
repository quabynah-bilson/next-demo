import * as jspb from 'google-protobuf'

import * as auth_pb from './auth_pb';
import * as common_pb from './common_pb';
import * as subscription_pb from './subscription_pb';


export class AdminLoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AdminLoginRequest;

  getPassword(): string;
  setPassword(value: string): AdminLoginRequest;

  getRememberMe(): boolean;
  setRememberMe(value: boolean): AdminLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminLoginRequest): AdminLoginRequest.AsObject;
  static serializeBinaryToWriter(message: AdminLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminLoginRequest;
  static deserializeBinaryFromReader(message: AdminLoginRequest, reader: jspb.BinaryReader): AdminLoginRequest;
}

export namespace AdminLoginRequest {
  export type AsObject = {
    username: string,
    password: string,
    rememberMe: boolean,
  }
}

export class AdminChangePasswordRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): AdminChangePasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): AdminChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminChangePasswordRequest): AdminChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: AdminChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminChangePasswordRequest;
  static deserializeBinaryFromReader(message: AdminChangePasswordRequest, reader: jspb.BinaryReader): AdminChangePasswordRequest;
}

export namespace AdminChangePasswordRequest {
  export type AsObject = {
    oldPassword: string,
    newPassword: string,
  }
}

export class AdminList extends jspb.Message {
  getAdminsList(): Array<Admin>;
  setAdminsList(value: Array<Admin>): AdminList;
  clearAdminsList(): AdminList;
  addAdmins(value?: Admin, index?: number): Admin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminList.AsObject;
  static toObject(includeInstance: boolean, msg: AdminList): AdminList.AsObject;
  static serializeBinaryToWriter(message: AdminList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminList;
  static deserializeBinaryFromReader(message: AdminList, reader: jspb.BinaryReader): AdminList;
}

export namespace AdminList {
  export type AsObject = {
    adminsList: Array<Admin.AsObject>,
  }
}

export class Admin extends jspb.Message {
  getId(): string;
  setId(value: string): Admin;

  getUsername(): string;
  setUsername(value: string): Admin;

  getAdminType(): AdminType;
  setAdminType(value: AdminType): Admin;

  getFullName(): string;
  setFullName(value: string): Admin;

  getDialCode(): string;
  setDialCode(value: string): Admin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Admin.AsObject;
  static toObject(includeInstance: boolean, msg: Admin): Admin.AsObject;
  static serializeBinaryToWriter(message: Admin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Admin;
  static deserializeBinaryFromReader(message: Admin, reader: jspb.BinaryReader): Admin;
}

export namespace Admin {
  export type AsObject = {
    id: string,
    username: string,
    adminType: AdminType,
    fullName: string,
    dialCode: string,
  }
}

export class AdminCreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AdminCreateRequest;

  getPassword(): string;
  setPassword(value: string): AdminCreateRequest;

  getAdminType(): AdminType;
  setAdminType(value: AdminType): AdminCreateRequest;

  getFullName(): string;
  setFullName(value: string): AdminCreateRequest;

  getDialCode(): string;
  setDialCode(value: string): AdminCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCreateRequest): AdminCreateRequest.AsObject;
  static serializeBinaryToWriter(message: AdminCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCreateRequest;
  static deserializeBinaryFromReader(message: AdminCreateRequest, reader: jspb.BinaryReader): AdminCreateRequest;
}

export namespace AdminCreateRequest {
  export type AsObject = {
    username: string,
    password: string,
    adminType: AdminType,
    fullName: string,
    dialCode: string,
  }
}

export class RiderList extends jspb.Message {
  getRidersList(): Array<Rider>;
  setRidersList(value: Array<Rider>): RiderList;
  clearRidersList(): RiderList;
  addRiders(value?: Rider, index?: number): Rider;

  getActiveRiders(): number;
  setActiveRiders(value: number): RiderList;

  getTotalRiders(): number;
  setTotalRiders(value: number): RiderList;

  getTotalOfflineRiders(): number;
  setTotalOfflineRiders(value: number): RiderList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiderList.AsObject;
  static toObject(includeInstance: boolean, msg: RiderList): RiderList.AsObject;
  static serializeBinaryToWriter(message: RiderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiderList;
  static deserializeBinaryFromReader(message: RiderList, reader: jspb.BinaryReader): RiderList;
}

export namespace RiderList {
  export type AsObject = {
    ridersList: Array<Rider.AsObject>,
    activeRiders: number,
    totalRiders: number,
    totalOfflineRiders: number,
  }
}

export class CustomerList extends jspb.Message {
  getCustomersList(): Array<auth_pb.UserAccount>;
  setCustomersList(value: Array<auth_pb.UserAccount>): CustomerList;
  clearCustomersList(): CustomerList;
  addCustomers(value?: auth_pb.UserAccount, index?: number): auth_pb.UserAccount;

  getActiveCustomers(): number;
  setActiveCustomers(value: number): CustomerList;

  getTotalCustomers(): number;
  setTotalCustomers(value: number): CustomerList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerList.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerList): CustomerList.AsObject;
  static serializeBinaryToWriter(message: CustomerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerList;
  static deserializeBinaryFromReader(message: CustomerList, reader: jspb.BinaryReader): CustomerList;
}

export namespace CustomerList {
  export type AsObject = {
    customersList: Array<auth_pb.UserAccount.AsObject>,
    activeCustomers: number,
    totalCustomers: number,
  }
}

export class GetAccountsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): GetAccountsRequest;

  getStatus(): auth_pb.AccountStatus;
  setStatus(value: auth_pb.AccountStatus): GetAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsRequest): GetAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsRequest;
  static deserializeBinaryFromReader(message: GetAccountsRequest, reader: jspb.BinaryReader): GetAccountsRequest;
}

export namespace GetAccountsRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
    status: auth_pb.AccountStatus,
  }
}

export class Rider extends jspb.Message {
  getAccount(): auth_pb.UserAccount | undefined;
  setAccount(value?: auth_pb.UserAccount): Rider;
  hasAccount(): boolean;
  clearAccount(): Rider;

  getSubscription(): subscription_pb.Subscription | undefined;
  setSubscription(value?: subscription_pb.Subscription): Rider;
  hasSubscription(): boolean;
  clearSubscription(): Rider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rider.AsObject;
  static toObject(includeInstance: boolean, msg: Rider): Rider.AsObject;
  static serializeBinaryToWriter(message: Rider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rider;
  static deserializeBinaryFromReader(message: Rider, reader: jspb.BinaryReader): Rider;
}

export namespace Rider {
  export type AsObject = {
    account?: auth_pb.UserAccount.AsObject,
    subscription?: subscription_pb.Subscription.AsObject,
  }
}

export class UpdateSubscriptionRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): UpdateSubscriptionRequest;

  getSubscription(): subscription_pb.Subscription | undefined;
  setSubscription(value?: subscription_pb.Subscription): UpdateSubscriptionRequest;
  hasSubscription(): boolean;
  clearSubscription(): UpdateSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionRequest, reader: jspb.BinaryReader): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    phoneNumber: string,
    subscription?: subscription_pb.Subscription.AsObject,
  }
}

export class RiderDetails extends jspb.Message {
  getAccount(): auth_pb.UserAccount | undefined;
  setAccount(value?: auth_pb.UserAccount): RiderDetails;
  hasAccount(): boolean;
  clearAccount(): RiderDetails;

  getSubscription(): subscription_pb.Subscription | undefined;
  setSubscription(value?: subscription_pb.Subscription): RiderDetails;
  hasSubscription(): boolean;
  clearSubscription(): RiderDetails;

  getTotalRides(): number;
  setTotalRides(value: number): RiderDetails;

  getTotalRevenue(): number;
  setTotalRevenue(value: number): RiderDetails;

  getTotalCancelledRides(): number;
  setTotalCancelledRides(value: number): RiderDetails;

  getZone(): auth_pb.Zone | undefined;
  setZone(value?: auth_pb.Zone): RiderDetails;
  hasZone(): boolean;
  clearZone(): RiderDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiderDetails.AsObject;
  static toObject(includeInstance: boolean, msg: RiderDetails): RiderDetails.AsObject;
  static serializeBinaryToWriter(message: RiderDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiderDetails;
  static deserializeBinaryFromReader(message: RiderDetails, reader: jspb.BinaryReader): RiderDetails;
}

export namespace RiderDetails {
  export type AsObject = {
    account?: auth_pb.UserAccount.AsObject,
    subscription?: subscription_pb.Subscription.AsObject,
    totalRides: number,
    totalRevenue: number,
    totalCancelledRides: number,
    zone?: auth_pb.Zone.AsObject,
  }
}

export class PasswordStore extends jspb.Message {
  getId(): string;
  setId(value: string): PasswordStore;

  getPassword(): string;
  setPassword(value: string): PasswordStore;

  getCreatedAt(): common_pb.Timestamp | undefined;
  setCreatedAt(value?: common_pb.Timestamp): PasswordStore;
  hasCreatedAt(): boolean;
  clearCreatedAt(): PasswordStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordStore.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordStore): PasswordStore.AsObject;
  static serializeBinaryToWriter(message: PasswordStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordStore;
  static deserializeBinaryFromReader(message: PasswordStore, reader: jspb.BinaryReader): PasswordStore;
}

export namespace PasswordStore {
  export type AsObject = {
    id: string,
    password: string,
    createdAt?: common_pb.Timestamp.AsObject,
  }
}

export class Stats extends jspb.Message {
  getTotalOrders(): number;
  setTotalOrders(value: number): Stats;

  getTotalCustomers(): number;
  setTotalCustomers(value: number): Stats;

  getTotalRiders(): number;
  setTotalRiders(value: number): Stats;

  getTotalCarRentals(): number;
  setTotalCarRentals(value: number): Stats;

  getTotalSubscriptionsList(): Array<subscription_pb.SubscribedPackageResponse>;
  setTotalSubscriptionsList(value: Array<subscription_pb.SubscribedPackageResponse>): Stats;
  clearTotalSubscriptionsList(): Stats;
  addTotalSubscriptions(value?: subscription_pb.SubscribedPackageResponse, index?: number): subscription_pb.SubscribedPackageResponse;

  getIncomeFromSubscriptions(): FeatureIncomeResponse | undefined;
  setIncomeFromSubscriptions(value?: FeatureIncomeResponse): Stats;
  hasIncomeFromSubscriptions(): boolean;
  clearIncomeFromSubscriptions(): Stats;

  getIncomeFromCarRentals(): FeatureIncomeResponse | undefined;
  setIncomeFromCarRentals(value?: FeatureIncomeResponse): Stats;
  hasIncomeFromCarRentals(): boolean;
  clearIncomeFromCarRentals(): Stats;

  getDeliveryFees(): FeatureIncomeResponse | undefined;
  setDeliveryFees(value?: FeatureIncomeResponse): Stats;
  hasDeliveryFees(): boolean;
  clearDeliveryFees(): Stats;

  getCurrency(): string;
  setCurrency(value: string): Stats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stats.AsObject;
  static toObject(includeInstance: boolean, msg: Stats): Stats.AsObject;
  static serializeBinaryToWriter(message: Stats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stats;
  static deserializeBinaryFromReader(message: Stats, reader: jspb.BinaryReader): Stats;
}

export namespace Stats {
  export type AsObject = {
    totalOrders: number,
    totalCustomers: number,
    totalRiders: number,
    totalCarRentals: number,
    totalSubscriptionsList: Array<subscription_pb.SubscribedPackageResponse.AsObject>,
    incomeFromSubscriptions?: FeatureIncomeResponse.AsObject,
    incomeFromCarRentals?: FeatureIncomeResponse.AsObject,
    deliveryFees?: FeatureIncomeResponse.AsObject,
    currency: string,
  }
}

export class FeatureIncomeResponse extends jspb.Message {
  getToday(): number;
  setToday(value: number): FeatureIncomeResponse;

  getYesterday(): number;
  setYesterday(value: number): FeatureIncomeResponse;

  getLastWeek(): number;
  setLastWeek(value: number): FeatureIncomeResponse;

  getDifference(): number;
  setDifference(value: number): FeatureIncomeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureIncomeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureIncomeResponse): FeatureIncomeResponse.AsObject;
  static serializeBinaryToWriter(message: FeatureIncomeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureIncomeResponse;
  static deserializeBinaryFromReader(message: FeatureIncomeResponse, reader: jspb.BinaryReader): FeatureIncomeResponse;
}

export namespace FeatureIncomeResponse {
  export type AsObject = {
    today: number,
    yesterday: number,
    lastWeek: number,
    difference: number,
  }
}

export enum AdminType { 
  ADMIN_TYPE_SUPER = 0,
  ADMIN_TYPE_NORMAL = 1,
}
