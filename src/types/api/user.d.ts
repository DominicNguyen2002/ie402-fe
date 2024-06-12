declare interface IUserSign {
  phone: string;
  password: string;
}

declare interface IUser {
  name: string;
  phone: string;
  avatar?: string;
  birthday: string | Date;
  address: string;
  age: number;
}
