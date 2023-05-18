import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { ROLE, Token } from "types/redux.types";
import { getRole, getToken } from "./reducers/user-data.reducer";

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
