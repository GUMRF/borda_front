import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { backendURL } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${backendURL}/api/v1/auth`,
  }),
  endpoints: (build) => ({
    getAuth: build.mutation({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body,
      }),

      transformResponse: (response) => {
        localStorage.setItem("token", response.token);
      },
    }),
    getRegistr: build.mutation({
      query: (body) => ({
        url: "sign-up",
        method: "POST",
        body,
      }),
    }),

  }),

});

export const { useGetAuthMutation,useGetRegistrMutation } = authApi;
