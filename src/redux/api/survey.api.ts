import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IAnswer, ISubmitedAnswers } from "types/answers.types";
import { ICategory } from "types/questions.types";
import { REDUCER_PATHES, REDUX_ROUTE_KEYS } from "utils/consts";

export const surveyApi = createApi({
  reducerPath: REDUCER_PATHES.SURVEY,
  baseQuery,
  tagTypes: ["Categories", "Questions", "Answers"],
  endpoints: (builder) => ({
    getCategories: builder.query<Omit<ICategory, "questions">[], void>({
      query: () => ({ url: REDUX_ROUTE_KEYS.CATEGORIES }),
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query<ICategory, string>({
      query: (id) => ({ url: `${REDUX_ROUTE_KEYS.CATEGORIES}/${id}` }),
      providesTags: ["Questions"],
    }),
    getAnswersByCategory: builder.query<IAnswer[], string>({
      query: (categoryId) => ({
        url: `${REDUX_ROUTE_KEYS.ANSWERS}/${categoryId}`,
      }),
      providesTags: ["Answers"],
    }),
    submitAnwsers: builder.mutation<{ message: string }, ISubmitedAnswers>({
      query: (body) => ({
        url: REDUX_ROUTE_KEYS.ANSWERS,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Answers", "Categories", "Questions"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useSubmitAnwsersMutation,
  useGetAnswersByCategoryQuery,
} = surveyApi;
