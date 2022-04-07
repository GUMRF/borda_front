import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginsApi = createApi({
    reducerPath:'loginsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://167.172.32.127:8080/api/v1', 
    mode:'cors'
     }),
    endpoints: (build) => ({  // endpoints - это действия с сервером получить или мутировать тд и тп 
        getlogins: build.mutation({
            query: (body) => ({

            }),
        })
    })
});

export const {useGetloginsQuery} = loginsApi;

