import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isAdmin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        login(state, action){
            state.token = action.payload.token;
            // TODO(token): verify expire time
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
    },
});

export const {login, logout} = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
