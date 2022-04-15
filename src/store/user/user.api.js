import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "api/users",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: prepareHeaders(),
    }),

    endpoints: (build) => ({
        getUserProfile: build.query({
            query: () => "users/me",
        }),
    }),
});

export const { useGetUserProfileQuery } = userApi;