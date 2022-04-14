import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { backendURL } from "../config";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${backendURL}/api/v1/`,

    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
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
    sendFlag: build.mutation({ //Подтверждение флага
      query (data) {
        const {id, ...body} = data
        return{
        url: `tasks/${id}/flag`,
        method: "POST",
        body,
      }
      },

      // transformResponse: (response) => {
      //   localStorage.setItem("isCorrect", response.isCorrect);
      //   console.log(response.isCorrect)
      // },
    }),
  }),
});

export const { useGetTasksQuery,useSendFlagMutation } = tasksApi;
