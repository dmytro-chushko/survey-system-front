import { IUserInfo } from "./login.types";

export interface IAnswer {
  _id: string;
  answer: string;
  question: string;
  category: string;
  user: IUserInfo;
}

export interface ISubmitedAnswers {
  answers: Record<string, string>;
  categoryId: string;
}