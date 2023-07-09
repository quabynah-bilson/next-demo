import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class Customer extends jspb.Message {
  getId(): string;
  setId(value: string): Customer;

  getFullName(): string;
  setFullName(value: string): Customer;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    id: string,
    fullName: string,
    phoneNumber: string,
  }
}

export class DeliveryPerson extends jspb.Message {
  getId(): string;
  setId(value: string): DeliveryPerson;

  getFullName(): string;
  setFullName(value: string): DeliveryPerson;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): DeliveryPerson;

  getLocation(): common_pb.GeoPoint | undefined;
  setLocation(value?: common_pb.GeoPoint): DeliveryPerson;
  hasLocation(): boolean;
  clearLocation(): DeliveryPerson;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryPerson.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryPerson): DeliveryPerson.AsObject;
  static serializeBinaryToWriter(message: DeliveryPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryPerson;
  static deserializeBinaryFromReader(message: DeliveryPerson, reader: jspb.BinaryReader): DeliveryPerson;
}

export namespace DeliveryPerson {
  export type AsObject = {
    id: string,
    fullName: string,
    phoneNumber: string,
    location?: common_pb.GeoPoint.AsObject,
  }
}

export class Order extends jspb.Message {
  getId(): string;
  setId(value: string): Order;

  getPickup(): common_pb.GeoPoint | undefined;
  setPickup(value?: common_pb.GeoPoint): Order;
  hasPickup(): boolean;
  clearPickup(): Order;

  getDropoff(): common_pb.GeoPoint | undefined;
  setDropoff(value?: common_pb.GeoPoint): Order;
  hasDropoff(): boolean;
  clearDropoff(): Order;

  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): Order;
  hasCustomer(): boolean;
  clearCustomer(): Order;

  getOrderNumber(): string;
  setOrderNumber(value: string): Order;

  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): Order;

  getRider(): DeliveryPerson | undefined;
  setRider(value?: DeliveryPerson): Order;
  hasRider(): boolean;
  clearRider(): Order;

  getPaymentMethod(): OrderPaymentMethod;
  setPaymentMethod(value: OrderPaymentMethod): Order;

  getTotal(): number;
  setTotal(value: number): Order;

  getPackagesList(): Array<Package>;
  setPackagesList(value: Array<Package>): Order;
  clearPackagesList(): Order;
  addPackages(value?: Package, index?: number): Package;

  getCreatedAt(): common_pb.Timestamp | undefined;
  setCreatedAt(value?: common_pb.Timestamp): Order;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Order;

  getUpdatedAt(): common_pb.Timestamp | undefined;
  setUpdatedAt(value?: common_pb.Timestamp): Order;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string,
    pickup?: common_pb.GeoPoint.AsObject,
    dropoff?: common_pb.GeoPoint.AsObject,
    customer?: Customer.AsObject,
    orderNumber: string,
    status: OrderStatus,
    rider?: DeliveryPerson.AsObject,
    paymentMethod: OrderPaymentMethod,
    total: number,
    packagesList: Array<Package.AsObject>,
    createdAt?: common_pb.Timestamp.AsObject,
    updatedAt?: common_pb.Timestamp.AsObject,
  }
}

export class Package extends jspb.Message {
  getId(): string;
  setId(value: string): Package;

  getPackageNumber(): string;
  setPackageNumber(value: string): Package;

  getName(): string;
  setName(value: string): Package;

  getDescription(): string;
  setDescription(value: string): Package;

  getSize(): PackageSize;
  setSize(value: PackageSize): Package;

  getPrice(): number;
  setPrice(value: number): Package;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Package.AsObject;
  static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
  static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Package;
  static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
}

export namespace Package {
  export type AsObject = {
    id: string,
    packageNumber: string,
    name: string,
    description: string,
    size: PackageSize,
    price: number,
  }
}

export class OrderList extends jspb.Message {
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): OrderList;
  clearOrdersList(): OrderList;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderList.AsObject;
  static toObject(includeInstance: boolean, msg: OrderList): OrderList.AsObject;
  static serializeBinaryToWriter(message: OrderList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderList;
  static deserializeBinaryFromReader(message: OrderList, reader: jspb.BinaryReader): OrderList;
}

export namespace OrderList {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

export enum OrderStatus { 
  ORDER_STATUS_UNKNOWN = 0,
  ORDER_STATUS_PENDING = 1,
  ORDER_STATUS_EN_ROUTE = 2,
  ORDER_STATUS_COMPLETED = 3,
  ORDER_STATUS_CANCELLED = 4,
}
export enum OrderPaymentMethod { 
  ORDER_PAYMENT_METHOD_CASH = 0,
  ORDER_PAYMENT_METHOD_CARD = 1,
}
export enum PackageSize { 
  PACKAGE_SIZE_SMALL = 0,
  PACKAGE_SIZE_MEDIUM = 1,
  PACKAGE_SIZE_LARGE = 2,
}
