import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL, { prepareHeaders } from "../api";

export const taskApi = createApi({
    reducerPath: "api/tasks",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,

        prepareHeaders: prepareHeaders(),
        mode: "cors",
    }),
    endpoints: (build) => ({
        getTasks: build.query({
            query: () => "tasks",
        }),

        solveTask: build.mutation({
            query(data) {
                const { id, ...body } = data
                return {
                    url: `tasks/${id}/flag`,
                    method: "POST",
                    body,
                }
            },
        }),
    }),
});

export const { useGetTasksQuery, useSolveTaskMutation } = taskApi;
