export enum ROLE {
  ADMIN = "admin",
  GUEST = "guest",
}

export type Token = string | null | undefined;

export interface IUserData {
  token: Token;
  role: ROLE | null | undefined;
}

export interface ILoginRes {
  token: string;
  role: ROLE;
  passedCategories: string[];
}

export interface IUserInfo {
  email: string;
  role: ROLE;
}
