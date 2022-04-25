import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_BASE_URL from "../config";
import { prepareHeaders } from "./base";

export const taskApi = createApi({
  reducerPath: "api/tasks",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,

    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token')
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
    mode: "cors",
  }),
  endpoints: (build) => ({
    getTasks: build.query({
      query: () => "tasks",
    }),

    sendFlag: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `tasks/${id}/flag`,
          method: "POST",
          body,
        }
      },
    }),
    updateTasks: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `admin/tasks/${id}`,
          method: "PATCH",
          body,
        }
      },
    }),
    getAdminTasks: build.query({
      query: () => "admin/tasks",
    }),
  }),
});

export const { useGetTasksQuery, useSendFlagMutation,useUpdateTasksMutation, useGetAdminTasksQuery } = taskApi;
