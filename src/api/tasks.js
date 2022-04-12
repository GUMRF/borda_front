import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { backendURL } from "../config";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${backendURL}/api/v1/`,

    prepareHeaders: (headers) => {
      if (localStorage.getItem("token").slice(10, -2)) {
        headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
      }
      return headers;
    },
    mode: "cors",
  }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "tasks",
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
