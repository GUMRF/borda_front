import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './auth/auth.api';
import { taskApi } from './task/task.api';
import { userApi } from './user/user.api';

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