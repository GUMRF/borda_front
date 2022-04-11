import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { token} from './loginApi';


export const tasksApi = createApi({ 
    reducerPath:'tasksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'api/v1', 
    
    prepareHeaders: (headers) => {

        if (localStorage.getItem('token').slice(10,-2)) {
          headers.set('authorization', `Bearer ${localStorage.getItem('token').slice(10,-2)}`)
        }
        return headers
      }, mode:'cors'
     }),
    endpoints: (build) => ({  // endpoints - это действия с сервером получить или мутировать тд и тп 
        gettasks: build.query({
            query: () => 'tasks',
        })
    }),

});



export const {useGettasksQuery} = tasksApi;

