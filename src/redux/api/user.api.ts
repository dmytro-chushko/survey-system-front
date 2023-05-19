import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ILoginRes, IUserInfo, LoginFormData } from "types/login.types";
import { REDUX_ROUTE_KEYS } from "utils/consts";

export const userApi = createApi({
  reducerPath: "user-api",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserInfo: builder.query<IUserInfo, void>({
      query: () => ({ url: REDUX_ROUTE_KEYS.INFO }),
      providesTags: ["User"],
    }),
    loginUser: builder.mutation<ILoginRes, LoginFormData>({
      query: (body) => ({
        url: REDUX_ROUTE_KEYS.LOGIN,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginUserMutation, useGetUserInfoQuery } = userApi;
