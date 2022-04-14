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
    getSubm: build.mutation({ //Подтверждение флага
      query: (body,id) => ({
        url: `tasks/${id}/flag`,
        method: "POST",
        body,
      }),

      // transformResponse: (response) => {
      //   localStorage.setItem("isCorrect", response.isCorrect); // хз что в ответ вернется
      //   console.log(response.isCorrect)
      // },
    }),
  }),
});

export const { useGetTasksQuery,useGetSubmMutation } = tasksApi;
