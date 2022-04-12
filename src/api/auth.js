import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://167.172.32.127:8080/api/v1/auth",
  }),
  endpoints: (build) => ({
    // endpoints - это действия с сервером получить или мутировать тд и тп
    getAuth: build.mutation({
      query: (body) => ({
        url: "sign-in",
        method: "POST",
        body,
      }),

      transformResponse: (response) => {
        console.log(response.token);
        localStorage.setItem("token", response.token);
      },
    }),
  }),
});

export const { useGetAuthMutation } = authApi;
