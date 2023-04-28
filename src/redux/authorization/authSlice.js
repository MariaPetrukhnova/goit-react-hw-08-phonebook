import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.getUser.pending](state) { 
            state.isRefreshing = true;
        },
        [authOperations.getUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [authOperations.getUser.rejected](state) { 
            state.isRefreshing = false;
        },
    },
});

export default authSlice.reducer;