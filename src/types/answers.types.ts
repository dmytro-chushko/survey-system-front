import { IUserInfo } from "./login.types";

export interface IAnswer {
  _id: string;
  answer: string;
  question: string;
  category: string;
  user: IUserInfo;
}
