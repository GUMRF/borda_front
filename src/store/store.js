import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth';
import { taskApi } from './task';
import { tasksApi } from './api';

import { taskApi } from './task/task.api';

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(
        taskApi.middleware,
        authApi.middleware,
        authApi.middleware,
    )
});