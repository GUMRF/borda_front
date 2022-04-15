import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL from "../api";

export const authApi = createApi({
    reducerPath: "api/auth",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}auth`,
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

export const { useGetAuthMutation, useGetRegistrMutation } = authApi;
