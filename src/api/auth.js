import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL from "../config";

export const authApi = createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}auth`,
  }),
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body,
      }),
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: "sign-up",
        method: "POST",
        body,
      }),
    }),

  }),

});

export const { useSignInMutation, useSignUpMutation } = authApi;
