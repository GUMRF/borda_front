import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { backendURL } from "../config";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${backendURL}/api/v1/users`,
    prepareHeaders: (headers) => {
        if (localStorage.getItem("token")) {
          headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
        }
        return headers;
      },
  }),

  endpoints: (build) => ({
    getUser: build.query({ // Получение инфы о пользователе
      query: () => "me",
    }),

  }),
});

export const { useGetUserQuery } = userApi;
