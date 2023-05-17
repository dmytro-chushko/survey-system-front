export enum ROLE {
  ADMIN = "admin",
  GUEST = "guest",
}

export type Token = string | null | undefined;

export interface IUserData {
  token: Token;
  role: ROLE | null;
}
