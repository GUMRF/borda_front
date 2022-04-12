import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth';
import { tasksApi } from '../api/tasks';

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(tasksApi.middleware,authApi.middleware)
});