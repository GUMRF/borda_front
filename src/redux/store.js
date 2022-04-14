import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth';
import { tasksApi } from '../api/tasks';
import { userApi } from '../api/user';

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(tasksApi.middleware,authApi.middleware,authApi.middleware)
});