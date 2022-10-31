import { ICommonEntity } from "./common";

export interface IUser extends ICommonEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ICreateUserDto {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}
