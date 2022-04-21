import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/auth';
import { taskApi } from '../api/tasks';
import { userApi } from '../api/users';
import { scoreboardApi } from '../api/scoreboard';

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [scoreboardApi.reducerPath]: scoreboardApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(
        taskApi.middleware,
        authApi.middleware,
        userApi.middleware,
        scoreboardApi.middleware,
    )
});