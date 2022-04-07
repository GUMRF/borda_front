import { configureStore } from '@reduxjs/toolkit';
import { loginsApi } from './loginApi';
import { tasksApi } from './tasksApi';

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
        [loginsApi.reducerPath]: loginsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(tasksApi.middleware,loginsApi.middleware)
});