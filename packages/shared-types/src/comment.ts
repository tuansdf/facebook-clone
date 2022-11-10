import { ICommonEntity } from "./common";
import { IPost } from "./post";
import { IUser } from "./user";

export interface IComment extends ICommonEntity {
  text: string;
  numLikes: number;
  user?: IUser;
  post?: IPost;
}
