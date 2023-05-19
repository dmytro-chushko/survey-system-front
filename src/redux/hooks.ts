import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { getRole, getToken } from "./reducers/user-data.reducer";
import { ROLE, Token } from "types/login.types";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetUserData = (): {
  token: Token;
  role: ROLE | null | undefined;
} => {
  const token = useAppSelector(getToken);
  const role = useAppSelector(getRole);

  return {
    token,
    role,
  };
};
