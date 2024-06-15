declare interface IUserSign {
  phone: string;
  password: string;
}

declare interface IUser {
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  birthday: string | Date;
  address: string;
  age: number;
}

declare interface IUserDisease {
  name: string;
  state: number;
  time: Date;
}