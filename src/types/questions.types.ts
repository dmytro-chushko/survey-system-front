import { IUserInfo } from "./login.types";

export interface IQuestion {
  _id: string;
  question: string;
  answers: string[];
}

export interface ICategory {
  _id: string;
  title: string;
  questions: IQuestion[];
  interviewedUsers: Omit<IUserInfo, "role">[];
}
