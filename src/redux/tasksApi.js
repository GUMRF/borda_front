import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { token} from './loginApi';


export const tasksApi = createApi({ 
    reducerPath:'tasksApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://167.172.32.127:8080/api/v1', 
    
    prepareHeaders: (headers) => {
        
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
    }),

});

export const {useGettasksQuery} = tasksApi;

