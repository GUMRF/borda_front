import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth';
import { taskApi } from '../api/tasks';
import { userApi } from '../api/users';

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(
        taskApi.middleware,
        authApi.middleware,
        userApi.middleware,
    )
});