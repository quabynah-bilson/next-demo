import * as jspb from 'google-protobuf'



export class Task extends jspb.Message {
  getId(): number;
  setId(value: number): Task;

  getRider(): string;
  setRider(value: string): Task;

  getSubscription(): string;
  setSubscription(value: string): Task;

  getCron(): string;
  setCron(value: string): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: number,
    rider: string,
    subscription: string,
    cron: string,
  }
}

export class TaskList extends jspb.Message {
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): TaskList;
  clearTasksList(): TaskList;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskList.AsObject;
  static toObject(includeInstance: boolean, msg: TaskList): TaskList.AsObject;
  static serializeBinaryToWriter(message: TaskList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskList;
  static deserializeBinaryFromReader(message: TaskList, reader: jspb.BinaryReader): TaskList;
}

export namespace TaskList {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
  }
}

