import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL from "../config"
import { prepareHeaders } from "./base";

export const userApi = createApi({
	reducerPath: "api/users",
	baseQuery: fetchBaseQuery({
		baseUrl: API_BASE_URL,
		prepareHeaders: prepareHeaders,
	}),

	endpoints: (build) => ({
		getUserProfile: build.query({
			query: () => "users/me",
		}),
		createTeam: build.mutation({
			query: (body) => ({
				url: "teams",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetUserProfileQuery, useLazyGetUserProfileQuery, useCreateTeamMutation } = userApi;