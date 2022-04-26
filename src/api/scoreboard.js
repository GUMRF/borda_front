import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL from "../config";
import { prepareHeaders } from "./base";

export const scoreboardApi = createApi({
	reducerPath: "api/scoreboard",
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_BASE_URL}`,
		prepareHeaders: prepareHeaders,
		mode: "cors",
	}),
	endpoints: (build) => ({
		getScoreboard: build.query({
			query: () => "scoreboard",
		}),
	}),
});

export const { useGetScoreboardQuery } = scoreboardApi;
