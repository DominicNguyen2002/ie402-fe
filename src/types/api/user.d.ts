declare interface IUserSign {
  phone: string;
  password: string;
}
declare interface IUserChangePassword {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

declare interface IUser {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  birthday?: string;
  address?: string;
  gender?: string;
  avatar?: string;
}
declare interface IUpdateUser {
  name?: string;
  email?: string;
  avatar?: string;
  birthday?: string;
  address?: string;
  gender?: string;
}
