import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IAnswer } from "types/answers.types";
import { REDUCER_PATHES, REDUX_ROUTE_KEYS } from "utils/consts";

export const answersApi = createApi({
  reducerPath: REDUCER_PATHES.ANSWERS,
  baseQuery,
  tagTypes: ["Answers"],
  endpoints: (builder) => ({
    getAnswers: builder.query<IAnswer[], void>({
      query: (id) => ({ url: `${REDUX_ROUTE_KEYS.ANSWERS}/${id}` }),
      providesTags: ["Answers"],
    }),
    submitAnwsers: builder.mutation<Record<string, string>, void>({
      query: (body) => ({
        url: REDUX_ROUTE_KEYS.ANSWERS,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Answers"],
    }),
  }),
});

export const { useSubmitAnwsersMutation, useGetAnswersQuery } = answersApi;
