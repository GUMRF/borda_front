import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
    reducerPath:'tasksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://167.172.32.127:8080/api/v1', 
    
    prepareHeaders: (headers) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJib3JkYS12MSIsImV4cCI6MTY0OTQxNDU1MCwiaWF0IjoxNjQ5MzI4MTUwLCJpc3MiOiIxIiwic2NvcGUiOlsiYWRtaW4iXX0.YaS44Tduyi7549Isq-3-RUzbj8eY74WIsCyJOypWTwM'
        if (token) {
          headers.append('Authorization', `Bearer ${token}`)
        }
        return headers
      }, mode:'cors'
     }),
    endpoints: (build) => ({  // endpoints - это действия с сервером получить или мутировать тд и тп 
        gettasks: build.query({
            query: () => 'tasks',
        })
    })
});

export const {useGettasksQuery} = tasksApi;

