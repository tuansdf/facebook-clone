import { ICommonEntity } from "./common";

export interface IUser extends ICommonEntity {
  email: string;
  username: string;
  name: string;
  password: string;
}
