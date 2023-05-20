import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICategory } from "types/questions.types";
import { REDUCER_PATHES, REDUX_ROUTE_KEYS } from "utils/consts";

export const questionsApi = createApi({
  reducerPath: REDUCER_PATHES.QUESTIONS,
  baseQuery,
  tagTypes: ["Questions"],
  endpoints: (builder) => ({
    getCategories: builder.query<Omit<ICategory, "questions">[], void>({
      query: () => ({ url: REDUX_ROUTE_KEYS.CATEGORIES }),
      providesTags: ["Questions"],
    }),
    getCategoryById: builder.query<ICategory, string>({
      query: (id) => ({ url: `${REDUX_ROUTE_KEYS.CATEGORIES}/${id}` }),
      providesTags: ["Questions"],
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = questionsApi;
