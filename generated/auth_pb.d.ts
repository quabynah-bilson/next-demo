import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';
import * as subscription_pb from './subscription_pb';


export class LogoutFromAllDevicesRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): LogoutFromAllDevicesRequest;

  getDialCode(): string;
  setDialCode(value: string): LogoutFromAllDevicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutFromAllDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutFromAllDevicesRequest): LogoutFromAllDevicesRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutFromAllDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutFromAllDevicesRequest;
  static deserializeBinaryFromReader(message: LogoutFromAllDevicesRequest, reader: jspb.BinaryReader): LogoutFromAllDevicesRequest;
}

export namespace LogoutFromAllDevicesRequest {
  export type AsObject = {
    phoneNumber: string,
    dialCode: string,
  }
}

export class PublicTokenResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): PublicTokenResponse;

  getKey(): string;
  setKey(value: string): PublicTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicTokenResponse): PublicTokenResponse.AsObject;
  static serializeBinaryToWriter(message: PublicTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicTokenResponse;
  static deserializeBinaryFromReader(message: PublicTokenResponse, reader: jspb.BinaryReader): PublicTokenResponse;
}

export namespace PublicTokenResponse {
  export type AsObject = {
    token: string,
    key: string,
  }
}

export class LoginRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): LoginRequest;

  getDialCode(): string;
  setDialCode(value: string): LoginRequest;

  getDeviceId(): string;
  setDeviceId(value: string): LoginRequest;

  getUserType(): UserType;
  setUserType(value: UserType): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    phoneNumber: string,
    dialCode: string,
    deviceId: string,
    userType: UserType,
  }
}

export class RegisterUserRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): RegisterUserRequest;

  getDialCode(): string;
  setDialCode(value: string): RegisterUserRequest;

  getEmail(): string;
  setEmail(value: string): RegisterUserRequest;

  getFullName(): string;
  setFullName(value: string): RegisterUserRequest;

  getDeviceId(): string;
  setDeviceId(value: string): RegisterUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    phoneNumber: string,
    dialCode: string,
    email: string,
    fullName: string,
    deviceId: string,
  }
}

export class RegisterRiderRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): RegisterRiderRequest;

  getDob(): RegisterRiderRequest.DateOfBirth | undefined;
  setDob(value?: RegisterRiderRequest.DateOfBirth): RegisterRiderRequest;
  hasDob(): boolean;
  clearDob(): RegisterRiderRequest;

  getDialCode(): string;
  setDialCode(value: string): RegisterRiderRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRiderRequest;

  getFullName(): string;
  setFullName(value: string): RegisterRiderRequest;

  getAvatar(): Uint8Array | string;
  getAvatar_asU8(): Uint8Array;
  getAvatar_asB64(): string;
  setAvatar(value: Uint8Array | string): RegisterRiderRequest;

  getNationalId(): Uint8Array | string;
  getNationalId_asU8(): Uint8Array;
  getNationalId_asB64(): string;
  setNationalId(value: Uint8Array | string): RegisterRiderRequest;

  getNationalIdNumber(): string;
  setNationalIdNumber(value: string): RegisterRiderRequest;

  getDeviceId(): string;
  setDeviceId(value: string): RegisterRiderRequest;

  getDrivingLicense(): Uint8Array | string;
  getDrivingLicense_asU8(): Uint8Array;
  getDrivingLicense_asB64(): string;
  setDrivingLicense(value: Uint8Array | string): RegisterRiderRequest;

  getDrivingLicenseNumber(): string;
  setDrivingLicenseNumber(value: string): RegisterRiderRequest;

  getVehicleMake(): string;
  setVehicleMake(value: string): RegisterRiderRequest;

  getVehicleModel(): string;
  setVehicleModel(value: string): RegisterRiderRequest;

  getVehicleInsuranceNumber(): string;
  setVehicleInsuranceNumber(value: string): RegisterRiderRequest;

  getIdType(): string;
  setIdType(value: string): RegisterRiderRequest;

  getDriverLicenseExpirationDate(): RegisterRiderRequest.DriverLicenseExpiryDate | undefined;
  setDriverLicenseExpirationDate(value?: RegisterRiderRequest.DriverLicenseExpiryDate): RegisterRiderRequest;
  hasDriverLicenseExpirationDate(): boolean;
  clearDriverLicenseExpirationDate(): RegisterRiderRequest;

  getZoneId(): string;
  setZoneId(value: string): RegisterRiderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRiderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRiderRequest): RegisterRiderRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRiderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRiderRequest;
  static deserializeBinaryFromReader(message: RegisterRiderRequest, reader: jspb.BinaryReader): RegisterRiderRequest;
}

export namespace RegisterRiderRequest {
  export type AsObject = {
    phoneNumber: string,
    dob?: RegisterRiderRequest.DateOfBirth.AsObject,
    dialCode: string,
    email: string,
    fullName: string,
    avatar: Uint8Array | string,
    nationalId: Uint8Array | string,
    nationalIdNumber: string,
    deviceId: string,
    drivingLicense: Uint8Array | string,
    drivingLicenseNumber: string,
    vehicleMake: string,
    vehicleModel: string,
    vehicleInsuranceNumber: string,
    idType: string,
    driverLicenseExpirationDate?: RegisterRiderRequest.DriverLicenseExpiryDate.AsObject,
    zoneId: string,
  }

  export class DriverLicenseExpiryDate extends jspb.Message {
    getYear(): number;
    setYear(value: number): DriverLicenseExpiryDate;

    getMonth(): number;
    setMonth(value: number): DriverLicenseExpiryDate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DriverLicenseExpiryDate.AsObject;
    static toObject(includeInstance: boolean, msg: DriverLicenseExpiryDate): DriverLicenseExpiryDate.AsObject;
    static serializeBinaryToWriter(message: DriverLicenseExpiryDate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DriverLicenseExpiryDate;
    static deserializeBinaryFromReader(message: DriverLicenseExpiryDate, reader: jspb.BinaryReader): DriverLicenseExpiryDate;
  }

  export namespace DriverLicenseExpiryDate {
    export type AsObject = {
      year: number,
      month: number,
    }
  }


  export class DateOfBirth extends jspb.Message {
    getYear(): number;
    setYear(value: number): DateOfBirth;

    getMonth(): number;
    setMonth(value: number): DateOfBirth;

    getDay(): number;
    setDay(value: number): DateOfBirth;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateOfBirth.AsObject;
    static toObject(includeInstance: boolean, msg: DateOfBirth): DateOfBirth.AsObject;
    static serializeBinaryToWriter(message: DateOfBirth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateOfBirth;
    static deserializeBinaryFromReader(message: DateOfBirth, reader: jspb.BinaryReader): DateOfBirth;
  }

  export namespace DateOfBirth {
    export type AsObject = {
      year: number,
      month: number,
      day: number,
    }
  }

}

export class Country extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): Country;

  getName(): string;
  setName(value: string): Country;

  getDialCode(): string;
  setDialCode(value: string): Country;

  getCurrency(): string;
  setCurrency(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    countryCode: string,
    name: string,
    dialCode: string,
    currency: string,
  }
}

export class UpdateCurrentUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UpdateCurrentUserRequest;

  getFullName(): string;
  setFullName(value: string): UpdateCurrentUserRequest;

  getAvatar(): Uint8Array | string;
  getAvatar_asU8(): Uint8Array;
  getAvatar_asB64(): string;
  setAvatar(value: Uint8Array | string): UpdateCurrentUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCurrentUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCurrentUserRequest): UpdateCurrentUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCurrentUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCurrentUserRequest;
  static deserializeBinaryFromReader(message: UpdateCurrentUserRequest, reader: jspb.BinaryReader): UpdateCurrentUserRequest;
}

export namespace UpdateCurrentUserRequest {
  export type AsObject = {
    email: string,
    fullName: string,
    avatar: Uint8Array | string,
  }
}

export class UpdateAccountStatusRequest extends jspb.Message {
  getStatus(): AccountStatus;
  setStatus(value: AccountStatus): UpdateAccountStatusRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UpdateAccountStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountStatusRequest): UpdateAccountStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountStatusRequest;
  static deserializeBinaryFromReader(message: UpdateAccountStatusRequest, reader: jspb.BinaryReader): UpdateAccountStatusRequest;
}

export namespace UpdateAccountStatusRequest {
  export type AsObject = {
    status: AccountStatus,
    phoneNumber: string,
  }
}

export class UserAccount extends jspb.Message {
  getId(): string;
  setId(value: string): UserAccount;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UserAccount;

  getDialCode(): string;
  setDialCode(value: string): UserAccount;

  getEmail(): string;
  setEmail(value: string): UserAccount;

  getFullName(): string;
  setFullName(value: string): UserAccount;

  getAvatar(): string;
  setAvatar(value: string): UserAccount;

  getUserType(): UserType;
  setUserType(value: UserType): UserAccount;

  getCreatedAt(): common_pb.Timestamp | undefined;
  setCreatedAt(value?: common_pb.Timestamp): UserAccount;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UserAccount;

  getUpdatedAt(): common_pb.Timestamp | undefined;
  setUpdatedAt(value?: common_pb.Timestamp): UserAccount;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): UserAccount;

  getStatus(): AccountStatus;
  setStatus(value: AccountStatus): UserAccount;

  getDeviceId(): string;
  setDeviceId(value: string): UserAccount;

  getNationalIdNumber(): string;
  setNationalIdNumber(value: string): UserAccount;

  getVehicleMake(): string;
  setVehicleMake(value: string): UserAccount;

  getVehicleModel(): string;
  setVehicleModel(value: string): UserAccount;

  getVehicleInsuranceNumber(): string;
  setVehicleInsuranceNumber(value: string): UserAccount;

  getDrivingLicenseNumber(): string;
  setDrivingLicenseNumber(value: string): UserAccount;

  getDob(): common_pb.Timestamp | undefined;
  setDob(value?: common_pb.Timestamp): UserAccount;
  hasDob(): boolean;
  clearDob(): UserAccount;

  getDrivingLicenseUrl(): string;
  setDrivingLicenseUrl(value: string): UserAccount;

  getNationalIdUrl(): string;
  setNationalIdUrl(value: string): UserAccount;

  getDriverLicenseExpirationDate(): common_pb.Timestamp | undefined;
  setDriverLicenseExpirationDate(value?: common_pb.Timestamp): UserAccount;
  hasDriverLicenseExpirationDate(): boolean;
  clearDriverLicenseExpirationDate(): UserAccount;

  getIdType(): string;
  setIdType(value: string): UserAccount;

  getZoneId(): string;
  setZoneId(value: string): UserAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAccount.AsObject;
  static toObject(includeInstance: boolean, msg: UserAccount): UserAccount.AsObject;
  static serializeBinaryToWriter(message: UserAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAccount;
  static deserializeBinaryFromReader(message: UserAccount, reader: jspb.BinaryReader): UserAccount;
}

export namespace UserAccount {
  export type AsObject = {
    id: string,
    phoneNumber: string,
    dialCode: string,
    email: string,
    fullName: string,
    avatar: string,
    userType: UserType,
    createdAt?: common_pb.Timestamp.AsObject,
    updatedAt?: common_pb.Timestamp.AsObject,
    status: AccountStatus,
    deviceId: string,
    nationalIdNumber: string,
    vehicleMake: string,
    vehicleModel: string,
    vehicleInsuranceNumber: string,
    drivingLicenseNumber: string,
    dob?: common_pb.Timestamp.AsObject,
    drivingLicenseUrl: string,
    nationalIdUrl: string,
    driverLicenseExpirationDate?: common_pb.Timestamp.AsObject,
    idType: string,
    zoneId: string,
  }
}

export class SessionStore extends jspb.Message {
  getId(): string;
  setId(value: string): SessionStore;

  getAccessToken(): string;
  setAccessToken(value: string): SessionStore;

  getRefreshToken(): string;
  setRefreshToken(value: string): SessionStore;

  getDialCode(): string;
  setDialCode(value: string): SessionStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionStore.AsObject;
  static toObject(includeInstance: boolean, msg: SessionStore): SessionStore.AsObject;
  static serializeBinaryToWriter(message: SessionStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionStore;
  static deserializeBinaryFromReader(message: SessionStore, reader: jspb.BinaryReader): SessionStore;
}

export namespace SessionStore {
  export type AsObject = {
    id: string,
    accessToken: string,
    refreshToken: string,
    dialCode: string,
  }
}

export class CountryList extends jspb.Message {
  getCountriesList(): Array<Country>;
  setCountriesList(value: Array<Country>): CountryList;
  clearCountriesList(): CountryList;
  addCountries(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryList.AsObject;
  static toObject(includeInstance: boolean, msg: CountryList): CountryList.AsObject;
  static serializeBinaryToWriter(message: CountryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryList;
  static deserializeBinaryFromReader(message: CountryList, reader: jspb.BinaryReader): CountryList;
}

export namespace CountryList {
  export type AsObject = {
    countriesList: Array<Country.AsObject>,
  }
}

export class GetAccountByTypeRequest extends jspb.Message {
  getUserType(): UserType;
  setUserType(value: UserType): GetAccountByTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountByTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountByTypeRequest): GetAccountByTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountByTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountByTypeRequest;
  static deserializeBinaryFromReader(message: GetAccountByTypeRequest, reader: jspb.BinaryReader): GetAccountByTypeRequest;
}

export namespace GetAccountByTypeRequest {
  export type AsObject = {
    userType: UserType,
  }
}

export class GetUserByPhoneNumberRequest extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): GetUserByPhoneNumberRequest;

  getDialCode(): string;
  setDialCode(value: string): GetUserByPhoneNumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserByPhoneNumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserByPhoneNumberRequest): GetUserByPhoneNumberRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserByPhoneNumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserByPhoneNumberRequest;
  static deserializeBinaryFromReader(message: GetUserByPhoneNumberRequest, reader: jspb.BinaryReader): GetUserByPhoneNumberRequest;
}

export namespace GetUserByPhoneNumberRequest {
  export type AsObject = {
    phoneNumber: string,
    dialCode: string,
  }
}

export class UserAccountList extends jspb.Message {
  getAccountsList(): Array<UserAccount>;
  setAccountsList(value: Array<UserAccount>): UserAccountList;
  clearAccountsList(): UserAccountList;
  addAccounts(value?: UserAccount, index?: number): UserAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAccountList.AsObject;
  static toObject(includeInstance: boolean, msg: UserAccountList): UserAccountList.AsObject;
  static serializeBinaryToWriter(message: UserAccountList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAccountList;
  static deserializeBinaryFromReader(message: UserAccountList, reader: jspb.BinaryReader): UserAccountList;
}

export namespace UserAccountList {
  export type AsObject = {
    accountsList: Array<UserAccount.AsObject>,
  }
}

export class CurrentUserResponse extends jspb.Message {
  getUser(): UserAccount | undefined;
  setUser(value?: UserAccount): CurrentUserResponse;
  hasUser(): boolean;
  clearUser(): CurrentUserResponse;

  getRider(): CurrentRider | undefined;
  setRider(value?: CurrentRider): CurrentUserResponse;
  hasRider(): boolean;
  clearRider(): CurrentUserResponse;

  getUserResponseCase(): CurrentUserResponse.UserResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentUserResponse): CurrentUserResponse.AsObject;
  static serializeBinaryToWriter(message: CurrentUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentUserResponse;
  static deserializeBinaryFromReader(message: CurrentUserResponse, reader: jspb.BinaryReader): CurrentUserResponse;
}

export namespace CurrentUserResponse {
  export type AsObject = {
    user?: UserAccount.AsObject,
    rider?: CurrentRider.AsObject,
  }

  export enum UserResponseCase { 
    USER_RESPONSE_NOT_SET = 0,
    USER = 1,
    RIDER = 2,
  }
}

export class CurrentRider extends jspb.Message {
  getUser(): UserAccount | undefined;
  setUser(value?: UserAccount): CurrentRider;
  hasUser(): boolean;
  clearUser(): CurrentRider;

  getSubscription(): subscription_pb.Subscription | undefined;
  setSubscription(value?: subscription_pb.Subscription): CurrentRider;
  hasSubscription(): boolean;
  clearSubscription(): CurrentRider;

  getSubscriptionPackages(): subscription_pb.SubscriptionPackageList | undefined;
  setSubscriptionPackages(value?: subscription_pb.SubscriptionPackageList): CurrentRider;
  hasSubscriptionPackages(): boolean;
  clearSubscriptionPackages(): CurrentRider;

  getNetworkCodesList(): Array<subscription_pb.SubscriptionNetworkCode>;
  setNetworkCodesList(value: Array<subscription_pb.SubscriptionNetworkCode>): CurrentRider;
  clearNetworkCodesList(): CurrentRider;
  addNetworkCodes(value: subscription_pb.SubscriptionNetworkCode, index?: number): CurrentRider;

  getHasActiveSubscription(): boolean;
  setHasActiveSubscription(value: boolean): CurrentRider;

  getZone(): Zone | undefined;
  setZone(value?: Zone): CurrentRider;
  hasZone(): boolean;
  clearZone(): CurrentRider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentRider.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentRider): CurrentRider.AsObject;
  static serializeBinaryToWriter(message: CurrentRider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentRider;
  static deserializeBinaryFromReader(message: CurrentRider, reader: jspb.BinaryReader): CurrentRider;
}

export namespace CurrentRider {
  export type AsObject = {
    user?: UserAccount.AsObject,
    subscription?: subscription_pb.Subscription.AsObject,
    subscriptionPackages?: subscription_pb.SubscriptionPackageList.AsObject,
    networkCodesList: Array<subscription_pb.SubscriptionNetworkCode>,
    hasActiveSubscription: boolean,
    zone?: Zone.AsObject,
  }
}

export class DeletedUserAccount extends jspb.Message {
  getAccount(): UserAccount | undefined;
  setAccount(value?: UserAccount): DeletedUserAccount;
  hasAccount(): boolean;
  clearAccount(): DeletedUserAccount;

  getSubscriptionsList(): Array<subscription_pb.Subscription>;
  setSubscriptionsList(value: Array<subscription_pb.Subscription>): DeletedUserAccount;
  clearSubscriptionsList(): DeletedUserAccount;
  addSubscriptions(value?: subscription_pb.Subscription, index?: number): subscription_pb.Subscription;

  getSessionsList(): Array<SessionStore>;
  setSessionsList(value: Array<SessionStore>): DeletedUserAccount;
  clearSessionsList(): DeletedUserAccount;
  addSessions(value?: SessionStore, index?: number): SessionStore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletedUserAccount.AsObject;
  static toObject(includeInstance: boolean, msg: DeletedUserAccount): DeletedUserAccount.AsObject;
  static serializeBinaryToWriter(message: DeletedUserAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletedUserAccount;
  static deserializeBinaryFromReader(message: DeletedUserAccount, reader: jspb.BinaryReader): DeletedUserAccount;
}

export namespace DeletedUserAccount {
  export type AsObject = {
    account?: UserAccount.AsObject,
    subscriptionsList: Array<subscription_pb.Subscription.AsObject>,
    sessionsList: Array<SessionStore.AsObject>,
  }
}

export class AvailableRider extends jspb.Message {
  getRider(): UserAccount | undefined;
  setRider(value?: UserAccount): AvailableRider;
  hasRider(): boolean;
  clearRider(): AvailableRider;

  getAvailable(): boolean;
  setAvailable(value: boolean): AvailableRider;

  getLocation(): common_pb.GeoPoint | undefined;
  setLocation(value?: common_pb.GeoPoint): AvailableRider;
  hasLocation(): boolean;
  clearLocation(): AvailableRider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableRider.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableRider): AvailableRider.AsObject;
  static serializeBinaryToWriter(message: AvailableRider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableRider;
  static deserializeBinaryFromReader(message: AvailableRider, reader: jspb.BinaryReader): AvailableRider;
}

export namespace AvailableRider {
  export type AsObject = {
    rider?: UserAccount.AsObject,
    available: boolean,
    location?: common_pb.GeoPoint.AsObject,
  }
}

export class UpdateRiderAvailabilityRequest extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): UpdateRiderAvailabilityRequest;

  getLocation(): common_pb.GeoPoint | undefined;
  setLocation(value?: common_pb.GeoPoint): UpdateRiderAvailabilityRequest;
  hasLocation(): boolean;
  clearLocation(): UpdateRiderAvailabilityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRiderAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRiderAvailabilityRequest): UpdateRiderAvailabilityRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRiderAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRiderAvailabilityRequest;
  static deserializeBinaryFromReader(message: UpdateRiderAvailabilityRequest, reader: jspb.BinaryReader): UpdateRiderAvailabilityRequest;
}

export namespace UpdateRiderAvailabilityRequest {
  export type AsObject = {
    available: boolean,
    location?: common_pb.GeoPoint.AsObject,
  }
}

export class AvailableRiderList extends jspb.Message {
  getRidersList(): Array<AvailableRider>;
  setRidersList(value: Array<AvailableRider>): AvailableRiderList;
  clearRidersList(): AvailableRiderList;
  addRiders(value?: AvailableRider, index?: number): AvailableRider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableRiderList.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableRiderList): AvailableRiderList.AsObject;
  static serializeBinaryToWriter(message: AvailableRiderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableRiderList;
  static deserializeBinaryFromReader(message: AvailableRiderList, reader: jspb.BinaryReader): AvailableRiderList;
}

export namespace AvailableRiderList {
  export type AsObject = {
    ridersList: Array<AvailableRider.AsObject>,
  }
}

export class ZoneSectionHead extends jspb.Message {
  getId(): string;
  setId(value: string): ZoneSectionHead;

  getUsername(): string;
  setUsername(value: string): ZoneSectionHead;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ZoneSectionHead;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneSectionHead.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneSectionHead): ZoneSectionHead.AsObject;
  static serializeBinaryToWriter(message: ZoneSectionHead, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneSectionHead;
  static deserializeBinaryFromReader(message: ZoneSectionHead, reader: jspb.BinaryReader): ZoneSectionHead;
}

export namespace ZoneSectionHead {
  export type AsObject = {
    id: string,
    username: string,
    phoneNumber: string,
  }
}

export class Zone extends jspb.Message {
  getId(): string;
  setId(value: string): Zone;

  getName(): string;
  setName(value: string): Zone;

  getDescription(): string;
  setDescription(value: string): Zone;

  getDialCode(): string;
  setDialCode(value: string): Zone;

  getLeader(): ZoneSectionHead | undefined;
  setLeader(value?: ZoneSectionHead): Zone;
  hasLeader(): boolean;
  clearLeader(): Zone;

  getRidersIdsList(): Array<string>;
  setRidersIdsList(value: Array<string>): Zone;
  clearRidersIdsList(): Zone;
  addRidersIds(value: string, index?: number): Zone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Zone.AsObject;
  static toObject(includeInstance: boolean, msg: Zone): Zone.AsObject;
  static serializeBinaryToWriter(message: Zone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Zone;
  static deserializeBinaryFromReader(message: Zone, reader: jspb.BinaryReader): Zone;
}

export namespace Zone {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    dialCode: string,
    leader?: ZoneSectionHead.AsObject,
    ridersIdsList: Array<string>,
  }
}

export class GetZoneResponse extends jspb.Message {
  getZone(): Zone | undefined;
  setZone(value?: Zone): GetZoneResponse;
  hasZone(): boolean;
  clearZone(): GetZoneResponse;

  getRidersList(): Array<UserAccount>;
  setRidersList(value: Array<UserAccount>): GetZoneResponse;
  clearRidersList(): GetZoneResponse;
  addRiders(value?: UserAccount, index?: number): UserAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetZoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetZoneResponse): GetZoneResponse.AsObject;
  static serializeBinaryToWriter(message: GetZoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetZoneResponse;
  static deserializeBinaryFromReader(message: GetZoneResponse, reader: jspb.BinaryReader): GetZoneResponse;
}

export namespace GetZoneResponse {
  export type AsObject = {
    zone?: Zone.AsObject,
    ridersList: Array<UserAccount.AsObject>,
  }
}

export class ZoneList extends jspb.Message {
  getZonesList(): Array<GetZoneResponse>;
  setZonesList(value: Array<GetZoneResponse>): ZoneList;
  clearZonesList(): ZoneList;
  addZones(value?: GetZoneResponse, index?: number): GetZoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneList.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneList): ZoneList.AsObject;
  static serializeBinaryToWriter(message: ZoneList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneList;
  static deserializeBinaryFromReader(message: ZoneList, reader: jspb.BinaryReader): ZoneList;
}

export namespace ZoneList {
  export type AsObject = {
    zonesList: Array<GetZoneResponse.AsObject>,
  }
}

export class CreateZoneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateZoneRequest;

  getDescription(): string;
  setDescription(value: string): CreateZoneRequest;

  getDialCode(): string;
  setDialCode(value: string): CreateZoneRequest;

  getLeaderId(): string;
  setLeaderId(value: string): CreateZoneRequest;

  getRiderIdsList(): Array<string>;
  setRiderIdsList(value: Array<string>): CreateZoneRequest;
  clearRiderIdsList(): CreateZoneRequest;
  addRiderIds(value: string, index?: number): CreateZoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateZoneRequest): CreateZoneRequest.AsObject;
  static serializeBinaryToWriter(message: CreateZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateZoneRequest;
  static deserializeBinaryFromReader(message: CreateZoneRequest, reader: jspb.BinaryReader): CreateZoneRequest;
}

export namespace CreateZoneRequest {
  export type AsObject = {
    name: string,
    description: string,
    dialCode: string,
    leaderId: string,
    riderIdsList: Array<string>,
  }
}

export class GetAccountsByStatusAndTypeRequest extends jspb.Message {
  getStatus(): AccountStatus;
  setStatus(value: AccountStatus): GetAccountsByStatusAndTypeRequest;

  getUserType(): UserType;
  setUserType(value: UserType): GetAccountsByStatusAndTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsByStatusAndTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsByStatusAndTypeRequest): GetAccountsByStatusAndTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountsByStatusAndTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsByStatusAndTypeRequest;
  static deserializeBinaryFromReader(message: GetAccountsByStatusAndTypeRequest, reader: jspb.BinaryReader): GetAccountsByStatusAndTypeRequest;
}

export namespace GetAccountsByStatusAndTypeRequest {
  export type AsObject = {
    status: AccountStatus,
    userType: UserType,
  }
}

export class RiderStats extends jspb.Message {
  getTotalRiders(): number;
  setTotalRiders(value: number): RiderStats;

  getTotalActiveRiders(): number;
  setTotalActiveRiders(value: number): RiderStats;

  getTotalOfflineRiders(): number;
  setTotalOfflineRiders(value: number): RiderStats;

  getTotalOnlineRiders(): number;
  setTotalOnlineRiders(value: number): RiderStats;

  getTotalSuspendedRiders(): number;
  setTotalSuspendedRiders(value: number): RiderStats;

  getTotalBannedRiders(): number;
  setTotalBannedRiders(value: number): RiderStats;

  getTotalPendingRiders(): number;
  setTotalPendingRiders(value: number): RiderStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiderStats.AsObject;
  static toObject(includeInstance: boolean, msg: RiderStats): RiderStats.AsObject;
  static serializeBinaryToWriter(message: RiderStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiderStats;
  static deserializeBinaryFromReader(message: RiderStats, reader: jspb.BinaryReader): RiderStats;
}

export namespace RiderStats {
  export type AsObject = {
    totalRiders: number,
    totalActiveRiders: number,
    totalOfflineRiders: number,
    totalOnlineRiders: number,
    totalSuspendedRiders: number,
    totalBannedRiders: number,
    totalPendingRiders: number,
  }
}

export class AddRiderToZoneRequest extends jspb.Message {
  getZoneId(): string;
  setZoneId(value: string): AddRiderToZoneRequest;

  getRiderId(): string;
  setRiderId(value: string): AddRiderToZoneRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRiderToZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRiderToZoneRequest): AddRiderToZoneRequest.AsObject;
  static serializeBinaryToWriter(message: AddRiderToZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRiderToZoneRequest;
  static deserializeBinaryFromReader(message: AddRiderToZoneRequest, reader: jspb.BinaryReader): AddRiderToZoneRequest;
}

export namespace AddRiderToZoneRequest {
  export type AsObject = {
    zoneId: string,
    riderId: string,
  }
}

export enum UserType { 
  USER_TYPE_CUSTOMER = 0,
  USER_TYPE_RIDER = 1,
}
export enum AccountStatus { 
  ACCOUNT_STATUS_UNKNOWN = 0,
  ACCOUNT_STATUS_ACTIVE = 1,
  ACCOUNT_STATUS_SUSPENDED = 2,
  ACCOUNT_STATUS_BANNED = 3,
  ACCOUNT_STATUS_PENDING = 4,
}
