export interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserSchema extends Omit<IUser, "confirmPassword"> {
  createdAt?: Date;
  updatedAt?: Date;
}