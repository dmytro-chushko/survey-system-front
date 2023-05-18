import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL || "http://localhost:4200",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
