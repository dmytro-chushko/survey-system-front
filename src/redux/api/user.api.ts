import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { LoginFormData } from "types/login.types";
import { ILoginRes } from "types/redux.types";
import { REDUX_ROUTE_KEYS } from "utils/consts";

export const userApi = createApi({
  reducerPath: "user-api",
  baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginRes, LoginFormData>({
      query: (body) => ({
        url: REDUX_ROUTE_KEYS.LOGIN,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
